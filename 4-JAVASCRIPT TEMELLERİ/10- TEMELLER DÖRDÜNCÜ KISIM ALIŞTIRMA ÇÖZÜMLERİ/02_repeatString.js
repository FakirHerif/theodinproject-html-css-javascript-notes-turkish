/* BU KISIMDA 10- TEMELLER DÖRDÜNCÜ KISIM'DA YER ALAN GÖREV BAŞLIĞI ALTINDAKİ ALIŞTIRMALARIN ÇÖZÜMLERİ YER ALMAKTADIR.

TEST AŞAMALARI BULUNMAMAKTADIR. TESTLERE https://github.com/TheOdinProject/javascript-exercises/tree/main SAYFASINDAN ULAŞABİLİRSİNİZ.

--- SADECE ALIŞTIRMADA NE YAPILMASI İSTENDİĞİ VE ÇÖZÜM YER ALMAKTADIR. --- */


/* 02_repeatString ===> String'i belirli sayıda tekrarlayan bir fonksiyon yazın:
Örneğin;
Kelime = "abc" - 3 defa tekrarlayın ve:
"abcabcabc" çıktısına ulaşın: */


const repeatString = function(word, repeatNumber) {     // 1- repeatString adlı kelime ve tekrar sayısı parametreleri alan bir fonksiyon oluşturduk.
    let result = "";    // 2- alacağımız sonuç için boş bir dize oluşturduk.
    
    for (let i = 0; i < repeatNumber; i++) {    // 3- 0'dan başlayarak tekrar sayımıza kadar olan sayıları kullanan ve işlemi tekrarlayan bir döngü oluşturduk. (tekrar sayımız 3 ise; 0,1,2 olacak)
      result += word;   // 4- döngü her çalıştığında sonuç değişkenimize word metnini ekleyecek ve sonuç metnini oluşturacak.
    }
    
    if (repeatNumber < 0) { // 5- eğer tekrar sayımıza negatif bir değer girersek "ERROR" çıktısı alacağız
      result = "ERROR";
    }
    
    return result;  // 6- Sonucumuzu döndürüyoruz.
  };
  
  const sonuc = repeatString("let", 3); // 7- fonksiyonumuza "let" kelimesi ve tekrar sayımız 3 olan parametreleri ekledik ve bu fonksiyonu sonuc isimli degiskenimize atadık.("letletlet" olacak) (eğer let yerine abc ve tekrar sayısına 4 yazarsak => "abcabcabcabc" çıktısını alırız.)
  
  console.log(sonuc);   // 8- sonucu konsolumuzda yazdırdık ve "letletlet" çıktısını aldık.
  
