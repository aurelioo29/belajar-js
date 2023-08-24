//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let countO = 0;
  let countX = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      countX++;
    } else {
      countO++;
    }
  }

  return countX === countO;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

// pada test case untuk string hanya ada x dan o yang mana kalau acuan awal...
// if (str[i] === 'x') {
//   //maka ini x
// } else {
//   //yang ini udah pasti o, karena pada string hanya ada x dan o
//   //tidak ada huruf lain selain x dan o
// }
// //...berlaku sebaliknya

// if (str[i] === 'o') {
//   //maka ini o
// } else {
//   //yang ini udah pasti x, karena pada string hanya ada x dan o
//   //tidak ada huruf lain selain x dan o
// }