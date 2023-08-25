// METHOD ARRAY --LENGTH--
let hewan = [
   "gajah", 
   "jerapah",
   "kucing",
   "kambing",
   "anjing"
]
console.log(hewan.length) //5, digunakan untuk menghitung banyak nya element dalam array

// METHOD ARRAY --PUSH--
console.log('')
hewan.push("sapi") // <------------------------------------------------------------------|
console.log(hewan)                                                                    // |
console.log(hewan.length)//6, dikarekan penambahan hewan yaitu "SAPI" dengan method push-|

// METHOD ARRAY --POP--
console.log('')
hewan.pop() // <---------------------------------------------------------------------------|
console.log(hewan)                                                                      // |
console.log(hewan.length)//5, dikarenakan pengurangan hewan paling kanan dengan method pop-|

// METHOD ARRAY --SHIFT--
console.log('')
hewan.shift() // <--------------------------------------------------------------------------|
console.log(hewan)                                                                       // |
console.log(hewan.length)//4, dikarenakan pengurangan hewan paling kiri dengan method shift-|

// METHOD ARRAY --UNSHIFT--
console.log('')
hewan.unshift("kuda") // <------------------------------------------------------------------------------------|
console.log(hewan)                                                                                         // |
console.log(hewan.length)//5, dikarekan penambahan hewan paling depan kiri yaitu "KUDA" dengan method unshift-|

// METHOD ARRAY --SPLICE--
// berfungsi bisa menambahkan data, bisa menghapus data pada array (bisa dua duanya sekaligus tergantung isi parameter yang kalian berikan pada splice)
// simplenya .splice(param1, param2, ...param-sisanya) //...berarti parameternya bisa ada banyak data
// parameter pertama sebagai penentuan posisi mau di index ke berapa
// parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
// parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak

//contoh menghapus 1 item dari index nomor 1
let binatang = [
   "gajah", 
   "jerapah",
   "kucing",
   "kambing",
   "anjing"
];
binatang.splice(2,0, "sapi");
// Angka 2 di depan merupakan Index keberapa yang ingin di hapus
// Angka 2 di belakang merupakan berapa banyak element yg ingin di hapus
// "SAPI" merupakan data yg ingin di tambahkan ke Array nya
console.log('')
console.log(binatang); //["gajah", "jerapah", "anjing"]

// METHOD ARRAY --SLICE--
// memotong array tergantung dari nilai parameter yang kalian kasih
// contoh .slice(1, 4)
// simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
// parameter pertama dari-mana, itu berfungsi mau motong array dari mana
// parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yg kita potong
// boleh hanya memasang 1 parameter saja, contoh .slice(1)

//contoh memotong dari index 1 sampe ujung
let fruit = ["marmut", "gajah", "jerapah", "singa"]
fruit.slice(1); // merupakan contooh salah karena tidak di tampung ke variable jadi ya enggak ada effect
console.log('')
console.log(fruit.slice(1)) //["marmut", "gajah", "jerapah", "singa"]

// LOH KOK GA BERUBAH SIH?!?!?!11!?
// jadi gini gan wkwkwk
// ----------------------------------------------------------------------------------
// ada method yang memang bisa memutasi/mengubah array secara langsung, jadi cukup
// misal hewan.push("gajah") lalu nilai variabel hewannya berubah ["kucing", "gajah"]
// ----------------------------------------------------------------------------------
// namun ada juga method yang ga merubah nilai variabelnya, nah si method .slice ini salah satu method yang ga merubah nilai array variabelnya
// ----------------------------------------------------------------------------------
// lalu bagaimana cara kita tahu bahwa method slice berfungsi memotong arary???
// caranya adalah dengan menampung hasil return si slice pada variabel, atau langsung
// console.log(hewan.slice(1))
// jadi gini, langsung aja ke contohnya

//gini caranya, ada 2 cara
let hewans = ["gajah", "jerapah", "badak", "singa"];

//bisa langsung hajar aja taro di output
console.log('')
console.log(hewans.slice(1)) //["jerapah", "badak", "singa"]

//kita tampung di variabel baru
let slicedHewan = hewans.slice(1,3)
console.log(slicedHewan) //["jerapah", "badak"]

let okok = ["gajah", "jerapah", "badak", "singa", "keju"];
let slicedokok = okok.slice(1,4);
console.log('')
console.log(slicedokok) //["jerapah", "badak", "singa"]

//yak biasanya sih ditampung di variabel baru
//contoh memotong dari index 1 sampai sebelum index ke 3
//dengan kata lain memotong dari index 1 sampai index 2