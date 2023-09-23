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

# For Döngüsü

For döngüsü, birçok programlama dilinde sıklıkla kullanılan ve belirli bir işlemi yinelemek için kullanılan bir kontrol yapısıdır. JavaScript dahil birçok programlama dilinde for döngüsü, özellikle bir işlemi belirli bir sayıda tekrar etmek veya bir koleksiyonun (örneğin, bir dizi) her öğesini işlemek için kullanılır.

Bir for döngüsü genellikle üç ana bölümden oluşur:

- **Başlangıç Değerleri (Initialization):** Döngünün başlangıcında bir değişkenin veya sayacın başlangıç değeri atanır. Bu değer genellikle döngüyü kontrol eden bir değişkendir ve döngü bu değeri kullanarak başlar.

- **Koşul (Condition):** Döngü, her tekrarda belirtilen bir koşulu kontrol eder. Koşul doğru (true) olduğu sürece döngü devam eder. Koşul yanlış (false) olduğunda döngü sona erer.

- **İterasyon (Iteration):** Döngü her bir tekrarda bir adım (iteration) yapar. Bu adım genellikle bir değişkenin değerini artırma veya azaltma işlemi içerir. Bu, döngünün kaç kere tekrar edeceğini ve hangi değerler arasında çalışacağını belirler.

Bir for döngüsünün temel yapısı şu şekildedir:
```
for (başlangıç; koşul; artış/değişim) {
  // Yinelemek istediğiniz işlem veya kod bloğu
}
```

Örnek
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Bu örnek, sıfırdan başlayarak beşe kadar (dahil olmamak üzere) sayıları ekrana yazdıracak bir for döngüsüdür. Şimdi bu üç ana bölümü daha ayrıntılı olarak açıklayalım:

- **Başlangıç Değerleri (Initialization):** let i = 0; ifadesiyle başlıyor. Burada i adında bir değişken oluşturuyoruz ve başlangıç değeri olarak sıfır (0) atıyoruz.

- **Koşul (Condition):** i < 5; ifadesi, her tekrarda i değişkeninin 5'ten küçük olduğunu kontrol eder. Bu koşul doğru olduğu sürece döngü devam eder.

- **İterasyon (Iteration):** i++ ifadesi, her bir tekrarda i değişkeninin değerini bir artırır. Bu, döngünün her adımında i değerinin birer birer artmasını sağlar.

Sonuç olarak, bu for döngüsü sıfırdan başlayarak 0, 1, 2, 3 ve 4 sayılarını ekrana yazdıracaktır. i değeri 5 olduğunda koşul yanlış olacak ve döngü sona erecektir.

for döngüleri, programlamada tekrarlanan işlemleri gerçekleştirmek için güçlü bir araçtır ve birçok farklı senaryoda kullanılabilirler.

# While Döngüsü

While döngüsü, belirli bir koşul doğru olduğu sürece bir işlemi yinelemek için kullanılan bir kontrol yapısıdır. for döngüsü gibi, while döngüsü de tekrarlayan görevleri gerçekleştirmek için kullanılır, ancak kullanımı farklıdır.

Bir while döngüsünün temel yapısı şu şekildedir:
```
while (koşul) {
  // Yinelemek istediğiniz işlem veya kod bloğu
}
```

while döngüsü, şu şekilde çalışır:

- İlk adımda, while anahtar kelimesinin hemen ardından gelen koşul ifadesi değerlendirilir. Eğer bu koşul doğru (true) ise, döngü çalışır. Eğer koşul yanlış (false) ise, döngü hiç çalışmaz ve atlar.

- Eğer koşul doğruysa, döngü içindeki kod bloğu çalıştırılır. Bu kod bloğu, belirli bir işlemi gerçekleştirmek için kullanılır.

- Daha sonra, tekrar başa dönülür ve koşul tekrar kontrol edilir. Eğer koşul hala doğru ise, döngü bir kez daha çalıştırılır ve bu işlem koşul yanlış olana kadar devam eder.

while döngüsünün önemli bir özelliği, başlangıçta koşul yanlışsa döngünün hiç çalışmamasıdır. Bu nedenle, koşulu baştan itibaren doğru yapmak veya döngü içinde bir yerde koşulu yanlış hale getirmek (örneğin, koşul = false;) döngünün çalışmasını engelleyebilir.

