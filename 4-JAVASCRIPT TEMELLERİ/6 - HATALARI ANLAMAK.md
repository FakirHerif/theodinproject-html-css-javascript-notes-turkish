# Giriş

Hata mesajlarını okumak ve anlamak, bir geliştirici olarak gerekliliktir. İlk bakışta yeni başlayanların çoğu, hata mesajlarını "korkutucu" ve anlaması zor mesajlar olarak görür, aşina olmadıkları terimlerle karşılaşır ve anlaşılması zor gördükleri bu hata mesajlarından kaçınırlar. Ancak hata mesajları geliştiricilere bilgi hazinesi sunar ve onları çözmeniz gereken her şeyi size anlatır! 

Hata mesajlarını ve uyarıları korkusuzca analiz edebilmek; uygulamalarınızda etkili bir şekilde hata ayıklayabilmenizi, başkalarından anlamlı yardımlar alabilmenizi ve bir hatayla karşılaştığınızda ilerleme konusunda kendinizi güçlendirebilmenizi sağlar.

Özetle, hata mesajlarını okuyabilmek ve anlayabilmek geliştirici olmanın önemli bir parçasıdır.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- JavaScript hatalarının en az üç türünü adlandıracağız.
    - Referans Hatası (Reference Error)
    - Tanımsız Değişken Hatası (Undefined Variable Error)
    - Tip Hatası (Type Error)

- Bir hata mesajının kaynağını bulmamıza yardımcı olan iki bileşeni tanımlayacağız.
    - Hata mesajının içeriği: Hata mesajları, genellikle hangi dosya, satır ve sütunda hata olduğunu belirtir.
    - İstisna adı (Exception Name): Hata mesajının başlığı, hatanın türünü açıklar ve hatanın ne tür bir JavaScript hatası olduğunu gösterir.

- Hataları araştırmayı ve çözmeyi nasıl anlayacağımızı belirleyeceğiz. 

Hataları doğru bir şekilde anlamak ve çözmek, JavaScript geliştirme sürecinin önemli bir parçasıdır.

# Bir Hatanın Anatomisi

Hata (Error), JS dilinde yerleşik bir ad/tür ve mesajdan oluşan bir nesne türüdür. Hatalar, hatadan sorumlu kodu bulmanıza, bu hatayı neden aldığınızı belirlemenize ve hatayı çözmenize yardımcı olabilecek önemli bilgiler içerir.

**Not:** Bu dersteki tüm örnekler içinde yer alan kodları tarayıcının konsolunda çalıştırmalısınız.

Aşağıdaki kodu yazdığımızı varsayalım:
```
const a = "Hello";
const b = "World";

console.log(c);
```

Bu kod çalışacak, ancak bir hata üretecektir. Teknik anlamda buna "throwing" hatası denir. Bir hatanın ilk kısmı hatanın türünü görüntüler. Bu, nasıl bir hatayla uğraştığınıza dair ilk ipucunu sağlar. Dersin ilerleyen kısımlarında farklı hata türleri hakkında daha fazla bilgi edineceğiz. Bu örnekte bir ReferenceError'umuz var.

![Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/175b5ef2a1b4758a7b75f4ef43d7e27203e5707b/foundations/javascript_basics/understanding_errors/imgs/00.png)

Geçerli kapsam içinde bildirilmemiş ve/veya başlatılmamış bir değişkene başvurulduğunda ReferenceError alınır. Bizim durumumuzda hata mesajı, c'nin tanımlanmamasından dolayı hatanın oluştuğunu açıklıyor. Bu türdeki farklı hatalar, ReferenceError'a neyin sebep olduğuna bağlı olarak farklı mesajlara sahiptir. Örneğin, karşılaşabileceğiniz başka bir mesaj da ReferenceError: can't access lexical declaration 'X' before initialization. Görebildiğimiz gibi bu, yukarıdaki orijinal ReferenceError'umuzdan tamamen farklı bir nedene işaret ediyor. Hem hata türünü hem de hata mesajını anlamak, hatayı neden aldığınızı anlamak açısından çok önemlidir.

Hatanın bir sonraki kısmı bize hatayı bulabileceğiniz dosyanın adını (script.js) ve ayrıca satır numarasını verir. Bu, kodunuzdaki sorunlu satıra kolayca gitmenizi sağlar. Burada hata, hata mesajının altında script.js:4 adresindeki metni içeren bir bağlantı olarak görüntülenen script.js dosyasının dördüncü satırından kaynaklanmaktadır. Bu bağlantıya tıklarsanız çoğu tarayıcı, Geliştirici Araçları'nın Kaynaklar sekmesinde kodun tam satırına ve komut dosyanızın geri kalanına gider. Bazen tarayıcınızın konsolu, hatanın oluştuğu satırdaki sütunu (veya karakteri) de görüntüler. Örneğimizde bu, script.js:4:13 konumunda olacaktır.

