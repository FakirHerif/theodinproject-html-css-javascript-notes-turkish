# Giriş

Bu bölümde the odin project notlarından bağımsız, şahsi olarak oluşturduğum notlar yer almaktadır.

Bu bölümde yer alacak notlar:

- Arrays (Diziler)

- Loops (Döngüler)

- Test Driven Development (TDD)

**Not:** "4- Temeller Üçüncü Kısım Ek Notlar" dosyasında döngülerden bahsetmiştim ancak yinelemek adına bu notlarda tekrar anlatıp, üzerinden geçeceğim.

# Arrays (Diziler)

Dizi (Array), aynı veri türünden birden fazla değeri depolayan bir veri yapısıdır. JavaScript ve birçok diğer programlama dilinde diziler çok yaygın olarak kullanılır. Diziler, belirli bir sırayla sıralanmış öğeleri içerirler ve her bir öğe, bir dizinin belirli bir indeks numarasıyla erişilebilir.

JavaScript'te bir dizi oluşturmak için **köşeli parantezleri []** kullanabilirsiniz. 

Dizi kısaca, birden fazla değer tutabilen özel bir değişkendir.

**Diziler Neden Kullanılır?**

Öğelerden oluşan bir listeniz varsa (örneğin renklerin listesi), tek değişkenli renkleri oluşturmak için her birini ayrı değişkende bildirebiliriz:

```
let renk1 = "kırmızı";
let renk2 = "mavi";
let renk3 = "yeşil";
```

Evet öğeleri tek tek oluşturabiliyoruz ama düşünsenize 3 tane değil de 300 tane renk yazmak zorunda olsaydık ve aralarında dolaşıp belirli birini bulmak isteseydik?

İşte bunun çözümü bir dizi oluşturmaktır! Bir dizi tek bir ad altında birçok değeri tutabilir:

```
const renkler = ["kırmızı", "mavi", "yeşil"];
```

veya birden fazla satıra yayabilirsiniz:

```
const renkler = [
    "kırmızı", 
    "mavi", 
    "yeşil"
];
```

ayrıca boş bir dizi oluşturup ardından öğeleri ekleyebilirsiniz:

```
const renker = [];
renkler[0] = "kırmızı";
renkler[1] = "mavi";
renkler[2] = "yeşil";
```

Bu örnekler, "renkler" adında bir dizi oluşturur ve bu dizi üç farklı renk içerir. Dizi öğelerine erişmek için indeks numarasını kullanabilirsiniz. Örneğin, "mavi" rengine erişmek için:

```
const ikinciRenk = renkler[1]; // "mavi"
```

Ne kadar harika ve kolay değil mi? Diziler, verileri düzenlemek, depolamak ve işlemek için yaygın olarak kullanılır. Dizilerin içine farklı veri türlerinden öğeler ekleyebilirsiniz ve dizileri döngüler gibi kontrol yapılarıyla birlikte kullanarak çeşitli işlemler gerçekleştirebilirsiniz.

Dizi öğesini değiştirebiliriz:

```
const renkler = ["kırmızı", "mavi", "yeşil"];
renkler[0] = "sarı";
```

Dizi öğelerini toString() yöntemi ile string'e dönüştürebiliriz:

```
const renkler = ["kırmızı", "mavi", "yeşil"];
const renklerString = renkler.toString();   // "kırmızı, mavi, yeşil"
```

**Not:** Dizileri "const" anahtar sözcüğüyle bildirmek yaygın bir kullanımdır. Neden? const bir değişkenin değerinin sabit olduğunu belirtmiyor muydu ve değerin sabit olarak tutulmasını istediğimiz zaman kullanmıyor muyduk? const kullanırsak diziyi nasıl değiştireceğiz? gibi soruları sormanız çok normal. Evet const hakkında yanılmıyorsunuz ve söyledikleriniz doğru. Bu durumu madde madde açıklığa kavuşturalım:

- **const ile bildirilen bir dizi yeniden atanamaz**

```
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // HATA 
```

- **Diziler Sabit Değildir**

Evet const bu noktada kafa karıştırıcı olabiliyor. const sabit bir dizi tanımlamaz, yaptığı şey aslında bir diziye sabit bir referans tanımlamasıdır. Bu yüzden sabit bir dizinin elemanlarını değiştirmemiz mümkündür.

```
// const ile sabit bir dizi oluşturduk
const cars = ["Saab", "Volvo", "BMW"];

// Bir öğeyi değiştirebiliriz (0. indeksteki "Saab" ile "Toyota" yı değiştirdik )
cars[0] = "Toyota";

// Ayrıca öğe ekleyebiliriz ("Audi" öğesini diziye ekledik)
cars.push("Audi");
```

**Not:** Unutmadan eklemek istediğim diğer konu ise, bir blokta bildirilen dizi, bloğun dışında bildirilen bir diziyle aynı değildir:

```
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);    // "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  console.log(cars[0]);  // "Toyota"
}
console.log(cars[0]);    // "Saab" 
```

# Dizi Methodları

JavaScript dizilerinin asıl gücü yerleşik dizi özellikleri ve yöntemleridir. 

**Array length**

length yöntemi bir dizinin uzunluğunu döndürür:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;           // 4
```

ayrıca lenght yöntemi ile dizinin en sonuna yeni bir öğe ekleyebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";     // ["Banana","Orange","Apple","Mango","Kiwi"]
```

**Array toString()**

