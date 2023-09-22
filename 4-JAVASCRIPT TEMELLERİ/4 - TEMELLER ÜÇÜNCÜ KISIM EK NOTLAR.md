# Giriş

Bu bölümde the odin project notlarından bağımsız, şahsi olarak oluşturduğum notlar yer almaktadır.

Fonksiyonlar konusuna başlamadan önce; HTML, CSS ve JavaScript'in temel kavramlarını anlamış olmalısınız, eğer temel kavramları anlamadığınızı veya eksikliklerinizin olduğunu düşünüyorsanız lütfen daha önce ele aldığımız konuları tekrarlayın ve pratik yapmaya devam edin.

# Fonksiyonlar

Fonksiyonlar, belirli bir görevi yerine getiren, yeniden kullanılabilir bir kod bloğudur. Ayrıca, belirli bir adı olan ve çağrıldıklarında kodu çalıştıran yapılar olarak düşünülebilir. 

Bir işlemi birden çok kez yapmanız gerektiğinde aynı kodu tekrar tekrar yazmak yerine bir fonksiyon oluşturarak bu işlemi daha verimli bir şekilde gerçekleştirebilirsiniz. Fonksiyonlar, JavaScript programlarının modüler ve düzenli bir şekilde yazılmasını sağlar ve kodun daha kolay anlaşılmasına yardımcı olur.

Aslında fonksiyonları daha önceki konularda farkında olmadan kullanıyorduk. Sadece kullandığımızın farkında değildik. Nasıl mı?

Bir metin dizesini her değiştirdiğimizde:

```
const myText = "Bu bir stringdir";
const newString = myText.replace("stringdir", "salamdır");
console.log(newString);
// replace() fonksiyonu ile "stringdir" ifadesini aldık,
// ve yerleştirmek istediğimiz "salamdır" ifadeyle değiştirdik, 
// yeni değişkenimize bu ifadeyi kaydederek sonucu döndürdük. "Bu bir salamdır"
```

Veya bir diziyi değiştirdiğimizde:

```
const myArray = ["Ben", "kodlamayı", "çok", "severim"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// join() fonksiyonuyla diziyi aldık ve birleştirdik.
// tüm dizi öğelerini bir araya getirdik.
// ardından yeni dizemizi döndürdük. "Ben kodlamayı çok severim"
```

Veya rastgele sayılar oluşturduğumuzda:

```
const myNumber = Math.random();
// random() fonksiyonu 0 ile 1 arasında (1 hariç) rastgele sayılar üretir
console.log(myNumber);
```

Gördüğünüz gibi buna benzer şekilde farkında olmadan bir çok fonksiyon kullandık. Aslında JavaScript, tüm kodları kendiniz yazmanıza gerek kalmadan yararlı şeyler yapmanıza olanak sağlayan birçok yerleşik işleve sahiptir.

Evet hemen bir fonksiyon oluşturalım:

```
function showMessage() {
  alert( 'Hello everyone!' );
}
```

Burada gördüğümüz gibi öncelikle **function** yazıyoruz, sonra **anahtar bir kelime "showMessage"** ardından **parantezler ()** ve bu parantezlerin içine virgülle ayrılmış parametreler yazabiliriz, ve son olarak **süslü parantezler {}** içine yerleştirdiğimiz **fonksiyon kodumuzu** yazıyoruz. 

Fonksiyon oluşturmanın temelini madde madde ve adım adım tekrar üstünden geçelim:

- 1 - function kelimesini yazdık
- 2 - fonksiyon adımızı yazdık
- 3 - parantezlerimizi () yazdık
- 4 - süslü parantezlerimizi {} yazdık
- 5 - süslü parantezler içine fonksiyon kodumuzu yazdık
- 6 - son olarak fonskiyon çağırma işlemi. Bunu birazdan göreceğiz.

**Parantez içinde istediğimiz sayıda parametler oluşturabiliriz.** Bunların nasıl kullanılacağıyla ilgili ufak bir örnek:

