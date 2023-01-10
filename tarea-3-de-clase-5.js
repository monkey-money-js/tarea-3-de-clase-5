const $botonSiguiente = document.querySelector('#boton-siguiente');
const $botonCalcularTiempo = document.querySelector('#boton-calcular-tiempo');

const $videos = document.querySelector('.videos');
const $resultados = document.querySelector('.resultados');

$botonSiguiente.onclick = function(){
    mostrarBotonTiempo();
    const cantidadDeVideos = Number(document.querySelector('.cantidad-videos').value);
    borrarInputs();
    borrarTextoResultado();
    
    for (let i = 0; i < cantidadDeVideos; i++) {
        $videos.appendChild(crearClases());   
    }
}


function mostrarBotonTiempo(){
    $botonCalcularTiempo.className = '';
}

function borrarInputs(){
    const tiempo = document.querySelectorAll('.tiempo');
    for (let i = 0; i < tiempo.length; i++) {
        tiempo[i].remove();
    }
}

function  borrarTextoResultado(){
    $resultados.textContent = '';
}

function crearClases(){

    const $conjuntoInputs = document.createElement('div');
    $conjuntoInputs.className = 'tiempo';
    $conjuntoInputs.textContent = 'Ingrese horas, minutos y segundos';

    const inputHoras = document.createElement('input');
    inputHoras.className = 'horas';

    const inputMinutos = document.createElement('input');
    inputMinutos.className = 'minutos';

    const inputSegundos = document.createElement('input');
    inputSegundos.className = 'segundos';

    const inputs = [inputHoras, inputMinutos, inputSegundos];
    
    const unidadesDeTiempo = 3;
    for (let i=0; i<unidadesDeTiempo; i++){
        $conjuntoInputs.appendChild(inputs[i]);
    }

    return $conjuntoInputs;
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
