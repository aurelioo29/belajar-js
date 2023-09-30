/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let sorting = animals.sort();
  let penampung = [];
  let result = [];
  for (let i = 0; i < animals.length; i++) {
    if (i === 0) {
      penampung.push(animals[i]);
      continue;
    }
    if (penampung[0][0] !== animals[i][0]) {
      result.push(penampung);
      penampung = [sorting[i]];
    } else {
      penampung.push(sorting[i]);
    }
  }
  result.push(penampung); //ini karena masih ada sisa hewan di penampung
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