toString() yöntemi bir diziyi string'e döndürür:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let convertString = fruits.toString();     //   "Banana,Orange,Apple,Mango"
```

**join()**

join() yöntemi tüm dizi öğelerini bir string'de birleştirir. Tıpkı toString() gibi davranır, ancak ek olarak ayırıcı da belirleyebiliriz (* ile kullanalım):

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let tryJoin = fruits.join("*");     //   "Banana*Orange*Apple*Mango"
```

**Array pop()**

pop() yöntemi bir dizinin en son öğesini kaldırır:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();                       // ["Banana","Orange","Apple"]
```

kaldırılan öğeyi de döndürebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();           // "Mango"
```

**Array push()**

push() yöntemi bir dizinin en sonuna öğe ekler:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");                // ["Banana","Orange","Apple","Mango","Kiwi"]
```

yeni dizi uzunluğunu da döndürebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let lengthFruits = fruits.push("Kiwi");    // 5
```

**Array shift()**

shift() yöntemi pop() yöntemi ile benzerdir, pop() yöntemi en son öğeyi kaldırırken shift() yöntemi ise ilk öğeyi kaldırır:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();                     // ["Orange","Apple","Mango"]
```

kaldırılan öğeyi de döndürebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();         // "Banana"
```

**Array unshift()**

unshift() yöntemi push() yöntemi ile benzerdir, push() yöntemi en sona öğe eklerken unshift() yöntemi ise en öne öğe ekler:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");            // ["Lemon","Banana","Orange","Apple","Mango"]
```

yeni dizi uzunluğunu da döndürebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let lengthFruits = fruits.unshift("Lemon");     // 5
```

**Öğeleri Değiştirme Yöntemi**

indeks numarası belirterek istediğimiz öğeyi başka bir öğe ile değiştirebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";                 // ["Kiwi","Orange","Apple","Mango"]
```

**Array concat()**

concat() yöntemi, mevcut dizileri birleştirerek yeni bir dizi oluşturur:

```
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);      // ["Cecilie","Lone","Emil","Tobias","Linus"]
```

**Not:** concat() yöntemi mevcut dizileri değiştirmez. Her zaman yeni bir dizi döndürür.

Ayrıca concat() yöntemi ile istediğiniz sayıda dizi birleştirebilir ve istediğiniz sıraya göre yeni bir dizi oluşturabilirsiniz:

```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr2.concat(arr3, arr1);     // ["Emil","Tobias","Linus","Robin","Morgan","Cecilie","Lone"]
```

bir string öğeyi concat() yöntemi ile birleştirebilirsiniz ancak bu string ifade parantez içinde belirtilmelidir ve dizinin en sonuna yerleşecektir:

```
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter");        // ["Emil","Tobias","Linus","Peter"]
```

**Array flat()**

flat() yöntemi, bir dizi içindeki alt dizileri (nesting) kaldırarak ve belirli bir düzeye (depth) kadar olan tüm öğeleri tek bir düz dizide birleştirir:

```
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();            // [1,2,3,4,5,6]
```

**Not:** flat() yöntemi yalnızca bir alt seviyedeki dizileri birleştirir. Yani [1, 2, [3, 4], [5, [6, 7]]] şeklinde bir dizimiz varsa [1, 2, 3, 4, 5, [6, 7]] haline getirir:

```
const dizi = [1, 2, [3, 4], [5, [6, 7]]];
const duzDizi = dizi.flat();            // [1, 2, 3, 4, 5, [6, 7]]
```

Eğer tüm alt seviyeleri birleştirmek istersek "depth" parametresi ayarlayarak bunu yapabiliriz:

```
const dizi = [1, 2, [3, 4], [5, [6, 7]]];
const duzDizi = dizi.flat(Infinity);    // [1, 2, 3, 4, 5, 6, 7]
```

**Array splice()**

splice() yöntemi bir diziye yeni öğeler ekler:

```
array.splice(start, deleteCount, item1, item2, ...)
```

- **start:** Ekleme veya silme işleminin başlayacağı dizinin indeksi.
- **deleteCount:** Silme işlemi yapılıyorsa, kaç öğenin silineceğini belirtir. Eğer öğe ekleniyor ve silme yapılmıyorsa, bu parametre 0 olarak verilir.
- **item1, item2, ...:** Eklenen öğelerdir. Silme işlemi yapılıyorsa, bu parametreler kullanılmaz.

Örnek
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");   // ["Banana","Orange","Lemon","Kiwi","Apple","Mango"]
```

İlk parametre olan (2), yeni elemanların eklenmesi gereken konumu tanımlar. yani 2. indekse Lemon eklemiş olduk.

İkinci parametre (0), kaç öğenin silinmesi gerektiğini tanımlar. Yani değer 0 olarak belirlenmiş, bu nedenle silme işlemi yapılmayacak, sadece öğeler eklenecek.

Parametrelerin geri kalanı ("Limon", "Kivi") eklenecek yeni öğeleri tanımlar.

Örnek
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");   // ["Banana", "Orange", "Lemon", "Kiwi"]
```

splice() yöntemi ile öğe kaldırmayı deneyelim:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // ["Orange","Apple","Mango"]
```

ilk parametre olan (0) indeksimizi belirtiyor.

ikinci parametre (1) kaç adet öğenin kaldırılacağını belirtiyor.

**Array slice()**

