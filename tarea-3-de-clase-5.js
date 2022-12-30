const $botonSiguiente = document.querySelector('.boton-siguiente');
let $divVideos = document.querySelector('.div-videos');

$botonSiguiente.onclick = function(){
    let cantidadDeVideos = Number(document.querySelector('.cantidad-videos').value);
    borrarInputsAnteriores(cantidadDeVideos);
    
    agregarInputsAlDiv(cantidadDeVideos);
}

function borrarInputsAnteriores(){
    const nodeDivDeTiempo = document.querySelectorAll('.divDeTiempo');
    for (let i = 0; i < nodeDivDeTiempo.length; i++) {
        nodeDivDeTiempo[i].remove();
    }
}


function agregarInputsAlDiv(cantidadDeVideos){
    let ternaDeInputs;
    
    for (let i=0; i<cantidadDeVideos; i++){
        ternaDeInputs = crearDivInputsTiempo();
        $divVideos.appendChild(ternaDeInputs);
    }
}

function crearDivInputsTiempo(){
    const $divDeTresInputs = document.createElement('div');
    $divDeTresInputs.className = 'divDeTiempo';
    $divDeTresInputs.textContent = 'Ingrese horas, minutos y segundos';

    const inputHoras = document.createElement('input');
    inputHoras.className = 'horas';

    const inputMinutos = document.createElement('input');
    inputMinutos.className = 'minutos';

    const inputSegundos = document.createElement('input');
    inputSegundos.className = 'segundos';

    const nodeDeInputs = [inputHoras, inputMinutos, inputSegundos];

    for (let i=0; i<3; i++){
        $divDeTresInputs.appendChild(nodeDeInputs[i]);
    }
    return $divDeTresInputs;
}
