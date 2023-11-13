let input = ["45", "17", "90", "73", "48"];
let panjang = input.length;

for (let i = 0; i < panjang - 1; i++) {
  let imaks = i;

  // Mencari indeks nilai maksimum dalam sisa array
  for (let j = i + 1; j < panjang; j++) {
    if (input[j] > input[imaks]) {
      imaks = j;
    }
  }

  // Menukar nilai maksimum dengan nilai pada indeks i
  let temp = input[i];
  input[i] = input[imaks];
  input[imaks] = temp;
}

// Menampilkan hasil akhir setelah sorting
console.log(input);
