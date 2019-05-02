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
    titulo: 'ALAN WALKER AIRINUM MASK',
    precio: '12,99',
    imagen: 'https://1.bp.blogspot.com/-KyEgJPhDstg/XMKXr38kfhI/AAAAAAAAZBE/N6hKaaXe_NM-dqxVc9AQefedps6QfVXEQCLcBGAs/s1600/1-01.png',
    descripcion: 'Wearing a mask has always been my way of showing that we’re all equal, we’re all the same. However, I’ve always wanted to use my position and strong walkers community to make a bigger  difference. When I met the team at Airinum who clarified the big issues with air pollution around the globe today, I felt that the time was just about right to make a new mask for a bigger purpose.',
    disponible: true,
});
productos.push({
    titulo: 'THE 1975 CELLPHONE CASE',
    precio: '22,99',
    imagen: 'https://3.bp.blogspot.com/-2eKOKjEqgGI/XMKXr3D9O-I/AAAAAAAAZBM/6ChK_9MSEEEDTeJTjl04A0EMGQgeXvHjACLcBGAs/s1600/1-02.png',
    descripcion: 'Official product of the 1975. Elegant, scratch-resistant, high-resolution graphics printed. Soft and durable gel material offers light, protection against bumps, scratches and dust. Elevated front edge that helps protect against viewing scratches if you put your mobile device face down Provides a comfortable grip that does not slip.',
    disponible: false,
});

productos.push({
    titulo: 'COLDPLAY WOMENS BLUE HOODIE',
    precio: '12,99',
    imagen: 'https://1.bp.blogspot.com/-MMAPthE9gmI/XMKXrxZlUhI/AAAAAAAAZBI/Phfl6Ciue2As7D7fGmKkkH_WPmbOVu1EgCLcBGAs/s1600/1-03.png',
    descripcion: 'A Head Full Of Dreams Blue Hoody. Blue pullover hoody, 100% Combed Organic Cotton. Featuring artwork from A Head Full Of Dreams Film poster graphic printed on the front.',
    disponible: false,
});

productos.push({
    titulo: 'THE CHAINSMOKERS CELLPHONE CASE',
    precio: '12,99',
    imagen: 'https://1.bp.blogspot.com/-PdXnhJnZrI0/XMKXsR4f7JI/AAAAAAAAZBQ/9QvriBwN_QMzCoeCLDnezMJK5MCy9abWwCLcBGAs/s1600/1-04.png',
    descripcion: 'What do you love IPhone Case. Silicon iPhone Case with graphics inspired by the (A Rush Of Blood To The Head) album art printed on the back. Will fit only iPhone 4 and 4S models.',
    disponible: true,
});
productos.push({
    titulo: 'ALAN WALKER MENS T.SHIRT',
    precio: '18,50',
    imagen: 'https://2.bp.blogspot.com/-FwKUl3gTEK0/XMKXssLAgfI/AAAAAAAAZBU/FlkxYeIHk_kekcCWtsLLUQORCBEkX4fjACLcBGAs/s1600/1-05.png',
    descripcion: 'Round-neck t-shirt for teens, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: false,
});