```
function name(parameter1, parameter2, ... parameterN) {
 // body
}
```

Az önce showMessage() isimli yazdığımız fonksiyonumuzu çağıralım:

```
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
```

Evet gördüğünüz gibi fonksiyonumuzu çağırdık.

# Anonim/İsimsiz Fonksiyonlar (Function Expression)

Anonim veya isimsiz fonksiyonlar, adları olmayan ve genellikle başka bir fonksiyon içinde veya bir değişkene atanmış olarak kullanılan JavaScript fonksiyonlarıdır. İsimsiz fonksiyonlar, ihtiyaca göre dinamik olarak oluşturulabilir ve kullanılabilirler.

Örnek
```
const kareHesapla = function(sayi) {
  return sayi * sayi;
};

console.log(kareHesapla(5)); // 25
```

# SCOPE ----- BU KONU ÇOK ÖNEMLİ !!!

Scope, JavaScript ve diğer programlama dillerinde önemli bir kavramdır. Scope, bir değişkenin tanımlandığı ve erişilebildiği alanı ifade eder. JavaScript'te iki tür kapsam bulunur: global kapsam (global scope) ve yerel kapsam (local scope).

# Yerel Kapsam (Local Scope) veya Yerel Değişkenler (Local variables)

Bir değişkenin sadece belirli bir kod bloğunda veya fonksiyonun içinde tanımlandığı ve erişilebildiği alandır. Yani, yerel değişkenler sadece tanımlandıkları kod bloğu veya fonksiyon içinde geçerlidirler ve dışarıdan erişilemezler.

Örnek
```
function exampleFunction() {
  let localVariable = "Ben yerel bir değişkenim";
  console.log(localVariable); // Bu fonksiyon içinde yerel değişkene erişebilirim
}

exampleFunction();
console.log(localVariable); // Hata! localVariable, bu kapsamın dışında tanımlı değil
```

Az önce belirttiğimiz gibi; bir fonksiyonun içinde tanımlanan değişken yalnızca o fonksiyonun içinde yer alır, fonksiyonun dışında o değişkene erişmek mümkün değildir.

Örnek
```
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // yerel değişken

  console.log(message);
}

showMessage(); // Hello, I'm JavaScript!

console.log(message); // <-- Hata! fonksiyon içinde tanımladığımız message değişkenini fonksiyon dışında görüntüleyemeyiz.
```

# Global Kapsam (Global Scope) veya Dış Değişkenler (Outer variables)

Bir değişkenin programın her yerinden erişilebilir olduğu alandır. Bu, bir değişkenin ana programın dışında, genellikle en üst düzeyde tanımlandığı anlamına gelir. Bir değişken global olarak tanımlandığında, bu değişkene herhangi bir fonksiyon veya kod bloğu içinde erişebilirsiniz. Global değişkenler programın herhangi bir noktasından erişilebilir ve değiştirilebilir, bu nedenle dikkatli kullanılmalıdır.

Örnek
```
let globalVariable = "Ben global bir değişkenim";

function exampleFunction() {
  console.log(globalVariable); // Bu fonksiyon içinde global değişkene erişebilirim
}

exampleFunction();
console.log(globalVariable); // Programın her yerinden global değişkeni kullanabilirim
```

Bir fonksiyon dışarıda tanımladığımız bir değişkene erişebilir.

Örnek
```
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John
```

Fonksiyonlar dışarıda tanımladığımız değişkenler üzerinde tam bir erişime sahiptir, bunları çağırmakla kalmayıp aynı zamanda değiştirmemiz ve yeni değer atamamız da mümkündür.

Örnek
```
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) Dışarıdaki değişkeni değiştirir

  let message = 'Merhaba, ' + userName;
  console.log(message);
}

console.log(userName); // showMessage fonksiyonunu çağırmadan önce

showMessage();

console.log(userName); // showMessage fonksiyonunu çağırdıktan sonra
```

Bu biraz kafa karıştırıcı olabilir, bu yüzden adım adım açıklayalım:

