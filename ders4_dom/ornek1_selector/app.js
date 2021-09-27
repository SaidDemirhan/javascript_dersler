//================================================================ =====
//                   GETELEMENTBYID

const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "ARA"; //textContent=tag lerin içeriğindeki
//yazıyı değiştirmek istersek

//***** GETELEMENTBYTAGNAME */

const resim = document.getElementsByTagName("img");

resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = "3px solid red";

//*****GETELEMENTBYCLASSNAME */

const baslık = document.getElementsByClassName("H1");

baslık[0].style.textAlign = "center";

//***QUERYSELECTOR******** */

//en yaygin olarak kullanilandir.

document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI 😁";

document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green,blue,pink)";

//**************EVENT */
//fare ustune gelince renk degistirme

const h = document.querySelector(".H1");

h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "white";
};

h.onmouseout = function () {
  h.style.color = "pink";
  h.style.backgroundColor = "yellow";
};

//1. resme tikladigimda 1 ile 2. rresim yer degistirecek

document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src = "./img/logo2.png";
  document.querySelector(".iki").src = "./img/js_logo.png";
};