slice() yöntemi, bir dizinin seçtiğimiz parçasını yeni bir diziye kopyalar:

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);     // ["Orange","Lemon","Apple","Mango"]
```

birinci indeksten (birinci indeks dahil) başlayarak geri kalan öğeleri yeni bir dizi oluşturup içine kopyalamış olduk.

**Not:** slice() yöntemi yeni bir dizi oluşturur. eski oluşturduğumuz diziden hiçbir öğeyi kaldırmaz.

Üçüncü indeksten başlayalım:
```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);         // ["Apple","Mango"]
```

**Not:** slice() yöntemi splice() yöntemi gibi iki argüman alabilir. Başlangıç indeksinden (başlangıç indeksi dahil) bitiş indeksine kadar olan (ancak bitiş indeksi dahil değil) öğeleri seçer:

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);      // ["Orange","Lemon"]
```

**Array'in İlk Öğesine Erişim**

indeks yöntemiyle basitçe bunu yapabileceğimizi biliyoruz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];      // "Banana"
```

**Array'in Son Öğesine Erişim**

yine indexi kullanacağız ama burada değinmemiz gereken önemli nokta şu; bunu yapabilmek için önce dizinin tüm uzunluğunu bilmemiz gerekiyor ve tüm uzunluktan 1'i çıkartırsak son öğeye erişebiliriz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];      // "Mango"
```

**Bir Değişkenin Dizi Olup Olmadığını Nasıl Anlarız?**

Bu soru sıkça sorulan bir sorudur. typeof ile sorgulama yapabiliriz ancak sorun şu ki typeof ifadesi array'leri object olarak gösteriyor:

```
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;       // "object"
```

typeof operatörü, dizilerin türünü "object" olarak döndürür çünkü JavaScript'te diziler de bir tür nesne olarak kabul edilir. Dizi, nesneler gibi "referans türü" olarak kabul edilir ve bu nedenle typeof operatörü tarafından "object" olarak sınıflandırılır.

Eyvahhhhh peki ne yapacağım, nasıl sorgulayacağım? diye soruyor olabilirsiniz, hiç merak etmeyin bunun başka bir yöntemi var, **Array.isArray()** yöntemi:

```
const fruits = ["Banana", "Orange", "Apple"];
let type = Array.isArray(fruits);   // true
```

İşte bu kadar basit! Array.isArray() yöntemi, verilen bir değerin bir dizi olup olmadığını kontrol eder ve sonucu bir boolean değer olarak döndürür. Bu şekilde dizinin gerçek türünü doğru bir şekilde kontrol edebilirsiniz.

veya başka bir yöntem olan **instanceof** yönteminide kullanabiliriz:

```
const fruits = ["Banana", "Orange", "Apple"];

if (fruits instanceof Array) {
    console.log("fruits bir dizi");
} else {
    console.log("fruits bir dizi değil");
}
```

**Array fill()**

fill() yöntemi bir dizideki belirtilen öğeleri bir değerle doldurur ve orijinal dizinin üzerine yazar.

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");        // ["Kiwi","Kiwi","Kiwi","Kiwi"]
```

veya sadece istediğiniz öğelerin üzerine yazabilirsiniz:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 1, 3);  // ["Banana", "Kiwi", "Kiwi", "Mango"] Yani 1.indeksten başla 3. indekse kadar(3.indeks dahil değil) üzerine yaz dedik.
```

**Array sort()**

sort() yöntemi bir diziyi alfabetik olarak sıralar:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();      // ["Apple","Banana","Mango","Orange"]
```

**Not:** sort() yöntemi, özellikle sayıları sıralarken bazı beklenmedik sonuçlar üretebilir ve sort() yöntemi, öntanımlı olarak öğeleri karakter dizilerine dönüştürerek alfabetik sıraya göre sıralar. Bu nedenle sayıları doğru bir şekilde sıralamak için bir **karşılaştırma fonksiyonu (comparison function)** kullanmanız gerekebilir:

Küçükten büyüğe doğru sıralama için:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});  // [1,5,10,25,40,100] küçükten büyüğe doğru
```

Büyükten küçüğe doğru sıralama için:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});  // [100,40,25,10,5,1] büyükten küçüğe doğru
```

veya arrow fonksiyon ile daha kısa bir şekilde yapalım:

```
const numbers = [10, 5, 40, 25, 100];
numbers.sort((a, b) => a - b);      // [5, 10, 25, 40, 100]
```

Rastgele sıralama yapalım:

```
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});    // Her seferinde rastgele, farklı bir sıralama üretecektir
```

veya The Fisher Yates Method ile yapalım:

```
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
```

**Array reverse()**

revers() yöntemi bir dizideki öğelerin sırasını tersine çevirir:

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();   // ["Mango","Apple","Orange","Banana"]
```

**Array Math.max()**

Math.max() yöntemi bir dizideki en yüksek sayıyı bulmak için kullanılır:

```
const numbers = [10, 5, 20, 15, 30, 25];
const enBuyukSayi = Math.max.apply(null, numbers);  // 30
```

veya spread (bu konuya daha sonra değineceğiz) operatörü olan üç nokta ... kullanabiliriz:

```
const numbers = [10, 5, 20, 15, 30, 25];
const enBuyukSayi = Math.max(...numbers);   // 30
```

**Array Math.min()**

Math.min() yöntemi bir dizideki en küçük sayıyı bulmak için kullanılır:

```
const numbers = [10, 5, 20, 15, 30, 25];
const enKucukSayi = Math.min.apply(null, numbers);  // 5
```

