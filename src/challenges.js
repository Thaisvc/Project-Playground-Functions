// Desafio 1

function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  if (bool1 === false && bool2 === false) {
    return false;
  }
  return false;
}
// console.log(compareTrue(false, false));
//----------------------------------------------------------------------------------------------------------
// Desafio 2

function calcArea(base, height) {
  let calcula = (base * height) / 2;
  return calcula;
}
// console.log(calcArea(10, 2));
//----------------------------------------------------------------------------------------------------------
// Desafio 3

function splitSentence(string) {
  let palavra = string.split(' ');
  return palavra;
}
// console.log(splitSentence('go Trybe'));
//----------------------------------------------------------------------------------------------------------
// Desafio 4
function concatName(paramNome) {
  let primeroUltimo = paramNome[paramNome.length - 1] + ', ' + paramNome[0];
  return primeroUltimo;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//----------------------------------------------------------------------------------------------------------
// Desafio 5
let pontoWins = 0;
let pontoTies = 0;
function footballPoints(wins, ties) {
  pontoWins = wins * 3;
  pontoTies = ties * 1;
  return pontoWins + pontoTies;
}
// console.log(footballPoints(1, 2));
//----------------------------------------------------------------------------------------------------------
// Desafio 6
function highestCount(arrayNum) {
  let result = 0;
  let maior = Math.max(...arrayNum);
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] >= maior) {
      result += 1;
    }
  }
  return result;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 0, 0]));
//----------------------------------------------------------------------------------------------------------
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = cat1 - mouse;
  let cat2Dist = cat2 - mouse;
  let abscat1 = Math.abs(cat1Dist);
  let abscat2 = Math.abs(cat2Dist);

  if (abscat1 < abscat2) {
    return 'cat1';
} if (abscat2 < abscat1) {
    return 'cat2';

} else if ( abscat1 === abscat2)
return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  
  let divide3 = '';
  let divide5 = '';
  let divide3E5 = '';
  let bag = '';
  for (let index = 0; index < arrayNumeros.length; index += 1) {
      if (arrayNumeros[index] % 3 === 0) {
          divide3 = ['fizz'];
         console.log( divide3.join(' '));
      }else if (arrayNumeros[index] % 5 === 0){
          divide5 = ['buzz'];
          console.log(divide5.join(' ') ); 
      }else if (arrayNumeros[index] % 3 && arrayNumeros[index] % 5 === 0){
          divide3E5 = ['fizzBuzz!'];
          console.log(divide3E5.join(' ')); 
      }else {
          bug = ['bag'];
          console.log(bug.join('')); 
      }
    }
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
