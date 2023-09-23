// function pasanganTerbesar(num) {
//   let besar = 0;
//   let konversi = num.toString();

//   for (let i = 0; i < konversi.length - 1; i++) {
//     console.log(konversi[i]);
//     // const pair = parseInt(konversi[i] + konversi[i + 1]);

//     // if (pair > besar) {
//     //   besar = pair;
//     // }
//   }
//   return besar;
// }

function pasanganTerbesar(num) {
  let numStr = num.toString();
  let maksPasangan = Number(numStr[0] + numStr[1]);
  for (let i = 0; i < numStr.length - 1; i++) {
    let pasangan = Number(numStr[i] + numStr[i + 1]);
    if (pasangan > maksPasangan) maksPasangan = pasangan;
  }
  return maksPasangan;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// let angka = 641573;
// let konversi = angka.toString();
// let panjang = konversi.length;
// console.log(panjang);
