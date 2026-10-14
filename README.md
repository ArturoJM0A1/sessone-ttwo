Formulario de registro de usuarios construido con React y Vite.

## Descripción

La aplicación muestra un formulario con dos campos (nombre y correo electrónico). Al enviarlo, valida que ambos tengan datos: si falta alguno muestra un mensaje de error y no registra al usuario; si son correctos, muestra los datos del último envío y agrega el usuario a una lista. Un botón alterna la visibilidad de esa lista. Los datos se mantienen únicamente en el estado de React durante la sesión: no hay backend ni persistencia.

## Hooks

- `useState`: guarda los valores de los campos, el último envío válido, la lista de usuarios, la visibilidad de la lista y el mensaje de validación.

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

