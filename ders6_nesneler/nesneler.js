//Nesneler

//!Object(nesne)

//nesneler key-value (property-value) yapisi kullanilir
//nesneler aradigimiz veriye erismek icin key adini kullanmamizgerekir

const insan= {
    ad:"adem",soyad:"demir",yas:34,meslek:"QA", lang:["Java", "SQL", "HTML"]
};
console.log(insan);
console.log(insan.ad);
console.log(insan["ad"]);
console.log(insan["lang"])
console.log(insan.lang);

console.log('Adim:${insan.ad} ve yasim:${isnan.yas}');


const kisi = {
    ad:'Merve', soyad:'Aslan', dTarihi:1990, meslek:'tester',
    ehliyet:true , yasHesapla:function() {
        return new Date().getFullYear()-this.dTarihi;
    },

ozet:function() {

}





}