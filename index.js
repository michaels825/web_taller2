// importar el módulo express
var express = require('express');
var motorRender = require('express-handlebars');

var fs = require('fs');

// crear la variable app usando express
var app = express();

// configurar la carpeta public como "pública"
app.use(express.static('public'));

app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

//creo el servidor 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tienda';

// Create a new MongoClient
const client = new MongoClient(url);

var db = null;

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    db = client.db(dbName);
    

    //client.close();
});


var contador = {
    home: 0,
    contacto: 0,
};

app.get('/tienda/:categoria?', function(request, response){

    console.log(request.query.precio);

    var query = {};
    if(request.params.categoria){
        query.categoria = request.params.categoria;
    }
    if(request.query.precio){
        query.precio = { $lte: request.query.precio };
    }

    var collection = db.collection('productos');
    
    // Find some documents
    collection.find({})
        .toArray(function(err, docs) {
        assert.equal(err, null);

        var contexto = {
            productos: docs,
            tipo: request.params.tipo,
            precio: request.query.precio,
            accesorio: request.params.tipo == "Accesorio",
            camiseta: request.params.tipo == "Camiseta",
            hoodie: request.params.tipo == "Hoodie",
        };
        
        response.render('tienda', contexto);

    });

});



// configurar la ruta inicial
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/home.html');
    contador.home++;
    console.log('página vista: ', contador);

    let contenido = 'home: ' + contador.home + '\ncontacto: '+contador.contacto;
    fs.writeFile('contador.txt', contenido, 'utf8', function(){
        console.log('archivo escrito');
    });
});

app.get('/tienda', function(req, res) {
    var contexto = {
        titulo: 'ALL PRODUCTS',
        nombres: [
            //'Valeria',
            //'Alejandro',
            //'Sebastián'
        ],
        listaProductos: productos,
    };
    res.render('lista-productos', contexto);
});

app.get('/tienda/:producto', function(req, res) {
    var contexto = null;

    productos.forEach(function(producto){
        if(producto.titulo == req.params.producto){
            contexto = producto;
        }
    });

    console.log(req.params.producto);
    if(contexto == null){
        res.send('No encontré ningún producto con el nombre '+ req.params.producto);
    } else {
        res.render('producto', contexto);
    }
});

// configurar la ruta contacto
app.get('/contacto', function(request, response){
    response.send('página contacto');
    contador.contacto++;

    let contenido = 'home: ' + contador.home + '\ncontacto: '+contador.contacto;
    fs.writeFile('contador.txt', contenido, 'utf8', function(){
        console.log('archivo escrito');
    });
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