'use strict'


var express = require('express');

var app = express();

var  imgrequest = express.Router();


//controller req --> request, res --> response
const showHelloWorldImg = (req, res) => {
  var numReq = parseInt(req.params.numImage);
  console.log(numReq);
  var imgURL = iconImage(numReq);
  res.status(200).send({
    url: imgURL
  });
};
const showHelloWorld = (req, res) => {
  var questionChoosed = randomQuest();
  var punishChoosed = randomPun();
  res.status(200).send({
    question: questionChoosed,
    punish: punishChoosed,
  });
};
//Routes
imgrequest.get('/img/', showHelloWorld);
imgrequest.get('/img/:numImage', showHelloWorldImg);
//Base Routes
app.use('/PDM',imgrequest);
//boot server
var port = 60000;
app.listen(port,()=>{
    console.log("Hello from port:" + port);
})
function randomQuest(){
  var randomNum = Math.floor(Math.random()*(11-1)+1);
  //console.log(a);
  var questionChoosed;
  switch(a) {
    case 1:
      b = '¿Soy más de perros o gatos?';
      break;
    case 2:
      b = '¿Cual es mi comida favorita?';
      break;
    case 3:
      b = '¿Soy más de salir o casa?';
      break;
    case 4:
      b = '¿Cual es mi color favorita?';
      break;
    case 5:
      b = '¿Soy más de lluvia o sol?';
      break;
    case 6:
      b = ' ¿Cual es mi marca favorita?';
      break;
    case 7:
      b = '¿Donde vivo?';
      break;
    case 8:
      b = ' ¿pregunta random?';
      break;
    case 9:
      b = '1-Je';
      break;
    case 10:
      b = 'No se que poner';
      break;
    }
return questionChoosed;
}
function randomPun(){
  var randomNum = Math.floor(Math.random()*(6-1)+1);
  //console.log(a);
  var punishChoosed;
  switch(a) {
    case 1:
      b = 'Hazle un bocata a quien te pregunta';
      break;
    case 2:
      b = 'Di 5 palabras que empiecen por la letra S';
      break;
    case 3:
      b = 'Tira un dado: Si el resultado es mayor a la mitad de caras que tiene el dado, te libras de tu siguiente castigo, de lo contrario cumples los 2 siguientes impuestos';
      break;
    case 4:
      b = 'Cierra la ap y ve a dormir';
      break;
    case 5:
      b = 'Limpia los platos durante 3 quedadas';
      break;

}
return punishChoosed;
}
function  iconImage(numReq){
  console.log(numReq);
  var imgURL;
  switch(f) {
    case 1:
      b = 'https://media.istockphoto.com/vectors/red-polygonal-mosaic-background-vector-id527522686?k=6&m=527522686&s=612x612&w=0&h=JJ3672xp6Ylf4Jx4UMAInsq4WvBE4T-rPC4PfaAolVw=';
      break;
    case 2:
      b = 'https://i.ytimg.com/vi/VwVVKcXTgag/maxresdefault.jpg';
      break;
    case 3:
      b = 'https://www.happydance.com/6021-large_default/verde-claro.jpg';
      break;
    case 4:
      b = 'https://nolosabia.net/wp-content/uploads/2014/10/amarillo-fondo-de-pantalla.jpg';
      break;
    }
    return imgURL;
  }
