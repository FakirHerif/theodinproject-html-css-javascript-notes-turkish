# Giriş

Bu bölümde the odin project notlarından bağımsız, şahsi olarak oluşturduğum notlar yer almaktadır.

Bir önceki ek notlar kısmında değişken türlerinden kısaca bahsetmiştim, burada da tekrar kısa bir açıklamayla notlarımıza giriş yapalım.

# Veri Tipleri

- **String (Dize):** Metin veya metin verilerini temsil eder. Örneğin: "Merhaba, dünya!"

- **Number (Sayı):** Sayısal değerleri temsil eder. Hem tam sayılar (örneğin, 42) hem de ondalık sayılar (örneğin, 3.14) dahildir.

- **Boolean (Mantıksal):** Sadece iki değere sahiptir, true (doğru) veya false (yanlış). Koşullu ifadelerde sıkça kullanılır.

- **Array (Dizi):** Birden fazla değeri içeren bir veri yapısıdır. Örneğin: [1, 2, 3, 4]

- **Object (Nesne):** Anahtar-değer çiftlerini içeren bir veri yapısıdır. Karmaşık verileri temsil etmek için kullanılır.

- **Undefined (Tanımsız):** Bir değişkenin değeri atanmamışsa veya bir işlev bir değer döndürmezse, bu değer atanır.

- **Null (Boş):** Bir değişkenin bilinçli olarak boş olduğunu gösterir.

- **Function (Fonksiyon):** Bir işlevi temsil eder. JavaScript'te fonksiyonlar birinci sınıf nesnelerdir ve değişkenlerde saklanabilir veya başka bir işlevin bir parçası olarak kullanılabilirler.

- **Symbol (Sembol):** Benzersiz ve değiştirilemez değerleri temsil eder. Genellikle nesne özellikleri olarak kullanılır.

Örnek
```
// Yeni bir benzersiz symbol oluşturun
const benzersizSymbol = Symbol('BenimBenzersizSymbol');

// İki farklı benzersiz symbol
const digerBenzersizSymbol = Symbol('BenimBenzersizSymbol');

console.log(benzersizSymbol === digerBenzersizSymbol); // false, çünkü her biri benzersizdir

// Bir nesne üzerinde symbol kullanımı
const kullanici = {
    [benzersizSymbol]: 'Benzersiz kullanıcı kimliği'
};

console.log(kullanici[benzersizSymbol]); // 'Benzersiz kullanıcı kimliği'
```

- **BigInt (Büyük Tamsayı):** Çok büyük tam sayıları temsil eder. Modern JavaScript sürümlerinde kullanılabilir.

Örnek
```
const buyukSayi = 1234567890123456789012345678901234567890n; // Sonunda "n" ekleyerek BigInt tanımlayın

const digerBuyukSayi = BigInt("9007199254740991"); // String olarak da BigInt oluşturabilirsiniz

console.log(buyukSayi + digerBuyukSayi); // Sonucu doğru bir şekilde hesaplar
```

# Tek Tırnak, Çift Tırnak ve Geri Tırnak İşaretleri 