veya spread (bu konuya daha sonra değineceğiz) operatörü olan üç nokta ... kullanabiliriz:

```
const numbers = [10, 5, 20, 15, 30, 25];
const enKucukSayi = Math.min(...numbers);   // 5
```

**Array map()**

map() yöntemi, JavaScript dizilerindeki her öğeyi döngüye alarak her öğe üzerinde belirli bir işlem yapmanızı sağlar ve bu işlemin sonucunu yeni bir dizi olarak döndürür. 

map() yöntemi, her bir öğeyi dönüştürmek ve yeni bir dizi oluşturmak için kullanışlıdır.

```
const yeniDizi = eskiDizi.map(function(value, index, array) {
  // Her bir öğe üzerinde yapılacak işlem ve dönüşüm
  // Sonuç, yeniDizi'ye eklenir
  return yeniDeğer;
});
```

- **value:** Dizi içindeki mevcut öğe (değer).
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** map() yöntemi çağrıldığı dizinin kendisi.

Örnek
```
const sayilar = [1, 2, 3, 4, 5];

const kareler = sayilar.map(function(sayi) {
  return sayi * sayi;
});

console.log(kareler); // [1, 4, 9, 16, 25]
```

Bu örnekte, sayilar dizisindeki her sayıyı karesini alarak yeni bir dizi olan kareler dizisini oluşturduk.

map() yöntemi, mevcut diziyi değiştirmez, ancak her öğe üzerinde belirli bir işlem yaparak yeni bir dizi oluşturur. Bu nedenle orijinal dizi bozulmaz ve yeni bir dizi elde edersiniz.

**Array flatMap()**

flatMap() yöntemi, JavaScript dizilerindeki her öğe üzerinde belirli bir işlem yaparak yeni bir dizi oluşturmanıza olanak tanır. 

flatMap() yöntemi, her öğe için bir işlem yapmanın yanı sıra, bu işlem sonucunda oluşan alt dizileri birleştirerek tek bir düzleştirilmiş (flattened) dizi döndürür.

flatMap() yönteminin temel kullanımı şu şekildedir:

```
const yeniDizi = eskiDizi.flatMap(function(value, index, array) {
  // Her bir öğe üzerinde yapılacak işlem ve alt dizi oluşturma
  // Sonuç, düzleştirilmiş yeniDizi'ye eklenir
  return yeniDizi;
});
```

- **value:** Dizi içindeki mevcut öğe (değer).
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** flatMap() yöntemi çağrıldığı dizinin kendisi.

Örnek
```
const dizi = [1, 2, 3];

const carpilar = dizi.flatMap(function(sayi) {
  return [sayi * 2, sayi * 3];
});

console.log(carpilar); // [2, 3, 4, 6, 6, 9]
```

Bu örnekte, dizi içindeki her sayının iki katı ve üç katı olan yeni bir dizi olan çarpılar dizisini oluşturduk. flatMap() yöntemi, alt dizileri otomatik olarak düzleştirir ve sonuç olarak tek bir düzleştirilmiş dizi döndürür.

flatMap() yöntemi, özellikle bir diziyi dönüştürdüğünüzde ve alt dizileri düzleştirmeniz gerektiğinde kullanışlıdır.

**map() ve flatMap() arasındaki ufak fark**

map() işlem sonucu alt dizileri korurken flatMap() işlem sonucu alt dizileri otomatik olarak düzleştirir. Kısaca örnekle açıklayalım:

map() kullanımı:
```
const dizi = [1, 2, 3];

const sonuc = dizi.map(function(sayi) {
  return [sayi * 2, sayi * 3];
});

console.log(sonuc); // [[2, 3], [4, 6], [6, 9]]
```

flatmap() kullanımı:
```
const dizi = [1, 2, 3];

const sonuc = dizi.flatMap(function(sayi) {
  return [sayi * 2, sayi * 3];
});

console.log(sonuc); // [2, 3, 4, 6, 6, 9]
```

Örneklerde gördüğümüz gibi map() işlem sonuçlarını ayrı dizi içinde saklar ve sonucu oluşturan alt dizileri düzleştirmezken **[[2, 3], [4, 6], [6, 9]]**, flatMap() işlem sonuçlarını otomatik olarak düzleştirir ve sonucu oluşturan alt dizileri tek bir düzleştirilmiş dizi içinde birleştirir **[2, 3, 4, 6, 6, 9]**.

**Array filter()**

filter() yöntemi, JavaScript dizilerini filtrelemek için kullanılan bir dizi yöntemidir. Bu yöntem, belirli bir koşulu karşılayan dizi öğelerini içeren yeni bir dizi oluşturur. filter() yöntemi, veri filtrelemesi veya koşullara uygun öğeleri seçme işlemlerinde oldukça kullanışlıdır.

filter() yönteminin temel kullanımı şu şekildedir:

```
const yeniDizi = eskiDizi.filter(function(value, index, array) {
  // Her bir öğeyi değerlendiren bir koşul ifadesi
  // Koşulu karşılayan öğeler yeniDizi'ye eklenir
  return koşul;
});
```

- **value:** Dizi içindeki mevcut öğe (değer).
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** filter() yöntemi çağrıldığı dizinin kendisi.
- **koşul:** true veya false değeri döndüren bir koşul ifadesi. true döndüren öğeler yeni diziye eklenir.

