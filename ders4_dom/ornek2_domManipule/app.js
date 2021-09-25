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
  liste.removeChild(liste.lastChild);
};
