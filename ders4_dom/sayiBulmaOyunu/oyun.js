// bilgisayarin 0 ile 20 arasinda bir sayi tut

let rastgeleSayijs = Math.floor(Math.random() * 20 + 1);

let skorPc = 10;
let rekorPc = 0;

//her kontrol et butonuna tiklandiginda

document.querySelector(".kontrol").onclick = function () {
  //tahmin dogru ise
  const tahminjs = document.querySelector(".tahmin").value;
  let mesajjs = document.querySelector(".mesaj").textContent;

  if (tahminjs.value == rastgeleSayijs) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayijs;
    mesajjs = "🥳Tebrikler!!! Bildiniz..";
    //rekoru guncelle...

    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekor").textContent = puanPc;
    }
    //tahmin yanlis ise..
  } else {
    if (puanPc > 1) {
      puanPc--;
      tahminjs < rastgeleSayijs
        ? (mesajjs = "⬆️ Arttir")
        : (mesajjs = "⬇️Azalt");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      mesajjs.textContent = "Oyunu kaybettiniz!";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};
//tekrar butonuna basildiginda baslangic degerleri yuklensin.

document.querySelector(".tekrar").onclick = () => {
  rastgeleSayijs = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
  mesajjs = "Tahmine Baslaniyor";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = " ";
};

//klavyeden bir tusa basildiginda calis

document.querySelector(".tahmin").onkeydown = function (olay) {
  if (olay.keyCode == 13) {
    document.querySelector(".kontrol").onclick();
  }
  if (olay.keyCode == 82) {
    document.querySelector(".tekrar").onclick();
  }
};