Hatanın bir diğer önemli kısmı da yığın izlemedir(stack trace). Bu, uygulamanızda hatanın ne zaman oluştuğunu ve hataya yol açan hangi işlevlerin çağrıldığını anlamanıza yardımcı olur.

Örneğin, aşağıdaki gibi bir kodumuz varsa:
```
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

Print() işlevimiz, şu anda bildirilmemiş olan c adlı bir değişkeni döndüren add() öğesini çağırıyor. Bu yüzden resimdeki hatayı alacağız:

![Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/01.png)

Yığın izlemesi bize şunları söylüyor:
- c, 5. satırda bildirilen add() kapsamında tanımlanmadı.
- add(), 9. satırda bildirilen print() tarafından çağrıldı.
- print()'ın kendisi 12. satırda çağrıldı.

Böylece yığın izlemesi, bir hatanın gelişimini kökenine kadar izlemenizi sağlar; burada add() bildirimi yer alır.

# Yaygın Hata Türleri

Bunlar karşılaşacağınız en yaygın hatalardan bazılarıdır, dolayısıyla bunları anlamak önemlidir.

**SyntaxError (Sözdizimi Hatası)**

Çalıştırmaya çalıştığınız kod doğru şekilde yazılmadığında, yani JavaScript'in gramer kurallarına uygun olarak yazılmadığında sözdizimi hatası oluşur.

Örnek
```
function helloWorld() {
  console.log "Hello World!"
}
```

Bu örnekte console.log() için parantezleri unuttuğumuz için aşağıdaki hatayı alacağız!

![Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/02.png)

Ayrıca [bu bağlantıdan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) detaylı bir şekilde Syntax Error'un ne olduğu hakkında daha fazla bilgiye ulaşabilirsiniz.

**ReferenceError (Referans Hatası)**

Bu dersteki ilk örnekte referans hatalarını ele aldık, ancak bunların, referans vermeye çalıştığınız değişkenin mevcut olmaması (geçerli kapsam dahilinde) veya yanlış yazılması nedeniyle ortaya çıktığını hatırlamak önemlidir!

Ayrıca [bu bağlantıdan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) detaylı bir şekilde Reference Error'un ne olduğu hakkında daha fazla bilgiye ulaşabilirsiniz.

**TypeError (Tür Hatası)**

Bu hatalar birkaç farklı nedenden dolayı alınır, MDN'ye göre şu durumlarda TypeError alınabilir:

- Bir fonksiyon veya operatörün beklediği türle uyumsuz bir veriyi işlemeye veya işleme sokmaya çalışması durumunda. Örneğin; bir fonksiyonun bir sayıyı alması gerekiyor ve ona bir metin dizesi veriyoruz, bu durumda fonksiyonun beklediği türle uyumsuz bir işlem oluyor ve bu nedenle bir hata meydana geliyor.

- Değiştirilemeyen bir değeri değiştirmeye çalışırken.

- Bir değeri uygunsuz bir şekilde kullanmaya çalışırken.

Bu örnekteki gibi, bir mesaj oluşturmak için birleştirmek istediğimiz iki değişkenimiz olduğunu varsayalım:
```
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

![Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png)

İşte, burada str1.push'un bir fonksiyon olmadığını belirten bir mesaj içeren TypeError alıyoruz. Bu, öğrencilerin kafasını karıştıran yaygın bir hata mesajıdır çünkü .push() fonksiyonunun kesinlikle bir fonksiyon olduğunu biliyor olabilirsiniz (örneğin, onu daha önce dizilere öğe eklemek için kullandıysanız). Ancak anahtar nokta; .push() bir string yöntemi değil, bir array yöntemidir. Dolayısıyla string yöntemi olarak kullanabileceğiniz "bir fonksiyon değildir". .push() yöntemini uygun bir string yöntemi olan .concat() ile değiştirirsek, kodumuz amaçlandığı gibi çalışır! TypeError ile karşılaşıldığında akılda tutulması gereken iyi bir not; "bir yöntemi veya işlemi çalıştırmaya çalıştığınız veri türünü dikkate almak." Bunu göz önüne aldığınız da muhtemelen yöntemin veya işlemin düşündüğünüz türle uyumlu olmadığını göreceksiniz.

