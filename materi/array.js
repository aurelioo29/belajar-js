// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(array1);
// console.log(array2[0][2]);
// ///////////////////////////////////////////////////////////////////////////
// ada macam2 array method ; lenght,push,pop,shift = geser,unshift,splice,slice

let array1 = [1, 2, 3, 4, 5, 6, 7];

// -----------------------
console.log("method length");
// -----------------------
console.log(array1.length); // method length akan me-return nilai total elemen/item yang ada pada array

// -----------------------
console.log("method push");
// -----------------------
array1.push(8);
console.log(array1); // method memasukan data pada urutan terakhir array atau bisa dibilang memasukan data ke paling kanan

// -----------------------
console.log("method pop");
// -----------------------
array1.pop();
console.log(array1); // method menghapus elemen terkahir pada array, bisa dibilang ngehapus yang elemen array paling kanan

// -----------------------
console.log("method shift");
// -----------------------
array1.shift();
console.log(array1); // method menghapus elemen pertama pada array, bisa dibilang ngehapus yang paling kiri

// -----------------------
console.log("method unshift");
// -----------------------
array1.unshift(0);
console.log(array1); // method menambahkan data pada urutan pertama, bisa dibilang nambahin sesuatu dipaling kiri wkwk

// -----------------------
console.log("method splice");
// -----------------------
// method splice berfungsi bisa menambahkan data, bisa menghapus data pada array, bisa dua duanya sekaligus tergantung isi parameter yang kalian berikan pada splice
// contoh .splice(0,1,"gajah", "macan")
// simplenya .splice(param1, param2, ...param-sisanya) //...berarti parameternya bisa ada banyak data
// parameter pertama sebagai penentuan posisi mau di index ke berapa
// parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
// parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak
// |-----------------Misal------------------------------|
//contoh menghapus 1 item dari index nomor 1
// let hewan = ["marmut", "kucing", "tikus"];
// hewan.splice(1,1);
// console.log(hewan); //["marmut", "tikus"]

//contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 1
// let hewan = ["marmut", "kucing", "tikus"];
// hewan.splice(1,0,"gajah");
// console.log(hewan); //["marmut", "gajah", "kucing", "tikus"]

//contoh menambahkan 1 item dan menghapus 2 item, dari index nomor 1
// let hewan = ["marmut", "kucing", "tikus"];
// hewan.splice(1,2,"gajah");
// console.log(hewan); //["marmut", "gajah"]

//contoh menambahkan 3 item dan menghapus 2 item, dari index nomor 1
// let hewan = ["marmut", "kucing", "tikus"];
// hewan.splice(1,2,"gajah", "jerapah", "singa");
// console.log(hewan); //["marmut", "gajah", "jerapah", "singa"]

// -----------------------
console.log("method slice");
// -----------------------
// method slice berfungsi untuk memotong array tergantung dari nilai parameter yang kalian kasih
// contoh .slice(1, 4)
// simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
// parameter pertama dari-mana (wkwk), itu berfungsi mau motong array dari mana
// parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yg kita potong
// boleh hanya memasang 1 parameter saja, contoh .slice(1)

// //contoh memotong dari index 1 sampe ujung
// let hewan = ["marmut", "gajah", "jerapah", "singa"]
// hewan.slice(1)
// console.log(hewan) //["marmut", "gajah", "jerapah", "singa"]

// LOH KOK GA BERUBAH SIH?!?!?!11!?
// jadi gini gan wkwkwk

// ada method yang memang bisa memutasi/mengubah array secara langsung, jadi cukup
// misal hewan.push("gajah") lalu nilai variabel hewannya berubah ["kucing", "gajah"]

// namun ada juga method yang ga merubah nilai variabelnya, nah si method .slice ini salah satu method yang ga merubah nilai array variabelnya

// lalu bagaimana cara kita tahu bahwa method slice berfungsi memotong arary???
// caranya adalah dengan menampung hasil return si slice pada variabel, atau langsung
// console.log(hewan.slice(1))
// jadi gini, langsung aja ke contohnya

// //gini caranya, ada 2 cara
// let hewan = ["gajah", "jerapah", "badak", "singa"];
// //bisa langsung hajar aja taro di output
// console.log(hewan.slice(1)) //["jerapah", "badak", "singa"]
// //kita tampung di variabel baru
// let slicedHewan = hewan.slice(1)
// console.log(slicedHewan) //["jerapah", "badak", "singa"]

// yak biasanya sih ditampung di variabel baru wkwk
// //contoh memotong dari index 1 sampai sebelum index ke 3
// //dengan kata lain

// //contoh memotong dari index 1 sampai index 2
// let hewan = ["gajah", "jerapah", "badak", "singa"];
// let slicedHewan = hewan.slice(1,3);
// console.log(slicedHewan) //["jerapah", "badak"]

let hewan = ["gajah", "jerapah", "badak", "singa"];
let slicedHewan = hewan.slice(1, 3);
console.log(slicedHewan); //["gajah", "jerapah", "badak"]

//itu tergantung data mu isinya apa, kebetulan kan kita taunya gajah jerapah ada di index 0 dan 1 maka bisa pake slice

// let hewan = ["gajah", "jerapah", "badak", "singa"];
// let slicedHewan = hewan.slice(0,2);
// console.log(slicedHewan); //["gajah", "jerapah"]

//kalau cuma mau gajah dan badak, dia harus ga kena jerapahnya
//makanya slice kurang efektif bila ambil data yang melongkap
//kalau indexing nya statis kayak slice(0,3) itu kan constant 0 dan 3
//mending begini

let gajahDanBadak = [hewan[0], hewan[2]];
console.log(gajahDanBadak); //["gajah", "badak"]
