function highestCount(arrayNum) {
  let result = 0;
  let max = Math.max(...arrayNum);
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] >= max) {
      result += 1;
    }
  }
  return result;
}
















let result = 0;
function highestCount(arrayNum) {
  for (let index = 0; index < arrayNum.length; index += 1) {
    let maior = Math.max(...arrayNum);

    if (maior >= arrayNum[index]) {
      result += 1;
    }
  }
  return result;
}
// console.log(highestCount([0, 0, 0]));