Ayrıca [bu bağlantıdan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) detaylı bir şekilde Type Error'un ne olduğu hakkında daha fazla bilgiye ulaşabilirsiniz.

# Hataları Çözmeye Yönelik İpuçları

Bu noktada bu hataları nasıl çözebileceğimizi merak ediyor olabilirsiniz.

- Hatayı dikkatlice okuyun ve kendi başınıza anlamaya çalışın.

- Sonra hatayı Google'da arayın! Muhtemelen StackOverflow'ta veya içerdiği belgelerde bir düzeltme veya açıklama bulabilirsiniz. Tam olarak bulamasanız bile en azından bu hatayı neden aldığınıza dair daha fazla netlik elde edeceksiniz.

- Hata ayıklayıcıyı(debugger) kullanın! Daha önce de belirtildiği gibi, hata ayıklayıcı daha kapsamlı sorun giderme işlemleri için harikadır ve geliştiriciler için kritik önem taşıyan bir araçtır. Kesme noktalarını ayarlayabilir, uygulamanızın yürütülmesi sırasında herhangi bir noktada verilen herhangi bir değişkenin değerini görüntüleyebilir, kodu satır satır ilerletebilir ve daha fazlasını yapabilirsiniz! Son derece değerli ve yararlı bir araçtır ve her programcının onu nasıl kullanacağını bilmesi gerekir. [Bu eğitimde Chrome Hata Ayıklayıcı ayrıntılı olarak anlatılmaktadır.](https://developer.chrome.com/docs/devtools/javascript/) **Uyarı:** Eğitimin 3. adımının 4. noktasında devtools, işlevin bildirimi yerine ikinci satırda duraklayacaktır. Merak etmeyin bu beklenmekte olan bir durum.

- Konsolu kullanın! console.log() hızlı hata ayıklama için popüler bir tercihtir. Daha kapsamlı sorun giderme işlemleri için hata ayıklayıcıyı kullanmak daha uygun olabilir, ancak console.log() işlevini kullanmak, fonksiyonlarınızda adım atmaya gerek kalmadan anında geri bildirim almak için harikadır. Ayrıca console.table(), console.trace() ve daha fazlası gibi başka yararlı yöntemler de vardır! [Burada ek yöntemleri bulabilirsiniz.](https://www.w3schools.com/jsref/obj_console.asp)

# Hataların ve Uyarıların Karşılaştırılması (Errors vs Warnings)

Son olarak birçok kişi uyarılarla karşılaşıyor ve bunları hata olarak değerlendiriyor. Hatalar, programınızın yürütülmesini veya çalıştırmayı denediğiniz işlemi durduracak ve daha fazla işlem yapılmasını engelleyecektir. Öte yandan uyarılar, programınızın çalışma zamanında çökmesine neden olmayabilecek veya hiç çökmeyebilecek olası sorunlar hakkında size fikir veren mesajlardır! Bu uyarıları mümkünse ve mümkün olan en kısa sürede ele almanız gerekir; ancak uyarılar, hatalar kadar önemli değildir ve bilgilendirici olma olasılıkları daha yüksektir. Uyarılar genellikle sarı renkte gösterilirken, hatalar genellikle kırmızı renkte gösterilir. Bu renkler bir kural olmasa da, hangi platformda karşılaşırsanız karşılaşın, sıklıkla ikisi arasında görsel bir farklılık olacaktır.

- **Error (Hata):** Ciddi sorun, kodun çalışmasını engeller, hemen düzeltilmesi gerekir.
- **Warning (Uyarı):** Sorun var, ancak uygulama çalışabilir, düzeltilmesi önerilir ancak acil değil.

Kısaca, "error" (hata) terimi daha ciddi ve hemen müdahale gerektiren sorunları ifade ederken, "warning" (uyarı) terimi daha hafif sorunları veya kod kalitesiyle ilgili önerileri ifade eder.

# Görev

- Bu dersi [MDN üzerinden](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong) çalışın. Kasıtlı hatalar içeren başlangıç ​​kodlarını indirdiğinizden emin olun.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- [TypeError almanızın üç nedeni nedir?](https://www.theodinproject.com/lessons/foundations-understanding-errors#type-error)

- [Bir hata(error) ile uyarı(warning) arasındaki temel fark nedir?](https://www.theodinproject.com/lessons/foundations-understanding-errors#errors-vs-warnings)

- [Bir hatayı çözmek için kullanabileceğiniz yöntemler nelerdir?](https://www.theodinproject.com/lessons/foundations-understanding-errors#tips-for-resolving-errors)

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz.

- [MDN Javascript Hataları Referansı](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)