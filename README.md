# Proyecto de Chat con Express, Socket.IO y MongoDB

Este proyecto es una aplicación de chat en tiempo real construida con Node.js, Express, Socket.IO y MongoDB. Sigue el patrón Modelo-Vista-Controlador (MVC) con progamacion orientada a objetos para organizar el código y mantener una estructura clara y escalable.

## Requisitos Previos

Asegúrate de tener instalados los siguientes software en tu máquina:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Instalación y Configuración

Sigue estos pasos para levantar el proyecto:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/andresmurillo13/express-kp.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tu_repositorio
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Instala `nodemon` globalmente si aún no lo tienes:
    ```bash
    npm install -g nodemon
    ```


5. Inicia el servidor en modo desarrollo:
    ```bash
    npm run dev
    ```


## Conectarse a MongoDB

Puedes utilizar [MongoDB Compass](https://www.mongodb.com/products/compass) para conectarte a tu base de datos de MongoDB y gestionar tus datos visualmente. Configura la conexión utilizando la URL definida en tu archivo `.env` (`MONGODB_CNN`).