productos.push({
    titulo: 'ALAN WALKER CELLPHONE CASE',
    precio: '12,99',
    imagen: 'https://1.bp.blogspot.com/-B0BGRfxr9cM/XMKXtQLU-3I/AAAAAAAAZBY/BD-_VaBfp1YBjj4rov9dxBhvuRBmVJNMACLcBGAs/s1600/1-06.png',
    descripcion: 'AW logo faded spectra. Silicon iPhone Case with graphics inspired by the A Rush Of Blood To The Head album art printed on the back. Will fit only iPhone 4 and 4S models.',
    disponible: false,
});
productos.push({
    titulo: 'COLDPLAY WOMENS BUTTERFLY HOODIE',
    precio: '49,99',
    imagen: 'https://4.bp.blogspot.com/-__1mzwlZJBM/XMKXuMVw5PI/AAAAAAAAZBc/kI7r6el-SSg1yoVoFJ-4lPHSnJ10IiUJQCLcBGAs/s1600/1-07.png',
    descripcion: 'Butterfly Crop Hoody. White pullover crop hoody, 100% Combed Organic Cotton. Loose fit with raw hem detail. Featuring artwork from the Butterfly package (Live In Buenos Aires / Live In São Paulo / A Head Full Of Dreams - Film) graphic printed on the back and Coldplay logo on left sleeve.',
    disponible: true,
});
productos.push({
    titulo: 'ALAN WALKER LOGO MENS HOODIE',
    precio: '62,66',
    imagen: 'https://2.bp.blogspot.com/-qoGfjzw7WCs/XMKXuj3ODJI/AAAAAAAAZBg/iyC2u39Lm8wV76-lRsVZdmH6UOt_-evCgCLcBGAs/s1600/1-08.png',
    descripcion: 'Its finally here, the original Alan Walker hoodie as worn by Alan himself! The recognizable Alan Walker logo can be seen on the front, as well as covering most of the back. Dont miss out on getting yours now!. AW hoodie is made from 50% grade A combed cotton and 50% polyester fleece in dark black colour. This mix ensures a sweatshirt that is soft and comfortable to wear. The soft fabric will naturally conform to your body shape.',
    disponible: false,
});

productos.push({
    titulo: 'THE CHAINSMOKERS MENS T-SHIRT',
    precio: '25,50',
    imagen: 'https://3.bp.blogspot.com/-QahYR6oHUEQ/XMKXvD8gwLI/AAAAAAAAZBk/wzPjnJxLvkcfFFwsmYCwMbqFot9S97RLQCLcBGAs/s1600/1-09.png',
    descripcion:'Late Nights Tee black T-Shirt. Black, 100% Combed Organic Cotton, unisex t-shirt. Featuring artwork from the Late Nights Tee (Live In Buenos Aires / Live In São Paulo / A Head Full Of Dreams - Film) graphic printed on the front and The Chainsmokers A Head Full Of Dreams on the back.',
    disponible: false,
});

productos.push({
    titulo: 'THE 1975 UNISEX BLACK T-SHIT',
    precio: '24,67',
    imagen: 'https://4.bp.blogspot.com/-SnAHQMELly4/XMKXv2oZjpI/AAAAAAAAZBo/xJShqd6-zEkku74AwgHgunWPeCMFAQ39wCLcBGAs/s1600/1-10.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: true,
});
productos.push({
    titulo: 'COLDPLAY CELLPHONE CASE',
    precio: '12,99',
    imagen: 'https://4.bp.blogspot.com/-NtGcTFXOZCs/XMKXwB8Fw5I/AAAAAAAAZBs/umNq7f5kWDEijfM2nE7C_uW_jFldEh4QACLcBGAs/s1600/1-11.png',
    descripcion: 'Elegant, scratch-resistant, high-resolution graphics printed. Soft and durable gel material offers light, protection against bumps, scratches and dust. Elevated front edge that helps protect against viewing scratches if you put your mobile device face down Provides a comfortable grip that does not slip.',
    disponible: false,
});