JavaScript'te kullanılan üç farklı tırnak işareti vardır: tek tırnak ('), çift tırnak (") ve geri tırnak (` veya "backtick" olarak da adlandırılır). Bu tırnak işaretleri metin dizilerini (string) tanımlamak için kullanılır ve bazen kullanım bağlamına göre tercih edilen tırnak işareti türü farklılık gösterebilir. 

Bir dizenin başı ve sonu için aynı karakteri kullanmalısınız, aksi takdirde bir hata alırsınız. (Yani dizeyi tek tırnakla açtıysanız tek tırnakla bitirmelisiniz veya çift tırnakla açtıysanız çift tırnakla bitirmelisiniz.)

İşte bu üç türün kullanımına dair açıklamalar:

- **Tek Tırnak (') İşareti:** Tek tırnak işareti, string'leri tanımlamak için kullanılır.

Örnek
```
const isim = 'Ahmet';
```

- **Çift Tırnak (") İşareti:** Çift tırnak işareti de string'leri tanımlamak için kullanılır. Tek tırnak işareti ile aynı işlevi görür ve tercih bağlamına göre kullanılır.

Örnek
```
const isim = "Mehmet";
```

- **Geri Tırnak (`) İşareti:** Geri tırnak işareti, özellikle şablon dizeleri (template strings) için kullanılır. Bu tırnak işareti içinde değişkenlerin veya ifadelerin yerleştirilmesini sağlar. Aynı zamanda çok satırlı dizeleri tek bir ifadede daha rahat bir şekilde tanımlamak için kullanışlıdır. 

Örnek
```
const ad = 'Veli';
const yas = 30;

const bilgi = `Merhaba, Benim adım ${ad} ve ben ${yas} yaşındayım.`;
```

# ${} İfadesi

JavaScript içinde bir şablon dizesi (template string) içinde kullanılan özel bir sözdizimidir. Bu sözdizimi, dize içine değişkenlerin veya ifadelerin yerleştirilmesini sağlar ve daha okunaklı ve esnek bir şekilde metin oluşturmanıza yardımcı olur.

- ${} ifadesi bir şablon dizesi içinde kullanılır ve şablon dizesini tanımlayan tırnak işaretlerinin arasına yerleştirilir. Özel bir işarettir ve JavaScript bu ifadeyi görünce içindeki ifadeyi değerlendirir.

- ${} içine yerleştirilen herhangi bir JavaScript ifadesi (örneğin değişkenler, fonksiyon çağrıları, operasyonlar) olabilir. JavaScript bu ifadeyi değerlendirir ve sonucunu şablon dizesine yerleştirir.

- ${} ifadesi, özellikle metinlerle çalışırken değişkenleri veya ifadeleri daha okunaklı bir şekilde eklemek için kullanışlıdır ve modern JavaScript geliştirme pratiğinin önemli bir parçasıdır.

- Birden fazla değişkeni de birleştirmek için ${}  kullanabilirsiniz.

# "+" kullanarak stringleri birleştirme

Bunu daha önceki notlarda öğrenmiştik. Hızlıca üzerinden geçmek gerekirse, "+" operatörü, sayıları matematiksel olarak toplamanın yanında metin dizilerini birleştirmek veya iki metin dizesini bir araya getirmek için kullanılabilir. Bu işlem, metinleri yan yana ekler. 

Örnek
```
const isim = "John";
const soyisim = "Doe";
const tamIsim = isim + " " + soyisim; // tamIsim değişkeni "John Doe" olarak oluşur
```

**NOT:** Genellikle modern JavaScript'te, metin birleştirmek için daha okunaklı ve güçlü bir yöntem olan şablon dizileri (${} ifadesi) tercih edilmektedir.

Örnek
```
const ders = "Matematik";
const sinifSayi = 100;
const dersiGecen = 70;
const sonuc = `${ders} dersinden ${sinifSayi} kişiden ${dersiGecen} kişi geçti. Yani; %${
  (dersiGecen / sinifSayi) * 100
} oranındadır.`;
console.log(sonuc);     // "Matematik dersinden 100 kişiden 70 kişi geçti. Yani; %70 oranındadır."
```

# Çok Satırlı Dizeler (Multiline Strings)

Bir programlama dilinde metinleri birden çok satırda yazmanıza izin veren bir yapıdır. Bu, özellikle uzun metinleri veya belirli metin biçimlerini daha okunaklı bir şekilde yazmak için kullanışlıdır. JavaScript ve birçok diğer programlama dili çok satırlı dizeleri destekler.

JavaScript'de çok satırlı dizeleri oluşturmak için tek tırnak, çift tırnak ve backtick kullanabilirsiniz. Ayrıca **\n** ile çok satırlı dize oluşturabilirsiniz.

Örnek
```
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);
```

# Stringlere Tırnak İşaretlerini Dahil Etmek

Dizelerin başlangıcını ve bitişini belirtmek için tırnak işaretleri kullandığımıza göre, dizelere gerçek tırnak işaretlerini nasıl dahil edebiliriz? Yaygın seçeneklerden biri, dizeyi bildirmek için diğer karakterlerden birini kullanmaktır.

Örnek
```
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
```

Stringler için kullandığımız tırnak işaretini metin içinde de kullanmamız hata vermeye neden olur.

Örnek
```
const badQuotes = "She said "I think so!"";     // Bu doğru bir kullanım değildir ve hata verir
```

Ancak yine de illa ben kullanağım, kullanmak istiyorum derseniz, ters eğik çizgi "\" kullanarak bunu yapabilirsiniz.

Örnek
```
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
```

# String Method'ları

JavaScript'de çok sayıda metin işleme (string manipulation) işlevi sağlayan string metodları bulunmaktadır. Aşağıda yazılan method'lar bir kısım örneklerdir, başka method'larda bulunmaktadır.

Bu konuya girmeden önce bilmemiz gereken en önemli noktalardan bir tanesi; JavaScript dizinleri (index) 0'dan başlar. Yani, bir dizenin ilk karakteri 0. dizinde yer alır, ikinci karakter 1. dizinde, üçüncü karakter 2. dizinde ve böyle devam eder. 

Örnek
```
const metin = "Merhaba";
const ilkKarakter = metin[0]; // "M" (0. dizin)
const ikinciKarakter = metin[1]; // "e" (1. dizin)
```

Örnekte gördüğümüz gibi, JavaScript dizinlerini kullanırken ilk karakterin 0, ikinci karakterin 1, üçüncü karakterin 2 olduğunu unutmayın.

- **indexOf()** bir dizede belirli bir alt dizenin veya karakterin ilk bulunduğu konumu döndürür. Eğer belirtilen alt dize veya karakter bulunamazsa -1 döner. İlk bulunan konumu döndürdüğü için, dizelerin başından itibaren aramaya başlar. Büyük ve küçük harfe duyarlıdır.

Örnek
```
const metin = "Merhaba, dünya!";
const konum = metin.indexOf("dünya"); // 9
```

- **lastIndexOf()** bir dizede belirli bir alt dizenin veya karakterin son bulunduğu konumu döndürür. Eğer belirtilen alt dize veya karakter bulunamazsa -1 döner. En son bulunan konumu döndürdüğü için, dizelerin sonundan başlayarak geriye doğru aramaya başlar. Büyük ve küçük harfe duyarlıdır.

Örnek
```
const metin = "Merhaba dünya!";
const konum = metin.lastIndexOf("a"); // 12
```

- **charAt()** Belirtilen dizin (index) konumundaki karakteri döndürür.

Örnek
```
const metin = "Merhaba, dünya!";
const karakter = metin.charAt(0); // "M"
```

- **length** Bir metin dizisinin uzunluğunu (karakter sayısını) döndürür.

Örnek
```
const metin = "Merhaba";
const uzunluk = metin.length; // 7
```

- **slice()** başlangıç ve bitiş indekslerini belirterek bir dizeden alt dizeyi çıkarmanıza olanak tanır. Başlangıç indeksinden başlayarak (başlangıç indeksini dahil eder), belirttiğiniz bitiş indeksine kadar(belirttiğiniz bitiş indeksini dahil etmez) olan kısmı alır.

- İlk argüman olarak başlangıç indeksini alır ve ikinci argüman olarak bitiş indeksini alır.
- Başlangıç indeksi dahil edilirken, bitiş indeksi dahil edilmez.
- Negatif indeksleri destekler ve dizinin sonundan başlayarak indeksler.
- Bitiş indeksi belirtilmezse, dizgenin sonuna kadar kopyalar.

Örnek
```
const metin = "Merhaba, dünya!";
const altDize = metin.slice(0, 7);  // "Merhaba"
```

Eğer ikinci parametreyi yazmazsanız yöntem dizenin geri kalanını dilimler.

Örnek
```
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);           // "Banana, Kiwi"
```

Eğer verdiğiniz parametre negatifse dizenin sonundan başına doğru olan kısmı alır.

Örnek
```
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);         // "Banana, Kiwi"
```

Örnek
```
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);     // "Banana"
```

- **substring()** bir dizenin belirli bir bölümünü kopyalamak veya almak için kullanılır. substring() metodu, başlangıç ve bitiş indekslerini belirterek bir dizeden alt dizeyi çıkarmanıza olanak tanır.

- İlk argüman olarak başlangıç indeksini alır ve ikinci argüman olarak bitiş indeksini alır.
- Başlangıç indeksi dahil edilirken, bitiş indeksi dahil edilmez.
- Negatif indeksleri desteklemez. Negatif bir indeks kullanıldığında 0 olarak kabul edilir.
- Bitiş indeksi belirtilmezse, dizgenin sonuna kadar kopyalar.
- Başlangıç indeksi, bitiş indeksinden büyükse, otomatik olarak yer değiştirir.

Örnek
```
const metin = "Merhaba, dünya!";
const altDize = metin.substring(0, 7); // "Merhaba"
```

- **substr()**  bir dizenin belirli bir başlangıç noktasından itibaren belirli bir karakter sayısını kopyalamak veya almak için kullanılır. substr() metodu, iki argüman alır; başlangıç indeksi ve kopyalanacak karakter sayısı.

- İlk argüman olarak başlangıç indeksini alır ve ikinci argüman olarak kaç karakter kopyalanacağını belirler.
- Başlangıç indeksi dahil edilir.
- Negatif indeksleri destekler ve dizinin sonundan başlayarak indeksler.
- İkinci argüman belirtilmezse, başlangıç indeksinden itibaren tüm kalan karakterleri kopyalar.

Örnek
```
const metin = "Merhaba, dünya!";
const altDize = metin.substr(9, 6); // "dünya!"
```

- **replace()** Belirli bir metin ögesini başka bir metin ögesiyle değiştirir. Varsayılan olarak büyük/küçük harflere duyarlıdır. Ayrıca birden fazla aynı kelime mevcutsa ilk kullanımda sadece ilk sırada yer alanı değiştirir, tekrar kullandığınız zaman diğerini değiştirir.

Örnek
```
const metin = "Merhaba, dünya!";
const yeniMetin = metin.replace("dünya", "JavaScript"); // "Merhaba, JavaScript!"
```

replace() yönteminde büyük/küçük harf duyarlılığını kaldırmak istiyorsanız **/i** kullanabilirsiniz.

Örnek
```
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "DersNotu");
```

replace() yöntemini kullanırken değiştirilecek metnin yalnızca en önde yer alan metin olduğunu söylemiştik. Ancak tüm eşleştirmeleri aynı anda değiştirmek istiyorsanız **/g** kullanabilirsiniz.

Örnek
```
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "DersNotu");
```

- **replaceAll()** Bir dizede belirtilen bir alt dizeyi veya deseni bulur ve bu alt dizeleri veya deseni başka bir alt dizeyle değiştirir. Bu metot, tüm eşleşmeleri değiştirir, yani dizedeki tüm örnekleri değiştirir.

Örnek
```
const metin = "Merhaba, dünya! Merhaba, herkes!";
const yeniMetin = metin.replaceAll("Merhaba", "Selam"); // "Selam, dünya! Selam, herkes!"
```

- **toUpperCase()** Tüm harfleri büyük harfe çevirir.

Örnek
```
const metin = "Merhaba, dünya!";
const buyukHarfliMetin = metin.toUpperCase(); // "MERHABA, DÜNYA!"
```

- **toLowerCase()** Tüm harfleri küçük harfe çevirir.

Örnek
```
const metin = "Merhaba, DÜNYA!";
const kucukHarfliMetin = metin.toLowerCase(); // "merhaba, dünya!"
```

- **concat()** Bir veya daha fazla metin dizisini birleştirir ve yeni bir dize oluşturur.

Örnek
```
const metin1 = "Merhaba";
const metin2 = "dünya!";
const birlestirilmisMetin = metin1.concat(" ", metin2); // "Merhaba dünya!"
```

- **trim()** Bir metin dizisinin başındaki ve sonundaki boşlukları kaldırır.

Örnek
```
const metin = "   Merhaba, dünya!   ";
const temizMetin = metin.trim(); // "Merhaba, dünya!"
```

- **trimStart()** Bir metin dizisinin yalnızca başındaki boşlukları kaldırır.

Örnek
```
const metin = "   Bu bir örnek metindir.";
const temizMetin = metin.trimStart(); // Başındaki boşlukları kaldırır.
console.log(temizMetin); // "Bu bir örnek metindir."
```

- **trimEnd()** Bir metin dizisinin yalnızca sonundaki boşlukları kaldırır.

Örnek
```
const metin = "Bu bir örnek metindir.   ";
const temizMetin = metin.trimEnd(); // Sonundaki boşlukları kaldırır.
console.log(temizMetin); // "Bu bir örnek metindir."
```

- **padStart()** Bir dizeyi belirli bir uzunluğa doldururken, dizeyi sağa doğru doldurur. Eğer dize belirtilen uzunluktan daha kısa ise, başına belirtilen karakteri ekler.

Örnek
```
const dize = "5";
const padStartDize = dize.padStart(3, "0"); // padStart ile dizeyi başından 3 karakter uzunluğuna doldurur
console.log(padStartDize); // "005"
```

- **padEnd()** Bir dizeyi belirli bir uzunluğa doldururken, dizeyi sola doğru doldurur. Eğer dize belirtilen uzunluktan daha kısa ise, sonuna belirtilen karakteri ekler.

Örnek
```
const dize = "5";
const padEndDize = dize.padEnd(3, "0"); // padEnd ile dizeyi sonundan 3 karakter uzunluğuna doldurur
console.log(padEndDize); // "500"
```

**Not:** padStart() ve padEnd() yöntemleri string yöntemleridir, bir sayıyı doldurmak için önce sayıyı string'e çevirmeniz gerekmektedir.

Örnek
```
let sayi = 5;
let dize = sayi.toString();
let padded = dize.padStart(4,"0");
console.log(padded); // "0005"
```

- **charAt()** Belirtilen dizin (index) konumundaki karakteri döndürür.

Örnek
```
const metin = "Merhaba, dünya!";
const karakter = metin.charAt(0); // "M"
```

veya [] yöntemini de kullanabilirsiniz.

Örnek
```
const metin = "Merhaba, dünya!";
const karakter = metin[0]; // "M"
```

**ÖNEMLİ NOT:** JavaScript'te bir kez oluşturulmuş bir string (dize) değiştirilemez (immutable) bir veri türüdür. Yani, bir stringin içindeki karakterleri doğrudan değiştiremezsiniz.

Eğer değişkendeki karakterleri değiştirmek isterseniz, yeni bir string oluşturmalı ve istediğiniz değişiklikleri bu yeni string içinde yapmalısınız. 

Örnek
```
let text = "HELLO WORLD";
text = "A" + text.slice(1); // Yeni bir string oluşturup istediğimiz değişikliği yapıyoruz.
console.log(text); // "ALLO WORLD"
```

- **charCodeAt()** Belirtilen dizin (index) konumundaki karakterin unicode'unu döndürür.

Örnek
```
const metin = "Merhaba, dünya!";
const karakter = metin.charCodeAt(0); // "77"
```

- **fromCharCode()** Unicode karakter kodlarına dayalı olarak bir veya daha fazla karakteri içeren bir dize oluşturmak için kullanılır. Bu metot, bir dizi sayısal Unicode karakter kodunu alır ve bu kodları karşılık gelen karakterlere dönüştürerek bir dize döndürür.

Örnek
```
const karakterKodu = 65; // 65, büyük harf "A"nın Unicode karakter kodu
const karakter = String.fromCharCode(karakterKodu);
console.log(karakter); // "A"
```

- **split()** Belirtilen ayırıcı (delimiter) ile metni böler ve bir diziye dönüştürür.

**virgül "," ile kullanımı**

Örnek
```
const metin = "Elma,Armut,Kivi";
const meyveler = metin.split(","); // ["Elma","Armut","Kivi"]
```

**boş "" kullanım**

Örnek
```
const metin = "Elma";
const meyveler = metin.split(","); // ["E","l","m","a"]
```

- **endsWith()** bir dizenin (string) belirli bir başka dizeyle sona erip ermediğini kontrol etmek için kullanılır. Bu metot, bir dizeyi verilen dizeyle karşılaştırarak, dizenin belirtilen dize ile sona erip ermediğini kontrol eder ve bir boolean değer (true veya false) döndürür. Ayrıca bu yöntem büyük/küçük harfe duyarlıdır. 

Örnek
```
const metin = "Merhaba, dünya!";
const sonuc = metin.endsWith("dünya!"); // Dize, belirtilen dizeyle sona eriyor mu?
console.log(sonuc); // true
```

Ayrıca, endsWith() metodu belirli bir konumdan itibaren sona erme durumunu kontrol etmek için bir ikinci argüman alabilir.

Örnek
```
const metin = "Bu bir örnek metindir.";
const sonuc = metin.endsWith("metindir.", 20); // Dize, belirtilen konumdan sonra belirtilen dizeyle sona eriyor mu?
console.log(sonuc); // true
```

- **startsWith()** bir dizenin (string) belirli bir başka dizeyle başlayıp başlamadığını kontrol etmek için kullanılır. Bu metot, bir dizeyi verilen dize ile karşılaştırarak, dizenin belirtilen dize ile başlayıp başlamadığını kontrol eder ve bir boolean değer (true veya false) döndürür. Ayrıca bu yöntem büyük/küçük harfe duyarlıdır.

Örnek
```
const metin = "Merhaba, dünya!";
const sonuc = metin.startsWith("Merhaba"); // Dize, belirtilen dizeyle başlıyor mu?
console.log(sonuc); // true
```

Ayrıca, startsWith() metodu belirli bir konumdan itibaren başlama durumunu kontrol etmek için bir ikinci argüman alabilir.

Örnek
```
const metin = "Bu bir örnek metindir.";
const sonuc = metin.startsWith("örnek", 10); 
// Dize, belirtilen konumdan sonra belirtilen dizeyle başlıyor mu?
console.log(sonuc); // true
```

- **includes()** bir dizenin (string) belirli bir alt dizeyi veya karakteri içerip içermediğini kontrol etmek için kullanılır. Bu metot, dize içinde aranan alt dizeyi veya karakteri bulursa true, bulamazsa false döndürür.

Örnek
```
const metin = "Bu bir örnek metindir.";
// Dize, belirtilen alt dizeleri içeriyor mu?
const sonuc1 = metin.includes("örnek");
const sonuc2 = metin.includes("xyz");
console.log(sonuc1); // true
console.log(sonuc2); // false
```

Ayrıca, includes() metodu aynı zamanda bir başlangıç indeksi (opsiyonel) alabilir ve aramaya bu indeksten başlayarak devam edebilir.

Örnek
```
const metin = "Bu bir örnek metindir.";
const sonuc3 = metin.includes("örnek", 10); // Dize, belirtilen indeksten sonra alt dizeleri içeriyor mu?
console.log(sonuc3); // false
```

- **match()** bir dize (string) içinde belirli bir deseni veya bir regular expression (düzenli ifade) eşleştirmek için kullanılır. Bu metot, bir dize içinde belirli bir deseni aramak ve bu deseni eşleştiren tüm sonuçları bulmak için kullanışlıdır. Eğer bir sonuç bulamazsa null değerini döndürür. Büyük/küçük harfe duyarlıdır ve bu duyarlılığı kaldırmak için **/gi** eklemeniz gerekir.

Örnek
```
const metin = "Merhaba, dünya! JavaScript çok güzel bir dil.";
const sonuclar = metin.match(/JavaScript/g); // Belirli bir deseni arayarak eşleşen sonuçları bulma
console.log(sonuclar); // ["JavaScript"]
```

Ayrıca, match() metodu ayrıca regular expression ile gruplandırılmış eşleşmeleri de döndürebilir.

Örnek
```
const metin = "JavaScript ve Python dilleri çok popülerdir.";
const sonuclar = metin.match(/(JavaScript|Python)/g); // Belirli bir deseni arayarak eşleşen sonuçları bulma
console.log(sonuclar); // ["JavaScript", "Python"]
```

- **repeat()** bir dizeyi belirtilen sayıda tekrarlayarak yeni bir dize oluşturur. Bu metot, bir dizeyi belirli bir sayıda kopyalamak veya tekrar etmek istediğinizde kullanışlıdır. Eğer negatif bir sayı veya 0 ile çağrılırsa boş bir dize ("") döner. Eğer tekrar sayısı ondalık bir sayı veya Infinity gibi geçerli bir sayı değeri değilse, TypeError hatası alırsınız.

Örnek
```
const ornekDize = "Merhaba ";
const tekrarlanmisDize = ornekDize.repeat(3);
console.log(tekrarlanmisDize); // "Merhaba Merhaba Merhaba "
```

- **search()** bir dize içinde belirli bir deseni (regüler ifade) arar ve bu desenin ilk indeksini döndürür. Eğer desen dizede bulunamazsa -1 döndürür. Aramayı "" içinde veya // içinde yapabilirsiniz. ("örnek" veya /örnek/) Büyük ve küçük harfe duyarlıdır. Bu duyarlılığı kaldırmak için i kullanabilirsiniz. Aşağıdaki örnek üzerinde (/örnek/i)

Örnek
```
const dize = "Merhaba, bu bir örnek dizedir.";
const indeks = dize.search("örnek");
console.log(indeks); // 16
```

# Koşullu İfadeler (if, else, else if, switch)

- **if** ifadesi, JavaScript ve birçok programlama dilinde kullanılan bir koşullu ifadedir. "if" ifadesi, belirli bir koşulu kontrol eder ve bu koşul doğru ise belirtilen kod bloğunu çalıştırır. Eğer koşul yanlış ise, kod bloğu atlanır ve program devam eder.

Temel kullanımı şu şekildedir:
```
if (koşul) {
    // Koşul doğruysa burası çalışır.
}
```

Burada "koşul" yerine bir mantıksal ifade veya bir değer gelebilir. Eğer "koşul" doğru (true) ise, ifadenin içindeki kod bloğu çalışır.

Örnek
```
let sayi = 10;

