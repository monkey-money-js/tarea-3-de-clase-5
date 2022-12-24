const $botonSiguiente = document.querySelector('.boton-siguiente');

$botonSiguiente.onclick = function(){
    const cantidadDeVideos = Number(document.querySelector('.cantidad-videos').value);
    const nodeDeInputs = crearNodeDeInputs(cantidadDeVideos);
}

function crearNodeDeInputs(cantidadDeVideos){
    const nodeDeInputs = [];
    let inputCreado = document.createElement('input');
    for (let i=0; i<cantidadDeVideos.length; i++){
        nodeDeInputs.push(inputCreado);
    }
    return nodeDeInputs;
}
