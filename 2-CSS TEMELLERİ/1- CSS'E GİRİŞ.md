# Giriş

Önceki derslerde bir web sayfasının nasıl yapılandırıldığını belirleyen isklet işlevi gören HTML'in nasıl yazılacağını öğrendiniz. Bir sonraki adım ise bu temel yapının stil verilerek nasıl iyi görüneceğini sağlamaktır. CSS tam olarak bunun içindir. 

 Sonraki birkaç derste, bazı temel CSS kavramları olduğuna inandığımız kavramlara, ister yeni başlıyor olun, ister sadece bilgileri tazelemeye ihtiyaç duyuyor olun farketmez kısaca herkesin en başından bilmesi gereken konulara odaklanacağız.

 # Derse Genel Bakış

 Bu bölümde bu derste öğreneceğiniz konulara genel bir bakış yer almaktadır.

 - CSS ile HTML'ye stiller ekleyin.
 - Sınıf(class) ve kimlik(id) niteliklerinin nasıl kullanılacağını öğrenin
 - Doğru seçicileri kullanarak belirli elementlere stiller ekleyin.

 # Temel Sözdizimi (Basic Syntax)

En temel düzeyde CSS çeşitli kurallardan oluşur. Bu kurallarda CSS: bir seçiciden(selector), süslü parantez içine alınmış; özellikten(property) ve bu özelliğin sahip olduğu bir değerden(value) oluşur. Örnek;
```
div.bold-text {
    font-weight: 700;
}
```
div.bold-text = seçici(selector)
font-weight = özellik(property)
700 = değer(value)
[Görsel İçin Tıklayınız](https://cdn.statically.io/gh/TheOdinProject/curriculum/05ce472eabf8e04eeb2cc9139e66db884074fd7d/foundations/html_css/css-foundations/imgs/00.jpg)

**Not:** **"div"** etiketi HTML'in temel etiketlerinden biridir. Bu sadece boş bir kapsayıcıdır. Genel olarak "h1" veya "p" gibi etiketleri kullanmak daha iyidir ancak CSS hakkında daha fazla bilgiye sahip oldukça oluşturduğumuz etiketlerin bazı durumlarda bir kapsayıcıya ihtiyacı olduğunu göreceksiniz. Yani div etiketi ile diğer etiketlerimizi saracağız. Bunun ne zaman ve ne nedenle kullanılacağı konusunda ilerleyen derslerde daha derinlemesine bilgi verilecektir.

# Seçiciler(Selectors)

 HTML üzerinde belirli elementleri seçmek ve bu elementlerin görünümüne stil eklemek için kullanılan kurallardır. CSS seçicileri, belirli elementleri hedeflemek ve onlara stil uygulamak için kullanılır. CSS'de kullanılan birden çok seçici vardır.

- **Evrensel Seçici(Universal Selector)**
Evrensel seçici her türdeki ögeleri seçecektir, dolayısıyla adı "evrensel"dir ve bunun sözdizimi basit bir yıldız işaretidir. Örneğin:
```
* {
    color: purple;
}
```
Örnekte gördüğümüz üzere bir **"*"** yıldız işareti kullandık ve bu durumda HTML'imizdeki tüm elementlerimize bu stil uygulanacaktır, yani tüm elementlerimizin rengi mor olacaktır.

- **Tür Seçiciler(Type Selectors)**
Bir tür seçici (veya element seçici), verilen element türünün hepsini kapsayacaktır. Örneğin aşağıdaki gibi bir HTML içeriğimiz olsun:
```
<div>Merhaba, Dünya!</div>
<div>Tekrar Merhaba!</div>
<p>Merhaba...</p>
<div>Tamam, görüşürüz.</div>
```
Bu HTML içeriğimizi CSS ile stillendirelim ve stil vereceğimiz etiket ise **div** olsun:
```
div {
    color: red;
}
```
Bu durumda **div** etiketine sahip olan tüm ögelerimiz seçilecek ve rengi kırmızı olacaktır. (yani; "Merhaba, Dünya!" / "Tekrar Merhaba!" / "Tamam, görüşürüz." bu 3 ögemizin rengi kırmızı olacaktır. Ancak "Merhaba..." yazımız kırmızı olmayacaktır çünkü bu **p** etiketine sahiptir ve div etiketine sahip değildir.)

- **Sınıf Seçiciler(Class Selectors)**
Sınıf seçiciler, yalnızca bir HTML elementine yerleştirdiğiniz bir niteliktir. Örneğin; div etiketimize bir class atayalım:
```
<div class="selam">Herkese Merhaba!</div>
<div class="bye">Görüşürüz.</div>
```
Örnekte gördüğümüz üzere div etiketlerimizi oluşturduk ve onlara farklı birer class atadık. Şimdi "Herkese Merhaba!" içeriğimizin rengini CSS ile kırmızı yapalım:
```
.selam {
    color: red;
}
```
Evet bu örnekte dikkat etmemiz en temel şey; class'ımız olan **"selam"** kelimesini yazdık ve başına bir **.** (nokta) ekledik. Diğer dikkat etmemiz gereken husus ise; "Herkese Merhaba!" ve "Görüşürüz." içeriklerimizin her ikisi de **div** etiketine sahip olmasına rağmen sadece "Herkese Merhaba!" içeriğimiz kırmızı olacak çünkü **div** etiketlerimiz farklı class'lara sahipler ve bu seçim yaparken işimizi kolaylaştırıyor. İstediğimiz her içeriği farklı bir şekilde stillendirebiliriz, Örneğin, "Herkese Merhaba!" içeriğimizin rengini kırmızı ve "Görüşürüz." içeriğimizin rengini mavi yapmak istediğimizi düşünelim, bu durumda iki farklı class atadığımız için işimiz çok kolay:
```
.selam {
    color: red;
}
.bye {
    color: blue;
}
```
**NOT:** Class atarken büyük ve küçük harflere dikkat etmeliyiz çünkü seçici büyük/küçük harflere duyarlıdır. Ve unutmamamız gereken diğer nokta ise aralarda boşluk kullanmamalıyız. Bunun yerine kelime aralarına **-**(kısa çizgi) kullanabiliriz. Ayrıca türkçe karakterler kullanmamalıyız.

- **Kimlik Seçiciler(ID Selectors)**
ID seçicilerimiz class seçicilerine benzer yapıya sahiptir. Aralarındaki en önemli fark ise; bir element yalnızca bir id'ye(kimliğe) sahip olabilir. Ve Class için **"*"**(yıldız) kullanırken ID için ise **"#"** kullanıyoruz.
```
<div id="baslik">Bu bir başlıktır.</div>
```

```
#baslik {
    color:red;
}
```
Evet burada id nin nasıl oluşturulduğunu ve css içinde nasıl seçildiğini görmüş olduk. Yine de genellikle class'ların yeterli olduğu durumlarda class'ları kullanmalıyız ve gereğinden fazla id atamamalıyız.

- **Gruplandırma Seçiciler(The Grouping Selectors)**
Peki biraz önce gördüğümüz örnekte iki farklı class'a ait içeriğimizin rengini kırmızı ve mavi yapmıştık, iki farklı süslü parantez açarak ayrı ayrı stil verdik. Peki her iki class'ımızı da kırmızı yapmak istersek bu durumda ne yapmamız gerekecek? Tekrar iki farklı süslü parantez içinde renkleri kırmızı olarak tanımlayabiliriz evet ama yüzlerce class'ımız olduğunu düşünsenize... Bunların hepsi için ayrı ayrı süslü parantez açmak bize bir hayli zaman kaybettirirdi. Bunun yapmanın daha kolay bir yolu var:
```
<div class="selam">Herkese Merhaba!</div>
<div class="bye">Görüşürüz.</div>
```

```
.selam,
.bye {
    color: red;
}
```
İşte bu kadar... class'larımızı yazıp aralarına bir virgül koyarak tek bir süslü parantez içinde yapmak istediğimiz işlemi gerçekleştirebiliriz.

- **Zincirleme Seçiciler(Chaining Selectors)**
Seçicileri kullanmanın başka bir yolu da onları herhangi bir ayrım yapmadan liste halinde zincirlemektir. Diyelim ki aşağıdaki HTML'e sahibiz: 
```
<div>
  <div class="subsection header">Latest Posts</div>
  <div class="subsection preview">This is where a preview for a post might go.</div>
</div>
```
Gördüğünüz gibi "subsection" sınıfına sahip iki öge var ve bu ögelerin her birine özgün stiller uygulamak istiyoruz, ancak "header" sınıfına sahip olan ögeye yalnızca ayrı bir kural uygulamak istiyoruz. İşte bu durumu sağlamak için CSS'de iki sınıf seçicisini bir araya getirebileceğimiz bir örnek:
```
.subsection.header {
  color: red;
}
```
".subsection.header", hem "subsection" sınıfına hem de "header" sınıfına sahip olan herhangi bir ögeyi seçer. Dikkatinizi çekmek istediğim önemli bir nokta, ".subsection" ve ".header" sınıf seçicileri arasında herhangi bir boşluk bulunmamasıdır. Bu sözdizimi, birden fazla seçiciyi birleştirmek için kullanılabilir ve bu birleşik seçiciler, farklı kombinasyonlarda kullanılabilir. Ancak birden fazla tür seçicisini bir araya getirmek için aynı sözdizimi kullanılmaz.

Yani; ".subsection.header" ifadesi, "subsection" ve "header" sınıflarına aynı ögede sahip olan ögeleri hedefler ve bu ögelere yalnızca bu seçicide belirtilen özel kuralları uygular.

Ayrıca, bir sınıf(class) ve bir kimlik (ID) zincirlemek için de kullanılabilir, 
Bu ifade, bir sınıf seçicisi olan ".class" ile bir kimlik seçicisi olan "#id"yi bir araya getirir ve bu kombinasyonu hedeflemek için kullanılabilir. Bu özellikle özelleştirilmiş stiller veya özel davranışlar gerektiren belirli ögeleri hedeflemek için kullanışlı olabilir:
```
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```
Yukarıdaki iki ögeyi alıp aşağıdakilerle birleştirebilirsiniz:
```
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```
Genel olarak, bir öge aynı anda iki farklı türde olamayacağı için iki tür seçiciyi birleştiremezsiniz. Örneğin, **div** ve **p** gibi iki tür seçiciyi birleştirmek, **divp** adında bir seçici oluşturur ve bu seçici, mevcut olmayan bir **divp** ögesini bulmaya çalışır, bu da işe yaramaz.

Bu nedenle, tür seçicilerini bir araya getirmek yerine, sınıf, kimlik veya diğer özellik seçicileri ile bir araya getirme eğilimindesiniz. Bu şekilde, belirli özelliklere sahip ögeleri hedefleyebilir ve onlara özgün stiller veya davranışlar uygulayabilirsiniz.

- **Torun Birleştirici(Descendant combinator)**
Birleştiriciler (combinators), seçicileri gruplama veya zincirleme yöntemlerinden farklı bir şekilde birleştirmemize izin verir, çünkü seçiciler arasındaki ilişkiyi gösterirler. Toplamda dört tür birleştirici bulunur, ancak şu anda size yalnızca "descendant combinator" (torun birleştirici) olarak adlandırılanı göstereceğiz. Bu birleştirici, CSS'de seçiciler arasında bir boşluk bırakarak temsil edilir. Bir torun birleştiricisi, son seçiciyle eşleşen ögeleri yalnızca önceki seçiciyle eşleşen bir üst ögesi (parent, grandparent, vb.) olan ögeleri seçmek için kullanır.

Örneğin, .ancestor .child gibi bir ifade, "child" sınıfına sahip bir ögeyi yalnızca "ancestor" sınıfına sahip bir üst ögeye sahipse seçer. Başka bir deyişle, "child", ne kadar derin olursa olsun, "ancestor" ögesinin içine gömülü ise seçilir. Aşağıdaki örneğe bakarak verilen CSS kuralına dayanarak hangi ögelerin seçileceğini belirleyebilir misiniz?
```
<div class="ancestor">
  <!-- A -->
  <div class="contents">
    <!-- B -->
    <div class="contents"><!-- C --></div>
  </div>
</div>

<div class="contents"><!-- D --></div>
```

```
.ancestor .contents {
  
}
```
Yukarıdaki örnekte, "contents" sınıfına sahip ilk iki öge (B ve C) seçilirken, son öge (D) seçilmez. Tahmininiz doğru muydu?

Gerçekte bir kurala ekleyebileceğiniz birleştirici sayısına bir sınırlama yoktur, bu nedenle .one .two .three .four tamamen geçerli olacaktır. Bu, bir ögenin dört sınıfa sahip olduğunu seçer, ancak bu ögenin bir üst ögesi üç sınıfa sahipse, bu üst ögenin de kendi üst ögesinin iki sınıfa sahip olduğu, vb. durumları hedefler. Bununla birlikte, genellikle bu kadar fazla iç içe geçmiş ögeyi hedeflemeye çalışmaktan kaçınmak istersiniz, çünkü bu karmaşık ve uzun hale gelebilir ve özgüllük (specificity) konusunda sorunlara neden olabilir.

Özetle, birleştiriciler, bir ögenin başka bir öge ile olan ilişkisini belirtmek için kullanılır ve birçok kombinatörü bir arada kullanmak, kodun karmaşıklığını artırabilir ve özgüllük sorunlarına yol açabilir. Bu nedenle, ihtiyacınıza uygun şekilde kullanmalısınız.

- **Başlangıç için kullanabileceğiniz CSS özellikler**
Başlangıçta sıkça kullanacağınız veya en azından sık kullanacağınız bazı CSS özellikleri bulunmaktadır. Aşağıda, sizi başlatmak için kullanışlı olabilecek bazı özellikleri tanıtacağım. Ancak bu liste tamamen kapsamlı değildir. Aşağıdaki özellikleri öğrenmek, başlamanıza yardımcı olmak için yeterli olacaktır:

- **color:** Metin ve arka plan renklerini belirlemek için kullanılır. Örneğin: color: red; veya background-color: #FFFFFF;. (ayrıca; color: rgb(100, 0, 127); ve color: hsl(15, 82%, 56%); )

- **font-family**: Metinlerin yazı tipini belirlemek için kullanılır. Örneğin: font-family: Arial, sans-serif;.

- **font-size:** Metin boyutunu ayarlamak için kullanılır. Örneğin: font-size: 16px;.

- **font-weight:** Metin kalınlığını belirlemek için kullanılır. Örneğin: font-weight: bold;.

- **text-align:** Metin hizalamasını belirlemek için kullanılır. Örneğin: text-align: center;.

- **padding:** Öğenin iç kenar boşluğunu ayarlamak için kullanılır. Örneğin: padding: 10px;.

- **margin:** Öğenin dış kenar boşluğunu ayarlamak için kullanılır. Örneğin: margin: 20px;.

- **border:** Öğenin sınırlarını oluşturmak için kullanılır. Örneğin: border: 1px solid #000;.

- **width ve height:** Bir öğenin genişliği ve yüksekliğini belirlemek için kullanılır. Örneğin: width: 200px; veya height: 150px;.

- **display:** Öğenin görüntülenme türünü belirlemek için kullanılır (örneğin, "block", "inline", "flex", "grid" vb.).

- **position:** Öğenin konumunu belirlemek için kullanılır (örneğin, "relative", "absolute", "fixed" vb.).

- **float:** Öğenin yüzme davranışını kontrol etmek için kullanılır.

- **background-image:** Arka plan resmini belirlemek için kullanılır.

- **z-index:** Öğelerin üst üste gelme düzenini kontrol etmek için kullanılır.

Bu özellikler, temel CSS kuralları oluştururken ve web sayfalarınızı stillemeye başlarken size yardımcı olacak temel özelliklerdir. Daha fazla özellik öğrenerek ve bunları kullanarak daha karmaşık tasarımlar oluşturabilirsiniz, ancak bu özelliklerle başlamak iyi bir temel oluşturacaktır.

# HTML'e CSS Eklemek

Evet HTML dosyamıza nasıl CSS stillerini ekleyeceğinizi merak ediyor olabilirsiniz. CSS'in bazı temel özelliklerini öğrendiğimize göre artık bunu nasıl yapabileceğimizi öğrenebiliriz. Bunu yapmanın üç yöntemi vardır.

- **Harici Bir CSS Dosyası Oluşturma**
Bu yöntem karşılaşacağınız en yaygın yöntemdir ve CSS için ayrı bir dosya oluşturmayı ve bunu HTML'nin açılış ve kapanış bölümlerinin içine bağlamayı içerir. HTML dosyamızda bulunan **head** etiketleri arasında bir **link** etiketi oluşturarak başlıyoruz:
```
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

```
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

Öncelikle, HTML dosyasının açılış ve kapanış **"head"** etiketleri içine, bir kapanış etiketi olmayan **"link"** öğesini ekliyoruz. **"href"** özelliği, CSS dosyasının konumu olan bir URL'yi belirtir, ya mutlak bir URL olabilir ya da, genellikle kullandığınız gibi, HTML dosyasının bulunduğu konuma göre göreli bir URL olabilir. Yukarıdaki örnekte, her iki dosyanın da aynı dizinde bulunduğunu varsayıyoruz. rel özelliği gereklidir ve HTML dosyası ile bağlantılı dosya arasındaki ilişkiyi belirtir.

Ardından, yeni oluşturulan styles.css dosyasının içinde, seçiciyi (div ve p), açılış ve kapanış süslü parantezlerle bir "bildiri bloğu" oluşturan bir çift süslü parantezle takip ederiz. Son olarak, bildiri bloğunun içine herhangi bir bildirim yerleştiririz. color: white; bir bildirimdir, burada color özelliği ve beyaz değeri bulunur, ve background-color: black; başka bir bildirimdir.

**Dosya adları hakkında bir not:** styles.css, burada dosya adı olarak kullandığımız şeydir. Dosya türü .css olduğu sürece istediğiniz adı verebilirsiniz, ancak "style" veya "styles" en yaygın kullanılan isimlerdir.

Bu yöntemin bazı avantajları şunlardır:
- HTML ve CSS'yi ayrı tutar, bu da HTML dosyasının daha küçük olmasını ve daha düzenli görünmesini sağlar.
- CSS'yi sadece bir yerde düzenlemenizi sağlar, bu özellikle benzer stilleri paylaşan birçok sayfaya sahip web siteleri için çok kullanışlıdır.

- **CSS Stillerini HTML Dosyası İçine Dahil Etmek**
CSS kodunu tamamen ayrı bir dosya oluşturmak yerine HTML dosyasının içine eklemeyi içerir. Dahili yöntemde, tüm kuralları bir çift açılış ve kapanış **"style"** etiketi içine koyarsınız ve bu etiketler daha sonra HTML dosyanızın açılış ve kapanış **"head"** etiketleri içine yerleştirilir. Stiller doğrudan **"head"** etiketleri içine yerleştirildiği için, dışsal yöntemde gereken **"link"** öğesine artık ihtiyacımız yoktur.

Bu farklar haricinde, sözdizimi tamamen farklı bir css dosyası oluşturma yöntemiyle aynıdır (seçici, süslü parantezler, bildirimler):

Özetle, dahili CSS kullanarak stil kurallarını doğrudan HTML dosyasına eklersiniz ve bu yöntem, küçük projeler veya hızlı stil değişiklikleri yapmanız gerektiğinde kullanışlı olabilir. Ancak daha büyük projelerde veya stil kodunuzu paylaşmanız gerektiğinde, ayrı bir CSS dosyası kullanmak daha iyi bir uygulama olabilir.
```
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ... BODY İÇERİĞİ ...
</body>
```

- **CSS'i Etiketler İçinde Kullanmak**
Bu yöntem stil kodlarını doğrudan HTML etiketlerine eklemeyi mümkün kılar, ancak bu yöntem genellikle önerilmez:
```
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```
İlk olarak dikkate alınması gereken şey, stil kodlarının doğrudan açılış **"div"** etiketine ekleniyor olması nedeniyle burada aslında herhangi bir seçici kullanmıyoruz. Ardından, stil= özelliğini görüyoruz ve çift tırnak işaretleri içindeki değer bildirimleri oluşturur.

Tek bir öğe için benzersiz bir stil eklemeniz gerekiyorsa, bu yöntem işe yarayabilir. Ancak genel olarak, bu, CSS'i HTML'e eklemek için önerilen bir yöntem değildir ve bunun birkaç nedeni vardır:

- Tek bir öğeye çok sayıda bildirim eklemeye başladığınızda hızla karmaşık bir hale gelebilir ve HTML dosyanızın gereksiz yere şişmesine neden olabilir.
- Aynı stilin birçok öğeye uygulanmasını isterseniz, aynı stili her bir öğeye kopyala + yapıştır yapmanız gerekir, bu da gereksiz tekrarları ve daha fazla şişmeyi beraberinde getirir.
- Herhangi bir oluşturulan CSS dosyası, diğer iki yöntemi geçersiz kılabilir ve beklenmedik sonuçlara neden olabilir. (Bu konuya burada daha fazla derinlemesine girmeyeceğiz).

Sonuç olarak, genellikle bu şekilde CSS kullanmak yerine diğer yöntemleri tercih etmek daha iyi bir uygulama olabilir. Bu, daha düzenli, ölçeklenebilir ve bakımı daha kolay kodlar oluşturmanıza yardımcı olabilir.

# Görev

- [CSS alıştırmaları deposuna](https://github.com/TheOdinProject/css-exercises) tıklayın ve ardından **"foundations"** dizinine/klasörüne gidin. Aşağıdaki alıştırmaları sırasıyla tamamlayın. Alıştırmaları çözmeye başlamadan önce README dosyalarını okumayı unutmayın.
    - 01-css-methods
    - 02-class-id-selectors
    - 03-group-selectors
    - 04-chain-selectors
    - 05-descendant-combinator
Not: Bu alıştırmaların çözümleri her alıştırmanın içinde bulunan **"solution"** klasöründe/dizininde yer almaktadır.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır. Eğer soruları yanıtlarken sorun yaşıyorsanız sorunun üzerine tıklayın ve bağlantıyı inceleyin. (Bağlantılar ingilizcedir.)

- Sınıf ve kimlik seçicilerin sözdizimi nedir?
- Tek bir kuralı iki farklı seçiciye nasıl uygularsınız?
- id'si "title" ve sınıfı "primary" olan bir öğeyi tek bir kural içinde nasıl kullanırsınız?
- Torun birleştirici ne yapar?
- HTML'e CSS eklemenin üç yolu nelerdir?
- HTML'e CSS eklemenin üç yolu arasındaki temel farklar nelerdir?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Mozilla'nın CSS Değer ve Birimleri, mutlak veya göreceli terimlerde mümkün olan çeşitli değerleri öğrenmek için kullanılabilir.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

- [İnteraktif bir öğrenme materyali, dersteki materyalin büyük bir bölümünü interaktif bir şekilde kapsar.](https://scrimba.com/scrim/co12d4cf99cf2776f19e84a9d)

# *ÖNEMLİ NOT*
Bu dersten sonra temel kavramlar türkçeye çevrilmeyecektir ve olduğu gibi aktarılacaktır. Çünkü bazı terimler programlama alanında kalıplaşmış terimlerdir ve bu terimleri sizin de ingilizce olarak öğrenmeniz faydanıza olacaktır. (Örneğin id, class, child, parent gibi.)
