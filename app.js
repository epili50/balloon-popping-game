// tu código aquí

//recuperar todos los elementos del DOM con la clase baloon
const balloons = document.querySelectorAll('.balloon');

//variable de estado que indica los globos que faltan explotar
let totalBalloonstoBePooped = balloons.length;
document.querySelector('#left').textContent = totalBalloonstoBePooped;


function popBalloon(event){
    // 1. Debemos actualizar la propiedad event.target.textContent adecuadamente para simular que hemos hecho "POOP!" en el globo
    event.target.textContent = 'POOP!'

    // 2. Temos que actualizar los estilos en línea de event.target.style adecuadamente
    event.target.style.background  = 'none'

    // 3. Arreglar el contador de globos que faltan por explotar
    totalBalloonstoBePooped -= 1;
    document.querySelector('#left').textContent = totalBalloonstoBePooped;

    // eliminar un listener de un elemento (el globo que acava de 'petar')
    event.target.removeEventListener('mouseover', popBalloon)

    if(totalBalloonstoBePooped == 0){
        document.querySelector('#balloon-gallery').style.display = 'none';
        document.querySelector('#yay-no-balloons').style.display = 'block';
    }

}

// Voy a asociar a cada uno de estos elementos, un listener, para esuchar el evento mouseover
// Lo que hacemos con forEach, es iterar por cada elemento del array de nodos, y asociarle un listener
balloons.forEach(elem =>{
    elem.addEventListener('mouseover', popBalloon);
});