if (sayi > 5) {
    console.log("Sayı 5'ten büyük."); // Bu satır çalışır.
}
```

- **else** bir "if" ifadesiyle birlikte kullanılan bir programlama terimidir. "if" ifadesi, belirli bir koşulu kontrol eder ve bu koşul doğruysa belirli bir kod bloğunu çalıştırır. Ancak koşul yanlışsa, "else" ifadesi devreye girer.

"else" ifadesi, bir "if" ifadesinin sonunda gelir ve bir alternatif kod bloğunu tanımlar. Eğer "if" ifadesinin koşulu doğru değilse, "else" bloğu çalıştırılır. Böylece program, iki farklı senaryoya sahip olabilir ve hangi kod bloğunun çalışacağı koşula bağlıdır.

Örnek
```
let sayi = 3;

if (sayi > 5) {
    console.log("Sayı 5'ten büyük.");
} else {
    console.log("Sayı 5'ten küçük veya eşit."); // Bu satır çalışır.
}
```

- **else if** ifadesi, "if-else" ifadesine ek olarak kullanılan bir koşullu ifade yapısıdır. "else if" ifadesi, birden fazla koşulu kontrol etmek için kullanılır. Eğer birinci koşul doğru değilse, ikinci bir koşulu kontrol edebiliriz, ve böylece birden fazla seçenek arasında programın hangi kod bloğunu çalıştıracağını belirleyebiliriz.

İşte "else if" ifadesinin temel yapısı:
```
if (koşul1) {
    // Koşul1 doğruysa bu kod bloğu çalışır
} else if (koşul2) {
    // Koşul1 yanlış, koşul2 doğruysa bu kod bloğu çalışır
} else {
    // Hiçbir koşul doğru değilse bu kod bloğu çalışır
}
```

Örnek
```
let sicaklik = 25;

