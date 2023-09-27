/* BU KISIMDA 10- TEMELLER DÖRDÜNCÜ KISIM'DA YER ALAN GÖREV BAŞLIĞI ALTINDAKİ ALIŞTIRMALARIN ÇÖZÜMLERİ YER ALMAKTADIR.

TEST AŞAMALARI BULUNMAMAKTADIR. TESTLERE https://github.com/TheOdinProject/javascript-exercises/tree/main SAYFASINDAN ULAŞABİLİRSİNİZ.

--- SADECE ALIŞTIRMADA NE YAPILMASI İSTENDİĞİ VE ÇÖZÜM YER ALMAKTADIR. --- */



/* 03_reverseString ===> Oldukça basit, girdiyi tersine döndüren, reversString adında bir fonksiyon yazın:
Örneğin:
Kelime = "abcd" - bu kelimeyi ters yazın ve: 
"dcba" çıktısına ulaşın:
*/


const reverseString = function(kelime) {    // 1- kelime parametresi alan bir fonksiyon oluşturduk ve reverseString isimli değişkenimize atadık.
    return kelime.split('').reverse().join(''); // 2- kelime parametremize önce split yöntemi (metni tek tek diziye ayırır) uyguladık ardından reverse yöntemi (diziyi ters çevirir) uyguladık ve ardından join yöntemi (ters çevirdiğimizi diziyi birleştirir) uyguladık ve tüm işlemleri döndürdük.
};

const tersKelime = reverseString("deneme"); // 3- fonksiyonumuzu tersKelime adlı değişkene atadık ve fonksiyon parametremize "deneme" kelimemizi girdik.

console.log(tersKelime);    // 4- ve "emened" kelimezi çıktı olarak konsola yazdırdık.