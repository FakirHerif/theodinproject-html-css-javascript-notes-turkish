# Giriş

Bu bölümde the odin project notlarından bağımsız, şahsi olarak oluşturduğum notlar yer almaktadır.

# Değişkenler

Genellikle bir JavaScript uygulaması bilgiyle çalışması gereken bir yapıya sahiptir. İşte iki örnek:
- Bir çevrimiçi mağaza - bilgiler, satılan ürünler ve bir alışveriş sepeti gibi şeyleri içerebilir.
- Bir sohbet uygulaması - bilgiler, kullanıcılar, mesajlar ve çok daha fazlasını içerebilir.

Değişkenler, bu tür bilgileri saklamak için kullanılır. Kısaca değişkenler, veriler için isimlendirilmiş bir depolama alanıdır. Js'de genellikle let ve const kullanılır. ikisinin arasında ki farkı notları okumaya devam ettikçe anlayacaksınız. (daha önceden var kullanılıyordu, ancak şuan çok fazla kullanılmıyor, bunu da açıklayacağım.)

Örnek
```
let message;            // message adında bir değişken oluşturduk ve buna herhangi bir değer atamadık

message = "Hello!";     // "Hello!" değerini atadık

console.log(message);   // "Hello!" çıktısını verecek.
```

Kısa ve öz bir halde değişkeni tek bir satırda tanımlayıp değer atayabiliriz.
Örnek
```
let message = 'Hello!';   // değişkeni oluşturduk ve 'Hello!' değerini atadık.

console.log(message);     // 'Hello!' çıktısını verecek.
```

Ayrıca tek satırda birden fazla değişken tanımlayabiliriz
Örnek
```
let user = 'John', age = 25, message = 'Hello';
```
Bu daha kısa görünebilir, ancak bunu önermiyoruz. Daha iyi okunabilirlik adına lütfen değişken başına tek bir satır kullanın.

Çok satırlı varyant biraz daha uzundur ancak okunması daha kolaydır: 
```
let user = 'John';
let age = 25;
let message = 'Hello';
```

Bazı kişiler bu çok satırlı tarzda birden fazla değişken de tanımlar: 
```
let user = 'John',
  age = 25,
  message = 'Hello';
```
veya virgül kullanımı ile:
```
let user = 'John'
  , age = 25
  , message = 'Hello';
```
Teknik olarak tüm bu varyantlar aynı şeyi yapar. Yani kişisel zevk ve estetik meselesi. 

Daha eski komut dosyalarında başka bir anahtar kelime de bulabilirsiniz: "var"
Örnek
```
var message = 'Hello';
```
var anahtar kelimesi let ile neredeyse aynıdır. Ancak var "eski usul" bir şekilde değişken bildirir. Aralarında ince farklar var ama bunların bizim için henüz bir önemi yok. Js'ye yeni başlayanlar olarak "let" kullanacağız.

- Değişkenler için gerçekten hayattan bir benzetme yapalım.
“Değişken” kavramını, üzerinde benzersiz isim taşıyan bir çıkartma bulunan, veriler için bir “kutu” olarak hayal edersek, kolaylıkla kavrayabiliriz. 