Örnek
```
const sayilar = [1, 2, 3, 4, 5, 6];

const tekSayilar = sayilar.filter(function(sayi) {
  return sayi % 2 === 1; // Sayılar arasından tek sayıları filtrele
});

console.log(tekSayilar); // [1, 3, 5]
```

Bu örnekte, filter() yöntemi kullanılarak sayilar dizisindeki her öğe üzerinde bir koşul kontrol edilir. Koşulu karşılayan öğeler (yani, tek sayılar) yeni tekSayilar dizisine eklenir.

filter() yöntemi, veri filtreleme, öğeleri seçme ve belirli bir koşulu karşılayan öğeleri ayıklama gibi işlemlerde yaygın olarak kullanılır.

**Array reduce()**

reduce() yöntemi, JavaScript dizilerindeki öğeleri bir araya getirerek veya birleştirerek sonuç üreten bir dizi yöntemidir. reduce() yöntemi, dizideki tüm öğeleri birleştirir ve sonuç olarak tek bir değer veya nesne döndürür. Bu yöntem, özellikle toplama, çarpma, birleştirme veya dizideki öğeleri kullanarak özel bir işlem yapma gibi durumlar için kullanışlıdır.

reduce() yöntemi, dizi öğelerini soldan sağa doğru (sol ile başlayarak sağa doğru) işler.

Başlangıçtan itibaren dizinin ilk öğesinden başlar ve dizinin sonuna doğru ilerler.

Bu nedenle işlem sırasında önce dizinin solundaki öğeler işlenir, ardından sağdaki öğeler işlenir.

reduce() yönteminin temel kullanımı şu şekildedir:

```
const sonuc = dizi.reduce(function(accumulator, currentElement, currentIndex, array) {
  // Birleştirme veya işlem yapılacak kod
  return yeniDeger;
}, ilkDeger);
```

- **accumulator:** Bir önceki adımdan gelen birikmiş değer.
- **currentElement:** Mevcut öğe (değer).
- **currentIndex:** Mevcut öğenin dizideki indeksi.
- **array:** reduce() yöntemi çağrıldığı dizinin kendisi.
- **ilkDeger:** İlk adımda birikmiş değer olarak kullanılan başlangıç değeri.

Örnek
```
const sayilar = [1, 2, 3, 4, 5];

const toplam = sayilar.reduce(function(accumulator, currentElement) {
  return accumulator + currentElement; // Toplama işlemi
}, 0);

console.log(toplam); // 15
```

Bu örnekte, reduce() yöntemi kullanılarak sayilar dizisindeki her öğe toplanır ve sonuç olarak tüm öğelerin toplamı olan toplam elde edilir.

reduce() yöntemi, dizideki öğeleri bir araya getirme veya özel bir işlem yapma gereksinimlerine bağlı olarak çeşitli senaryolarda kullanılabilir. Başlangıç değeri (ilkDeger) belirli bir işlem için kullanılır ve bu işlem öğeleri birikmiş değerle birleştirir veya işler.

**Array reduceRight()**

reduceRight() ve reduce() yöntemleri benzerdir. aralarındaki tek fark ise; reduce() yöntemi, dizi öğelerini soldan sağa doğru (sol ile başlayarak sağa doğru) işler. reduceRight() yöntemi ise, dizi öğelerini sağdan sola doğru (sağ ile başlayarak sola doğru) işler. Mantık temelde aynıdır.

Örnek için reduce() yönteminde bulunan örnekleri reduceRight() olarak değiştirmeniz yeterlidir.

**Array every()**

Every() yöntemi, tüm dizi değerlerinin bir koşulu karşılayıp karşılamadığını kontrol eder. every() yöntemi, tüm dizi öğeleri belirtilen koşulu karşılıyorsa true değerini döndürür; aksi takdirde false değerini döndürür.

every() yönteminin temel kullanımı şu şekildedir:

```
const sonuc = dizi.every(function(value, index, array) {
  // Her bir öğeyi değerlendiren bir koşul ifadesi
  // Tüm öğeler koşulu karşılıyorsa true, aksi takdirde false döner
  return koşul;
});
```

- **value:** Dizi içindeki mevcut öğe (değer).
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** every() yöntemi çağrıldığı dizinin kendisi.
- **koşul:** true veya false değeri döndüren bir koşul ifadesi. Tüm öğeler bu koşulu karşılarsa every() true döndürür.

Örnek

```
const sayilar = [2, 4, 6, 8, 10];

const hepsiCift = sayilar.every(function(sayi) {
  return sayi % 2 === 0; // Tüm öğeler çift sayı mı?
});

console.log(hepsiCift); // true
```

Bu örnekte, every() yöntemi kullanılarak sayilar dizisindeki her öğe üzerinde bir koşul kontrol edilir. Koşul, her öğenin çift sayı olup olmadığını kontrol eder. Tüm öğeler koşulu karşıladığı için sonuç true olarak döner.

every() yöntemi, dizideki tüm öğelerin belirli bir koşulu karşılayıp karşılamadığını kontrol etmek için kullanışlıdır. Eğer tüm öğeler koşulu karşılıyorsa true, en az bir öğe bile koşulu karşılamıyorsa false döndürür.

**Array some()**

some() yöntemi, bir dizi içindeki öğelerin en az birinin belirli bir koşulu karşılayıp karşılamadığını kontrol etmek için kullanılan bir dizi yöntemidir. some() yöntemi, en az bir öğe belirtilen koşulu karşılıyorsa true değerini döndürür; aksi takdirde false değerini döndürür.

