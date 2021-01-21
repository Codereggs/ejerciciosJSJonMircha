// 1) Programar una funcion que cuente el número de caracteres de una cadena de texto.
console.log("Ejercicio 1");
const contador = (entrada = "") =>
  !entrada
    ? console.warn("Inserta un texto válido.")
    : console.log(
        `La siguiente cadena de texto: ${entrada} tiene ${entrada.length} caracteres.`
      );

contador("Hola Mundo");

console.log("Ejercicio 2");
// 2) Programa una funcion que te devuelva el texto recortado según el numero de caracteres indicados.
const recortador = (texto = "", number = undefined) =>
  !texto
    ? console.warn("Inserta un texto válido.")
    : number === undefined
    ? console.warn("Inserta un dato numérico para cortar los caracteres.")
    : console.log(
        `La siguiente cadena de texto: ${texto} se corta ${number} espacios dejando entonces el siguiente resultado: ${texto.slice(
          0,
          number
        )}`
      );

recortador("Hola Mundo", 5);

// 3) Programa una función que dada una String me devuelva un Array de texto separados.
console.log("Ejercicio 3");
const recorteArray = (texto = "") => {
  if (!texto) return console.warn("Inserta un texto válido.");
  else {
    console.log(
      `La siguiente cadena de texto: ${texto} se divide en el siguiente array:`
    );
    return console.log(texto.split(" "));
  }
};
recorteArray("Hola Mundo");

// 4) Programa una funcion que repita un texto X veces.

console.log("Ejercicio 4");
const repetidora = (texto = "", numero = undefined) => {
  if (!texto || numero === "") return console.warn("Inserta un texto válido.");

  const numeroRegExp = new RegExp("^([0-9])*$", "i");

  if (numero === undefined || numero === 0)
    return console.warn("Inserta un número válido.");

  if (Math.sign(numero) === -1)
    return console.error("Insertastes un número negativo.");

  if (!numeroRegExp.test(numero))
    return console.error("Inserta un número no un texto.");

  console.log(
    `La siguiente cadena de texto: ${texto} se va a repetir ${numero} veces quedando de la siguiente forma: `
  );
  for (let i = 1; i <= numero; i++) {
    console.log(`${texto}, ${i}`);
  }
};

repetidora("Hola Amigo", 4);

console.log(
  "%cGracias Jon, ejercicios hechos por Codereggs.",
  "color:gray; font-size:16px;"
);
