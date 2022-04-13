
let cat1 = 6;
let cat2 = -8;

let smaller = Math.min(cat1, cat2);
  
console.log(smaller)


var x = 10, y = -20;
var z = Math.min(x, y);

console.log(z)


function catAndMouse(mouse, cat1, cat2) {
  let smaller = Math.min(cat1, cat2);
  switch (smaller) {
    case cat1 === smaller:
     console.log('cat1');
      break;
    case cat2 === smaller:
      console.log('cat2');
      break;

    default:
      console.log('os gatos trombam e o rato foge.');

      break;
  }
  return smaller
  console.log(catAndMouse(0,1,2));
}