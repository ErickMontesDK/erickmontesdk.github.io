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
    <img src="{{ site.baseurl }}/postImages/20220610162706.png" style="width:500px;">
</div>
La lógica es muy simple, en la pagina de inicio nos de un mensaje <i>"Servidor con express"</i> y a agregarle a la dirección "/users" nos devuelve el array <b>users</b> con los tres nombres y id's. Tambien tenemos definido <b>PORT=3001</b>, que significa que en este puerto vamos a poder conectar el servidor de nuestra app localmente, ingresando <code>localhost:3001</code> en nuestro navegador. <br>
Para poderlo subir a Heroku, solo debemos modicar el puerto como en el siguiente ejemplo:<br>

>   <code>const PORT=process.env.PORT || 3001;</code>

Al momento de conectarse localmente al servidor, podra seguir usando el puerto 3001 para comunicarse, pero al agregar process.env.PORT, le estamos diciendo que use el puerto que la pagina asigne, o en caso de no asignarsele, use por defecto el 3001. Esto pasa dado que hay paginas que definen el puerto que se va a usar por usted, y si solo lo dejas como <code>PORT=3001</code>, no se podra conectar al puerto de la página y fallará el deployment.
