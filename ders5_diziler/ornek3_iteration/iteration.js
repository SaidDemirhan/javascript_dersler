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
