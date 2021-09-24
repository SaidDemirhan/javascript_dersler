//Fonksiyonlar

//1. yönntem function declaration

function yazdirAd() {
  console.log("hakan");
}

yazdirAd();

//baska örnek;
//klavyeden girilen sayinin tek mi cift mi
//oldugunu gösteren bir fonksiyon yaziniz

const sayiniz = prompt("sayi giriniz:");

console.log(tekCift(sayiniz));

function tekCift(sayiniz) {
  return sayiniz % 2 == 0 ? `$(sayimiz)cifttir` : `$(sayimiz)tektir`;
}
//=================================================================================

//2 yöntem funktion experssion(bu yontem daha yaygin)

const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "cift" : "tek";
};

console.log(tekCift1(5));

//baska örnek
// verilen 3 sayidan hangisinin buyuk oldugunu yazdiran fonction yaz

let buyukBul = function (a, b, c) {
  let enBuyuk;

  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else {
    enBuyuk = c;
  }

  return enBuyuk;
};

console.log(buyukBul(5, 8, 9));

//============================================================================

//3. yontem Function Arrow(ok)

const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");

// veya const ciftMi = (sayi) => (sayi % 2 == 0 ? `${sayi} = Cift` : `${sayi} = Tek`);

console.log("sayi", ciftMi(7));

//baska ornek

const taban = prompt("taban gir");
const us = prompt("us giriniz");

const usAl = (taban, us) => taban ** us;

console.log(usAl(taban, us));
