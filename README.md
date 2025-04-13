# 🎬 Checklist Cinéfila de Miguel

Una aplicación web progresiva (PWA) para llevar el control de tus películas favoritas. Puedes marcar las que ya viste y guardar tu progreso incluso sin conexión.

---

## 🚀 ¿Cómo instalarla?

### Opción 1: Uso desde navegador
1. Visita la página publicada (por ejemplo):  
   `https://tuusuario.github.io/checklist-cinefila/`
2. En el navegador de tu celular o computadora, pulsa en el menú (tres puntos).
3. Selecciona **"Agregar a la pantalla de inicio"**.
4. ¡Listo! Se instalará como una app nativa.

### Opción 2: Clonarla o descargar ZIP
1. Descarga el repositorio o clónalo:
   ```bash
   git clone https://github.com/tuusuario/checklist-cinefila.git
   ```
2. Abre la carpeta y lanza con un servidor local o sube el contenido a tu propio hosting.

---

## 📁 Estructura del Proyecto

```
cinefila-checklist/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── service-worker.js
│   ├── favicon.ico
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── src/
│   ├── main.jsx
│   └── CinephileChecklist.jsx
```

---

## 🛠 Tecnologías Usadas
- React + JSX
- Vite o Webpack (según elección)
- PWA (manifest + service worker)
- GitHub Pages para despliegue

---

## 📦 ¿Cómo desplegar en GitHub Pages?

1. Ve a tu repositorio → **Settings** → **Pages**.
2. En “Source”, elige:
   - Branch: `main`
   - Folder: `/ (root)`
3. Guarda y espera 1 minuto.
4. GitHub generará un enlace como:  
   `https://tuusuario.github.io/checklist-cinefila/`

---

## ✨ Autor
**Miguel Ángel Sotelo Díaz**  
Dirección de Innovación y Educación Digital  
Fundación Universitaria Konrad Lorenz
