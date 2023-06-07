//contador de palabras
var texto = prompt("Ingrese un texto u oración");

var palabras = texto.split(" ");

var cantidadpalabras = palabras.length;

console.log("Este texto tiene" + cantidadpalabras + "palabras." );

/*
Utiliza el método split() para dividir la cadena en un arreglo de palabras
Utiliza la propiedad length para obtener la cantidad de palabras en la oración
*/