const yaslar = [5, 10, 28, 42];

const isimler = [
  "Hakan",
  "Alaaddin",
  "Furkan",
  "Dayanch",
  20,
  40,
  true,
  23.5,
  yaslar,
];

console.log(isimler);

console.log(isimler[3]); //Dayanch
console.log((isimler[3] = "Sadi"));
console.log(isimler); //dayanc yerine sai yazdi
//const degistirilemiyordu ama  array ici degisebilir.

isimler[isimler.lengt - 2] = false; //23,5 ile false yer degistirdi

console.log(isimler[8][1]); //ya da
console.log(isimler[isimler.length - 1][1]); //5 i verir.

//todo DIZIYI DEGISTIREN METHODLAR

let meyveler = ["elma", "armut", "muz", "kivi"];

const baslik = document.querySelector(".baslik");
baslik.textContent = meyveler;

//pop() son elemani siler.log icine yazilirsa gertirir.
//meyveler.pop();
console.log(meyveler.pop());

//shift() dizinin 0. indexini siler ilk eleman

meyveler.shift();
console.log(meyveler.shift());

//silme methodlari consolda yazdirilirsa sildigi elemani getirir.

//push() dizinin sonuna eleman ekler
meyveler.push("cilek", "karpuz");

//unshift( ) 0. index e elamn ekler.

meyveler.unshift("ayva");

//reverse() ters siralar

meyveler.reverse();

//sort() diziyi natural order a göre siralar.

meyveler.sort();

//splice() istenilen index e  ekleme
//silmeden
meyveler.splice(1, 0, "erik");
//silerek
meyveler.splice(4, 1, "uzum"); // yeni elemani ekler.

//todo DIZI ERISIM METHODLARI

const sayilar = [3, 4, 5, 2, "2", "3", "uc", "bes", 5, 2, 7];

//includes() kapsiyor mu

console.log(sayilar.includes("5")); //false
console.log(sayilar.includes(5)); //true

//indexOf

console.log(sayilar.indexOf(2)); //3 sira index ini gösterir
console.log(sayilar.lastIndexOf(5)); //7
console.log(sayilar.indexOf(2, 4)); //8
//2 nin 4. indexten itibaren olan 2 nin index i

//join() dizinin elemanlarini birlestirip string hale getirir.

console.log(sayilar.join); //her bir elemani string olarak yazdirir
//default deger virgul ile ayirir.
console.log(sayilar.join(" ")); // bosluklarla ayirir

//tostring() join gibidir  ama sadece virgul ile ayirir.
console.log(sayilar.toString());

//**************************************** */

const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];
//slice
//yazilan index dahil sonrasini yazdirir.

console.log(arabalar.slice(2));

console.log(arabalar.slice(1, 3));
//ilk index dahil 2. dahil degil.

//concat

const birlesik = sayilar.concat(arabalar, true, false[(3, 4, 5)], meyveler);
console.log(birlesik);

baslik.textContent = birlesik;
console.log(birlesik);