productos.push({
    titulo: 'THE CHAINSMOKERS WHITE HOODIE',
    precio: '44,50',
    imagen: 'https://4.bp.blogspot.com/-uQQH5uN0UHs/XMKXw8i-tLI/AAAAAAAAZBw/_b4xt-RCVFE9KYh85eRGXWufs7Gx6XUbwCLcBGAs/s1600/1-12.png',
    descripcion: 'White pullover crop hoody, 100% Combed Organic Cotton. Loose fit with raw hem detail. Featuring artwork from the Butterfly package (Live In Buenos Aires / Live In São Paulo / A Head Full Of Dreams - Film) graphic printed on the back and The Chainsmokers logo on left sleeve.',
    disponible: false,
});
productos.push({
    titulo: 'THE 1975 PINK ROSES T-SHIRT',
    precio: '32,45',
    imagen: 'https://3.bp.blogspot.com/-th_3MutIq08/XMKXxTG62gI/AAAAAAAAZB0/xg_Z5-OZQ_Iu9SqBmCTIa3gi40cOVD3iwCLcBGAs/s1600/1-13.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: true,
});
productos.push({
    titulo: 'COLDPLAY X&Y ALBUM COVER T-SHIRT',
    precio: '22,50',
    imagen: 'https://2.bp.blogspot.com/-5Qo7PZlcJ5Q/XMKXx26QlxI/AAAAAAAAZB4/3nhAlRz4oI8i5s3-a-zSD7xCc5cvKv2qQCLcBGAs/s1600/1-14.png',
    descripcion: 'X&Y Album Cover Womens Tee. Womens tee with graphics from the X&Y album cover printed on the front. Navy. 100% cotton.',
    disponible: false,
});

productos.push({
    titulo: 'THE 1975 WOMENS BLACK T-SHIRT',
    precio: '17,50',
    imagen: 'https://2.bp.blogspot.com/-cDkOs9dyaZI/XMKXyYcqvFI/AAAAAAAAZB8/TcP5bB3S1NgBj53jkS0-bWGvneMs-AbVQCLcBGAs/s1600/1-15.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: false,
});

productos.push({
    titulo: 'ALAN WALKER UNISEX CAP LOGO',
    precio: '20,50',
    imagen: 'https://3.bp.blogspot.com/-S9WiQKAqcPk/XMKXy1uVN_I/AAAAAAAAZCA/t35OUzcGZ1IIwehxWehTOIsIDWKFAGctwCLcBGAs/s1600/1-16.png',
    descripcion: 'Complete your Walker-look with this black Alan Walker hat with the recognizable AW-logo on the front. AW Cap is made from 100% cotton, 6 panel baseball caps with snap back closure and rubber print in front.',
    disponible: true,
});
productos.push({
    titulo: 'THE CHAINSMOKERS WHITE T-SHIRT',
    precio: '18,50',
    imagen: 'https://3.bp.blogspot.com/-2vP7-2pyRVI/XMKXzd0Kn8I/AAAAAAAAZCE/OuQsJOHYVM4ZVuGolFzU_cLAailPWSFrQCLcBGAs/s1600/1-17.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: false,
});

productos.push({
    titulo: 'THE 1975 GRAY-SPACE T-SHIRT',
    precio: '18,50',
    imagen: 'https://3.bp.blogspot.com/-eIIFyJB4JHU/XMKXz0ZpshI/AAAAAAAAZCI/CNtdZYzUP_gYVdIPPjzTOMhEe91JFjDygCLcBGAs/s1600/1-18.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: false,
});
productos.push({
    titulo: 'COLDPLAY MENS BLACK T-SHIRT',
    precio: '18,50',
    imagen: 'https://2.bp.blogspot.com/-4U0yP0-gm9M/XMKX0T_8NrI/AAAAAAAAZCM/ZLmH5B_ybh0SyvdZEvONBT0bLUm3Txp3QCLcBGAs/s1600/1-19.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: false,
});

productos.push({
    titulo: 'THE 1975 WOMENS YELLOW T-SHIRT',
    precio: '18,50',
    imagen: 'https://3.bp.blogspot.com/-LdpWvOXZmHk/XMKX0wylssI/AAAAAAAAZCQ/f3f0RsM_M8oXTaddnbWSFwOlicOEFcSfgCLcBGAs/s1600/1-20.png',
    descripcion: 'Round-neck t-shirt for teens, unisex, cotton material, safe, comfortable and breathable, can not be discolored, the pattern of exquisite personality, the style is simple and elegant, the first choice in the summer home, is what is worth Its a shame you have it.',
    disponible: false,
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
        titulo: 'Productos',
        nombres: [
            'Valeria',
            'Alejandro',
            'Sebastián'
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