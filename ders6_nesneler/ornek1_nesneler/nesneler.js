"!use strick";

//! nesneler

//diziler sirali bellek bölgeleridir. bu yuzden dizilere erisim index ile olur.

//eger diziler karisik ise (nesne) index ile erisilemeyebilir.

//todo object(nesne)

//nesnelerde key(property)-value yapisi kullanilir.

//nesnelerde aranilan veriye erismek icin key adini kullanmaliyiz.

const insan = {
  ad: "kenan",
  soyad: "kul",
  yas: 30,
  meslek: "developer",
  diller: ["java", "JS", "SQL", "HTML"],
};

console.log(insan);

//cagirmak icin;
//1) .dot notasyonu

console.log(insan.ad); //kenan
console.log(insan.diller);

//2) koseli parantez icinde
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adim ${insan.ad} ve yasim ${insan.yas}`);

//************* */
const bilgi = prompt(
  "insan nesnesinden hangisini görmek istersin - ad, soyad, yas..- "
);
console.log(insan[bilgi]);

//objeye key.value ekleme

insan.konum = "türkiye";

insan.email = "insan@hotail.com";

insan["dogumTarihi=1991"];

console.log(insan);

const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenyum",
  ehliyet: true,
  yasHesapla: function () {
    // bugunun yilini al =>Date().getFullYear()
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir.`;
  },
};

console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//todo nesne(object) iterasyon ornekleri

const people = [
  {
    ad: "hakan",
    soyad: "inal",
    meslek: "developer",
    yas: 41,
  },
  {
    ad: "said",
    soyad: "cin",
    meslek: "tester",
    yas: 37,
  },
  {
    ad: "kubilay",
    soyad: "tuncel",
    meslek: "team lead",
    yas: 33,
  },
  {
    ad: "osman",
    soyad: "Türker",
    meslek: "grafiker",
    yas: 29,
  },
  {
    ad: "hüseyin",
    soyad: "harran",
    meslek: "developer",
    yas: 32,
  },
];

console.log(people);

//ornek:1 people dizisindeki kisileri konsolda yazdiralim.

people.forEach((x) => console.log(x.meslek));

//2 people dizisindeki tum kisilerin yaslarini 1 arttirarak yadiriniz.
//people.map((x) => console.log(x.yas + 1));
//veya
people.map((x) => x.yas + 1).forEach((x) => console.log(x));

//3 yasi 25 e esit veya kucuk olanlarin adlarini yazdiriniz.

people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));

//ornek 4 people dizisindeki kisilerin isimlerini buyuk harf olarak alan
//ve yaslarini 5 arttiran fonksiyonu yazdiriniz.

const degisiklik = people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));

//0rnek5)  mesleği developer olanların isimleri büyük harf yapıp ve yaslarını yazdırınız (isterseniz diziye atayıp diziyi yazdırınız)

const yeni = people
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas,
    };
  });
console.log(yeni);
