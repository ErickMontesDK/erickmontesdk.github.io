---
layout: post
title: Hacer deploy de tu API REST usando Express.js y Heroku
---
No te ha pasado que creaste una api, muy bonita y todo, pero que te ves obligado a ejecutar localmente en tu computadora cuando quieres usarla, y a fin de cuentas, ¿de qué te sirve si solo puedes usarla en tu computadora?. Vamos a ponerla en linea para darle mayor uso en tus paginas.<br> 
Una opción gratuita para subirla es <a href="http://heroku.com/">heroku</a>, que con solo tener una cuenta te permite crear la app de tu codigo. <br>

Para seguir este proceso, necesitas instalar con anterioridad <b>Git</b> y <b>Heroku</b>. Ambos están para descargar en sus paginas oficiales. Entonces vamos por pasos. 

### Configurar puerto del servidor

Tenemos a continuación un código en la que usamos Express.js. 
<div style="width:100%; display:flex; justify-content:center;">
    <img src="{{ site.baseurl }}/postImages/20220610162706.png" style="width:700px;">
</div>
La lógica es muy simple, en la pagina de inicio nos de un mensaje <i>"Servidor con express"</i> y a agregarle a la dirección "/users" nos devuelve el array <b>users</b> con los tres nombres y id's. Tambien tenemos definido <b>PORT=3001</b>, que significa que en este puerto vamos a poder conectar el servidor de nuestra app localmente, ingresando <code>localhost:3001</code> en nuestro navegador. <br>
Para poderlo subir a Heroku, solo debemos modicar el puerto como en el siguiente ejemplo:<br>

>   <code>const PORT=process.env.PORT || 3001;</code>

Al momento de conectarse localmente al servidor, podra seguir usando el puerto 3001 para comunicarse, pero al agregar process.env.PORT, le estamos diciendo que use el puerto que la pagina asigne, o en caso de no asignarsele, use por defecto el 3001. Esto pasa dado que hay paginas que definen el puerto que se va a usar por usted, y si solo lo dejas como <code>PORT=3001</code>, no se podra conectar al puerto de la página y fallará el deployment.

### Configurar el package.json

El fin aquí es automatizar que se ejecute el servidor al escribir un comando en la consola. Estan ya en el package.json, en la sección de scripts agregamos <code>"start": "node ..."</code> donde ... agregamos la dirección de nuestro archivo .js que acabamos de modificar anteriormente. En este ejemplo, mi archivo index.js se encuentra en la raíz, por lo que lo escribiré asi:

> <code>"start":"node index.js"</code>
Otro ejemplo podría ser:
> <code>"start":"node ./lib/server.js"</code> donde el archivo server.js se encuentra en la carpeta lib, y la carpeta lib esta en la raiz del proyecto. 

Para verificar que funcione, estando en la consola dentro de nuestra carpeta de proyecto escribe <code>npm start</code> y podrás acceder al servidor local del proyecto. 

### Archivo Procfile

Ahora nosotros sabemos que si escribimos <code>npm start</code> podemos ejecutar el servidor, pero ahora hace falta decirle a heroku que tiene que ejecutar <code>npm start</code> para que funcione el deployment, por lo que en la carpeta raiz creamos un archivo llamado <b>Procfile</b>, sin agregarle ninguna extensión. Dentro del archivo solo escribimos:
> <code>web: npm start</code>

Guardamos y listo. Ahora hay que subirlo a Heroku. 

### Subirlo a Heroku
Ya habiendo hecho las modificaciones necesarias, hay que subirlo a Heroku, para ello, estando en consola escribimos de uno en uno:
> * <code>git init</code> para iniciar git dentro de la carpeta
> * <code>git add .</code> agregamos todos los archivos a los cambios que vamos a realizar. Aquí se contempla que ya tienes un archivo <b>.gitignore</b> para no subir la carpeta node_modules. Si no lo tienes, crea el archivo y solo escribe <b>node_modules</b>
> * <code>git commit -m"initial commit"</code> para que los archivos se respalden
> * <code>heroku create</code> que nos crea la app que vamos a usar para subir nuestro proyecto
> * <code>git push heroku main</code> envía nuestro codigo a heroku, donde en automatico se deberia de empezar el deployment. 

Y listo, al terminar de subirse a heroku deberia de darte una url donde esta la app. Espera unos minutos para entrar y deberia de funcionar bien. Te dejo el ejemplo de una api que subi con este método <a href="https://visual-thinking-api.herokuapp.com/">aquí</a>, y si no quedá o tienes dudas, puedes mandarme dm o mención en twitter, links abajo. <br>
Espero y les haya servido y quede lo más claro posible. Ciao. 


