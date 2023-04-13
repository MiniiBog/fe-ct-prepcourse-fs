/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array = [];
   array.push(Object.entries(objeto));
   return(Object.entries(objeto));
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let array = string.split("").sort();
   
   for (let i = 0; i < array.length; i++) {
      let char = array[i];
      
      if (!objeto[char]) {
         objeto[char] = 1;
      } else {
         objeto[char]++;
      }
   }
   let orderedObj = {};
   Object.keys(objeto).sort().forEach(function(key) {
      orderedObj[key] = objeto[key];
   });
   return orderedObj;
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arr = string.split("");
   var arrOrd = [];
   var contador = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] == arr[i].toUpperCase()){
        arrOrd.splice(contador, 0, arr[i]);
        contador += 1;
    } else {
        arrOrd.push(arr[i]);
    }
}
var stringOrd = arrOrd.join("");
return(stringOrd);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   frase = frase.split(" ");
   
   var array = [];
   var fraseReverse = [];
   
   for (let i = 0; i < frase.length; i++){
      array = frase[i].split("").reverse().join("");
      fraseReverse.push(array);
   }
   
   fraseReverse = fraseReverse.join(" ");
   return(fraseReverse);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var n = numero.toString().split("");
   var iguales = 0;
   
   for (let i = 0; i < n.length; i++) {
      if (n[i] == n[n.length - (1 + i)]) {
         iguales += 1;
      }
   }
   
   if (iguales == n.length){
      return("Es capicua");
   } else {
      return("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split("");
   
   for (let i = 0; i < array.length; i){
      if (array[i] == "a" || array[i] == "b" || array[i] == "c") {
         array.splice(i, 1);
      } else {
         i++;
      }
   }
   
   string = array.join("");
   return(string);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return(arrayOfStrings.sort((a, b) => a.length - b.length));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array = [];
   
   for (let i = 0; i < array1.length; i++){
      for (let o = 0; o < array2.length; o++){
         if (array1[i] == array2[o]){
            array.push(array1[i]);
         }
      }
   }
   return(array);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
