// let belanja = prompt("Total belanja nya");

// alert(`${belanja}`);
/*//////////////////////////////////////////////////////////////////////*/
// Membuat objek Date yang mewakili tanggal saat ini
const currentDate = new Date();

// Mendapatkan indeks hari (0 = Minggu, 1 = Senin, dst.)
const dayIndex = currentDate.getDay();

// Menggunakan array untuk mengonversi indeks hari ke nama hari
const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayName = daysOfWeek[dayIndex];

// Menampilkan hasil
console.log("Hari ini adalah " + dayName);