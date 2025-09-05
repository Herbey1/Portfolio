# Portfolio

Portafolio estático basado en los requisitos del documento "Requisitos portfolio" (DOCX/PDF).

## Vista previa

- Opción 1 (VS Code – Live Server): abre `index.html` y ejecuta Live Server.
- Opción 2 (Python):

  ```bash
  python3 -m http.server -d . 5173
  # luego abre http://localhost:5173
  ```

## Estructura

- `index.html`: Maquetado principal y secciones.
- `assets/styles.css`: Estilos con dark mode por defecto y acento naranja pastel.
- `assets/app.js`: Lógica de idioma (ES/EN) y tema.
- `Requisitos portfolio.docx` / `Requisitos portfolio.pdf`: Fuente de contenido.

## Contenido editable

- Textos: se pueden ajustar directamente en `index.html` o en `assets/app.js` dentro del objeto `translations`.
- Enlaces: GitHub/Live por proyecto están en `index.html`.
- Paleta/Tipografía: variables CSS en `assets/styles.css` y fuente Inter en `<head>`.

## Notas

- Modo oscuro es el predeterminado. Se recuerda preferencia en `localStorage`.
- Interfaz bilingüe (ES/EN) conmutada desde el botón "ES/EN".
