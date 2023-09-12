// for (let i = 0; i < 11; i++) {
//   for (let j = 10; j > 0; j--) {
//     console.log("*".repeat(j));
//   }
//   console.log("*".repeat(i));
// }
// console.log('')
for (let i = 5; i >= 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += " ";
  }
  for (let k = i; k < 5; k++) {
    row += "* ";
  }
  console.log(row);
}
