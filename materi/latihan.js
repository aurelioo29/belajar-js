// // // 1. Melakukan Looping Menggunakan While
// // // Problem
// // // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// // // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// // // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// // //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// let i = 0;
// console.log("LOOPING PERTAMA");
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 10;
// console.log("LOOPING KEDUA");
// while (j >= 0) {
//   console.log(j);
//   j--;
// }

// // // 2. Melakukan Looping Menggunakan For
// // // Problem
// // // Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// // // Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// // // menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// // //tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// console.log("LOOPING PERTAMA");
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// console.log("");

// console.log("LOOPING KEDUA");
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// // // 3. Angka Ganjil dan Genap
// // // Hint: kamu akan menggunakan kondisional juga di kasus ini.

// // // Problem
// // // Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// // // Di dalam perulangan, periksa setiap angka counter:

// // // Apabila angka counter adalah angka genap, tuliskan GENAP
// // // Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} merupakan bilangan GENAP`);
//   } else {
//     console.log(`${i} merupakan bilangan GANJIL`);
//   }
// }

// // //4. counter kelipatan
// // // Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// // // Pada 3 perulangan baru ini periksa setiap angka counter:
// // // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// // // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// // // "3 kelipatan 3"dan seterusnya.

// for (let i = 0; i <= 100; i += 2) {
//   if (i % 3 === 0) {
//     console.log(`${i} merupakan kelipatan 3`);
//   }
// }
// console.log("");
// for (let i = 0; i <= 100; i += 5) {
//   if (i % 6 === 0) {
//     console.log(`${i} merupakan kelipatan 6`);
//   }
// }
// console.log("");
// for (let i = 0; i <= 100; i += 9) {
//   if (i % 10 === 0) {
//     console.log(`${i} merupakan kelipatan 10`);
//   }
// }

// // 5. Bintang asteriks
// // Problem buatlah bintang seperti berikut
// // let input = 5
// // //hasilnya
// // //*
// // //**
// // //***
// // //****
// // //*****

// let input = 5;
// let j = "";
// for (let i = 0; i < input; i++) {
//   j += "*";
//   console.log(j);
// }

// let array = [
//   ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//   ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//   ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//   ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
// ];
// console.log(array[0][0]) //ini merupakan INDEX ke 0 & Urutan ke 0
// console.log(array[1][1])

// // for (let i = 0; i < array.length; i++) {
// //   for (let j = 0; j < array[i].length; j++) {
// //     console.log([i] [j]);
// //   }
// // }

let index = ["A", "B", "C", "D"];

let cek = index[index.length - 1];
console.log(cek);
