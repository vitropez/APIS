function iniciar() {
    maximo=600;
    medio=document.getElementById('medio');
    reproducir=document.getElementById('reproducir');
    progreso=document.getElementById('progreso');
    reproducir.addEventListener('click', doblePlay, false);
    audio=document.getElementById('audio');
}
function doblePlay(){
    presionarVideo();
    presionarAudio();
}
function presionarVideo(){
    if(!medio.paused && !medio.ended) {
        medio.pause();
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);

    }else{
        medio.play();
        reproducir.innerHTML='Pausa';
        bucle=setInterval(estado, 700);

    }
}
function presionarAudio(){
    if(!audio.paused && !audio.ended) {
        audio.pause();
    }else{
        audio.play();

   }
}
function estado() {
       if (!medio.ended) {
            var total = parseInt(medio.currentTime * maximo / medio.duration);
            progreso.innerHTML += ("&#9992;&#65039;");

           if (total>550) {
            progreso.innerHTML = ("");
           }
       }else
            {
               progreso.style.width = '0px';
                reproducir.innerHTML = 'Reproducir';
               window.clearInterval(bucle);
            }

    }

window.addEventListener('load', iniciar, false);