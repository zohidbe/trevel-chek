
let alisherPul = prompt("Qancha puli borligini so'mda kiriting:");

let biletDollarda = 500;
let mehmonxonaDollarda = 250;
let kongilocharYevroda = 120;

let dollarKursi = 11000.34;
let yevroKursi = 12354.03;

let biletSomda = biletDollarda * dollarKursi;
let mehmonxonaSomda = mehmonxonaDollarda * dollarKursi;
let kongilocharSomda = kongilocharYevroda * yevroKursi;

let umumiyHarajatlar = biletSomda + mehmonxonaSomda + kongilocharSomda;

if (alisherPul >= umumiyHarajatlar) {
    console.log("Oq yo’l, mijoz!");
} else {
    console.log("sizni pulingiz yetmaydi hurmatli mijoz.");
}