- userName adında bir değişken tanımladık ve "John" değeri atadık.

- showMessage adında bir fonksiyon tanımladık.

- showMessage fonksiyonu içinde, userName değişkenini "Bob" ile yeniden atadık. Yani, bu fonksiyon dışındaki userName değişkenini değiştirir.

- message adında bir başka değişken tanımladık ve "Merhaba, " ile userName değişkeninin değeri birleştirilerek oluşturduk.

- console.log(message) ifadesi, bir iletiyi konsol ekranında görüntüler ve bu iletiyi "Merhaba, Bob" veya "Merhaba, John" gibi bir mesaj olarak görüntüler (userName değişkeninin son değerine göre)

- Kodun geri kalan kısmında, ilk olarak userName değişkeninin değeri "John" olarak konsol ekranında görüntülenir. Bu, showMessage fonksiyonunu çağırmadan önceki değeridir.

- showMessage fonksiyonu çağrıldığında, içindeki işlemler gerçekleşir ve userName değişkeni "Bob" ile değiştirilir.

- Son olarak, userName değişkeni "Bob" olarak konsol ekranında görüntülenir. Bu, showMessage fonksiyonunu çağırdıktan sonra değiştirilen değeridir.

**NOT:** Dış değişken yalnızca yerel bir değişken yoksa kullanılır. 

Örnek
```
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // Yerel bir değişken tanımla

  let message = 'Merhaba, ' + userName; // Bob
  console.log(message);
}

// Fonksiyon kendi userName değişkenini oluşturacak ve kullanacaktır
showMessage();

console.log(userName); // John, değişmeden kaldı, fonksiyon dışındaki değişkene erişmedi
```

Bu da biraz kafa karıştırıcı olabilir, bu yüzden adım adım açıklayalım:

- userName adında bir değişken tanımladık ve "John" değeri atadık.

- showMessage adında bir fonksiyon tanımladık.

- showMessage fonksiyonu içinde, aynı isimle userName adında başka bir değişken tanımladık. Bu, showMessage fonksiyonunun içinde yerel bir değişken oluşturur ve bu yerel değişken sadece bu fonksiyon içinde kullanılır.

- message adında bir başka değişken tanımladık ve "Merhaba, " ile yerel userName değişkeninin değeri birleştirilerek oluşturulur. İçerideki userName değişkeni "Bob" olduğu için message "Merhaba, Bob" olur.

- console.log(message) ifadesi, bir iletiyi konsol ekranında görüntüler ve bu iletiyi "Merhaba, Bob" olarak görüntüler, çünkü içteki yerel userName değişkeni "Bob" değerine sahiptir.

- Kodun geri kalan kısmında, showMessage fonksiyonu çağrılır ve içindeki işlemler gerçekleşir. Ancak bu fonksiyon içinde oluşturulan userName değişkeni sadece fonksiyon içinde etkili olur ve dışarıdaki userName değişkenini etkilemez.

- Son olarak, dışarıdaki userName değişkeni, yani global userName, console.log(userName) ile görüntülenir ve değeri hala "John" olarak kalır, çünkü showMessage fonksiyonu dışındaki değişkene erişmez.

Bu iki örnek arasındaki fark, userName değişkeninin kapsamıdır. İkinci örnekte, showMessage fonksiyonu içinde userName adında yeni bir yerel değişken tanımlanmıştır (let ile birlikte). Bu, showMessage fonksiyonunun içindeki userName değişkeninin, fonksiyonun dışındaki global userName değişkeni ile aynı ismi paylaşsa bile farklı bir değişken olduğu anlamına gelir.

