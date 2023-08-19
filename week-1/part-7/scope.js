function ntahApaIni(a, b) {
  return a * b;
  //suka suka kalian lah disini mau apa
}
console.log(ntahApaIni(5, 7));
//kok ada 5, kan d itu sampe 4, sedangkan 5 itu ga ada di parameter?
//tenang saja angka 5 ga akan dianggap
//======================================================================
let nama = "andi"; //variabel ini ada pada global scope
//yang mana bisa diakses pada fungsi fungsi yang sejajar

function hello() {
  let hello = "hello "; //variabel ini ada di local scope
  //local scope fungsi hello, yang mana akan error kalau variabel hello kita panggil keluar
  //dari fungsinya

  console.log(hello + nama);
}

console.log(hello()); //ini akan error wkwk
//======================================================================
//simplenya penulis menyebutkan adanya hirarki pada pemrograman
//misal
let nilai = 50;

if (nilai >= 50) {
  let hasil = "lulus"; //disini bisa deklarasi variabel hasil
} else {
  let hasil = "Tidak lulus"; ////disini juga bisa deklarasi variabel hasil
  console.log(hasil); //namun bila dijalankan ya akan error, karena variabel hasil hanya bisa
}

//diakses pada local scope if dan else
//======================================================================
//global scope
if (kondisi) {
  //block scope nya si if
} else {
  //block scopenya si else
}

//ini masih global scope
function ntahApa() {
  //local scopenya si fungsi ntahApa
  if (kondisi) {
    //ini makin dalam, yg dinamakan block scope
    //let hello = "woi wkwkw"
  }

  console.log(hello); //error nanti soalnya ga se scope
}
//======================================================================
let woi = "woi";
function ntahApa() {
  //local scopenya si fungsi ntahApa
  let hello = "";
  if (kondisi) {
    //ini block scope
    hello = "woi wkwkw";
    console.log(hello); //ini ga akan error, ya karena var hello ada di luar scopenya
    let akanError = "hehehe";
  }
  // console.log(akanError) //ini akan error, kenapa? pahami sendiri dah wkwk

  console.log(hello()); //ini ga error, soalnya log ini dan var hello berada dalam scope yang sama
  console.log(woi()); //ini juga ga error, karena memanggil var woi yang berada di luar/atas/global scope
}
