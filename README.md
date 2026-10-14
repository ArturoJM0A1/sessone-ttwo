Formulario de registro de usuarios construido con React y Vite.

## Descripción

La aplicación muestra un formulario con dos campos (nombre y correo electrónico). Al enviarlo, valida que ambos tengan datos: si falta alguno muestra un mensaje de error y no registra al usuario; si son correctos, muestra los datos del último envío y agrega el usuario a una lista. Un botón alterna la visibilidad de esa lista. Los datos se mantienen únicamente en el estado de React durante la sesión: no hay backend ni persistencia.

## Funcionalidades principales

- **Formulario controlado**: campos de nombre y correo electrónico gestionados con estado de React (`value` + `onChange`).
- **Validación en el envío**: `onSubmit` con `preventDefault()`; si algún campo está vacío muestra un mensaje de error y cancela el registro.
- **Registro del último envío válido**: muestra debajo del formulario los datos recién enviados.
- **Lista de usuarios registrados**: acumula los usuarios válidos de la sesión y los renderiza como elementos de una lista (`map` con `key`).
- **Mostrar/ocultar lista**: botón que alterna la visibilidad de los registrados.
- **Sin persistencia**: los datos viven solo en el estado durante la sesión (no hay backend).

## Hooks

- `useState` (único hook usado): gestiona 6 estados en `src/Formulario0.jsx`:
  - `nombre`, `correo`: valores de los campos del formulario.
  - `datosEnviados`: datos del último envío válido.
  - `usuarios`: lista de usuarios registrados en la sesión.
  - `mostrarLista`: visibilidad de la lista de registrados.
  - `mensaje`: mensaje de validación (vacío cuando no hay error).

## Tecnologías

- [React](https://react.dev/) 19 (`react`, `react-dom`)
- [Vite](https://vite.dev/) 8 + [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react)
- ESLint 10 con `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` y `globals`
- CSS propio en `src/index.css`

## Instalación y ejecución

```bash
npm install
npm run dev
```

Otros comandos disponibles:

```bash
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build
npm run lint     # ejecuta ESLint
```

By: Arturo Juárez Monroy