Bu fark, JavaScript'teki kapsam **(scope)** kavramıyla ilgilidir. Bir değişkenin kapsamı, o değişkenin ne kadar geniş bir alanda tanınabilir ve kullanılabilir olduğunu belirler. İlk kod örneğinde, showMessage fonksiyonunun içinde yeni bir userName değişkeni tanımlanmadığı **(let ile tanımlamadık)** için fonksiyon dışındaki global userName değişkenine erişir ve bu değişkeni değiştirir. Ancak ikinci kod örneğinde, userName adında bir yerel değişken tanımlandığı **(let ile tanımladık)** için bu değişken sadece showMessage fonksiyonu içinde geçerlidir ve dışarıdaki global userName değişkenini etkilemez.

# Parametreler

Parametreleri kullanarak isteğe bağlı verileri fonksiyonumuza aktarabiliriz. Yani fonksiyonlarda parametreler, fonksiyonun çağrılmasında belirtilen değerleri almak için kullanılan değişkenlerdir. Bu parametreler, fonksiyonun işlem yapması için gerekli olan verileri sağlar.

Örnek
```
function selamla(isim, mesaj) {
  console.log("Merhaba " + isim + ", " + mesaj);
}

// Fonksiyonu çağırırken bir parametre belirtiyoruz
selamla("Ahmet", "Nasılsın?"); // "Merhaba Ahmet, Nasılsın?"
selamla("Ayşe", "Hoşgeldin...");  // "Merhaba Ayşe, Hoşgeldin..."
```

Bu örnekte selamla adlı bir fonksiyonumuz var ve bu fonksiyonun iki parametresi var: isim ve mesaj. Fonksiyon içinde isim ve mesaj parametrelerini kullanarak bir selamlaşma mesajı oluşturuyoruz.

İlk çağrıda selamla("Ahmet", "Nasılsın?"), "Ahmet" ve "Nasılsın?" parametreleri fonksiyona iletiliyor ve fonksiyon bu değerleri kullanarak "Merhaba Ahmet, Nasılsın?" şeklinde bir mesaj oluşturuyor ve bu mesajı console.log ile görüntülüyor.

İkinci çağrıda selamla("Ayşe", "Hoşgeldin...") ise aynı fonksiyon farklı parametrelerle çağrılıyor ve bu sefer "Ayşe" ve "Hoşgeldin..." parametreleri kullanılarak "Merhaba Ayşe, Hoşgeldin..." şeklinde başka bir mesaj üretiliyor ve görüntüleniyor.

Yani parametreler, fonksiyonun çalışması için gerekli olan verileri dışarıdan almasını sağlar ve böylece aynı fonksiyon farklı verilerle kullanılabilir. Bu, fonksiyonların daha esnek ve yeniden kullanılabilir olmalarını sağlar.

Ayrıca parametreye değişken tanımlayarakta iletebiliriz.

Örnek
```
function selamla(isim, mesaj) {
  
  isim = "*" + isim + "*";

  console.log("Merhaba " + isim + ", " + mesaj);
}

let isim = "Veli";          // isim değişkenimize Veli tanımladık.

selamla(isim, "Naber?");    // "Merhaba *Veli*, Naber?"

console.log(isim);
```

Bu örneği adım adım açıklayalım:

- selamla adlı bir fonksiyon tanımlanıyor. Bu fonksiyon iki parametre alıyor: isim ve mesaj.

- Fonksiyon içinde isim parametresine bir işlem yapılıyor. "*" karakterleri eklenerek isim değeri daha şık görünmesi için düzenleniyor.

- console.log kullanılarak bir ileti oluşturuluyor ve bu ileti isim ve mesaj parametreleri kullanılarak oluşturuluyor.

- let isim = "Veli"; satırıyla isim adında bir değişken tanımlanıyor ve "Veli" değeri atanıyor.

- selamla(isim, "Naber?"); satırıyla selamla fonksiyonu çağrılıyor. Bu çağrı, isim değişkenini ve "Naber?" metnini fonksiyona iletiyor.

- Fonksiyon içinde yapılan değişiklikler isim değişkenine etki etmez. Çünkü JavaScript, fonksiyonlara parametre olarak verilen değişkenlerin kopyalarını oluşturur ve bu kopyalar üzerinde işlem yapar. Bu nedenle fonksiyon içinde yapılan değişiklikler, orijinal değişkenin değerini değiştirmez.

