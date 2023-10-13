/* BU KISIMDA 10- TEMELLER DÖRDÜNCÜ KISIM'DA YER ALAN GÖREV BAŞLIĞI ALTINDAKİ ALIŞTIRMALARIN ÇÖZÜMLERİ YER ALMAKTADIR.

TEST AŞAMALARI BULUNMAMAKTADIR. TESTLERE https://github.com/TheOdinProject/javascript-exercises/tree/main SAYFASINDAN ULAŞABİLİRSİNİZ.

--- SADECE ALIŞTIRMADA NE YAPILMASI İSTENDİĞİ VE ÇÖZÜM YER ALMAKTADIR. --- */



/* 04_removeFromArray ===> Bir diziyi ve diğer bazı bağımsız değişkenleri alan, ardından diğer bağımsız değişkenleri o diziden kaldırın:
Örneğin:
removeFromArray([1, 2, 3, 4], 3);
buradan 3'ü çıkarın ve sonuç olarak: 
[1,2,4] döndürün
*/

function removeFromArray(arr, ...elementsToRemove) {
    return arr.filter((element) => !elementsToRemove.includes(element));
  }
  
  
  const originalArray = [1, 2, 3, 4];
  const elementToRemove = 3;
  const modifiedArray = removeFromArray(originalArray, elementToRemove);
  
  console.log(modifiedArray);

  /* AÇIKLAMA 
  
  removeFromArray, birinci argüman olarak bir dizi (arr) ve ardışık olarak birden fazla ek argüman (...elementsToRemove) alabilen bir fonksiyondur. Ek argümanlar, elementsToRemove adı altında bir diziye toplanır.

arr.filter(...) ile, arr dizisindeki elemanları verilen filtreleme işlevine dayanarak filtrelemek için kullanılır. Bu durumda, filtreleme için kullanılan fonksiyondur.


- element, orijinal dizideki her elemanı temsil eder.

- elementsToRemove.includes(element), mevcut elemanın elementsToRemove dizisinde bulunup bulunmadığını kontrol eder. Eğer bulunuyorsa true döner; aksi takdirde false döner.

- !, sonucu tersine çevirmek için kullanılır. Bir eleman elementsToRemove dizisinde bulunuyorsa, filtrelenmiş diziden hariç tutulur ve bulunmuyorsa, filtrelenmiş dizide bulunur.
  
*/ 