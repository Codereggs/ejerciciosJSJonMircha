// 1) Programar una funcion que cuente el número de caracteres de una cadena de texto.
console.log("Ejercicio 1");
function contador(entrada) {
  console.log(
    `La siguiente cadena de texto: ${entrada} tiene ${entrada.length} caracteres.`
  );
}

contador("Hola Mundo");

console.log("Ejercicio 2");
// 2) Programa una funcion que te devuelva el texto recortado según el numero de caracteres indicados.
function recortador(texto, number) {
  console.log(
    `La siguiente cadena de texto: ${texto} se corta ${number} espacios dejando entonces el siguiente resultado: ${texto.slice(
      0,
      number
    )}`
  );
}


recortador("Hola Mundo", 4);

// 3) Programa una función que dada una String me devuelva un Array de texto separados.
console.log("Ejercicio 3");
function recorteArray(texto) {
  console.log(
    `La siguiente cadena de texto: ${texto} se divide en el siguiente array `
  );
  console.log(texto.split(" "));
}

recorteArray("Hola Mundo");

// 4) Programa una funcion que repita un texto X veces.

console.log("Ejercicio 4");
function repetidora(texto, numero) {
  console.log(
    `La siguiente cadena de texto: ${texto} se va a repetir ${numero} veces quedando de la siguiente forma: ${texto.repeat(
      numero
    )} `
  );
}

repetidora("Hola Mundo ", 5);

console.log(
  "%cGracias Jon, ejercicios hechos por Codereggs.",
  "color:gray; font-size:16px;"
);