- Son olarak console.log(isim); satırıyla isim değişkeni görüntüleniyor ve değeri değiştirilmeden "Veli" olarak kalır.

Bu örnekte de önceki örnekte olduğu gibi, isim değişkenine yapılan değişiklikler sadece fonksiyon içindeki kopya değişkeni etkiler ve dışarıdaki orijinal değişkene dokunmaz. Bu, JavaScript'teki değişkenlerin nasıl çalıştığını ve fonksiyonlar arasında nasıl iletişim sağladığını gösteren önemli bir kavramı vurgular.

**NOT:** İki parametre bulunan fonksiyonumuzda eğer tek bir argüman çağırırsak ne olur? Hadi deneyelim...

Örnek
```
function selamla(isim, mesaj) {
  console.log("Merhaba " + isim + ", " + mesaj);
}
selamla("Ahmet"); // "Merhaba Ahmet, undefined"
```

Evet bu örnekte gördüğümüz gibi ikinci argümanı belirtmediğimiz için bir **undefined** çıktısı aldık. Eğer mesaj parametresini belirlemek istemiyorsanız, fonksiyon tanımında varsayılan bir değer atayabilirsiniz.

Örnek
```
function selamla(isim, mesaj = "Nasılsın?") {
  console.log("Merhaba " + isim + ", " + mesaj);
}
selamla("Ahmet");       // "Merhaba Ahmet, Nasılsın?"
```

Bir diğer yolu deneyelim:
```
function selamla(isim, mesaj) {
  mesaj = mesaj || "Nasılsın?";
  console.log("Merhaba " + isim + ", " + mesaj);
}

selamla("Ahmet");                 // "Merhaba Ahmet, Nasılsın?"
selamla("Ahmet", "Hoşgeldin.")    // "Merhaba Ahmet, Hoşgeldin."
```

Bir başka yolu deneyelim:
```
function selamla(isim, mesaj) {
  if (mesaj === undefined) {
    mesaj = "Nasılsın?";
  }
  console.log("Merhaba " + isim + ", " + mesaj);
}

selamla("Ahmet");                 // "Merhaba Ahmet, Nasılsın?"
selamla("Ahmet", "Hoşgeldin.")    // "Merhaba Ahmet, Hoşgeldin."
```

Son olarak bir başka yolu daha deneyelim:
```
function selamla(isim) {

  console.log(isim ?? "Mehmet");

}

selamla(0);         // 0
selamla("ali");     // "ali"
selamla();          // "Mehmet"
```

# Bir Değer Döndürme (Return)

return, JavaScript fonksiyonlarının bir değeri döndürmesini sağlayan bir ifadedir. Fonksiyonlar, genellikle işlem sonucunu veya hesaplanmış bir değeri kullanılabilir hale getirmek için return kullanır. return ifadesinin kullanıldığı yerde fonksiyon çalışmayı sonlandırır ve belirtilen değeri döndürür.

Örnek olarak, bir toplama işlemi yapan bir fonksiyonu düşünelim:
```
function topla(a, b) {
  return a + b;
}

let sonuc = topla(5, 3); // Fonksiyon 5 ve 3'ü toplar ve sonucu döndürür.
console.log(sonuc); // Sonucu ekrana yazdırır: 8
```

Bu örnekte, return ifadesi a + b ifadesini döndürüyor ve bu değer topla fonksiyonunun çağrıldığı yerde kullanılıyor. return ifadesi ayrıca bir fonksiyonun sona erdiğini belirtir, yani bu satırdan sonraki kodlar çalıştırılmaz.

Tek bir fonksiyonda birden çok return işlemi olabilir. Örneğin;
```
function sonuc(sayi) {
    if (sayi > 0) {
        return "Sayı pozitif";
    } else {
        return "Sayı negatif";
    }
}

console.log(sonuc(10));     // "Sayı pozitif"
console.log(sonuc(-10));    // "Sayı negatif"
```

