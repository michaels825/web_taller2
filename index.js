// importar el módulo express
var express = require('express');

// crear la variable app usando express
var app = express();

// configurar la carpeta public como "pública"
app.use(express.static('public'));

var contador = 0;

// configurar la ruta inicial
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/home.html');
  contador++;
  console.log('página vista: ', contador);
});

// configurar la ruta contacto
app.get('/contacto', function(request, response){
    response.send('página contacto');
});

// configurar la ruta sobre-mi
app.get('/sobre-mi', function(request, response){
    response.send('página sobre mi');
});

// configurar la ruta portafolio
app.get('/portafolio', function(request, response){
    response.send('mi portafolio');
});

// iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});