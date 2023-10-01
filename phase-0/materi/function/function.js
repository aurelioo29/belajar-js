// function cekAngka(angka) {
//   if (angka % 2 == 0) {
//     return `${angka} ini habis dibagi 2`;
//   } else {
//     return `${angka} ini tidak habis dibagi 2`;
//   }
//   // return cekAngka;
// }
// console.log(cekAngka(3));
/*=======================================*/
// function nambahinhurufbesar(kata) {
//   let result = "";
//   for (let i = 0; i < kata.length; i++) {
//     if (i === 0 || kata[i - 1] === "") {
//       result += kata[i].toUpperCase();
//     } else {
//       result += kata[i];
//     }
//   }
//   return result;
// }
// console.log(nambahinhurufbesar("aurelio lucio lie"));
///////////////////////////////////////////////////////////////////////////////////////
// code kata[i-1] === "" -> gunanya utk mengecek space pada kata yang ingin di eksekusi
//////////////////////////////////////////////////////////////////////////////////////
/*=======================================*/
// function balikKata(kata) {
//   let result = "";
//   for (let i = kata.length - 1; i >= 0; i--) {
//     result += kata[i];
//   }
//   return result;
// }

// console.log(balikKata("gajah"));
/*=======================================*/
// let nama = "andi"; //variabel ini ada pada global scope
// //yang mana bisa diakses pada fungsi fungsi yang sejajar
// function hello() {
//   let hello = "hello "; //variabel ini ada di local scope
//   //local scope fungsi hello, yang mana akan error kalau variabel hello kita panggil keluar
//   //dari fungsinya
//   console.log(hello + nama);
//   // return hello; // ini jika tidak di pakai maka akan error karena suatu function perlu ada nya return
// }
// console.log(hello()); //ini akan error wkwk dikarenakan tidak ada nilai retun dari si function hello()
//-------------------------------------------------------------
//simplenya penulis menyebutkan adanya hirarki pada pemrograman
//misal
// let nilai = 50;
// if (nilai >= 50) {
//   console.log("lulus"); //disini bisa deklarasi variabel hasil
// } else {
//   console.log("Tidak lulus"); ////disini juga bisa deklarasi variabel hasil
// }
//console.log(hasil) //namun bila dijalankan ya akan error, karena variabel hasil hanya bisa diakses pada local scope if dan else
/*=======================================*/
// var kelereng = "merah";

// function mainKelereng() {
//   var kelereng = "hijau";
//   console.log(kelereng); // Output: 'hijau'

//   if (true) {
//     var kelereng = "biru"; // Tidak menggunakan 'let'
//     console.log(kelereng); // Output: 'biru'
//   }

//   console.log(kelereng); // Output: 'biru'
// }

// mainKelereng();

// console.log(kelereng); // Output: 'merah'
/*=======================================*/
// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
// yang kemudian akan ditampilkan di console.
//bikin fungsinya disini
function shoutOut() {
  return "Halo Function!!!";
}
console.log(shoutOut());
// ------------------------------------
console.log("");
// ------------------------------------

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
// dua parameter yang dikirim.
//bikin fungsinya disini
function calculateMultiply(num1, num2) {
  return num1 * num2;
}
let num1 = 1;
let num2 = 2;
let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);
// ------------------------------------
console.log("");
// -----------------------------------

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
// satu kalimat berikut:
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
//bikin fungsinya disini
function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
// ------------------------------------
console.log("");
// -----------------------------------

// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.
function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return `true`;
  } else if (angka1 > angka2) {
    return `false`;
  } else {
    return -1;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
// ------------------------------------
console.log("");
// ------------------------------------

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
function balikKata(kata) {
  let result = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    result += kata[i];
  }
  return result;
}
// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS
// ------------------------------------
console.log("");
// ------------------------------------

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".
function konversiMenit(menit) {
  let jam = Math.floor(menit / 60);
  let sisa = menit % 60;

  if (sisa < 10) {
    return `${jam}:0${sisa}`;
  } else {
    return `${jam}:${sisa}`;
  }
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
// ------------------------------------
console.log("");
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
function xo(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
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
