function iniciar() {
    maximo=600;
    medio=document.getElementById('medio');
      reproducir=document.getElementById('reproducir');
    barra=document.getElementById('barra');
    progreso=document.getElementById('progreso');
    reproducir.addEventListener('click', presionar, false);

    barra.addEventListener('click', mover, false);
}
function presionar(){
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


    function estado() {
        if (!medio.ended) {
            var total = parseInt(medio.currentTime * maximo / medio.duration);



            progreso.innerHTML += ("&#9992;&#65039;");
console.log(total)
            if (total>550) {
                progreso.innerHTML = ("");
            }

        } else {
            progreso.style.width = '0px';

            reproducir.innerHTML = 'Reproducir';
            window.clearInterval(bucle);
        }

    }

window.addEventListener('load', iniciar, false);