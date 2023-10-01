// Pada pertemuan kali ini, kalian akan belajar apa itu object pada javascript.
// Objek adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).

// object itu seperti berikut
// let myObj = {
//   myKey: 'myValue'
// };
// ----------------------------------
// lengkapnya seperti ini
const myObj = {
  nama: "bryan",
  kelas: "12",
  hobbi: ["main", "makan", "tidur"],
  detail: {
    tinggi: 185,
    berat: 60,
  },
};
console.log(myObj);
// =======================================
console.log("");
// =======================================
console.log(myObj.nama);
console.log(myObj.kelas);
console.log(myObj.hobbi[1]);
console.log(myObj.detail.tinggi);
const detail = myObj.detail;
console.log(detail.berat);
// =======================================
console.log("");
// =======================================
// Cara memanipulasi isi object
myObj.kelakuan = "baik";
//atau bisa seperti ini
myObj["isNolep"] = true;
console.log(myObj);
// =======================================
console.log("");
// =======================================
//atau dengan loop
let objAngka = {};
for (let i = 1; i <= 3; i++) {
  objAngka[i] = i;
}
console.log(objAngka);
// =======================================
console.log("");
// =======================================
// Cara menghapus tipe data object
delete myObj.isNolep; //bisa juga delete myObj['isNolep'];
console.log(myObj);
// =======================================
console.log("");
// =======================================
// berikut contoh Loop khusus untuk tipe data object
const intro = {
  nama: "testa",
  umur: 19,
  jk: "pria",
  suka: {
    makanan: "ayam",
    minuman: "jus",
    seminggu: 2,
  },
};
// untuk akses di dalam variabel detail
for (const key in intro) {
  console.log(`${key} = ${intro[key]}`);
}
console.log("");
for (let key in intro.suka) {
  console.log(intro.suka[key]);
}
// =======================================
console.log("");
// =======================================
// berikut contoh jika di dalam variabel person > age nya
// ingin di ganti, maka bisa di lihat step' di bawah
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
const x = person;
x.age = 10;
console.log(person);
// =======================================
console.log("");
// =======================================
// berikut contoh array yang berisikan tiga object
const orangOrang = [
  { nama: "Alice", umur: 30 },
  { nama: "Bob", umur: 25 },
  { nama: "Charlie", umur: 35 },
];
console.log(orangOrang);