some() yönteminin temel kullanımı şu şekildedir:

```
const sonuc = dizi.some(function(value, index, array) {
  // Her bir öğeyi değerlendiren bir koşul ifadesi
  // En az bir öğe koşulu karşılıyorsa true, aksi takdirde false döner
  return koşul;
});
```

- **value:** Dizi içindeki mevcut öğe (değer).
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** some() yöntemi çağrıldığı dizinin kendisi.
- **koşul:** true veya false değeri döndüren bir koşul ifadesi. En az bir öğe bu koşulu karşılarsa some() true döndürür.

Örnek

```
const sayilar = [1, 2, 3, 4, 5];

const enAzBirKucuk = sayilar.some(function(sayi) {
  return sayi < 3; // En az bir öğe 3'ten küçük mü?
});

console.log(enAzBirKucuk); // true
```

Bu örnekte, some() yöntemi kullanılarak sayilar dizisindeki her öğe üzerinde bir koşul kontrol edilir. Koşul, en az bir öğenin 3'ten küçük olup olmadığını kontrol eder. Bir öğe bu koşulu karşıladığı için sonuç true olarak döner.

some() yöntemi, dizideki öğelerin en az birinin belirli bir koşulu karşılayıp karşılamadığını kontrol etmek için kullanılır. Eğer en az bir öğe koşulu karşılıyorsa true, hiçbir öğe koşulu karşılamıyorsa false döndürür.

**Array indexOf()**

indexOf() yöntemi, bir dizi içinde belirli bir öğenin ilk bulunduğu indeksi (konumu) döndüren bir dizi yöntemidir. Eğer öğe dizide bulunmuyorsa, -1 değeri döner.

indexOf() yöntemi, aşağıdaki şekilde kullanılır:

```
const indeks = dizi.indexOf(aramaÖğesi, başlangıçIndeksi);
```

- **aramaÖğesi:** Dizide aranacak öğe (değer).
- **başlangıçIndeksi (isteğe bağlı):** Arama işleminin başlayacağı indeks. Bu parametre belirtilmezse, arama dizinin başından başlar.

Örnek

```
const meyveler = ["Elma", "Muz", "Çilek", "Kivi"];

const indeks = meyveler.indexOf("Çilek");
console.log(indeks); // 2 (Çilek, dizinin 2. indeksinde bulunuyor)

const olmayanIndeks = meyveler.indexOf("Portakal");
console.log(olmayanIndeks); // -1 (Portakal, dizide bulunmuyor)
```

Bu örnekte, indexOf() yöntemi kullanılarak "Çilek" adlı meyvenin dizideki indeksi bulunur. Eğer dizide olmayan bir öğe aranıyorsa, sonuç olarak -1 değeri döner.

indexOf() yöntemi, belirli bir öğenin bir dizide bulunup bulunmadığını kontrol etmek ve bu öğenin ilk bulunduğu konumu öğrenmek için kullanışlıdır.

**Array lastIndexOf()**

lastIndexOf() yöntemi, bir dizide belirli bir öğenin son bulunduğu indeksi (konumu) döndüren bir dizi yöntemidir. Eğer öğe dizide bulunmuyorsa, -1 değeri döner.

lastIndexOf() yöntemi, aşağıdaki şekilde kullanılır:

```
const indeks = dizi.lastIndexOf(aramaÖğesi, başlangıçIndeksi);
```

- **aramaÖğesi:** Dizide aranacak öğe (değer).
- **başlangıçIndeksi (isteğe bağlı):** Arama işleminin başlayacağı indeks. Bu parametre belirtilmezse, arama dizinin sonundan başlar.

Örnek

```
const meyveler = ["Elma", "Muz", "Çilek", "Muz"];

const sonIndeks = meyveler.lastIndexOf("Muz");
console.log(sonIndeks); // 3 (Muz, dizinin son bulunduğu 3. indekstir)

const olmayanIndeks = meyveler.lastIndexOf("Portakal");
console.log(olmayanIndeks); // -1 (Portakal, dizide bulunmuyor)
```

Bu örnekte, lastIndexOf() yöntemi kullanılarak "Muz" adlı meyvenin dizideki son bulunduğu indeks bulunur. Eğer dizide olmayan bir öğe aranıyorsa, sonuç olarak -1 değeri döner.

**Array find()**

find() yöntemi, bir dizide belirli bir koşulu karşılayan ilk öğeyi bulmak için kullanılan bir dizi yöntemidir. find() yöntemi, belirtilen koşulu karşılayan öğeyi bulur ve bulduğu ilk öğeyi döndürür. Eğer belirtilen koşulu karşılayan öğe bulunamazsa undefined değeri döner.

find() yöntemi, aşağıdaki şekilde kullanılır:

```
const sonuc = dizi.find(function(value, index, array) {
  // Her bir öğeyi değerlendiren bir koşul ifadesi
  // Koşulu karşılayan ilk öğeyi döndürür, bulunamazsa undefined döner
  return koşul;
});
```

- **value:** Dizi içindeki mevcut öğe (değer).
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** find() yöntemi çağrıldığı dizinin kendisi.
- **koşul:** true veya false değeri döndüren bir koşul ifadesi. Koşulu karşılayan ilk öğe döndürülür.

Örnek

