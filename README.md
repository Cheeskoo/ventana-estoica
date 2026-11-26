# 🏛️ La Ventana Estoica

Una pequeña aplicación web y API que muestra frases estoicas al azar. Cada vez que presionas **"Nueva Frase"**, la página pide una cita aleatoria al servidor y la muestra en pantalla.

El proyecto está hecho con **Node.js puro**, sin frameworks: el servidor HTTP, el servido de archivos estáticos y la API están escritos a mano usando solo los módulos nativos de Node.

## ✨ Características

- **API REST** con un endpoint que devuelve una frase aleatoria en formato JSON.
- **Interfaz web** minimalista con tipografía *Playfair Display* y un botón para pedir una nueva frase.
- **Servidor de archivos estáticos** propio, con detección del tipo de contenido según la extensión.
- **Manejo de errores**: respuestas `404` cuando un archivo no existe y `500` cuando algo falla en el servidor.
- **CORS habilitado** para peticiones `GET`, así la API se puede consumir desde otros sitios.
- Frases de **Marco Aurelio**, **Séneca** y **Platón**, guardadas en un archivo JSON fácil de ampliar.

## 🛠️ Tecnologías

| Capa | Tecnología |
| --- | --- |
| Backend | Node.js (`node:http`, `node:fs/promises`, `node:path`) con ES Modules |
| Frontend | HTML, CSS y JavaScript (`fetch`) |
| Datos | Archivo `quotes.json` |
| Desarrollo | [nodemon](https://nodemon.io/) para recargar el servidor automáticamente |

## 🚀 Instalación y uso

### Requisitos

- [Node.js](https://nodejs.org/) **20.11 o superior** (el servidor usa `import.meta.dirname`).
- npm (viene incluido con Node.js).

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/Cheeskoo/ventana-estoica.git
cd ventana-estoica

# 2. Instala las dependencias de desarrollo
npm install

# 3. Inicia el servidor
npm start
```

Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor con Node. |
| `npm run dev` | Inicia el servidor con nodemon, que lo reinicia al guardar cambios. |

## 📡 API

### `GET /api/quote`

Devuelve una frase estoica elegida al azar.

**Ejemplo de petición:**

```bash
curl http://localhost:3000/api/quote
```

**Ejemplo de respuesta (`200 OK`):**

```json
{
  "id": 3,
  "author": "Marco Aurelio",
  "text": "Tienes poder sobre tu mente, no sobre los eventos externos. Date cuenta de esto y encontrarás la fuerza."
}
```

**Respuesta de error (`500`):**

```json
{
  "message": "Error servidor 500"
}
```

## 📁 Estructura del proyecto

```
ventana-estoica/
├── public/                 # Frontend que sirve el servidor
│   ├── index.html          # Página principal
│   ├── script.js           # Pide frases a la API y las muestra
│   └── style.css           # Estilos de la página
├── utils/
│   ├── getContentType.js   # Devuelve el Content-Type según la extensión del archivo
│   ├── sendResponse.js     # Función auxiliar para enviar respuestas HTTP
│   └── serveStatic.js      # Sirve los archivos de la carpeta public/
├── quotes.json             # Lista de frases (id, autor y texto)
├── server.js               # Punto de entrada: servidor HTTP y ruta de la API
└── package.json
```

## ➕ Cómo agregar frases

Abre `quotes.json` y añade un nuevo objeto al final de la lista, con un `id` que no se repita:

```json
{
  "id": 10,
  "author": "Epicteto",
  "text": "No son las cosas las que nos perturban, sino la opinión que tenemos de ellas."
}
```

No hace falta reiniciar el servidor: el archivo se lee en cada petición.

## 👤 Autor

Hecho por **Franco Calderon** ([@Cheeskoo](https://github.com/Cheeskoo)).

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **ISC**, según lo indicado en `package.json`.
