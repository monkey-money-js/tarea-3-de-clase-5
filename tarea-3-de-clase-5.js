const $botonSiguiente = document.querySelector('#boton-siguiente');
const $botonCalcularTiempo = document.querySelector('#boton-calcular-tiempo');

const $videos = document.querySelector('.videos');
const $resultados = document.querySelector('.resultados');

$botonSiguiente.onclick = function(){
    mostrarBotonTiempo();
    const cantidadDeVideos = Number(document.querySelector('.cantidad-videos').value);
    borrarInputsAnteriores();
    borrarTextoResultado();
    
    agregarInputsAlDiv(cantidadDeVideos);
}


function mostrarBotonTiempo(){
    $botonCalcularTiempo.className = '';
}

function borrarInputsAnteriores(){
    const nodeDeTiempo = document.querySelectorAll('.node-tiempo');
    for (let i = 0; i < nodeDeTiempo.length; i++) {
        nodeDeTiempo[i].remove();
    }
}

function  borrarTextoResultado(){
    $resultados.textContent = '';
}

function agregarInputsAlDiv(cantidadDeVideos){
    
    for (let i=0; i<cantidadDeVideos; i++){
        const conjuntoDeTresInputs = crearClases();
        $videos.appendChild(conjuntoDeTresInputs);
    }
}

function crearClases(){
    const $conjuntoTresInputs = document.createElement('div');
    $conjuntoTresInputs.className = 'node-tiempo';
    $conjuntoTresInputs.textContent = 'Ingrese horas, minutos y segundos';

    const inputHoras = document.createElement('input');
    inputHoras.className = 'horas';

    const inputMinutos = document.createElement('input');
    inputMinutos.className = 'minutos';

    const inputSegundos = document.createElement('input');
    inputSegundos.className = 'segundos';

    const nodeDeInputs = [inputHoras, inputMinutos, inputSegundos];

    for (let i=0; i<3; i++){
        $conjuntoTresInputs.appendChild(nodeDeInputs[i]);
    }
    return $conjuntoTresInputs;
}


$botonCalcularTiempo.onclick = function(){
    const horas = document.querySelectorAll('.horas');
    const minutos = document.querySelectorAll('.minutos');
    const segundos = document.querySelectorAll('.segundos');

    calcularTiempoTotal(horas,minutos,segundos);
}

function calcularTiempoTotal(horas,minutos,segundos){
    
    let tiempoTotalHoras = 0;
    let tiempoTotalMinutos = 0;
    let tiempoTotalSegundos = 0;

    for (let i = 0; i < segundos.length; i++) {
        tiempoTotalSegundos += Number(segundos[i].value || 0);
        if (tiempoTotalSegundos > 59){
            tiempoTotalMinutos++;
            tiempoTotalSegundos = tiempoTotalSegundos - 60;
        }
    }
    if (tiempoTotalSegundos > 59){
        tiempoTotalMinutos++;
        tiempoTotalSegundos = 0;
    }

    for (let i = 0; i < minutos.length; i++) {
        tiempoTotalMinutos += Number(minutos[i].value || 0);
        if (tiempoTotalMinutos > 59){
            tiempoTotalHoras++;
            tiempoTotalMinutos = tiempoTotalMinutos - 60;
        }
    }
    if (tiempoTotalMinutos > 59){
        tiempoTotalHoras++;
        tiempoTotalMinutos = 0;
    }

    for (let i = 0; i < horas.length; i++) {
        tiempoTotalHoras += Number(horas[i].value || 0);
    }

    agregaTextoResultadosTiempoTotal(tiempoTotalHoras, tiempoTotalMinutos, tiempoTotalSegundos);
}

function agregaTextoResultadosTiempoTotal(tiempoTotalHoras, tiempoTotalMinutos, tiempoTotalSegundos){
    $resultados.textContent = `El tiempo total es ${tiempoTotalHoras} horas, ${tiempoTotalMinutos} minutos y ${tiempoTotalSegundos} segundos.`
}
