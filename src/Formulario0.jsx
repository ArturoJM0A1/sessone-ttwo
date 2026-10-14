import { useState } from 'react'

// Componente funcional del formulario de registro de usuarios
function Formulario0() {
  // Estado controlado del campo Nombre
  const [nombre, setNombre] = useState('')

  // Estado controlado del campo Correo electrónico
  const [correo, setCorreo] = useState('')

  // Estado con los datos del último envío válido
  const [datosEnviados, setDatosEnviados] = useState(null)

  // Estado con la lista de usuarios registrados en la sesión actual
  const [usuarios, setUsuarios] = useState([])

  // Estado que controla la visibilidad de la lista de registrados
  const [mostrarLista, setMostrarLista] = useState(false)

  // Estado con el mensaje de validación (vacío cuando no hay error)
  const [mensaje, setMensaje] = useState('')

  // Maneja el envío del formulario
  const manejarEnvio = (evento) => {
    // Evita que la página se recargue al enviar
    evento.preventDefault()

    // Verifica que ambos campos tengan datos
    if (!nombre.trim() || !correo.trim()) {
      // Muestra el mensaje de validación y no registra al usuario
      setMensaje('Por favor, completa ambos campos.')
      return
    }

    // Limpia el mensaje de validación porque los datos son correctos
    setMensaje('')

    // Guarda los datos enviados para mostrarlos debajo del formulario
    setDatosEnviados({ nombre: nombre.trim(), correo: correo.trim() })

    // Agrega el usuario a la lista de registrados
    setUsuarios((lista) => [...lista, { nombre: nombre.trim(), correo: correo.trim() }])
  }

  // Alterna la visibilidad de la lista de usuarios registrados
  const alternarLista = () => {
    setMostrarLista((visible) => !visible)
  }

  return (
    <section>
      <h1>Registro de usuarios</h1>

      {/* Formulario con nombre y correo electrónico */}
      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </div>

        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {/* Mensaje de validación cuando falta algún campo */}
      {mensaje && <p>{mensaje}</p>}

      {/* Datos del último envío válido */}
      {datosEnviados && (
        <div>
          <p>Tu nombre es: {datosEnviados.nombre}</p>
          <p>Tu correo es: {datosEnviados.correo}</p>
        </div>
      )}

      {/* Botón que muestra u oculta la lista de registrados */}
      <button type="button" onClick={alternarLista}>
        {mostrarLista ? 'Ocultar usuarios registrados' : 'Ver usuarios registrados'}
      </button>

      {/* Lista con los usuarios registrados durante la sesión */}
      {mostrarLista && (
        <ul>
          {usuarios.map((usuario, indice) => (
            <li key={indice}>
              {usuario.nombre} - {usuario.correo}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Formulario0