Örnek
```
let sayac = 0;

while (sayac < 5) {
  console.log("Merhaba");
  sayac++;
}
```

Bu while döngüsü, sayac değeri 5 olana kadar "Merhaba" yazdırmaya devam edecektir. Her adımda sayac bir artırılır ve koşul yanlış hale geldiğinde döngü sona erer.

while döngüleri, belirli bir koşul altında sürekli olarak tekrarlanması gereken işlemler için kullanışlıdır. Ancak dikkatli olunmalıdır, çünkü eğer koşul hiçbir zaman yanlış hale gelmezse, döngü sonsuz bir döngüye dönüşebilir ve programın kilitlenmesine neden olabilir.

# Do...While Döngüsü

do...while döngüsü, bir koşulu kontrol ederken, döngü içeriği en az bir kez çalıştırıldığından emin olmak için kullanılan bir döngü türüdür. Yani, do...while döngüsü, döngü koşulu başlangıçta false olsa bile, döngü içeriğini en az bir kez çalıştırır.

do...while döngüsünün temel yapısı şu şekildedir:
```
do {
  // Döngü içeriği
} while (koşul);
```

- İlk olarak, döngü içeriği (// Döngü içeriği) çalıştırılır.
- Sonra, while anahtar kelimesinin ardından gelen koşul değerlendirilir.
- Eğer koşul true ise, döngü tekrar başa dönerek içeriği bir kez daha çalıştırır.
- Eğer koşul false ise, döngü sona erer ve program döngüden çıkar.

do...while döngüsü, belirli bir işlemi en az bir kez gerçekleştirmeniz gereken durumlarda veya kullanıcıdan bir giriş almanız ve bu girişi değerlendirmeniz gereken durumlarda yaygın olarak kullanılır. Özellikle do...while döngüsünün içeriğinin en az bir kez çalıştırılması gerektiği durumlarda tercih edilir.

Örnek
```
let sayac = 1;

do {
  console.log("Sayac değeri:", sayac);
  sayac++;
} while (sayac <= 5);
```

Bu kod, sayacın başlangıç değeri 1 olan bir do...while döngüsü oluşturur. Döngü, sayac değeri 5'e veya daha azına ulaşana kadar çalışmaya devam eder. Her döngü dönüşünde, sayac değeri bir artar ve bu değer konsola yazdırılır.

Döngü, şu şekilde çalışır:
```
Sayac değeri: 1
Sayac değeri: 2
Sayac değeri: 3
Sayac değeri: 4
Sayac değeri: 5
```

Bu örnek, do...while döngüsünün en az bir kez çalışacağını ve ardından döngü şartı kontrol edilmeden önce döngü bloğunu çalıştıracağını gösterir. Bu nedenle döngü en az bir kez çalışır ve ardından şart kontrol edilir.

# For, While ve do...while Döngüleri Arasındaki Farklar

while, for, ve do...while döngüleri, döngülerin farklı kullanım senaryolarına uygun olarak tercih edildiği üç farklı döngü türüdür. İşte bu döngü türleri arasındaki temel farklar:

**For Döngüsü:**

- for döngüsü, başlangıç değeri, koşul, ve artış/değişim ifadesi gibi üç önemli bileşeni içerir.
- Başlangıç değeri ilk olarak çalıştırılır, ardından koşul kontrol edilir, eğer koşul doğru ise döngü içeriği çalışır.
- Döngü içeriği çalıştıktan sonra artış/değişim ifadesi çalıştırılır ve koşul tekrar kontrol edilir.
- for döngüsü, döngüde kaç kez döneceğinizi bilmeniz gereken durumlarda kullanılır.

**While Döngüsü:**

- Döngü koşulu başlangıçta kontrol edilir. Eğer koşul doğru (true) ise, döngü içeriği çalışır.
- Döngü içeriği çalışmadan önce koşul değerlendirilir, bu nedenle içeriğin hiç çalışmaması mümkündür.
- Döngü içeriği çalışmadan döngüye girmeyebilir.
- Genellikle döngüde ne kadar süre boyunca çalışacağınızı bilmediğiniz durumlarda kullanılır.

**do...while Döngüsü:**

- do...while döngüsü, döngü içeriğini en az bir kez çalıştırmak için kullanılır.
- İlk olarak döngü içeriği çalışır, ardından koşul kontrol edilir. Eğer koşul doğru ise döngü içeriği tekrar çalıştırılır.
- do...while döngüsü, içeriğin en az bir kez çalıştırılması gereken durumlarda kullanılır, ve döngü koşulu sonradan kontrol edildiğinden, içeriğin en az bir kez çalışması garanti edilir.

Yani, kısaca temel farklar:

- **for:** Başlangıç, koşul ve artış/değişim ifadeleri ile kontrol edilir.
- **while:** Koşul başlangıçta kontrol edilir.
- **do...while:** İçerik en az bir kez çalıştırılır ve sonra koşul kontrol edilir.

Hangi döngü türünün kullanılacağı, döngünün amacına ve gereksinimlerine bağlı olarak değişir.

# for...in Döngüsü

for...in döngüsü, JavaScript'teki nesne özellikleri üzerinde dolaşmak için kullanılan bir döngü türüdür. Bu döngü, bir nesnenin tüm özelliklerini (property) alır ve bu özellikler üzerinde gezinmenizi sağlar. Genellikle nesne içindeki anahtar-değer çiftlerini incelemek veya nesnenin özelliklerini işlemek için kullanılır.

for...in döngüsünün temel yapısı şu şekildedir:
```
for (let key in object) {
  // object[key] ile nesne özelliğine erişim sağlayabilirsiniz
  // Bu özelliği işleyebilirsiniz
}
```

Örnek
```
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

Bu kod, person adlı bir nesnenin özelliklerini dolaşır ve her bir özelliği (anahtar-değer çiftini) konsola yazdırır. Sonuç olarak, nesne özellikleri ve değerleri görüntülenir:
```
firstName: John
lastName: Doe
age: 30
```

for...in döngüsünün dezavantajlarından biri, nesne prototip zinciri üzerinde gezinmeyi içermesidir. Bu nedenle, nesnenin kendi özellikleri dışında prototip zincirindeki özellikleri de alabilir. Bu durumu kontrol etmek için hasOwnProperty yöntemini kullanabilirsiniz.

# for...of Döngüsü

for...of döngüsü, JavaScript'teki veri yapılarını (örneğin dizi, harita, dize, set, vb.) üzerinde gezinmek için kullanılan bir döngü türüdür. Bu döngü, koleksiyon tipi veri yapılarını ele alır ve her bir öğeyi dolaşmanızı sağlar. Bu sayede koleksiyonun içeriğine erişebilirsiniz.

for...of döngüsünün temel yapısı şu şekildedir:
```
for (let element of iterable) {
  // iterable koleksiyonundaki her öğeye erişebilirsiniz
  // Bu öğeyi işleyebilirsiniz
}
```

**Dizi üzerinde dolaşma:**
```
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
```

Bu kod, numbers dizisindeki her sayıyı ekrana yazdırır.

**Dize üzerinde karakterleri dolaşma:**
```
const text = "Hello";

for (let char of text) {
  console.log(char);
}
```

Bu kod, "Hello" dizesindeki her karakteri ekrana yazdırır.

**Harita (Map) üzerinde dolaşma:**
```
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

for (let [key, value] of myMap) {
  console.log(key + ": " + value);
}
```

Bu kod, bir harita üzerindeki anahtar-değer çiftlerini dolaşır ve konsola yazar.

for...of döngüsü, koleksiyonlardaki öğeleri sırayla ele alır ve bu öğeler üzerinde işlem yapmanızı sağlar. Bu nedenle, dizi, harita, set ve diğer veri yapıları üzerinde verileri işlemek için oldukça kullanışlıdır.

# for...in ve for...of Döngüleri Arasındaki Farklar

for...in ve for...of döngüleri, JavaScript'te kullanılan iki farklı döngü türüdür ve her biri farklı amaçlar için kullanılır. İşte bu iki döngü türü arasındaki temel farklar:

**for...in Döngüsü:**

- for...in döngüsü, genellikle nesne (object) özellikleri üzerinde gezinmek için kullanılır.
- Döngü, nesnenin özelliklerini (property) ve bu özelliklerin isimlerini dolaşır.
- for...in döngüsü, nesne özelliklerini numaralandırılabilir (enumerable) olduğu sürece dolaşır.
- Döngü sırasında elde edilen değerler, genellikle özellik adlarıdır (string türünde).

Örnek
```
const person = {
  name: 'John',
  age: 30,
  job: 'developer'
};

for (const key in person) {
  console.log(key, person[key]);
}
```

**for...of Döngüsü:**

- for...of döngüsü, genellikle diziler (arrays) ve diğer yinelenebilir (iterable) veri yapıları üzerinde gezinmek için kullanılır.
- Döngü, yinelenebilir veri yapısındaki her bir öğeyi dolaşır.
- for...of döngüsü, yinelenebilir veri yapılarının elemanlarını gezinmek için kullanışlıdır ve özellik adları gibi ileri düzey nesne özellikleri ile uğraşmaz.
- Döngü sırasında elde edilen değerler, yinelenebilir veri yapısının elemanlarıdır.

Örnek
```
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}
```

Yani, for...in döngüsü özellikler üzerinde dolaşırken, for...of döngüsü yinelenebilir veri yapılarındaki elemanları dolaşır. Hangi döngüyü kullanmanız gerektiği, işlem yapmak istediğiniz veri yapısına bağlıdır.

# Break (Döngü Çalışmasını Durdurmak)

break, program içinde döngülerin veya switch-case yapılarının akışını kontrol etmek için kullanılan bir kontrol ifadesidir. break ifadesi kullanıldığı yerde, o anki döngüyü veya switch-case yapısını sonlandırır ve bir sonraki kod bloğuna geçer. Genellikle belirli bir koşul karşılandığında döngüyü veya switch-case yapısını sonlandırmak için kullanılır. Kısaca:

- break, bir döngünün çalışmasını durdurur ve döngüden çıkar.
- break, döngüyü sonlandırmak veya belirli bir koşulu karşılandığında döngüyü durdurmak için kullanılır.
- Özellikle for, while ve do...while döngülerinde kullanılır.

**for Döngüsünde break:**

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // i'nin değeri 3 olduğunda döngüyü sonlandırır
  }
  console.log(i);
}
// Çıktı: 1
//        2
```