if (sicaklik > 30) {
    console.log("Hava sıcak.");
} else if (sicaklik > 20) {
    console.log("Hava ılık.");
} else {
    console.log("Hava soğuk.");
}
```

- **switch** ifadesi, birçok farklı koşulun bulunduğu durumlarda, her koşula özel bir eylem gerçekleştirmek için kullanılan bir kontrol yapısıdır. Genellikle çok sayıda if-else if bloğunun yerine daha temiz ve okunabilir kod oluşturmak için kullanılır.

switch ifadesi, bir anahtar (genellikle bir değişken veya ifade) değerini alır ve ardından bu anahtarın her bir durum (case) ile karşılaştırılmasını sağlar. Eşleşen bir durum bulunduğunda, bu duruma özgü kod bloğunu çalıştırır.

Örnek
```
let meyve = "elma";

switch (meyve) {
  case "elma":
    console.log("Bu bir elma.");
    break;

  case "muz":
    console.log("Bu bir muz.");
    break;

  case "portakal":
    console.log("Bu bir portakal.");
    break;

  default:
    console.log("Bu bir meyve değil.");
}
```

Bu örnekte, switch ifadesi meyve değişkenini kontrol ediyor. Eğer meyve değişkeni "elma" ise, "Bu bir elma." mesajını görüntüler. Eğer meyve "muz" ise, "Bu bir muz." mesajını görüntüler. Eğer meyve başka bir şeyse (hiçbir duruma uymazsa), "Bu bir meyve değil." mesajını görüntüler.

switch ifadesi, case ifadeleri eşleşene kadar çalışır ve bir eşleşme bulunduğunda çalışmayı durdurur. break ifadesi ile her case bloğunun sonunda işlemi durdurmak önemlidir; aksi takdirde, bir durumun kodu çalıştıktan sonra diğer durumların kodu da çalışabilir.

Kod bloğunda iki case kullanmanız mümkündür.

Örnek
```
const fruit = "elma";

