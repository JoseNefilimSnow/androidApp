'use strict'


var express = require('express');

var app = express();

var  imgrequest = express.Router();


//controller req --> request, res --> response
const showHelloWorldImg = (req, res) => {
  var numReq = parseInt(req.params.numImage);
  console.log(numReq);
  var imgURL = iconImage(numReq);
  console.log(imgURL);
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
  switch(randomNum) {
    case 1:
      questionChoosed = '¿Soy más de perros o gatos?';
      break;
    case 2:
      questionChoosed = '¿Cual es mi comida favorita?';
      break;
    case 3:
      questionChoosed = '¿Soy más de salir o casa?';
      break;
    case 4:
      questionChoosed = '¿Cual es mi color favorito?';
      break;
    case 5:
      questionChoosed = '¿Soy más de lluvia o sol?';
      break;
    case 6:
      questionChoosed = ' ¿Cual es mi marca favorita?';
      break;
    case 7:
      questionChoosed = '¿Donde vivo?';
      break;
    case 8:
      questionChoosed = ' ¿pregunta random?';
      break;
    case 9:
      questionChoosed = '1-Je';
      break;
    case 10:
      questionChoosed = 'No se que poner';
      break;
    }
    return questionChoosed;
}
function randomPun(){
  var randomNum = Math.floor(Math.random()*(6-1)+1);
  //console.log(a);
  var punishChoosed;
  switch(randomNum) {
    case 1:
      punishChoosed = 'Hazle un bocata a quien te pregunta';
      break;
    case 2:
      punishChoosed = 'Di 5 palabras que empiecen por la letra S';
      break;
    case 3:
      punishChoosed = 'Tira un dado: Si el resultado es mayor a la mitad de caras que tiene el dado, te libras de tu siguiente castigo, de lo contrario cumples los 2 siguientes impuestos';
      break;
    case 4:
      punishChoosed = 'Cierra la ap y ve a dormir';
      break;
    case 5:
      punishChoosed = 'Limpia los platos durante 3 quedadas';
      break;

}
return punishChoosed;
}
function  iconImage(numReq){
  console.log(numReq);
  var imgURL;
  switch(numReq) {
    case 1:
      imgURL = 'https://media.istockphoto.com/vectors/red-polygonal-mosaic-background-vector-id527522686?k=6&m=527522686&s=612x612&w=0&h=JJ3672xp6Ylf4Jx4UMAInsq4WvBE4T-rPC4PfaAolVw=';
      break;
    case 2:
      imgURL = 'https://i.ytimg.com/vi/VwVVKcXTgag/maxresdefault.jpg';
      break;
    case 3:
      imgURL = 'https://www.happydance.com/6021-large_default/verde-claro.jpg';
      break;
    case 4:
      imgURL = 'https://nolosabia.net/wp-content/uploads/2014/10/amarillo-fondo-de-pantalla.jpg';
      break;
    }
    return imgURL;
  }
