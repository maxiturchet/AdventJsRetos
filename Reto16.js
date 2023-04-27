// Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

// Eliminar espacios al inicio y al final
// Eliminar múltiples espacios en blanco y dejar sólo uno
// Dejar un espacio después de cada coma
// Quitar espacios antes de coma o punto
// Las preguntas sólo deben terminar con un signo de interrogación
// La primera letra de cada oración debe estar en mayúscula
// Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
// Poner un punto al final de la frase si no tiene puntuación
// Las cartas las escriben inglés y aquí tenemos un ejemplo:

// fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// // Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

// fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// // Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
// A tener en cuenta:

// No te tienes que preocupar por los signos de puntuación que no sean coma, punto o interrogación.
// Asegúrate de respetar los saltos de línea y espacios originales.

function fixLetter(letter) {
  let correction = letter
    .replace(/([,.?!])([^,.?!])/g, '$1 $2') 
    // Dejar un espacio después de cada signo.
    .replace(/\s+/g, ' ')                   
    // Reemplazar todos los espacios. El signo + significa que se puede repetir.
    .replace(/([,.?!]{2,})/g, $1 => $1[0]) 
    // Significa que se repita 2 veces o más. Luego tomaremos solo el index 0 del string de símbolos, por tanto, dejando solo uno.
    .replace(/([.?!])(\s)([A-z])/g,
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    // $1 | ([.?!]) -> Simbolo
    // $2 | (\s) -> Un espacio
    // $3 | ([A-z]) -> Cualquier letra, sea mayuscula o minuscula
    .replace(/(santa claus)/gi, 'Santa Claus') //gi no distingue de mayusculas o minusculas ej: sAnTA ClaUs
    .trim()
    .replace(/\s([,.?!])/g, '$1')
    // Se separa en dos partes.
    // Ya que no guardamos el \s entre parentesis, el $1 sera el simbolo.
    // \s
    // ([,.?!]) | $1
    .replace(/^([A-z])/g, $1 => $1.toUpperCase())
    //La primer letra de la carta debe estar en mayúscula
    .replace(/([^.?!])$/g, '$1.')
    //([^.?!]) | $1 | será cualquier cosa que no sea un símbolo de estos: . ? !
    //Esto significa que si hay un simbolo al final, lo dejará.

  return correction
}

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))