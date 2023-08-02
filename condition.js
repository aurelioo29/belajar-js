// let nilai = 100

// if (nilai >= 100)
// {
//       console.log("LULUS")
// }
// else {
//       console.log("TIDAK LULUS")
// }

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.

// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
// isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
// * membuat variabel dahulu yaitu nama & peran
// * jika nama kosong maka akan diberikan peringatan
// * jika peran kosong maka akan diberikan peringatan
// * jika peran yang di pilih "Ksatria", makan akan cetak "halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"
// * jika peran yang di pilih "Tabib", makan akan cetak "halo Tabib ${nama}, kamu akan membantu temanmu yang terluka"
// * jika peran yang di pilih "Penyihir", makan akan cetak "halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"
// * jika peran yang di pilih tidak ada, makan akan cetak "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

// let nama = "", peran = "";
// code disini gunakan console.log untuk outputnya

let nama = "rizky"
let peran = "penyihir"

console.log("============SOAL 1============")

if (nama == "") 
{
      console.log("nama wajib diisi");
} 
else 
{
      if (peran == "")
      {
            console.log("Pilih peranmu untuk memulai game");
      }
      else if (peran == "Ksatria")
      {
            console.log("halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!");
      }
      else if (peran == "Tabib")
      {
            console.log("halo Tabib ${nama}, kamu akan membantu temanmu yang terluka");
      }
      else if (peran == "Penyihir")
      {
            console.log("halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!");
      }
      else
      {
            console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
      }
}

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
// Gunakan switch case untuk kasus ini!
// Contoh:
// let hari = 21; let bulan = 1; let tahun = 1945;
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

//code switch case kamu disini
let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

console.log("============SOAL 2============")

switch (bulan)
{
      case 1:
            bulan = "Januari";
            break
      case 2:
            bulan = "February";
            break
      case 3:
            bulan = "March";
            break
      case 4:
            bulan = "April";
            break
      case 5:
            bulan = "May";
            break
      case 6:
            bulan = "June";
            break
      case 7:
            bulan = "July";
            break
      case 8:
            bulan = "August";
            break
      case 9:
            bulan = "September";
            break
      case 10:
            bulan = "October";
            break
      case 11:
            bulan = "November";
            break
      case 12:
            bulan = "Desember";
            break
      default:
            bulan = "Tidak ada ter-definisi bulan nya";
}

console.log(tanggal)
console.log(bulan)
console.log(tahun)
console.log("==============================")