```
const kisiler = [
  { ad: "Ahmet", yas: 30 },
  { ad: "Ayşe", yas: 25 },
  { ad: "Mehmet", yas: 35 },
  { ad: "Elif", yas: 28 }
];

const arananKisi = kisiler.find(function(kisi) {
  return kisi.yas === 25; // Yaşı 25 olan ilk kişiyi bul
});

console.log(arananKisi); // { ad: "Ayşe", yas: 25 }
```

Bu örnekte, find() yöntemi kullanılarak yaşları 25 olan ilk kişi bulunur ve bu kişi döndürülür. Eğer belirtilen koşulu karşılayan bir öğe bulunamazsa sonuç olarak undefined döner.

find() yöntemi, bir dizideki öğeler arasında belirli bir koşulu arayarak ve ilk uyan öğeyi döndürerek kullanışlıdır.

**Array findIndex()**

findIndex() yöntemi, bir dizide belirli bir koşulu karşılayan ilk öğenin indeksini (konumu) bulmak için kullanılan bir dizi yöntemidir. findIndex() yöntemi, belirtilen koşulu karşılayan öğenin indeksini bulur ve bulduğu ilk öğenin indeksini döndürür. Eğer belirtilen koşulu karşılayan öğe bulunamazsa -1 değeri döner.

Örnek

```
const kisiler = [
  { ad: "Ahmet", yas: 30 },
  { ad: "Ayşe", yas: 25 },
  { ad: "Mehmet", yas: 35 },
  { ad: "Elif", yas: 28 }
];

const arananKisiIndeks = kisiler.findIndex(function(kisi) {
  return kisi.yas === 25; // Yaşı 25 olan ilk kişinin indeksi
});

console.log(arananKisiIndeks); // 1 (Yaşı 25 olan ilk kişi 1. indekste)
```

Bu örnekte, findIndex() yöntemi kullanılarak yaşları 25 olan ilk kişinin indeksi bulunur ve bu indeks döndürülür. Eğer belirtilen koşulu karşılayan bir öğe bulunamazsa sonuç olarak -1 döner.

findIndex() yöntemi, bir dizideki öğeler arasında belirli bir koşulu arayarak ve ilk uyan öğenin indeksini döndürerek kullanışlıdır.

**Array.from()**

Array.from() yöntemi, farklı türlerdeki verileri bir diziye dönüştürmek için kullanılan bir dizi yöntemidir. Bu yöntem, bir dizi veya dizi benzeri bir nesne oluşturmak için kullanışlıdır. Özellikle, bir diziye dönüştürülmesi gereken birçok farklı veri türü bulunduğunda veya bir dizi benzeri bir nesnenin üzerinde dizi işlemleri yapmak istendiğinde kullanılır.

Array.from() yöntemi aşağıdaki şekilde kullanılır:

```
const dizi = Array.from(iterable, dönüşümFonksiyonu);
```

- **iterable:** Dönüştürülmek istenen nesne veya veri. Bu, bir dizi, bir dizi benzeri nesne veya başka bir yineleyici (örneğin, bir dize) olabilir.
- **dönüşümFonksiyonu (isteğe bağlı):** Her öğeyi dönüştürmek için kullanılacak bir işlev. Bu işlev her öğe için çağrılır ve dönüştürülmüş değerlerle yeni bir dizi oluşturulur.

Örnek

```
// Bir dizeyi diziye dönüştürme
const dize = "Merhaba";
const karakterler = Array.from(dize);

console.log(karakterler); // ["M", "e", "r", "h", "a", "b", "a"]

// Bir set'i diziye dönüştürme
const set = new Set([1, 2, 3, 4, 5]);
const diziSet = Array.from(set);

console.log(diziSet); // [1, 2, 3, 4, 5]

// Bir harita (Map) nesnesini diziye dönüştürme
const harita = new Map([
  ["anahtar1", "değer1"],
  ["anahtar2", "değer2"]
]);
const diziHarita = Array.from(harita);

console.log(diziHarita); // [["anahtar1", "değer1"], ["anahtar2", "değer2"]]
```

Array.from() yöntemi, farklı türlerdeki verileri diziye dönüştürmek için çok yönlü bir araçtır ve veri dönüşümü gerektiğinde kullanışlıdır.

**Array Keys()**

Array.keys() yöntemi, bir dizinin indekslerini içeren bir yineleyici nesnesi oluşturan bir dizi yöntemidir. Bu yöntem, bir dizinin indekslerini dolaşmak için kullanılır ve her indeksi içeren bir yineleyici nesnesi döndürür.

Array.keys() yöntemi aşağıdaki şekilde kullanılır:

```
const indeksler = dizi.keys();
```

- **indeksler:** Dizi indekslerini içeren bir yineleyici nesnesi.

Örnek

```
const meyveler = ["Elma", "Muz", "Çilek"];

const indeksler = meyveler.keys();

for (const indeks of indeksler) {
  console.log(indeks); // Dizi indekslerini yazdırır: 0, 1, 2
}
```

Bu örnekte, keys() yöntemi kullanılarak meyveler dizisinin indekslerini içeren bir yineleyici nesnesi oluşturulur. Daha sonra bu yineleyici nesnesi kullanılarak dizinin indeksleri dolaşılır ve her bir indeks ekrana yazdırılır.

Array.keys() yöntemi, dizinin indekslerini dolaşmak veya özel işlemler yapmak için kullanışlıdır.

**Array entries()**

