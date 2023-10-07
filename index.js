//If Else
let nilai = 1000000;

if (nilai >= 80) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else if (nilai >= 60) {
  console.log("Nilai C");
} else {
  console.log("Tidak Lulus");
}
//switch case
let hari = "Rabu";

switch (hari) {
  case "Senin":
    console.log("hari Senin");
    break;
  case "Selasa":
    console.log("hari Selasa");
    break;
  case "Rabu":
    console.log("hari Rabu");
    break;
  default:
    console.log("hari lain");
    break;
}
//for statement
for (let i = 1; i <= 3; i++) {
  console.log("Peserta " + i);
}
//while... do while
let count = 1;
while (count <= 5) {
  console.log("Daftar " + count);
  count++;
}
let x = 1;
do {
  console.log("Pasien -" + x);
  x++;
} while (x <= 3);

//function
function tambah(a, b) {
  return a + b;
}

let hasilPenjumlahan = tambah(5, 3);
console.log("Hasil penjumlahan: " + hasilPenjumlahan);
