/* BU KISIMDA 10- TEMELLER DÖRDÜNCÜ KISIM'DA YER ALAN GÖREV BAŞLIĞI ALTINDAKİ ALIŞTIRMALARIN ÇÖZÜMLERİ YER ALMAKTADIR.

TEST AŞAMALARI BULUNMAMAKTADIR. TESTLERE https://github.com/TheOdinProject/javascript-exercises/tree/main SAYFASINDAN ULAŞABİLİRSİNİZ.

--- SADECE ALIŞTIRMADA NE YAPILMASI İSTENDİĞİ VE ÇÖZÜM YER ALMAKTADIR. --- */



/* 05_sumAll ===> İki tamsayı alan ve aralarında bulunan tüm sayıların toplamını döndüren bir fonksiyon yazın.
Örneğin:
sumAll(1, 4);
1 + 2 + 3 + 4'ün toplamını döndürün ve 10 sonucuna ulaşın.

Not: number dışında girilen değerleri kontrol edin number değilse error döndürün, sayılar negatifse error döndürün, eğer min değeriniz max değerinden büyükse yerlerini değiştirin.
*/

function sumAll(min, max) {   // 1- min ve max değer alan fonksiyon oluşturdum
    if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0) {
      return 'ERROR';   // 2- min ve max parametrelerinin sayı olup olmadığını kontrol eder (typeof operatörü kullanarak). Eğer herhangi biri veya her ikisi sayı değilse veya min veya max negatifse, işlev 'ERROR' döndürür
    }
  
    if (min > max) {
      [min, max] = [max, min]; // 3- eğer min maxdan daha büyükse min ve max'ı yer değiştir
    }
  
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;   // 4- sum adında bir değişken oluşturdum ve for döngüsü kullanılarak min ve max arasındaki tüm sayıların toplanmasını sağladım. arından çıkan sonuç sum değişkeninde saklanır
  }
  
  
  const sonuc = sumAll(1, 4); 
  console.log(sonuc); // 10