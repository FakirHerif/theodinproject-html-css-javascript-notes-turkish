# Giriş

Bir geliştiricinin çoğunlukla kod yazmakla uğraştığını düşünebilirsiniz, ancak gerçekte önemli bir zaman dilimi kod okumakla geçer. Bu, diğer ekip üyeleri tarafından yazılan kodları, artık ekibinizin bir parçası olmayan kişiler tarafından yazılan kodları ve hatta iki hafta önce yazdığınız ancak hakkında pek bir şey hatırlamadığınız kodları içerir.

Bu ilkeleri hemen ustalaşmanız gereken bir şey olarak düşünmeyin. Herkes zaman zaman karmaşık kodlar yazabilir, hatta profesyoneller bile. Burada yapmak istediğimiz, kodunuzun okunabilirliğini geliştirmeye yardımcı olabilecek bazı yönergeleri size vermek. Ne kadar çok kod yazarsanız, hem okunabilirlik hem de diğer yönlerden o kadar iyi hale gelecektir.

Bu fikirleri deneyin ve kod yazarken düşünce sürecinize dahil etmeye çalışın, ancak zarif ve kristal netliğinde kodlar yazamadığınız için kendinizi yıpratmayın. Mükemmelliğe değil, yavaşça gelişime odaklanın.

Bu konuyu açıklığa kavuşturduğumuza göre, hadi başlayalım!

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Okunması zor kodu, okunması kolay koddan nasıl ayırt edeceğinizi öğrenin.

- Kodunuzu daha temiz hale getirmek için programlama ilkelerini kullanın.

- Kod yazarken açıklayıcı ve anlamlı yorumlar ekleyin. 

# Temiz Kod Nedir?

Temiz kod, kodlama sürecinde belirli kurallara ve en iyi uygulamalara uyularak yazılan ve bakımı kolay, anlaşılır, sürdürülebilir ve hata ayıklaması yapılabilir kod demektir. Temiz kodun temel özellikleri şunlar olabilir:

- **Okunabilirlik:** Temiz kod, diğer geliştiricilerin kodu anlamasını kolaylaştıracak şekilde yazılır. İyi anlaşılır isimler, açıklayıcı yorumlar ve düzenli biçimlendirme kodun okunabilirliğini artırır.

- **Sade ve Basit:** Temiz kod, gereksiz karmaşıklığı önler. Karmaşık yapılar veya gereksiz kod blokları yerine basit ve etkili bir şekilde sorunu çözmeye odaklanır.

- **İsimlendirme:** Değişkenler, fonksiyonlar ve sınıflar anlamlı ve açıklayıcı isimlere sahip olmalıdır. Bu, kodun ne yaptığını hızlıca anlamayı kolaylaştırır.

