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
  }
  if (abscat2 < abscat1) {
    return 'cat2';
  } else if (abscat1 === abscat2) return 'os gatos trombam e o rato foge';
}
//----------------------------------------------------------------------------------------------------------
// Desafio 8
function fizzBuzz(numArray) {
  let resut = [];
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] % 3 === 0 && numArray[index] % 5 === 0) {
      resut.push('fizzBuzz');
    } else if (numArray[index] % 5 === 0) {
      resut.push('buzz');
    } else if (numArray[index] % 3 === 0) {
      resut.push('fizz');
    } else if (numArray[index] % 3 != 0 && numArray[index] % 5 != 0) {
      resut.push('bug!');
    }
  }
  return resut;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));
//----------------------------------------------------------------------------------------------------------
// Desafio 9
function encode(string) {
  let nova = string.split("");
  let arryNovo = [];
  for (let index = 0; index < nova.length; index += 1) {
    if (nova[index] === "a") {
      arryNovo.push(1);
    } else if (nova[index] === "e") {
      arryNovo.push(2);
    } else if (nova[index] === "i") {
      arryNovo.push(3);
    } else if (nova[index] === "o") {
      arryNovo.push(4);
    } else if (nova[index] === "u") {
      arryNovo.push(5);
    } else {
      arryNovo.push(nova[index]);
    }
  }
  return arryNovo.join("");
}
//console.log(encode("hi there!"));

function decode(arryNovo) {
  let nova2 = arryNovo.split("");
  let novoArray = [];
  for (let index = 0; index < nova2.length; index += 1) {
    if (nova2[index] == 1) {
      novoArray.push("a");
    } else if (nova2[index] == 2) {
      novoArray.push("e");
    } else if (nova2[index] == 3) {
      novoArray.push("i");
    } else if (nova2[index] == 4) {
      novoArray.push("o");
    } else if (nova2[index] == 5) {
      novoArray.push("u");
    } else {
      novoArray.push(nova2[index]);
    }
  }
  return novoArray.join("");
}
//console.log(decode("h3 th2r2!"));
//----------------------------------------------------------------------------------------------------------
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
