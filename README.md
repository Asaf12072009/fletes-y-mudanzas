# FletHumberto - Landing Page

Landing page monolítica y responsiva orientada a la conversión directa por WhatsApp para servicios de fletes y mudanzas.

## Matriz Técnica

| Componente | Tecnología / Librería | Descripción |
| :--- | :--- | :--- |
| **Lenguaje Base** | JavaScript (Node.js) | Lógica de servidor y control del frontend. |
| **Backend** | Express.js | Servidor monolítico para archivos estáticos y API ligera. |
| **Interfaz (UI)** | Bootstrap 5.3 | Framework CSS con soporte nativo de modo día/noche (`data-bs-theme`). |
| **Lógica Frontend**| Vue.js 3 (CDN) | Control reactivo del DOM, carrusel y alternancia de temas. |
| **Animaciones** | AOS (Animate On Scroll) | Animaciones fluidas al desplazar la página hacia abajo. |
| **Iconografía** | Bootstrap Icons | Iconos oficiales (WhatsApp, Facebook, Instagram, etc.). |
| **Hosting** | Railway | Despliegue en la nube automatizado vía Git. |

## Matriz Comercial

| Componente | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Dominio** | namecheap | Dominio principal. Duracion: 1 año www. Precio: $200 MXN |
| **Enlaces web** | Google Search Console | Sitemaps.xml indexados. |

## Mantenimiento

| Comandos-commit y push | 
| :--- | 
| **git add .**
| **git commit -m "Descripción clara de los cambios realizados"**
| **git push origin main**
| Nube antes de ejecutar los cambios: | 
| **git pull origin main --rebase** 


## Layout del Proyecto

```text
fletes-y-mudanzas/
├── package.json
├── public/
│   ├── index.html       # Estructura HTML, Bootstrap, AOS e incrustación de Google Maps
│   ├── sitemap.xml      # Mapa del sitio optimizado para motores de búsqueda
│   ├── robots.txt       # Configuración de rastreo web y exclusión de APIs
│   └── src/
│       ├── app.js       # Lógica reactiva de Vue.js 3 (Modo día/noche y carrusel)
│       └── images/
│           └── favicon.jpg # Icono oficial del sitio web
└── server/
    └── server.js        # Servidor principal de Express y rutas API