Örneğin, kutuya message ve içindeki değere "Hello!" diyebiliriz.
![Görsel](https://javascript.info/article/variables/variable.svg)

ve kutuya herhangi bir değer atayabiliriz. Ayrıca bunu istediğimiz kadar değiştirebiliriz: 
```
let message;

message = 'Hello!';

message = 'World!';     // değer değişti.

console.log(message);   // 'World!' çıktısını verir
```

# Operatörler

Farklı türde JavaScript operatörleri vardır:

- Aritmetik operatörler
- Atama Operatörleri
- Karşılaştırma Operatörleri
- Dize Operatörleri
- Mantıksal operatörler
- Bitsel Operatörler
- Üçlü Operatörler
- Tip Operatörler

Js'de "+" operatörü sayıları toplar ve string ifadeleri birleştirir. "=" operatörü ise bir değişkene değer atar.

![Görsel](https://www.w3schools.com/js/img_operators.jpg)

Örnek 1
```
let x = 5;          // x'e 5 sayı değerini atar.
let y = 2;          // y'ye 2 sayı değerini atar.
let z = x + y;      // z'ye x+y toplamı sayı değerini atar.
let a = 10;         // a'ya 10 sayı değerini atar.
let b = "15";       // b'ye "15" string değerini atar.
let c = a + b;      // c'ye a+b string birleştirme değerini atar.
```

Değer değiştirildiğinde eski veriler değişkenden kaldırılır:
![Görsel](https://javascript.info/article/variables/variable-change.svg)

Ayrıca iki değişken tanımlayabilir ve değerleri birinden diğerine kopyalayabiliriz.
```
let hello = 'Hello world!';
let message;

message = hello;    //hello'dan 'Hello world!' ü message değişkenine kopyaladık.

// şimdi iki değişken aynı veriyi tutuyor:
alert(hello);       // Hello world!     
alert(message);     // Hello world!
```

**Not:** Bir değişken yalnızca bir kez bildirilmelidir. Aynı değişkenin tekrarlanan bildirimi bir hataya yol açar:
```
let message = "This";
let message = "That";   // SyntaxError: 'message' has already been declared
```

Değişken isimleri yalnızca harf, rakam veya simgelerden($ ve _) oluşmalıdır. Ayrıca ilk harf/karakter rakam olmamalıdır. Birden fazla kelime içerenler için genellikle camelCase kullanılır.
Örnek:
```
let $ = 1;            // bu isimlendirme geçerlidir
let _ = 2;            // bu isimlendirme geçerlidir

console.log($ + _);   // 3 çıktısını verir

let test123;          // bu isimlendirme geçerlidir

let 1a;               // bu isimlendirme geçersizdir(rakamla başlayamaz)
let my-name;          // bu isimlendirme geçersizdir(kısa çizgi kullanılamaz)
```

CamelCase, birden çok kelimenin birleştirildiği bir yazım stili veya isimlendirme kuralıdır. Bu stilde kelimeler arasına boşluk veya diğer ayırıcı karakterler yerine her kelimenin baş harfi büyük yazılır ve kelimeler arasına boşluk eklenmez. Örneğin, "camelCase" veya "myVariableName" gibi ifadeler CamelCase stiline örnek olarak verilebilir. Bu yazım stili genellikle programlama dillerinde değişken isimlendirmesi veya fonksiyon adları gibi yerlerde kullanılır.
Örnek
```
let userName;     // camelCase kullanımı, bu isimlendirme geçerlidir
```

**Not:** Değişken isimlendirirken dikkat etmemiz gereken diğer önemli husus ise büyük küçük harf kullanımıdır. Örneğin;
"apple" ve "APPLE" iki farklı değişkendir.

Sabit (değişmeyen) bir değişken bildirmek için let yerine **"const"** kullanılır. 
Örnek
```
const myBirthday = '18.04.1982';    // const değişkeni sabitler ve değiştirilemez, bu değişkene yeni değer atanamaz.

myBirthday = '01.01.2001'; // error, can't reassign the constant! (hata verecektir.)
```

**Not:** Hatırlanması zor sabit değişkenler için isimlendirme yapılırken büyük harfler kullanılması ve iki kelimeden oluşuyorsa arasına _ (alt çizgi) konulması yaygın bir uygulamadır.
Örnek
```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
```

# ÖZET
Değerleri depolamak için değişkenleri kullanarak tanımlayabiliriz. var, let, veya const anahtar kelimelerdir.

- **let:** modern bir değişken bildirimidir.
- **var:** eski tip bir değişken bildirimidir. Normalde bunu hiç kullanmayız ancak let ile aralarında ince farklar vardır.
- **const:** let gibidir ancak değişkenin değeri değiştirilemez.

Değişkenler, içlerinde ne olduğunu kolayca anlamamızı sağlayacak şekilde isimlendirilmelidir. 

# Aritmetik Operatörler

Sayılar üzerinde aritmetik işlemler yapamak için kullanılan operatör türledir.

- "+"   Toplama ve Birleştirme(string ifadeler için)
- "-"   Çıkarma
- "*"   Çarpma
- "/"   Bölme
- "%"   Modül(Bölümlerden kalanı verir)
- "**"  Üs Alma
- "++"  Arttırma
- "--"  Azaltma

# Toplama (+)
Örnek
```
let x = 5;
let y = 2;
let z = x + y;     
console.log(z);     // 7 çıktısını verir.  
```

# Çıkarma (-)
Örnek
```
let x = 5;
let y = 2;
let z = x - y;
console.log(z);     // 3 çıktısını verir.  
```

# Çarpma (*)
Örnek
```
let x = 5;
let y = 2;
let z = x * y;
console.log(z);     // 10 çıktısını verir.  
```

# Bölme (/)
Örnek
```
let x = 5;
let y = 2;
let z = x / y;
console.log(z);     // 2.5 çıktısını verir.  
```

# Kalan (%)
Örnek
```
let x = 5;
let y = 2;
let z = x % y;
console.log(z);     // 1 çıktısını verir.  
```

# Üs Alma (**)
Örnek
```
let x = 5;
let z = x ** 2;
console.log(z);     // 25 çıktısını verir.  
```

# Arttırma (++)
Örnek
```
let x = 5;
x++;
let z = x;
console.log(z);     // 6 çıktısını verir
```

# Azaltma (--)
Örnek
```
let x = 5;
x--;
let z = x;
console.log(z);     // 4 çıktısını verir
```

# İşlem Önceliği

Js'de normal hayatta olduğu gibi matematiksel işlemlerde işlem önceliği vardır. Yani toplama ve çarpma işleminin olduğu bir yerde işlem önceliği çarpmadır.

Örnek
```
let x = 100 + 50 * 3;
console.log(x);     // 250 çıktısını verir
```

Sadece toplama ve çıkarma veya sadece çarpma bölme işleminin olduğu yerde gerçek hayattaki matematiksel işlemlerde olduğu gibi sırayla soldan sağa doğru işlem gerçekleştirilir.

Örnek
```
let x = 100 + 50 - 3;   // 147 çıktısını verir
let y = 100 / 50 * 3;   // 6 çıktısını verir
```

Parantezin yer aldığı işlemlerde gerçek hayattaki matematiksel işlemlerde olduğu gibi öncelik parantezdir.

Örnek
```
let x = (100 + 50) * 3; // 450 çıktısını verir
```

# Atama Operatörleri

Atama operatörleri, JavaScript değişkenlerine değer atar.

Örnek
```
let x = 10;
x += 5;
console.log(x);     // 15 çıktısını verir.
```

![Görsel](https://i.ibb.co/YhK2mgC/operator.jpg)

Ayrıca js'de string ifadelerde de atama operatörleri kullanılabilir.
Örnek
```
let text1 = "What a very ";
text1 += "nice day";         // "What a very nice day" çıktısını verir
```

# Karşılaştırma Operatörleri

Karşılaştırma operatörleri mantıksal ifadelerde değişkenler veya değerler arasındaki eşitliği veya farkı belirlemek için kullanılır.

- **"==" (eşittir):** İki değeri karşılaştırır ve eğer değerler eşitse true döner.
Örnek:
```
let x = 5;
console.log(x==5);      // True çıktısını verir
console.log(x=="5");    // True çıktısını verir
console.log(x==4);      // False çıktısını verir
```

- **"===" (tam eşittir):** İki değeri ve türlerini karşılaştırır. Hem değerler hem de türler eşitse true döner.
Örnek:
```
let x = 5;
console.log(x===5);      // True çıktısını verir
console.log(x==="5");    // False çıktısını verir
```

- **"!=" (eşit değildir):** İki değeri karşılaştırır ve eğer değerler eşit değilse true döner.
Örnek:
```
let x = 5;
console.log(x!=8);       // True çıktısını verir
```
    
- **"!==" (tam eşit değildir):** İki değeri ve türlerini karşılaştırır. Hem değerler hem de türler eşit değilse true döner.
Örnek:
```
let x = 5;
console.log(x!==5);      // False çıktısını verir
console.log(x!=="5");    // True çıktısını verir
console.log(x!==8);      // True çıktısını verir
```

- **">" (büyüktür):** Sol tarafındaki değerin, sağ tarafındaki değerden büyük olup olmadığını kontrol eder. Eğer sol değer sağ değerden büyükse true döner.
Örnek:
```
let x = 5;
console.log(x>10);       // False çıktısını verir
console.log(x>3);        // True çıktısını verir
```
**Not:** Unutulmaması gereken bir diğer önemli nokta ise eğer string ifadeler için büyüktür(>) veya küçüktür(<) kullanıyorsak bunların sıralaması alfabetiktir.
Örnek:
```
console.log("2" < "12");    // False çıktısını verir
console.log("2" > "12");    // True çıktısını verir
```

- **"<" (küçüktür):** Sol tarafındaki değerin, sağ tarafındaki değerden küçük olup olmadığını kontrol eder. Eğer sol değer sağ değerden küçükse true döner.
Örnek:
```
let x = 5;
console.log(x<3);       // False çıktısını verir
console.log(x<10);      // True çıktısını verir
```

- **">=" (büyük eşittir):** Sol tarafındaki değerin, sağ tarafındaki değerden büyük veya eşit olup olmadığını kontrol eder. Eğer sol değer sağ değerden büyük veya eşitse true döner.
Örnek:
```
let x = 5;
console.log(x>=10);     // False çıktısını verir
console.log(x>=5);      // True çıktısını verir
```

- **"<=" (küçük eşittir):** Sol tarafındaki değerin, sağ tarafındaki değerden küçük veya eşit olup olmadığını kontrol eder. Eğer sol değer sağ değerden küçük veya eşitse true döner.
Örnek:
```
let x = 5;
console.log(x<=3);      // False çıktısını verir
console.log(x<=10);     // True çıktısını verir
```

- **"?" (üçlü operatör veya koşullu operatör):** Koşullu bir ifade oluşturmak için kullanılır. Özel bir koşulu kontrol eder ve bu koşula göre iki farklı sonuç döndürebilir. Örneğin: koşul ? değer1 : değer2. Eğer koşul doğruysa değer1, aksi takdirde değer2 döner.
Örnek:
```
let alisverisMiktari = 120;     // Örnek olarak 120 TL alışveriş yapıldığını düşünelim.

let mesaj = (alisverisMiktari >= 100) ? "İndirim hakkı kazandınız!" : "Üzgünüz, indirim hakkı kazanamadınız.";

console.log(mesaj);             // 100'den büyük olduğu için "İndirim hakkı kazandınız!" çıktısını verir. Eğer 100'den küçük olsaydı "Üzgünüz, indirim hakkı kazanamadınız." çıktısını verecekti.
```

# Mantıksal Operatörler

- **"&&" (Ve Operatörü):** İki koşulu karşılaştırmak ve her iki koşul da doğru ise sonucu doğru yapar. Örneğin, (x < 10 && y > 1) ifadesi, x 10'dan küçük VE y 1'den büyük olduğunda doğru olur.
Örnek:
```
let x = 6;
let y = 3;
console.log(x<10 && y>1);   // True çıktısını verir.
```

- **"||" (Veya Operatörü):** İki koşulu karşılaştırmak ve en az bir koşul doğru ise sonucu doğru yapar. Örneğin, (x == 5 || y == 5) ifadesi, x 5'e EŞİT veya y 5'e EŞİT olduğunda doğru olmaz.
Örnek:
```
let x = 6;
let y = 3;
console.log(x==5 || y==5);   // False çıktısını verir.
```

- **"!" (Değil Operatörü):** Bir koşulu tersine çevirir. Örneğin, !(x == y) ifadesi, x ve y birbirine EŞİT OLMADIĞINDA doğru olur.
Örnek:
```
let x = 6;
let y = 3;
console.log(!(x == y));   // True çıktısını verir.
```

# Sayı Değerleri

Js' de sayılar ondalıklı veya ondalıksız olarak yazılabilir, ayrıca sayılar negatif olabilir.

Örnek 1:
```
let x = 3.14;    // Ondalıklı sayı
let y = 3;       // Pozitif tam sayı
let z = -3;      // Negatif tam sayı
```

Çok büyük veya çok küçük sayılar bilimsel(üslü) gösterimle yazılabilir.

Örnek 2:
```
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123 
```

Tamsayılar (nokta veya üs gösterimi olmayanlar) 15. basamağa kadar doğru bir sonuç verir. Ondalıklı sayılar ise en fazla 17 basamak olabilir.

Örnek 3:
```
let x = 999999999999999;   // x 999999999999999 çıktısı verecek
let y = 9999999999999999;  // y 10000000000000000 çıktısı verecek
let z = 0.888888888888888888888888 // z 0.8888888888888888 çıktısı verecek
```

# Toplama ve Birleştirme İşlemi

Js'de hem toplama hem de birleştirme işlemleri için + operatörü kullanılır. Sayılar birbiriyle toplanır, string ifadeler ise birleştirilir.

Örnek 1 (İki sayının toplanması):
```
let x = 10;         // Sayı
let y = 20;         // Sayı
let z = x + y;  
console.log(z);     // Sonuç 30 sayısı olacaktır.
```

Örnek 2 (İki string ifadenin birleştirilmesi):
```
let x = "10";       // String değer
let y = "20";       // String değer
let z = x + y;
console.log(z);     // Sonuç "1020" string değer olacaktır.
```

Örnek 3 (Bir sayı ve bir string ifadenin toplanması):
```
let x = 10;         // Sayı
let y = "20";       // String değer
let z = x + y;
console.log(z);     // Sonuç "1020" string değer olacaktır.
```

Örnek 4
```
let x = 10;                     // Sayı
let y = 20;                     // Sayı
let z = "Sonuc: " + x + y;      // String Değer
console.log(z);                 // "Sonuc: 1020" değeri döndürecektir.
```
Bu örnekte sonucun 30 olmasını beklemek yaygın bir hatadır. çünkü let z ifadesinde üç değer topluyoruz ve bu değerlerden 1 tanesi string değer bu yüzden toplama yerine birleştirme işlemi gerçekleşecektir.

Örnek 5
```
let x = 10;                 // Sayı
let y = 20;                 // Sayı
let z = "30";               // String Değer
let sonuc = x + y + z;     
console.log(sonuc);         // "3030" değeri döndürecektir.
```
Bu örnekte sonucun 102030 olmasını beklemek yaygın bir hatadır. çünkü let sonuc ifadesinde ayrı ayrı üç değer topluyoruz ve bu değerlerden 2 tanesi sayı değeridir, bu sayılar kendi arasında normal bir şekilde toplanacak ve 30 sonucunu verecek ardından let z de string değer ise birleştirme işlemi yapacak ve bu yüzden sonuç olarak 3030 değerini elde edeceğiz.

**String ifadeleri sayısal değere çevirerek toplama**
Örnek 6
```
let x = "74";           // "77" string bir değerdir
x = Number(x) + 3;      // x string değerini sayısal değere dönüştürüp 3 ekledik
console.log(x);         // 77 çıktısını verecektir.
```
Number() ifadesi yerine değerin başına + ekleyerekte string ifadeyi sayıya çevirebiliriz.
Örnek 7
```
let x = "74";           // "77" string bir değerdir
x = +x + 3;             // x string değerini sayısal değere dönüştürüp 3 ekledik
console.log(x);         // 77 çıktısını verecektir.

```

# Sayısal Stringler

JavaScript'de sayısal string ifadeleri yer alabilir.

Örnek 1
```
let x = 100;         // Sayısal değer
let y = "100";       // String değer
```

JavaScript'te string ifadelerde toplama işlemi hariç, bölme, çarpma ve çıkarma işlemleri normal bir şekilde işlemleri gerçekleştirir.

Örnek 2 (İki string değerin bölümü)
```
let x = "100";
let y = "10";
let z = x / y;
console.log(z);         // "10" çıktısını döndürür
```

Örnek 3 (iki string değerin çarpımı)
```
let x = "100";
let y = "10";
let z = x * y;
console.log(z);         // "1000" çıktısını döndürür
```

Örnek 4 (iki string değerin çıkarma işlemi)
```
let x = "100";
let y = "10";
let z = x - y;
console.log(z);         // "90" çıktısını döndürür
```

Örnek 5 (iki string değerin toplama işlemi)
```
let x = "100";
let y = "10";
let z = x + y;
console.log(z);         // "10010" çıktısını döndürür, + operatörü string ifadelerde toplama yapmaz birleştirme işlemi gerçekleştirir.
```

# NaN (Sayı Değil) ifadesi

Js'de sayısal değere sahip olmayan bir string ifadeyle işlem yapmaya çalışmak NaN sonucunu verir.

Örnek 1
```
let x = 100 / "Apple";      // NaN çıktısını verir
```

ancak string ifadesi herhangi bir sayı içeriyorsa sonuç bir sayı olacaktır:
Örnek 2
```
 let x = 100 / "10";        // 10 çıktısını verir
```

# isNaN() (değerin sayı olup olmadığını sorgulamak) ifadesi
Js'de bir değerin sayı olup olmadığını sorgulamak için isNaN() kullanabiliriz.

Örnek 1
```
let x = 100 / "Apple";
console.log(isNaN(x));      // True değeri döndürür. yani sorgumuz kısaca; x bir NaN mıdır? Evet
```

Örnek 2
```
let x = 100 / 10 ;
console.log(isNaN(x));      // False değeri döndürür. yani sorgumuz kısaca; x bir NaN mıdır? Hayır
```

Js' de herhangi bir ifadeye NaN tanımlayıp matematiksel işlem yapmaya çalışırsak çıktı her zaman NaN olacaktır.

Örnek 3
```
let x = NaN;
let y = 5;
let z = x + y;
console.log(z);     // NaN çıktısını verecektir.
```

ancak + operatöründe NaN ile bir string ifadeyi toplamaya çalışırsak birleştirme işlemi gerçekleşecektir

Örnek 4
```
let x = NaN;
let y = "5";
let z = x + y;
console.log(z);     // NaN5 çıktısını verecektir.
```

NaN aslında js'de bir sayısal ifade olarak yer alır.

Örnek 5
```
let x = NaN;
console.log(typeof(x));     // x'in type'ını sorguladığımız zaman NaN değerinin "number" olduğunu görebiliriz.
```

# Infinity (Sonsuzluk) Değeri

Js'de mümkün olan en büyük sayının dışında bir sayı hesaplarsanız sonsuzluk döndürülür.

Örnek 1
```
let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
console.log(myNumber);      // Infinity çıktısını verir.
```

Herhangi bir sayıyı 0'a bölmekte Infinity çıktısını verecektir.

Örnek 2
```
let x = 2 / 0;          // Infinity çıktısını verir.
let y = -2 / 0;         // -Infinity çıktısını verir.
```

Infinity aslında js'de bir sayısal ifade olarak yer alır.

Örnek 3
```
let x = Infinity;
console.log(typeof(x));     // x'in type'ını sorguladığımız zaman Infinity değerinin "number" olduğunu görebiliriz.
```

# Js'de Sayıları Nesne Olarak Yazmak

new Number(); ifadesi ile sayıları nesne olarak yazabiliriz.

Örnek 1
```
let x = 123;                // typeof sorgusu sonucunda bu değerin number olduğu çıktısına ulaşacağız.
let y = new Number(123);    // typeof sorgusu sonucunda bu değerin object olduğu çıktısına ulaşacağız.
```

Yine de sayısal değer oluşturmak istiyorsak new Number kullanmak pekte iyi birşey değildir, işleri karışıklaştırır ve beklenmeyen sonuçlara yol açabilir. == operatörü ile karşılaştırma yaparken true sonucuna === operatörü ile karşılaştırma yaparken false sonucuna ulaşırız.

Örnek 2
```
let x = 500;
let y = new Number(500);
console.log(x==y);          // true çıktısı verecektir.
```

Örnek 3
```
let x = 500;
let y = new Number(500);
console.log(x===y);          // false çıktısı verecektir.
```

Js'de nesneleri birbiriyle karşılaştırmak bize false sonucunu döndürür.

Örnek 4
```
let x = new Number(500);
let y = new Number(500);
console.log(x==y);          // false çıktısı verecektir.
```

Örnek 5
```
let x = new Number(500);
let y = new Number(500);
console.log(x===y);          // false çıktısı verecektir.
```