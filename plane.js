//creamos la función iniciar que se ejecutará al cargar la página y
//guardamos los identificadores que vamos a utilizar en una variable
function iniciar() {
    maximo=600;
    medio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    progreso=document.getElementById('progreso');
    reproducir.addEventListener('click', doblePlay, false);
    audio=document.getElementById('audio');
}
//al hacer click en el botón se ejecuta la función doblePlay que lleva
//asociadas la función de encender el video y el audio
function doblePlay(){
    presionarVideo();
    presionarAudio();
}
//si el video no está pausado o finalizado se pausará al presionarlo y cambiará
//el texto a reproducir
function presionarVideo(){
    if(!medio.paused && !medio.ended) {
        medio.pause();
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
//si el video está pausado se ejecutará en un intervalo de 0,7 segundos
    }else{
        medio.play();
        reproducir.innerHTML='Pausa';
        bucle=setInterval(estado, 700);

    }
}
//igual para la función de audio
function presionarAudio(){
    if(!audio.paused && !audio.ended) {
        audio.pause();
    }
    else{
        audio.play();
   }
}
//está función es la que se ejecuta cada 0,7 segundos
//calculamos el tiempo de duración del video nunca superior a 600 y
//escribimos los aviones en la barra de reprodución hasta que finalice el
//video que se borrarán los aviones
//el video y el audio están en loop por lo que no se detienen a menos que se
//paren con el botón
function estado() {
       if (!medio.ended) {
            var total = parseInt(medio.currentTime * maximo / medio.duration);
            progreso.innerHTML += ("&#9992;&#65039;&#9992;&#65039;o");

           if (total>560) {
            progreso.innerHTML = ("");
           }
       }else
            {
                reproducir.innerHTML = 'Reproducir';
            }
    }
//la función iniciar se ejecutará cuando cargue la página
window.addEventListener('load', iniciar, false);