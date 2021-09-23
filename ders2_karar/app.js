//KARAR YAPILARI

//if else

const s1 = Number(prompt("birinci sayi"));
const islem = prompt("islemi giriniz");
const s2 = prompt("ikinci sayi");

let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else islem == "/";
sonuc = s1 / s2;

console.log(sonuc);
