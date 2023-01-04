const $botonSiguiente = document.querySelector('#boton-siguiente');
const $botonCalcularTiempo = document.querySelector('#boton-calcular-tiempo');

let $divVideos = document.querySelector('.div-videos');
let $divResultados = document.querySelector('.resultados');

$botonSiguiente.onclick = function(){
    mostrarBotonTiempo();
    let cantidadDeVideos = Number(document.querySelector('.cantidad-videos').value);
    borrarInputsAnteriores();
    borrarTextoResultado();
    
    agregarInputsAlDiv(cantidadDeVideos);
}


function mostrarBotonTiempo(){
    $botonCalcularTiempo.className = '';
}

function borrarInputsAnteriores(){
    const nodeDivDeTiempo = document.querySelectorAll('.divDeTiempo');
    for (let i = 0; i < nodeDivDeTiempo.length; i++) {
        nodeDivDeTiempo[i].remove();
    }
}

function  borrarTextoResultado(){
    $divResultados.textContent = '';
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


$botonCalcularTiempo.onclick = function(){
    const arrayHoras = document.querySelectorAll('.horas');
    const arrayMinutos = document.querySelectorAll('.minutos');
    const arraySegundos = document.querySelectorAll('.segundos');

    calcularTiempoTotal(arrayHoras,arrayMinutos,arraySegundos);
}

function calcularTiempoTotal(arrayHoras,arrayMinutos,arraySegundos){
    
    let tiempoTotalHoras = 0;
    let tiempoTotalMinutos = 0;
    let tiempoTotalSegundos = 0;

    for (let i = 0; i < arraySegundos.length; i++) {
        tiempoTotalSegundos += Number(arraySegundos[i].value || 0);
        if (tiempoTotalSegundos > 59){
            tiempoTotalMinutos++;
            tiempoTotalSegundos = tiempoTotalSegundos - 60;
        }
    }
    if (tiempoTotalSegundos > 59){
        tiempoTotalMinutos++;
        tiempoTotalSegundos = 0;
    }

    for (let i = 0; i < arrayMinutos.length; i++) {
        tiempoTotalMinutos += Number(arrayMinutos[i].value || 0);
        if (tiempoTotalMinutos > 59){
            tiempoTotalHoras++;
            tiempoTotalMinutos = tiempoTotalMinutos - 60;
        }
    }
    if (tiempoTotalMinutos > 59){
        tiempoTotalHoras++;
        tiempoTotalMinutos = 0;
    }

    for (let i = 0; i < arrayHoras.length; i++) {
        tiempoTotalHoras += Number(arrayHoras[i].value || 0);
    }

    agregaTextoResultadosTiempoTotal(tiempoTotalHoras, tiempoTotalMinutos, tiempoTotalSegundos);
}

function agregaTextoResultadosTiempoTotal(tiempoTotalHoras, tiempoTotalMinutos, tiempoTotalSegundos){
    $divResultados.textContent = `El tiempo total es ${tiempoTotalHoras || 0} horas, ${tiempoTotalMinutos || 0} minutos y ${tiempoTotalSegundos || 0} segundos.`
}
