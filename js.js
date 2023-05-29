var button1 = document.querySelector("#bottonEncriptar");
var button2 = document.querySelector("#bottonDesencriptar");
var buttonLimpiar = document.querySelector("#limpiarD");
var buttonCopiar = document.querySelector("#bCopiar");
var miDiv = document.querySelector('#loader');
var imagen = document.querySelector("#imagenOcultar");
var respuesta = document.querySelector("#respuesta");


var BloquearCaracter = document.getElementById("pregunta");
BloquearCaracter.onkeydown = function(event) {
  var key = event.key;
  // Bloquear mayúsculas
  if (key.toUpperCase() === key && key.toLowerCase() !== key) {
    event.preventDefault();
    return false;
  }
  // Bloquear caracteres especiales
  if (key === ',' || key === 'á' || key === 'é' || key === 'í' || key === 'ó' || key === 'ú' || key === '+' || key === '-'|| key === '{'|| key === '}') {
    event.preventDefault();
    return false;
  }
};

function encriptar(){  
  var textoParaEncriptar = document.getElementById("pregunta").value;
  if(textoParaEncriptar === ""){
    alert("Ingrese Texto para encriptar")
  }else{
    setTimeout(function() {$("#respuesta").fadeIn();}, 1);
    imagen.style.setProperty("display", "none");
    var texto = textoParaEncriptar.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    pregunta.value="";
    respuesta.value=texto;
  }
}


function copiar(){
    respuesta.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    respuesta.value="";
    respuesta.style.setProperty("display", "none");
    imagen.style.setProperty("display", "none");
    setTimeout(function() {$("#loader").fadeIn();}, 20);
    setTimeout(function() {$("#loader").fadeOut();}, 1500);
    setTimeout(function() {$("#imagenOcultar").fadeIn();}, 1501);
}

function desencriptar() {
  var textoParaEncriptar = document.getElementById("pregunta").value;
  if(textoParaEncriptar === ""){
    alert("Ingrese texto para desencriptar")
  }else{
    setTimeout(function() {$("#respuesta").fadeIn();}, 1);
    imagen.style.setProperty("display", "none");
    var textorremplazo = textoParaEncriptar.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    pregunta.value="";
    respuesta.value=textorremplazo;
}}


  function limpiar(){
    let preguntaa = confirm("¿Deseas limpiar todas las casillas?");
    if(preguntaa == true){
      respuesta.style.setProperty("display", "none");
      pregunta.value= "";
      respuesta.value= "";
      setTimeout(function() {$("#imagenOcultar").fadeIn();}, 1);
    }else{
    }
  }


bCopiar.onclick = copiar;
bottonEncriptar.onclick = encriptar;
bottonDesencriptar.onclick = desencriptar;
buttonLimpiar.onclick = limpiar;

