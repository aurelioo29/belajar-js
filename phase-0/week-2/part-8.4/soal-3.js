function hitungJumlahKata(kalimat) {
  let kata = kalimat.split(" "); // Memecah teks menjadi kata-kata dengan spasi sebagai pemisah

  // Menghitung panjang kata-kata, tetapi hanya menghitung kata yang tidak kosong
  let jumlahKata = 0;
  for (let i = 0; i < kata.length; i++) {
    jumlahKata++;
    // if (kata[i] !== "") {
    // }
  }

  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata("I have a  dream ")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); //5
console.log(hitungJumlahKata("")); // 1