**NOT:** Boş bir fonksiyon return olsun ya da olmasın undefined çıktısını verir.

Örnek
```
function a() {
}

console.log(a());
```

Örnek
```
function a() {
  return;
}

console.log(a());
```

# Fonksiyon Deklarasyonu (Function Declaration) ve Fonksiyon İfadesi (Function Expression) Arasındaki Fark

- **Fonksiyon Deklarasyonu (Function Declaration)**
    - Bir fonksiyonun adı ve gövdesi birlikte belirtilir.
    - Fonksiyon, tanımlandığı kapsamda (genellikle dosya veya işlev) yukarıdan aşağıya, yani tanımlandığı yerde işlenebilir. Bu nedenle, fonksiyon tanımlandığı yerden önce çağrılabilir (yani fonksiyonun kodu çağrıldığından önce yazılabilir).

Örnek
```
function sum(a, b) {
  return a + b;
}
```

- **Fonksiyon İfadesi (Function Expression)**
    - Bir fonksiyonun adı, ya da adı olmayabilir (anonim fonksiyon).
    - Fonksiyon, bir değişken atanarak tanımlanır. Bu nedenle, fonksiyonun kullanılabilmesi için değişkenin tanımlandığı yerden önce fonksiyon çağrılmamalıdır.

Örnek
```
let sum = function(a, b) {
  return a + b;
};
```

Fonksiyon deklarasyonları ve ifadeleri, kullanım amacına bağlı olarak tercih edilir. Fonksiyon deklarasyonları genellikle kodun başında yer alırken, fonksiyon ifadeleri daha esnek kullanım sağlar ve kodun daha ilerisinde tanımlanabilirler.

Diğer bir ifadeyle;

**Fonksiyon İfadesi (Function Expression)**, çalıştırma işlemi ona ulaştığında oluşturulur ve o andan itibaren kullanılabilir hale gelir. Yani, atama işleminin sağ tarafına geçildiği noktada fonksiyon oluşturulur ve bu andan itibaren kullanılabilir hale gelir.

**Fonksiyon Deklarasyonu (Function Declaration)** ise farklıdır. Bir Fonksiyon Deklarasyonu, tanımlandığı yerden önce çağrılabilir. Örneğin, global bir Fonksiyon Deklarasyonu, tüm betikte görünür, nerede olursa olsun. Bu, JavaScript'in iç algoritmalarından kaynaklanır. JavaScript, betiği çalıştırmaya başlamadan önce önce global Fonksiyon Deklarasyonlarını arar ve bu fonksiyonları oluşturur. Bu, bir "başlatma aşaması" olarak düşünülebilir. Ve tüm Fonksiyon Deklarasyonları işlendikten sonra kod çalıştırılır. Dolayısıyla, bu fonksiyonlara erişimi vardır.

**Özetle**, metin, JavaScript'te Fonksiyon İfadesi ve Fonksiyon Deklarasyonu arasındaki zamanlama ve erişilebilirlik farkını açıklamaktadır. Fonksiyon Deklarasyonları tanımlandıkları yerden önce çağrılabilirken, Fonksiyon İfadeleri tanımlandıkları yerden sonra kullanılabilir.

Örneğin "sayHi" adlı Function Declaration, JavaScript betiği başlamadan önce oluşturulur ve betiğin her yerinde görünür:
```
sayHi("John"); // Hello, John ---> ÇALIŞIYOR !!!

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

...Eğer bu bir Function Expression olsaydı, o zaman çalışmazdı:
```
sayHi("John"); // HATA VERECEK VE ÇALIŞMAYACAK !!!