Array.entries() yöntemi, bir dizinin her öğesini ve karşılık gelen indeksini içeren bir yineleyici nesnesi oluşturan bir dizi yöntemidir. Bu yöntem, hem öğeleri hem de indeksleri kullanarak bir diziyi dolaşmak için kullanılır ve her öğeyi ve karşılık gelen indeksi içeren bir yineleyici nesnesi döndürür.

Array.entries() yöntemi aşağıdaki şekilde kullanılır:

```
const girdiler = dizi.entries();
```

- **girdiler:** Dizi öğelerini ve indekslerini içeren bir yineleyici nesnesi.

Örnek

```
const meyveler = ["Elma", "Muz", "Çilek"];

const girdiler = meyveler.entries();

for (const girdi of girdiler) {
  console.log(girdi); // Dizi öğesini ve indeksini yazdırır: [0, "Elma"], [1, "Muz"], [2, "Çilek"]
}
```

Bu örnekte, entries() yöntemi kullanılarak meyveler dizisinin her öğesini ve karşılık gelen indeksini içeren bir yineleyici nesnesi oluşturulur. Daha sonra bu yineleyici nesnesi kullanılarak dizinin her öğesi ve karşılık gelen indeksi dolaşılır ve her bir girdi ekrana yazdırılır.

Array.entries() yöntemi, bir dizinin öğelerini ve indekslerini birlikte kullanarak işlem yapmak veya dizi öğelerini ve indekslerini çift olarak kullanmak için kullanışlıdır.

**Array.includes()**

Array.includes() yöntemi, bir dizinin belirli bir öğeyi içerip içermediğini kontrol etmek için kullanılan bir dizi yöntemidir. Bu yöntem, bir öğenin dizide bulunup bulunmadığını sorgular ve sonuç olarak true veya false değeri döndürür.

Array.includes() yöntemi aşağıdaki şekilde kullanılır:

```
const sonuc = dizi.includes(aramaÖğesi, başlangıçIndeksi);
```

- **aramaÖğesi:** Dizide aranacak öğe (değer).
- **başlangıçIndeksi (isteğe bağlı):** Aramanın başlayacağı indeks. Bu parametre belirtilmezse, arama dizinin başından başlar.

Örnek

```
const meyveler = ["Elma", "Muz", "Çilek"];

const sonuc = meyveler.includes("Muz");

console.log(sonuc); // true (Muz dizide bulunuyor)
```

Bu örnekte, includes() yöntemi kullanılarak "Muz" adlı meyvenin dizide olup olmadığı kontrol edilir. "Muz" dizide bulunduğu için sonuç olarak true değeri döner.

Array.includes() yöntemi, bir dizinin belirli bir öğeyi içerip içermediğini hızlı ve basit bir şekilde kontrol etmek için kullanılır. Eğer öğe dizide bulunuyorsa true, bulunmuyorsa false döner.

**Array Spread (...)**

Array spread operatörü (...), bir diziyi veya başka bir yinelenebilir nesneyi açarak (döşeyerek) içindeki öğeleri yeni bir diziye veya başka bir yinelenebilir nesneye kopyalamak için kullanılan bir JavaScript özelliğidir. Bu operatör, bir dizinin veya yinelenebilir bir nesnenin öğelerini ayrı ayrı ele alarak birleştirmenizi veya yeni bir nesneye kopyalamanızı sağlar.

Örnek

```
// Dizi elemanlarını başka bir diziye kopyalama
const dizi1 = [1, 2, 3];
const dizi2 = [...dizi1];

console.log(dizi2); // [1, 2, 3]

// Birden fazla diziyi birleştirme
const dizi3 = [4, 5];
const birlesikDizi = [...dizi1, ...dizi3];

console.log(birlesikDizi); // [1, 2, 3, 4, 5]

// Diziye yeni öğeler ekleme
const dizi4 = [6, 7];
const genisletilmisDizi = [...dizi1, ...dizi4];

console.log(genisletilmisDizi); // [1, 2, 3, 6, 7]
```

Spread operatörü, bir dizinin öğelerini başka bir diziye veya yinelenebilir bir nesneye eklemek veya birleştirmek için oldukça kullanışlıdır. Aynı zamanda rest parametreleriyle birlikte kullanarak belirli bir öğeyi veya öğeleri bir diziden çıkarabilir veya yeniden düzenleyebilirsiniz.

**Array forEach()**

forEach() yöntemi, JavaScript dizilerindeki her bir öğeyi üzerinde işlem yapmak için kullanılan bir dizi döngü yöntemidir. Bu yöntem, dizi içindeki her bir öğeyi alır ve belirttiğiniz bir işlevi bu öğe üzerinde çağırır. forEach() yöntemi, dizi içindeki öğeleri sırayla ziyaret etmek için kullanışlıdır ve her öğe için belirli bir işlem yapmanızı sağlar.

forEach() yönteminin temel kullanımı şu şekildedir:

```
dizi.forEach(function(value, index, array) {
  // Her bir öğe üzerinde yapılacak işlem
});
```

- **value:** Dizi içindeki mevcut öğeler.
- **index:** Mevcut öğenin dizideki indeksi.
- **array:** forEach() yöntemi çağrıldığı dizinin kendisi.

Örnek
```
const meyveler = ["Elma", "Muz", "Portakal", "Üzüm"];

meyveler.forEach(function(meyve, indeks) {
  console.log(indeks, meyve);
});
```

Bu kod, meyveler dizisindeki her meyveyi alır ve indeksi ile birlikte ekrana yazar:

```
0 "Elma"
1 "Muz"
2 "Portakal"
3 "Üzüm"
```