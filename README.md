# API - LENGUAJES DE PROGRAMACION CON EXPRESS

Se ha desarrollado una API con la ayuda de express, de igual forma se ha usado la libreria "zod" la cual nos permite realizar validaciones al momento de mandar datos a la API.

Nota: Por el momento los datos se encuentran en un .JSON (mocks/languages.json), pero mas adelante se alojaran en una base de datos.

Tambien cabe destacar que se ha desarrollado una web de manera sencilla para probar dicha API, esta web nos permite obtener los datos desde nuestra API asi como eliminar dichos datos.

# Requisitos

* NodeJS
* NPM

# Probar API y WEB

1. Lo primero que se tiene es clonar el respositorio con el comando "git clone ....".

2. Una vez que se ha clonado nos dirigimos a la carpeta del proyecto clonado y abrimos una terminal.

3. Una vez abierta la terminal ejecutamos el comando "npm install", el cual se encargara de instalar las dependencias necesarias para el proyecto en este caso nos va a instalar express y zod.

4. Una vez terminado de instalar las dependencias nos dirigimos a la carpeta "src" y desde nuestra terminal ejecutamos el comando "node --watch ./app.js", este comando nos permitira inicializar nuestro servidor, si llegara a ocurrir un error con el puerto este se puede cambiar dentro del archivo "app.js" en la constante "PORT".

5. Una vez que se ha lanzado el servidor ya podemos probar la API, la cual contiene los siguientes endpoints:

## EndPoints:

### Obtener la informacion de todos los lenguajes:

GET http://localhost:{puerto}/api/languages

### Obtener la informacion de un lenguaje con su id:

GET http://localhost:{puerto}/api/languages/a9f87c4b-8e6d-4f5e-9c27-3a78e4d2b309

### Obtener la informacion de un lenguaje mediante su nombre:

GET http://localhost:{puerto}/api/languages?name=java

### Obtener la informacion de un lenguaje segun su paradigma de programacion:

GET http://localhost:{puerto}/api/languages?paradigm=funcional

### Creacion de un nuevo recurso.

POST http://localhost:{puerto}/api/languages
Content-Type: application/json

{
        "name": "Nombre del lenguaje",
        "description": "Descripcion",
        "authors": "Arreglo de autores", 
        "year": año,
        "paradigms": "Arreglo de paradigmas",
        "logo": "Link del logo"
}

### Actualizar la informacion de un lenguaje:

PATCH http://localhost:{puerto}/api/languages/dc0ae565-6b51-4618-8fe4-1df30738fa1b
Content-Type: application/json

{
    "name": "Nombre actualizado.",
    "description": "Descripcion actualizada..."
}

### Eliminar un recurso mediante su id:
DELETE  http://localhost:{puerto}/api/languages/a9f87c4b-8e6d-4f5e-9c27-3a78e4d2b309

Nota: Para probar la API podemos hacer uso de postman o de una extension de vscode llamada "REST Client" en mi caso yo la probe con la extension de vscode y dichas pruebas las podemos encontrar en el archivo llamado "api.http".

## Web

Ahora bien para probar la web solamente baste con abrirlo con cualquier servidor de web estaticas, como la famosa extension de vscode "Live Server".

Nota: En caso de algun error agregar dentro de "/api/api.js" en la constante "ACCEPTED_ORIGINS" el origin desde donde se esta haciendo la solicitud debido a los CORS.

![show_web](https://github.com/AlexisRomanVC2002/api-lenguajes-programacion/assets/90739340/aca7e9b4-5dec-499e-b567-84549bdf089d)