let sayHi = function(name) {
  alert( `Hello, ${name}` );
};
```

Hangi yöntemi kullanacağınız, projenizin ihtiyaçlarına ve kodlama tarzınıza bağlıdır.

# Arrow Fonksiyon

Arrow fonksiyon; fonksiyon oluşturmanın çok kısa ve çok basit bir yöntemidir. Arrow fonksiyonlar (ok işlevleri veya fat arrow işlevleri olarak da adlandırılır), JavaScript'te daha yeni bir fonksiyon tanımlama yöntemidir. Arrow fonksiyonları geleneksel fonksiyon ifadelerinden farklıdır ve bazı özel davranışlara sahiptir.

İşte arrow fonksiyonlarının temel özellikleri:

- Kısa Sözdizimi: Arrow fonksiyonları daha kısa bir sözdizisine sahiptir. Çoğu zaman daha az kod yazmanızı sağlar.

- Bağlamsal this(bu konuya daha sonra geleceğiz): Arrow fonksiyonları, tanımlandıkları bağlamın this değerini değiştirmez. Bu, özellikle olay dinleyicileri veya iç içe fonksiyonlar gibi durumlarda faydalı olabilir.

- Parametre Parantezleri: Eğer tek bir parametreniz varsa, paranteze ihtiyaç duymazsınız. Ancak birden fazla parametre varsa veya hiç parametreniz yoksa boş parantezleri (()) kullanmanız gerekir.

Peki bu arrow fonksiyon neye benziyor hemen inceleyelim:
```
let func = (arg1, arg2, ..., argN) => ifade;

// başka bir ifadeyle bunun daha kısa bir versiyonudur:
let func = function(arg1, arg2, ..., argN) {
    return ifade;
};
```

Somut bir örnek ile inceleyelim:
```
let sum = (a, b) => a + b;

/* Arrow fonksiyon bundan daha kısadır:
let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

Yalnızca bir tane parametre yazacaksanız, parametre dışındaki parantezleri yazmak zorunda değilsiniz:
```
let double = n => n * 2;
// Bu fonksiyon ile aynıdır: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
```

Eğer hiçbir parametreniz yoksa parantezleri yazmak zorundasınız:
```
let sayHi = () => alert("Hello!");

sayHi();
```

Bu örnekleri hızlıca tek bir örnekte inceleyelim:
```
// Tek bir parametre ve tek bir ifade
const double = (num) => num * 2;

// Birden fazla parametre
const add = (a, b) => a + b;

// Hiç parametre yok
const sayHello = () => console.log("Merhaba!");

// Bağlamsal 'this' kullanımı
const person = {
  name: "John",
  sayHi: function() {
    setTimeout(() => {
      console.log(`Merhaba, ben ${this.name}`);
    }, 1000);
  }
};

person.sayHi(); // "Merhaba, ben John" (normalde bu bağlamda 'this' farklı davranır)
```

Arrow fonksiyonları, kısa ve anlaşılır bir kod yazmanıza yardımcı olabilir, ancak her zaman uygun bir seçenek olmayabilir. Arrow fonksiyonları bağlamsal this nedeniyle, prototip yöntemleri veya ES6 sınıflarının içinde kullanmaktan kaçınılmalıdır, çünkü bu durumlar bağlamsal this davranışının istenmeyen sonuçlara yol açabilir. (this konusuna ilerde geleceğiz.)

Örneğin dinamik olarak bir fonksiyon oluşturalım:
```
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
``` 

Arrow fonksiyonları ilk başta alışılmadık ve pek okunabilir görünmeyebilir, ancak gözler yapıya alıştıkça bu durum hızla değişir.

Çok fazla kelime yazamayacak kadar tembel olduğumuzda, basit tek satırlık eylemler için çok kullanışlıdırlar.

# Çok Satırlı Arrow Fonksiyon (multi-line arrow functions)

JavaScript'te birden fazla işlem veya ifade içeren fonksiyonları ifade etmek için kullanılan bir yapıdır. Bu tür işlevlerde işlev gövdesi birden fazla satırda olabilir ve süslü parantezler {} kullanılır. 

İşte bir örnek:
```
let islem = (x, y) => {
  let carp = x * y;
  return carp;        // süslü parantez kullandığımız zaman return kullanmaya ihtiyacımız var.
};
console.log( islem(6, 2) ); // 12
```

