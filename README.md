# Proyecto de Chat con Express, Socket.IO y MongoDB

Este proyecto es una aplicación de chat en tiempo real construida con Node.js, Express, Socket.IO y MongoDB. La aplicación sigue el patrón Modelo-Vista-Controlador (MVC) y utiliza programación orientada a objetos para organizar el código de manera clara y escalable.

## Requisitos Previos

Asegúrate de tener instalados los siguientes software en tu máquina:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Usuarios

Los usuarios creados actualmente son:

- `test6@test.com` / `123456`
- `test1@test.com` / `123456`
- `test2@test.com` / `123456`

## Registro

También puedes registrarte a través de la aplicación React. La autenticación utiliza JWT (JSON Web Tokens).

## Instalación y Configuración

Sigue estos pasos para levantar el proyecto:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/andresmurillo13/express-kp.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd express-kp
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

### Ejemplo de Configuración `.env`

Asegúrate de tener un archivo `.env` en la raíz de tu proyecto con la siguiente configuración:

```env
PORT=3000
MONGODB_CNN=mongodb://localhost:27017/tu_base_de_datos
JWT_SECRET=tu_secreto_jwt