switch (fruit) {
  case "elma":
  case "armut":
    console.log("Elma veya armut seçildi.");
    break;

  case "muz":
    console.log("Muz seçildi.");
    break;

  case "çilek":
    console.log("Çilek seçildi.");
    break;

  default:
    console.log("Geçersiz meyve seçildi.");
}
```

Bu örnekte, eğer fruit değişkeni "elma" veya "armut" ise, "Elma veya armut seçildi." mesajı konsola yazdırılır. İki case ifadesi aynı işlemi paylaşır ve her ikisi de aynı çıktıya yol açar, ardından break ifadesi ile sonlanır. Diğer case ifadeleri ise farklı meyve seçeneklerini işler.

- **"?" (üçlü operatör veya koşullu operatör):** Bu ifadeyi temeller birinci kısım ek notlarda incelemiştik ancak tekrar incelemek ve üstünden geçmek faydalı olacaktır.

Bazen bir koşula bağlı olarak bir değişken atamamız gerekir. "Koşullu" veya "üçlü" operatör olarak adlandırılan bu operatör, bunu daha kısa ve daha basit bir şekilde yapmamızı sağlar. 

Operatör soru işaretiyle temsil edilir. Buna "üçlü" denmesinin sebebi, operatörün üç işleneni vardır.

Sözdizimi:
```
koşul ? değer1 : değer2
```

Örnek
```
let saat = 15;
let mesaj = (saat < 12) ? "Günaydın!" : "İyi günler!";
console.log(mesaj);
```

Bu kod, saat değişkeninin değerine bağlı olarak "Günaydın!" veya "İyi günler!" mesajını mesaj değişkenine atar ve sonra bu mesajı konsola yazar. Eğer saat 12'den küçükse "Günaydın!", değilse "İyi günler!" mesajı görüntülenir.

# Koşullu İfadelerde Truthy ve Falsy Terimler

JavaScript'te "truthy" ve "falsy" terimleri, bir değerin koşullu bir ifadede true veya false olarak nasıl değerlendirildiğini ifade eder.

- **Truthy (Doğru değerler)** Bir değer, koşullu bir ifade içinde true olarak değerlendirilen bir değerdir. Truthy değerlerin genellikle true olarak kabul edilen değerlerle benzer özellikleri vardır. İşte bazı truthy değer örnekleri:

    - Herhangi bir sayı (0 hariç), örneğin 5, -10, 3.14.
    - Herhangi bir metin dizisi (boş diziler hariç), örneğin "Merhaba".
    - Boş olmayan bir nesne (obje).
    - Boş olmayan bir dizi (array).
    - true boolean değeri.

Örnek
```
if (5) {
    console.log("Bu ifade truthy bir değeri temsil eder.");
}
```

- **Falsy (Yanlış değerler)** Bir değer, koşullu bir ifade içinde false olarak değerlendirilen bir değerdir. Falsy değerler, genellikle false olarak kabul edilen veya değersiz olarak kabul edilen değerlerdir. İşte bazı falsy değer örnekleri:

    - 0 (sıfır)
    - NaN (Geçerli bir sayısal işleme tabi tutulamayan "Not-a-Number" değeri)
    - null
    - undefined
    - Boş metin dizisi ("" veya '')
    - false boolean değeri

Örnek
```
if (0) {
    console.log("Bu ifade falsy bir değeri temsil eder.");
}
```

Truthy ve falsy değerler, koşullu ifadelerde ve karar yapılarında kullanılarak programların akışını kontrol etmek için önemlidir. Bir değerin truthy veya falsy olması, o değerin koşullu ifadelerde nasıl işleneceğini belirler.