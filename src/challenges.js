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
  let smaller = Math.min(cat1, cat2);
  if (smaller === cat2 && smaller === cat2 && smaller === mouse) {
    return 'os gatos trombam e o rato foge';
  }
  if (smaller === cat1) {
    return 'cat1';
  }
  if (smaller === cat2) {
    return 'cat2';
  }
  
}

console.log(catAndMouse(0, 0, 0));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
