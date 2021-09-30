//todo DIZILERDE ITERATION

//? fOR döngusu

const sayilar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;

for (let i = 0; i < sayilar.length; i++) {
  sayilar[i] < 0
    ? (negatif = negatif + sayilar[i])
    : (pozitif = pozitif + sayilar[i]);
}

console.log(`Negatifler toplami: ${negatif} pozitifler toplami: ${pozitif}`);

// todo For In dongusu
//sadece dizilerde kullanilir

pozitif = 0;
negatif = 0;

for (let i in sayilar) {
  sayilar[i] < 0
    ? (negatif = negatif + sayilar[i])
    : (pozitif = pozitif + sayilar[i]);
}
console.log(`Negatifler toplami: ${negatif} pozitifler toplami: ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];

const ara = prompt("sayisini merak ettigin hayvani yaz: ");
const bulDondur = function (ara) {
  let hayvanSayisi = 0;

  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) hayvanSayisi++;
  }
  hayvanSayisi == 0
    ? alert("Aradiginiz hayvan listemizde yoktur!")
    : alert(`aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane bulunmaktadir`);
};

bulDondur(ara);

// todo for of dongusu

// for of dongusu, for in dongusunun bir cok veri yapisini
//kapsayacak sekilde guncellenmis halidir. Bu
//dongude dizi icersindeki veriye erisirken indisleme
//kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];

for (let i of arabalar) {
  console.log(i); // butun araba markalarini konsolda yazdirir.
}

//todo For each methodu

//orijinal diziyi bozmaz

let ogrenciler = ["onur", "hakan", "furkan"];

ogrenciler.forEach((deger, index) =>
  console.log(index + ".kisi " + deger + "dir")
);

ogrenciler.forEach((x) => console.log(x));
//butun isimleri alt alta yazdiriyor.
console.log(ogrenciler); //liste seklinde yazdirdi.

//todo Map methodu
//orijinal diiziyi degistirmez

//ornek
//butun elemanlarin 3 katini alalim.

const rakamlar = [3, 5, 3, 2, 6, 7, 9];

console.log(rakamlar.map((x) => x * 3));

console.log(rakamlar.map((x, idex) => `${deger} . elemanin 3 kati ${x * 3}`));

//ornek
//isimler dizissinin icindeki her ismi buyuk harf olarak yeni bir diziye sakla

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

//map methodu bir dizi dondurur.

const buyuk = isimler.map((isim) => isim.toUpperCase);

document.querySelector(".baslik").innerHTML = buyuk;
//buyuk yazdirdi

document.querySelector(".baslik").textContent = buyuk.join("->");

//todo filter methodu

//ornek
//fiyatlar dizisindeki 250 den büyükleri filtrele

const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250));

//-------------- ÖRNEK -------------------
// maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

console.log(maaslar.filter((a) => a < 400).map((a) => a * 1.5));

//-------------- ÖRNEK -------------------

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

//ilk harfi a olanlari yazdiriniz..

adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));

// todo reduce methodu

//reduce tan sonra for each calismaz

const maaslar = [3000, 5000, 4000, 2000, 1000];

console.log(maaslar.reduce((x, y) => x + y, 0)); //toplam 15000 i yazdirdi
