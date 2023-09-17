# Giriş

Doğrudan JavaScript'e dalalım !!!

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Bir değişken nasıl tanımlanır?
Bir değişken adından sonra var, let veya const anahtar kelimesini kullanarak.

- Bir değişkeni tanımlamanın üç farklı yolu nedir?
var, let ve const.

- Hangi durumda hangi değişkeni kullanmalısınız?
Değişkenin değeri değişmeyecekse const, değer değişecekse let kullanılır ve var modern JavaScript'te genellikle kullanılmaz.

- Değişken adlarını belirleme kuralları nelerdir?
Değişken adları harf, alt çizgi veya dolar işareti ile başlamalıdır ve ardından harf, rakam, alt çizgi veya dolar işareti kullanılabilir.

- Operatörler, operandlar ve işlemler nedir?
Operatörler, operandlar üzerinde (değerler veya değişkenler) işlemler gerçekleştiren sembollerdir. İşlemler, operandlar üzerinde gerçekleştirilen eylemleri ifade eder.

- Birleştirme nedir ve sayıları ve metinleri birleştirdiğinizde ne olur?
Birleştirme, metinleri bir araya getirme işlemidir. JavaScript'te bir sayıyı bir metinle topladığınızda, sayıyı metin olarak dönüştürür ve metin birleştirme işlemi gerçekleştirir.

- JavaScript'te farklı operatör türleri nelerdir?
Aritmetik, atama, karşılaştırma, mantıksal, bit düzeyinde ve daha fazlası.

- == ve === arasındaki fark nedir?
==, tür dönüşümü sonrası eşitliği kontrol eder; ===, sıkı eşitliği tür dönüşümü olmadan kontrol eder.

- Operatör öncelik değerleri nelerdir?
Operatörlerin bir ifadede nasıl değerlendirileceğini belirler.

- Arttırma/azaltma operatörleri nedir?
++ (arttırma) ve -- (azaltma) bir değişkeni 1 arttırma veya azaltma işlemlerini gerçekleştirir.

- Bunları önek ve sonek olarak eklemek arasındaki fark nedir?
Önek eklenmesi, mevcut değeri kullanmadan önce değişkeni artırır veya azaltır; sonek eklemesi ise mevcut değeri kullanıldıktan sonra artırır veya azaltır.

- Atama operatörleri nelerdir?
Değerleri değişkenlere atayan operatörlerdir. Örnekler arasında =, +=, -= bulunur.

- Unary Plus Operator nedir?
Unary Plus operatörü, bir değeri sayıya dönüştürmek için kullanılabilir.

# JavaScript Kodu Nasıl Çalıştırılır?

JavaScript Temelleri derslerinin çoğunda yazacağımız js kodları tarayıcı üzerinden çalıştırılacaktır. JavaScript Temelleri ve NodeJS derslerinden sonraki derslerde Js'nin tarayıcı ortamı dışında nasıl çalıştırılacağı gösterilecektir.
Bu derslerin dışında, şimdilik aksi belirtilmedikçe Js'yi tarayıcınızda varsayılan olarak çalıştırmalısınız, aksi takdirde beklenmeyen hatalarla karşılaşabilirsiniz.

