const $botonSiguiente = document.querySelector('.boton-siguiente');

$botonSiguiente.onclick = function(){
    const cantidadDeVideos = Number(document.querySelector('.cantidad-videos').value);
    const arrayDeInputs = crearNodeDeInputs(cantidadDeVideos);
}

function crearNodeDeInputs(cantidadDeVideos){
    const arrayDeInputs = [];
    let inputCreado = document.createElement('input');
    for (let i=0; i<cantidadDeVideos.length; i++){
        arrayDeInputs.push(inputCreado);
    }
    return arrayDeInputs;
}
