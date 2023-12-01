//crear dos campos de texto uno editable y otro no para la palabra
//desordenada y para probar palabras.
let palabras = ["pepsi", "manzana", "Asturias", "sidra", "vino", "viñedo","olivar", "puerta", "mamifero", "carromato", "cazador"];
var palabra;
var aleatorio;
var objetivo;
var inputLetras = null;
var botonNuevaPalabra = null;
var botonVerSolucion = null;
var botonFinalizarJuego = null;

function nuevaPalabra (){
    //Asigna a objetivo la palabra aleatoria
    aleatorio =Math.floor(Math.random() * palabras.length);
    palabra = palabras[aleatorio];
    objetivo = palabra;
    var desordenada = '';
    while (palabra.length > 0){
        aleatorio =Math.floor(Math.random() * palabra.length);
        desordenada += palabra[aleatorio];
        palabra = palabra.slice(0,aleatorio) + palabra.slice(aleatorio+1,palabra.length);
    }
    inputLetras.value = desordenada;

    console.log(inputLetras);
    console.log(objetivo);
}
function inicializar (){
    inputLetras = document.getElementById("letras");
    botonNuevaPalabra = document.getElementById("nuevaPalabra");
    botonVerSolucion = document.getElementById("verSolucion");
    botonFinalizarJuego = document.getElementById("finalizarJuego");

    botonNuevaPalabra.onclick = nuevaPalabra;
    botonVerSolucion.onclick= verSolucion;
    botonFinalizarJuego.onclick = finalizarJuego;
    nuevaPalabra();

        //esta funcion tiene que coger una volverla aleatoria y cuando sea aleatoria
//colocarla en el input del html

}
//cuando se llame a esta función se tendrá que mostrar un mensaje 
//que diga la solución
function verSolucion (){
}
function comprobar (){
    //Esta funcion tiene que comprobar cada vez que se introduce una letra 
    //si se acerto la palabra
}
function finalizarJuego(){
    //cuando se llame a esta función el juego terminará
}

window.onload = inicializar;