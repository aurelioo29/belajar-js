// Function kalkulator
function calculate(angka1, angka2, args) {
  switch (args) {
    case "plus":
      return angka1 + angka2;
      break;
    case "kurang":
      return angka1 - angka2;
      break;
    case "bagi":
      return angka1 / angka2;
      break;
    case "kali":
      return angka1 * angka2;
      break;
  }
}

console.log(calculate(1, 2, "plus"));