- **DRY İlkesi (Don't Repeat Yourself):** Temiz kod, aynı işi yapmak için aynı kodun tekrarlanmasını önler. Kodun yeniden kullanılabilir ve bakımı daha kolay hale getirilmesini sağlar.

- **Küçük Fonksiyonlar ve Sınıflar:** Temiz kod, küçük ve özgün fonksiyonlar veya sınıflar kullanarak karmaşıklığı azaltır. Her biri tek bir işi yapmalıdır.

- **Açıklayıcı Yorumlar:** Kodun niçin belirli bir şekilde yazıldığını veya belirli bir yaklaşımın seçildiğini açıklayıcı yorumlar içerir.

- **Test Edilebilirlik:** Temiz kod, test edilmesi ve hata ayıklanması daha kolay olan bir yapıya sahiptir.

Temiz kodun amacı, geliştiricilerin daha etkili bir şekilde çalışmasına ve kodun daha az hata içermesine yardımcı olmaktır. Bu, yazılım projelerinin daha sürdürülebilir olmasına ve uzun vadede daha az bakım gerektirmesine katkıda bulunur.

Aşağıdaki örnekleri göz önünde bulunduralım.

Örnek A
```
const x = function (z) {
  let w = 0;z.forEach(
function (q) {
    w += q;
});return w;
};

x([2, 2, 2]);
```

Örnek B
```
const sumArray = function (array) {
  let sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);
```

Bu örneklerden hangisini okumayı daha kolay buluyorsunuz? İkincisinin daha anlamlı olduğu hemen anlaşılıyor. Şaşırtıcı bir şekilde, bu işlevlerin her ikisi de tam olarak aynı görevi gerçekleştirir (tamamen aynı şekilde!) ve her ikisi de geçerli koddur. Ancak ikincisi çok daha okunaklı. Neden?

İlk örnekte tek harfli değişkenler kullanılmış, satır ortasında noktalı virgül var ve girinti tutarsız. Sonuç, kafa karıştırıcı ve dağınık bir kod parçasıdır.

İlk fonksiyonu yazan biriyle bir proje üzerinde işbirliği yaptığınızı hayal edin. Çalışmanıza devam edebilmeniz için neler olup bittiğini çözmeniz ne kadar sürer? Ya da belki bunu bir süre önce kendiniz yazdınız ve onun var olduğunu bile tamamen unuttunuz. Her iki durumda da eninde sonunda ne olduğunu anlayacaksınız, ancak bu hiç de eğlenceli olmayacak.

Örnek B temiz kodu temsil eder. Her bir parçanın ne yaptığını bilmeseniz de, fonksiyon ve değişkenler açıkça adlandırıldığı için ne olduğunu tahmin etmek çok daha kolaydır. Girinti tutarlı ve mantıksal bir düzen izler ve bir satır içinde kodu kesintiye uğratan noktalı virgül yoktur.

Tek karakterler, bir döngü veya geri çağırma işlevi bağlamında değişken adları olarak kullanılabilir, ancak başka yerlerde bunlardan kaçının.

# CamelCase Hakkında

camelCase, birden fazla kelimenin boşluk veya noktalama işareti olmadan birlikte yazılmasına olanak tanıyan bir adlandırma kuralıdır. CamelCase'de, bir değişken adı olan setTimeout gibi birden fazla kelimeden oluştuğunda, ilk kelime tamamen küçük harfle yazılırken, ikinci kelimenin ilk harfi (ve sonraki kelimeler) büyük harfle yazılır.

Bu ders boyunca değişkenlerimizin ve fonksiyonlarımızın çoğu camelCase kullanılarak isimlendirilecektir. Takip edilmesi gereken iyi bir örnek.

# Fonksiyonları ve Değişkenleri Adlandırma

İlk örneğimizde nesnelere anlamlı isim vermenin önemine değinmiştik. İyi bir değişken veya fonksiyon adının ne olduğunu daha ayrıntılı olarak inceleyelim.

**İyi bir isim açıklayıcıdır**

B Örneğimizde, her yeni sayının diziden toplandığı bir "sum" adlı bir değişkenimiz var. Fonksiyon "sumArray" olarak adlandırılmış ve adından da anlaşılacağı gibi işlevini yerine getiriyor (eğer "dizi nedir?" diye düşünüyorsanız, endişelenmeyin - yakında onları öğreneceksiniz). Güzel, temiz ve anlaşılır.

Şimdi, A örneğimizle ilgili biriyle bir konuşmayı hayal edin. Fonksiyon "x" olarak adlandırılmış, değişkenler ise "z," "w" ve "q" gibi isimlerle verilmiş. Of of of, pek de güzel değil.

**Tutarlı bir kelime dağarcığı kullanın**

Aynı türdeki değişkenler tutarlı bir adlandırmaya sahip olmalıdır. Örnek bir oyun projesinden aşağıdakileri inceleyelim:

```
 // İYİ
function getPlayerScore();
function getPlayerName();
function getPlayerTag();

// KÖTÜ
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();
```

Kötü olan örnekte, oyuncuya ve gerçekleştirilen eylemlere atıfta bulunmak için üç farklı isim kullanıldı. Ayrıca bu eylemleri anlatmak için üç farklı fiil kullanılmaktadır. İyi olan örnek, hem değişken adlandırmada hem de kullanılan fiillerde tutarlılığı koruyor.

Değişkenler her zaman bir isim veya sıfatla (yani bir isim cümlesiyle) başlamalı ve bir fiille işlev görmelidir.

Başka bir örnek dizisi bunun neden önemli olduğunu açıklayabilir:

```
// İYİ
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// KÖTÜ (bunlar fiillerle başlar, fonksiyonlarla karıştırılabilir)
const getCount = 10;
const isSelected = true;

// İYİ
function getCount() {
  return numberOfThings;
}

// KÖTÜ (Bu bir isim)
function myName() {
  return "Thor";
}
```

# Aranabilir ve anında anlaşılabilir adlar kullanın

Bazen bildirilmemiş bir değişken kullanmak cazip gelebilir. Bir örneğe tekrar bakalım:

```
setTimeout(stopTimer, 3600000);
```

Sorun ortada. Bildirilmemiş 3600000 değişkeni ne anlama geliyor ve stopTimer çalıştırılmadan önce bu zaman aşımı ne kadar süreyle geri sayılacak? JavaScript'te zamanın milisaniye cinsinde yazıldığını bilseniz bile bir hesap makinesine ihtiyaç vardır.

Şimdi açıklayıcı bir değişken ekleyerek bu kodu daha anlamlı hale getirelim:

```
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000;

setTimeout(stopTimer, MILLISECONDS_PER_HOUR);
```

Çok daha iyi, değil mi? Değişken açıklayıcı bir adla bildirilir ve bu kodu okurken herhangi bir hesaplama yapmanıza gerek yoktur.

Daha önce camelCase'i önerdiğimiz halde, bu değişkenin neden tamamı büyük harflerle bildirildiğini merak edebilirsiniz. Bu, programcının değişkenin gerçekten bir sabit olduğundan kesinlikle emin olduğu durumlarda kullanılacak bir kuraldır. Bir saatteki milisaniyelerin asla değişmeyeceğini biliyoruz, bu yüzden burada bu şekilde kullanımı uygundur.

# Girinti ve Satır Uzunluğu

**Girinti**

Şimdi daha fazla tartışacağımız konulara yönelme zamanı. Kod yazarken kodu girintilemek için sekme (tab) kullanan geliştiriciler ile boşluk (space) kullanmayı tercih eden geliştiriciler arasındaki savaş artık aslında [bir şakadan ibaret.](https://www.youtube.com/watch?v=SsoOG6ZeyUI)

Aslında, kodlama stilindeki bu tür tercihler (sekmeler mi yoksa boşluklar mı kullanılmalıdır) geliştirici topluluğu arasında uzun süredir devam eden bir espri kaynağı olmuştur ve büyük bir önemi olmayan ayrıntılar olarak kabul edilmiştir. Çoğu geliştirici, kodun okunabilir ve tutarlı olması daha önemli olduğunu kabul eder ve bu tür savaşları eğlenceli bir mesele olarak görür.

Kısaca önemli olan tutarlılıktır. Girinti yapmanın ve ona bağlı kalmanın bir yolunu seçin. Çeşitli JS stil kılavuzları farklı seçenekler önerir ve gerçekten biri diğerinden üstün değildir. Ek kaynaklarda birkaç popüler olanın bağlantıları verilmiştir.

**Satır Uzunluğu**

Tekrar belirtmek gerekirse, farklı kod stil rehberleri bu konularda farklı seçenekler önerebilir, ancak hepsi neredeyse her bir kod satırının uzunluğunu sınırlamanızı önerir.

Genel olarak, kodunuz, yaklaşık 80 karakterden daha uzun olan satırları manuel olarak bölerseniz daha kolay okunur olacaktır. Birçok kod düzenleyici, bu eşiği geçtiğinizde sizi uyaracak bir çizgiye sahiptir. Satırları manuel olarak bölerken, genellikle bir operatörün veya virgülün hemen sonrasında bölmeniz önerilir.

Ve devam çizgilerini biçimlendirmenin birkaç yolu vardır. Örneğin şunları yapabilirsiniz:

```
// Bu satır biraz fazla uzun
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// Bu şekilde biçimlendirebilirsiniz
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Ya da belki bu şekilde biçimlendirebilirsiniz
   let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                     howManyTacos + oneMoreReallyLongThing;
```

# Noktalı Virgül (Semicolon)

JavaScript'de noktalı virgüller (semicolon) çoğu zaman isteğe bağlıdır çünkü JS derleyicisi, noktalı virgülün ihmal edildiği durumlarda onları otomatik olarak ekler. Bu işlev, belirli durumlarda bozulabilir ve kodunuzda hatalara neden olabilir, bu nedenle noktalı virgül eklemeye alışmak daha iyidir.

Tekrar belirtmek gerekirse: tutarlılık en önemli şeydir.

# Yorumlar Hakkında

Yorumlar harika bir araçtır. Ancak her iyi araç gibi bunlar da kötü bir şekilde kullanılabilir. Özellikle kodlama yolculuğunun başında olan biri için kodun yaptığı her şeyi açıklayan yorumların olması cazip gelebilir. Bu iyi bir uygulama değildir. (Yani taş kağıt makas projesi çözümün dosyasında adım adım çözümün anlatıldığı yorum satırları mantıklı bir kullanım değildir, o projede o şekilde kullanmamın sebebi kodu inceleyen yeni geliştiricilerin ne yaptığımı/ne yapmaya çalıştığımı kolaylıkla anlayabilmesi için. Siz yorum satırlarını kurallarına uygun kullanmayı unutmayın!)

Daha sonra yorum yaparken karşılaşılan bazı yaygın tuzaklara ve bunların neden tuzak olduğunu öğreneceğiz.

**Git Kullanmanız Gerektiğinde Yorum Satırlarından Kaçının**

Git gibi bir sürüm kontrol sistemi kullanmak, kodun neden değiştirildiğini açıklamak için yorum eklemekten daha iyi bir yaklaşımdır. Git, kod değişikliklerini izlemenizi, geri almanızı ve işbirliği yapmanızı kolaylaştırır ve bu nedenle kod değişikliklerini takip etmek ve belgelendirmek için yorumlara ihtiyaç duymayabilirsiniz. Ancak, kodun karmaşıksa veya özel bir durumu açıklamak gerekiyorsa yine de yorum eklemek önemli olabilir. Önemli olan, gereksiz yorum eklemek yerine kodunuzu temiz ve anlaşılır tutmaktır.

Kodunuzda, yaptığınız değişiklikleri veya eklemeleri açıklayan yorumların olması cazip gelebilir.  

Örneğin:
```
/**
 * 2023-01-10: Removed unnecessary code that was causing confusion (RM)
 * 2023-03-05: Simplified the code (JP)
 * 2023-05-15: Removed functions that were causing bugs in production (LI)
 * 2023-06-22: Added a new function to combine values (JR)
 */
```

Burada sorun şu ki, değişiklikleri izlemek için zaten git gibi bir araca sahipsiniz. Örnekteki yorumları takip etmek bir angarya haline gelecek ve ne olduğuna dair eksik bir resme sahip olacaksınız. Dosyalarınız aynı zamanda oraya ait olmayan şişkinlikler de içerecektir.

Git kullanıldığında, tüm bu bilgiler depoda düzenli bir şekilde organize edilecek ve git log ile kolayca erişilebilecek.

Aynı durum artık kullanılmayan kodlar için de geçerlidir. Gelecekte tekrar ihtiyacınız olursa git taahhütlerinize dönmeniz yeterli. Başka bir şeyi test ederken bir şeyi yorumlamak elbette sorun değil, ancak bir kod parçasına ihtiyaç duyulmadığında onu silin. Dosyalarınızda buna benzer bir şey olmasın:

```
theFunctionInUse();
// oldFunction();
// evenOlderUselessFunction();
// whyAmIEvenHereImAncient():
```

**Nasıl Olduğunu Değil Neden Olduğunu Açıklayın**

Yorumların amacı kodunuzu kopyalayan pseudocode sağlamak değildir. İyi yorumlar bir kod parçasının arkasındaki nedenleri açıklar.

Bunu pratikte görmek için bir örneğe bakalım:

```
// Kötü Bir Örnek - yorum nedeni açıklamıyor, yalnızca ne olduğunu ve nasıl olduğunu açıklıyor.

// Bu fonksiyon i'nin değerini 1 artırır
function incrementI(i) {
  i = i + 1; // Add one to i
  return i;
}

// Biraz Daha İyi Bir Örnek - yorum nedeni açıklıyor.

// Bu fonksiyon, bir sonraki öğeye geçmek için endeksin değerini artırır.
function incrementI(i) {
  i = i + 1;
  return i;
}

// Harika Bir Örnek - kod gereken her şeyi anlatıyor.

function moveToNextElement(index) {
  index = index + 1;
  return index;
}
```

Kötü örnekte, yorumlar kodun ne yaptığını iki kez açıklıyor. Bunun için kodu okumanız yeterliydi, dolayısıyla yorumlar gereksiz. 

Biraz daha iyi olan örnekte, yorum fonskiyonun amacını netleştirir: bir sonraki öğeye geçmek. Bu iyi ama daha iyisini de yapabiliriz.

Harika olan örnekte hiçbir yoruma gerek yoktur. Tanımlayıcı fonksiyon ve değişken adlarının kullanılması ek açıklamalara olan ihtiyacı ortadan kaldırır. Oldukça hoş, değil mi?

Yine de bu, harika olan örnekteki kodun yorumlardan yoksun olması gerektiği anlamına gelmez. Çoğu durumda, iyi yerleştirilmiş yorumlar paha biçilemezdir. Görev bölümünde bağlantısı verilen makale bu konuyu daha derinlemesine ele alıyor. Yorumlardan kaçınmanızı istemiyoruz, sadece yorumların en iyi şekilde nasıl kullanıldığına dikkat etmenizi istiyoruz.

Bir yorumun iyi bir amaca hizmet ettiği son bir örneğe bakalım:

```

function calculateBMI(height, weight) {
    // BMI formülü, kilogram cinsinden ağırlığın metre cinsinden boyun karesine bölünmesiyle elde edilir.
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
```

Bu örnekteki yorum, "calculateBMI" adlı bir fonksiyonun üzerinde bulunuyor ve kodun ne yaptığını açıklıyor. Bu yorum, BMI'nin nasıl hesaplandığını basit bir şekilde açıklar ve okuyucunun yüksekliğin neden dönüştürülmesi gerektiğini ve aşağıdaki hesaplamanın ne yaptığını anlamasına yardımcı olur. Sadece doğru bir isimlendirme ile neredeyse bu noktaya kadar geldik ve ne yapmanın amaçlandığını anlamış olduk ancak bu nokta da yine de yorum kodumuza daha fazla netlik kazandırıyor.

# Sonuç Olarak

Artık bu fikirleri ele aldığımıza göre, başlangıçta paylaştığımız hatırlatmaya geri dönmekte fayda var. Tamamen temiz kod yazmaya çalışmayın, bu yalnızca hayal kırıklığına yol açacaktır. "Spagetti" kod yazmak yani karışık/düzensiz bir şekilde kod yazmak kaçınılmazdır, herkes bazen bunu yapar. Bu fikirleri aklınızda tutun; zamanla ve sabırla kodunuz daha temiz olmaya başlayacaktır.

Temiz kod yazmayı öğrenmek sürekli bir gelişme sürecidir. Odin Projesi'ni tamamlamanızın ötesine geçecek bir süreç. Bu dersin, bu yolculuk(temiz kod yazabilme yolculuğu) için bir başlangıç ​​noktası olması amaçlanıyor.

# Görev

- [Temiz kod ipuçları listesini inceleyin.](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

- [Bu makale](https://blog.codinghorror.com/coding-without-comments/) ve [bu makale](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/) kodunuzdaki yorumların rolü hakkında bilgiler içermektedir.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- [Temiz kod yazmak neden önemlidir?](https://www.theodinproject.com/lessons/foundations-clean-code#Introduction)

- [Kodunuzu temiz tutmanın 5 maddesini açıklayın.](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

- [İyi yorumlarla kötü yorumlar arasındaki fark nedir?](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz.

- [Güzel bir köşe yazısı](https://www.martinfowler.com/bliki/CodeAsDocumentation.html)

- [Airbnb JS stil kılavuzu](https://github.com/airbnb/javascript)

- [Anlatım için Kolayca Zincirlenebilir (Basamaklı) Yöntemler Oluşturun](https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/)