Js kodları oluşturmanın en basit yolu, HTML dosyanızın içinde js kodlarınızı yazmaktır. Bir HTML dosyası oluşturarak ve body tag'leri arasına script tag'leri içinde js kodlarınızı yazmaya başlayabilirsiniz:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```
Bu dosyayı kaydedip bir web tarayıcısında açın (bunu yapmak için Visual Studio Code'da "Live Server"ı kullanabilirsiniz!) ve ardından boş web sayfasına sağ tıklayıp "İncele" veya "Denetle"yi seçerek tarayıcının konsolunu açın. 'Geliştirici Araçları' kısmında 'Konsol' sekmesini bulup seçin; burada 'console.log' bildirimimizin çıktısını göreceksiniz.

**Not:** console.log(), tarayıcınızdaki geliştirici konsoluna bir şeyler yazdırmanızı sağlayan komuttur. Bunu, aşağıdaki makalelerden ve alıştırmalardan herhangi birinin sonuçlarını konsola yazdırmak için kullanabilirsiniz. Bu ve gelecekteki derslerdeki tüm örneklerle birlikte kodlama yapmanızı öneririz.


Bir web sayfasına JavaScript eklemenin başka bir yolu da harici bir komut dosyası kullanmaktır. Bu, harici CSS belgelerini web sitenize bağlamaya çok benzer.
```
<script src="javascript.js"></script>
```

JavaScript dosyaları, stil sayfaları için oluşturulan .css uzantısına benzer bir yapıdadır ve JavaScript için .js uzantısı kullanılır. Daha karmaşık komut dosyaları için harici JavaScript dosyaları kullanılır.

# Değişkenler

Değişkenleri kodunuzdaki veriler için basitçe "depolama kapları" olarak düşünebilirsiniz. 

![Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/d39eaf2ca95e80705f703bb218216c10508f5047/foundations/javascript_basics/fundamentals-1/imgs/00.png)

Yakın zamana kadar JavaScript'te değişken oluşturmanın tek bir yolu vardı; 'var' ifadesi. Ancak en yeni JavaScript sürümlerinde iki yolumuz daha var: 'let' ve 'const'. 

- [Bu bağlantıdaki değişken eğitimi](https://javascript.info/variables) bilmeniz gereken her şeyi açıklayacaktır! Bilginin pratik yapmadan kalıcı olmayacağını unutmayın!

Biraz önce bundan bahsetmiştik, ancak tekrar belirtmekte fayda var: let ve const, JavaScript'te değişkenleri bildirmenin yeni yollarıdır. İnternetteki birçok derste (ve kodda) muhtemelen 'var' ifadeleriyle karşılaşacaksınız. Bunun sizi rahatsız etmesine izin vermeyin! 'Var' da doğası gereği yanlış olan hiçbir şey yoktur ve çoğu durumda var ve let aynı şekilde davranır. Ancak bazı durumlarda 'var' ın davranışı beklediğiniz gibi olmaz. Şimdilik sadece let (ve const)'a bağlı kalın.

# Sayılar

Sayılar programlama mantığının yapı taşlarıdır! Aslında, en azından temel matematik bilgisi içermeyen herhangi bir programlamayı düşünmek zordur… dolayısıyla sayıların nasıl çalıştığını bilmek elbette oldukça önemlidir. Aynı zamanda oldukça basittir.

- W3Schools'da yer alan [sayılar dersinden](https://www.w3schools.com/js/js_numbers.asp) sonra gelen [bu aritmetik operatörler dersi](https://www.w3schools.com/js/js_arithmetic.asp), JavaScript'te sayılarla neler başarabileceğinize dair iyi bir giriş niteliğindedir.

- [Bu MDN makalesi](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) aynı bilgiyi biraz farklı bir bakış açısıyla ele alırken, aynı zamanda bazı temel matematiğin JavaScript'te nasıl uygulanacağını da öğretiyor.  Sayılarla yapabileceğiniz çok daha fazlası var, ancak şu anda ihtiyacınız olan tek şey bu.

- [Javascript'teki operatörler hakkındaki bu makaleyi](https://javascript.info/operators) baştan sona okuyun (ve birlikte kodlayın!). Sayfanın alt kısmındaki Görevleri yapmayı unutmayın! Bu size JavaScript'te sayılarla (diğer şeylerin yanı sıra!) neler başarabileceğiniz konusunda oldukça iyi bir fikir verecektir.

# Görev

Aşağıdaki alıştırmaları yapmayı deneyin ve console.log() kullanmayı unutmayın!

- 2 sayıyı bir araya getirin! (html dosyanızın içinde sadece console.log(23 + 97) yazın)

- 6 farklı sayıdan oluşan rakamları oluşturun.

- Bu denklemin çözümünü yazdırın: (4 + 6 + 9) / 77
    - Cevap yaklaşık 0,24675 olmalıdır

- Değişkenleri kullanalım!
    - Bu ifadeyi script etiketinin en üstüne yazın: let a = 10
    - Konsolda console.log(a) çıktısı 10 olmalı
    - Konsolda şunu deneyin: 9 * a
    - ve bunu deneyin: let b = 7 * a (undefined değerini döndürür bu tarayıcınız üzerinde ki konsola yazdırdığınız zaman olacaktır.) ve ardından console.log(b) yazın.

- Şimdi bunları deneyin!
    - 57 değerine sahip max adlı bir const değişkeni tanımlayın
    - Başka bir 'actual' (gerçek) değişkeni tanımlayın: max - 13 olarak
    - Başka bir değişken yüzde(percentage) tanımlayın: actual/max olarak
    - Konsolda 'percentage' (yüzde) yazdırıp Enter tuşuna basarsanız 0,7719 gibi bir değer görmelisiniz.

- Bu şekilde biraz daha pratik yapmaya devam edin. Daha sonra, bu sayıların ve diğer tüm şeylerin web sayfasında görünmesini nasıl sağlayacağımızı öğreneceğiz, ancak tüm bu mantık aynı kalacak, bu yüzden devam etmeden önce bu konuda rahat olduğunuzdan emin olun.

**Not:** JavaScript kodunu konsolda çalıştırdığınızda, konsol kodun yürütülmesinin sonucunu (bir dönüş ifadesi olarak adlandırılır) yazdırır. Bu konuyla ilgili daha fazla bilgiyi ilerleyen derslerde öğreneceksiniz, ancak şu an dikkat etmemiz gereken şey; örneğin, let b = 7 * a gibi bir ifade 'undefined' döndürür ve bu nedenle aynı satırda bir değişkene değer atayamaz ve bu değeri okuyamazsınız. Yani, bir değişkeni tanımladığınızda ve bu değişkene bir değer atamadığınızda, JavaScript bu değişkeni 'undefined' olarak kabul eder. Bu durumu tarayıcınız üzerindeki konsol'da deneyerek gözlemleyebilirsiniz.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Üç farklı değişken tanımlama yöntemini açıklayın.

- Üç değişken tanımlama yönteminden hangisini kullanmaktan kaçınmalısınız ve neden?

- Değişkenleri adlandırırken hangi kurallara uymalısınız?

- Sayıları ve metinleri bir araya getirdiğinizde ne olur?
    
- Modül (%), veya Kalan (%), operatörü nasıl çalışır?
    
- == ve === arasındaki fark nedir?

- Ne zaman 'NaN' sonucu alırsınız?

- Bir sayıyı nasıl arttırıp azaltırsınız?

- Önek ve sonek arttırma/azaltma operatörleri arasındaki fark nedir?
    
- Operatör önceliği nedir ve JavaScript'te nasıl ele alınır?
    
- Geliştirici araçlarına ve konsola nasıl erişim sağlanır?
    
- Bilgileri konsolda nasıl görüntülersiniz?

- Unary Plus operatörü nedir? Örneğin: +”10” durumunda nasıl bir çıktı alırsınız?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. 

- [Eski 'var' başlıklı bu makalede var ve let arasındaki farkları inceleyebilirsiniz.](https://javascript.info/var)