/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// function palindrome(kata) {
//   let result = "";
//   for (let i = kata.length - 1; i >= 0; i--) {
//     // if (result !== kata) {
//     //   console.log(`false`);
//     // } else {
//     //   console.log(`true`);
//     // }
//     result += kata[i];
//   }
//   return kata;
// }
function palindrome(kata) {
  let result = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    result += kata;
    if (result === kata){
        console.log("true")
    } else {
        console.log("false")
    }
  }
  return result;
}

// TEST CASES
palindrome("katak"); // true
palindrome("blanket"); // false
palindrome("civic"); // true
palindrome("kasur rusak"); // true
palindrome("mister"); // fals

