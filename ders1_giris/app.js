//=================================================//
//KONSOL
console.log("Hello Javascript");
console.log();
// log yazip kareli olana basinca cikiyor
//alert("dikkat");
// yukarda bir uyari veriyor sayfa acilir acilmaz
console.warn("bu bir uyaridir!");
console.error("bu bir hatadir");
//prompt("adinizi giriniz");
// kkullanicidan veri girisi icin istiyoruz

//======================================
//DEGISKEN TANIMLAMA

//VAR

//  Ancak, modern JS var keyword'unun kullanımı azaldı.
// Çünkü, var global değişken gibi düşünülebilir.
//  Günümüzde programcılar global değişken gerekmedikçe
//VAR tercih etMEMEKtedir.

var isim = "ipek";
console.log(typeof isim);
// tip sordurma
isim = 3.14;
console.log(typeof isim);

//CONST

/*  TODO: const ve let Modern JS ile gelmiş yeni değişken 
tanımlama keyword leridir.
CONST: Sadece başlangıçta değer atanabilir.
Sonradan değeri değiştirilemez (non-primitiv eler 
hariç).mümkünse const, yoksa let, o da mümkün değilse 
var kullanılmalı. 
çünkü js de çok rahat değişiklik yapılıyor, var, let 
sıkıntı çıkarabilir. */

const piSayisi = 3.14;
// ilk yazilan deger kesinlikle artik degistirilemez

const isim1 = "osman";
console.log(typeof isim1);
// ama kesinlikle bos degerli bir const olusturamayiz.

//LET

/* Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
 Bunun yerine LET kullanabiliriz.
 LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
 Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

 var a herkes ulasir ama let e sadece scope ulasir. */

let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = "erdem";
console.log(fiyat);

//string tanimlamak icin 3 farkli karakter kullanilir

let name1 = "Alaaddin";
let name2 = "Faruk";
let name3 = `Oguzhan`;

console.log(name3);

//ARITMETIK OPERATORLER

const kola = 5;
const cips = 6;
const ekmek = 2;

console.log(kola + cips + ekmek); //13
console.log("toplam fiyat", kola + cips + ekmek);
//toplam fiyat 13
console.log("toplam fiyat" + kola + cips + ekmek);
//toplam fiyat562

const ad = "can";
const soyad = "canan";

console.log(ad + soyad); //cancanan

const s1 = 7;
let s2 = "7"; //77 cikacak

console.log(s1 + s2);

console.log("benim adim", ad, "benim yasim", s1);
//benim adim can benim yasim 7

//Temlate Literal

console.log(`benim adim ${ad} benim yasim ${s1}`);
//benim adim can benim yasim 7

//üs alma
const taban = 2;
const us = 3;
console.log(taban ** us); //8

//mod alma
const sayi = 123;
const birler = sayi % 10;
console.log(birler); //3

//Karsilastirma operatorleri
const s3 = 5;
const s4 = "5";

console.log(s3 == s4); //true
console.log(s3 === s4); //false

//todo Tip degisimleri

const para = "100";
console.log(para + 15);
console.log(Number(para) + 15); //115

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //5656
console.log(typeof sayi5); //number
