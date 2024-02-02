console.log("---------1---------");
//1 - Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);

console.log("---------2---------");
/*2 - Crea una lista de lenguajes de programación 
llamada "lenguagesDeProgramacion con los siguientes 
elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguagesDeProgramacion[0]);

console.log("---------3---------");
/*3 - Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.
*/
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion[7]);

console.log("---------4---------");
/*4 - Crea una función que muestre en la consola todos los elementos 
de la lista "lenguagesDeProgramacion.
*/

function mostrarLenguajesDeProgramacion(){
    for(i = 0; i <lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguajesDeProgramacion();

console.log("---------5---------");
/*5 - Crea una función que muestre en la consola 
todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/
let listaInvertida = lenguagesDeProgramacion.reverse();
function mostrarLenguajesDeProgramacionDos(){
    for(i = 0; i <listaInvertida.length; i++){
        console.log(listaInvertida[i]);
    }
}
mostrarLenguajesDeProgramacionDos();

console.log("---------6---------");
//6 - Crea una función que calcule el promedio de los elementos en una lista de números.
let numerosListaUno = [5,1,2,101];
let sumaUno = 0;

for(i = 0; i <numerosListaUno.length; i++){
    console.log(numerosListaUno[i]);
}

function promedioLista(){
    for(let num of numerosListaUno){
        sumaUno =sumaUno + num;
        promedio = sumaUno / numerosListaUno.length;
    }
    console.log(`El promedio es ${promedio}`);
    
}
promedioLista();

//7 - Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
console.log("---------7---------");
function numMasAltoNumMasBajo(){
    //El operador de propagación (...) se utiliza para descomponer o expandir elementos de un iterable, como un arreglo.
    console.log(`El número más alto del arreglo es: ${Math.max(...numerosListaUno)} y el número más bajo es ${Math.min(...numerosListaUno)}`);
}
numMasAltoNumMasBajo();

//8 - Crea una función que devuelva la suma de todos los elementos en una lista.
console.log("---------8---------");
let numerosListaDos = [101,10,55,6,1];
let sumaDos = 0;

function sumarElementos(){
    for(let num of numerosListaDos){
        sumaDos =sumaDos + num; 
    }
    console.log(`La suma total del arreglo es ${sumaDos}`);
}
sumarElementos();

/* 9 - Crea una función que devuelva la posición en la lista 
donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/
console.log("---------9---------");
let frutas = ["manzanas", "peras", "naranjas"];

function devolverPosicion(posicion){
    for(i = 0; i <frutas.length; i++){
        if(posicion == frutas[i]){
            return console.log(`La posición de ${posicion} en el arreglo es ${i}`);
        }
    }
    return console.log(-1);
}

devolverPosicion("naranjas");

/*10 - Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.
 */
console.log("--------10--------");
var listaNumeroUno = [10,5,6];
var listaNumeroDos = [2,5,16];

function devolverSumaListas(lista1, lista2){
    return console.log(listaNumeroTres =  lista1.concat(lista2));
}
devolverSumaListas(listaNumeroUno, listaNumeroDos);

/*11 - Crea una función que reciba una lista de números y devuelva una nueva 
lista con el cuadrado de cada número.
 */
var listaNumerosVacia = [];
var listaNumerosCuadrados = [];

console.log("--------11--------");
function recibirNumeros(listaVacia){
    for(var i = 0; i<listaVacia.length; i++){
        listaNumerosCuadrados.push(Math.pow(listaVacia[i], 2));
    }
    listaNumerosVacia = listaNumerosCuadrados;

    return listaNumerosCuadrados;   

}

var numerosAelevar = [2,4,8,16];
listaNumerosCuadrados = recibirNumeros(numerosAelevar);

console.log("Variable listaNumerosVacia:", listaNumerosVacia);
console.log("Números a elevar:", numerosAelevar);
console.log("Números Cuadrados:", listaNumerosCuadrados);