**while Döngüsünde break:**

```
let i = 1;
while (i <= 5) {
  if (i === 3) {
    break; // i'nin değeri 3 olduğunda döngüyü sonlandırır
  }
  console.log(i);
  i++;
}
// Çıktı: 1
//        2
```

**switch-case Yapısında break:**

```
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  default:
    console.log("It's another day.");
}
// Çıktı: It's Monday.
```

break ifadesi, döngülerde veya switch-case yapılarında belirli koşullara dayalı olarak akışı kontrol etmek ve gerektiğinde işlemi sonlandırmak için kullanılır.

# Continue (Döngü Akışını Kontrol Etmek)

continue, program içinde döngülerin akışını kontrol etmek için kullanılan bir kontrol ifadesidir. continue ifadesi kullanıldığı yerde, o anki döngü iterasyonunu sonlandırır ve bir sonraki iterasyona geçer. Yani, döngünün geri kalan kodunu atlayarak bir sonraki adıma geçer. Kısaca:

- continue, döngüyü bir sonraki adıma geçirmek için kullanılır. Yani, döngünün geri kalan kısmını atlar ve bir sonraki iterasyona geçer.
- break gibi, özellikle for, while ve do...while döngülerinde kullanılır.
- switch-case yapılarında kullanılmaz. Kullanılmasının hiçbir anlamı yoktur ve hataya neden olur. Continue yalnızda döngüler içinde kullanılabilir.

**for Döngüsünde continue:**

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // i'nin değeri 3 olduğunda bu iterasyonu atlayarak bir sonrakine geçer
  }
  console.log(i);
}
// Çıktı: 1
//        2
//        4
//        5
```

**while Döngüsünde continue:**

```
let i = 1;
while (i <= 5) {
  if (i === 3) {
    i++; // continue kullanmadan i'nin değerini artırmalıyız, aksi takdirde sonsuz döngü olurdu
    continue; // i'nin değeri 3 olduğunda bu iterasyonu atlayarak bir sonrakine geçer
  }
  console.log(i);
  i++;
}
// Çıktı: 1
//        2
//        4
//        5
```

continue ifadesi, belirli bir koşulu karşıladığınızda o anki iterasyonu atlamak ve bir sonraki iterasyona geçmek istediğinizde kullanılır. Bu, döngüler içinde belirli koşullara göre işlem yapmanıza olanak sağlar.