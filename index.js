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

var contador = {
    home: 0,
    contacto: 0,
};

var productos = [];
productos.push({
    titulo: 'Perro',
    precio: '85714312312',
    imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg',
    descripcion: 'Si te has decidido a tener un perro, seguro que antes de comprar –o mejor, adoptar- a tu nueva mascota, tendrás qué decidir qué raza prefieres en función de tu modo de vida y tu propia personalidad. Hay perros de carácter más agresivo o dominante, otros mansos y alegres, algunos necesitan mucho espacio para correr y jugar, otros son más tranquilos…'
});
productos.push({
    titulo: 'Gato',
    precio: '8571431231200000',
    imagen: 'https://www.feelcats.com/blog/wp-content/uploads/2018/10/gato-atigrado.jpg',
    descripcion: 'Esa preciosa combinación de patrones jaspeados, moteados o rayados en diferentes tonos, nos da a la idea de una genética caprichosa, que te contaremos, en este original artículo sobre ellos, pero además nos adentraremos en su carácter y peculiaridades, de estos gatos atigrados tan comunes, pero a la vez, tan únicos. ¿empezamos?'
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
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/tienda/:producto', function(req, res) {
    var contexto = productos[0];
    console.log(req.params.producto);
    res.render('producto', contexto);
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