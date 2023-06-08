var radio = prompt("Ingresar el radio del círculo");

var radio = parseFloat(radio);

var area = Math.PI * Math.pow(radio, 2);

console.log("El area del circulo es de:" + area + ".")

/*Math es un objeto incorporado en JavaScript que proporciona funciones y constantes matemáticas.
pow() es un método del objeto Math que se utiliza para calcular una potencia.
Recibe dos argumentos: la base y el exponente.
En este caso, radio es la base y 2 es el exponente. 
Al pasar radio como primer argumento y 2 como segundo argumento a Math.pow(),
el resultado será el valor de radio elevado al cuadrado. */
