//ara butonuna tiklandiginda calan telefon gelsin ve zil calsin.

let resim = document.querySelector(".resim");
//resme ulastik
let ring = document.querySelector(".ses");
//sese ulastik

//ara butonuna ulasip resim degistirdik ve ses caldi
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif";
  ring.play();
};

//baglat butonunu cagirdik resmi degistirdik tel sesini susturduk
document.querySelector(".of").onclick = function () {
  resim.src = "./img/telbağla.gif";
  ring.pause();
};

//konus butonuna basinca yeni resim gelsin.

document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif";
};

//ekle butonuna basildiginda yeni bir Li ekle

const liste = document.querySelector(".liste");
document.querySelector(".ekle").onclick = function () {
  const giris = document.querySelector(".dil");

  liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;
  giris.value = "";
};

//degerleri silme
document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastElementChild);
};

const yeniBaslik = document.querySelector(".forH1");
yeniBaslik.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

//buyuk kucuk hale getirme

document.querySelector(".textbox").onkeyup = function () {
  const isaret = document.querySelector(".checkbox");
  const metin = document.querySelector(".textbox");

  if (isaret.checked) {
    metin.value = metin.value.toUpperCase();
  } else {
    metin.value = metin.value.toLowerCase();
  }
};

//mouse resmin üstune geldiginde aslan kukresin

resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};

//mouse resmin uzerinden ceklidiginde
resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};

/* //2.yol addEventListener() yolu

resim.addEventListener("mouseout", function () {
  resim.src = "./img/aslan1.jpeg";
}); */

//yeni bir dil eklemek icin enter a silmek icin dlelte basmak icin.
document.querySelector(".dil").onkeydown = function (klavye) {
  if (klavye.keyCode == 13) {
    //enter tusu
    document.querySelector(".ekle").onclick();
  }
  if (klavye.keyCode == 46) {
    //delete tusu
    document.querySelector(".sil").onclick();
  }
};
