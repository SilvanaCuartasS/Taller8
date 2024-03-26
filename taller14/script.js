const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function obtenerMenoresQue8(arreglo) {
    return arreglo.filter(numero => numero < 8);
}

function obtenerMayoresOIgualesQue8(arreglo) {
    return arreglo.filter(numero => numero >= 8);
}

function obtenerCantidadElementos(arreglo) {
    return arreglo.length;
}

const menoresQue8 = obtenerMenoresQue8(fibonacci);
const mayoresOIgualesQue8 = obtenerMayoresOIgualesQue8(fibonacci);
const cantidadElementos = obtenerCantidadElementos(fibonacci);

const container = document.querySelector('.container');
const pMenoresQue8 = document.getElementById('menoresQue8');
const pMayoresOIgualesQue8 = document.getElementById('mayoresOIgualesQue8');

pMenoresQue8.textContent = `Existen ${menoresQue8.length} números menores que 8`;
pMayoresOIgualesQue8.textContent = `Existen ${mayoresOIgualesQue8.length} números mayores o iguales que 8`;