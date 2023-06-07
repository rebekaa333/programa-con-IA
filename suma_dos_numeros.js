// Solicitar al usuario ingresar dos números
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

// Convertir los números ingresados a tipo numérico
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Calcular la suma de los dos números
let suma = num1 + num2;

// Mostrar el resultado de la suma
console.log("La suma de los números es: " + suma);

/*
En el ejercicio 1, utilizamos las siguientes funciones:

prompt(): Es una función incorporada en JavaScript que muestra una ventana emergente al usuario,
donde puede ingresar un valor. En este caso, utilizamos prompt() dos veces para solicitar al usuario 
que ingrese dos números.

parseFloat(): Es una función que convierte una cadena (string) en un número de tipo decimal (punto flotante).
En el ejercicio, utilizamos parseFloat() para convertir los números ingresados por el usuario 
(que son cadenas) en números decimales.

console.log(): Es una función que muestra mensajes en la consola del navegador o en la terminal de Node.js.
Utilizamos console.log() para mostrar el resultado de la suma de los dos números.

Además de las funciones mencionadas, también utilizamos una declaración de variable con el keyword let:

let: En JavaScript, let es una palabra clave que se utiliza para declarar una variable de ámbito local. 
En el ejercicio, utilizamos let para declarar las variables num1, num2 y suma. 
La diferencia clave entre let y var es que let tiene un ámbito de bloque, lo que significa que la variable
solo está disponible dentro del bloque en el que se declara.

En resumen, prompt() se utiliza para solicitar la entrada del usuario, 
parseFloat() se utiliza para convertir cadenas en números decimales,
y console.log() se utiliza para mostrar resultados en la consola. 
Y let se utiliza para declarar variables de ámbito local. */