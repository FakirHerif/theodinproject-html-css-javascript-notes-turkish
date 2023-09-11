# Giriş

Web'deki çoğu içerik metin tabanlıdır. Bu derste HTML ile çalışırken en çok kullanacağınız formatları göreceğiz.

*Bu dersi uygularken lütfen html dosyanızda denemeler yapmaktan çekinmeyin. Görerek, deneyerek öğrenmek en iyi yoldur.*

# Derse Genel Bakış
Bu derste öğreneceğimiz temel kavramlar burada listelenmiştir.

- Paragraflar nasıl oluşturulur?
- Başlıklar nasıl oluşturulur?
- Kalın metin nasıl oluşturulur?
- İtalik metin nasıl oluşturulur?
- İç içe geçmiş öğeler arasındaki ilişkiler?
- HTML yorumları nasıl oluşturulur?

# Paragraflar/p Etiketi

İki paragraftan oluşan ancak hiçbir etiket ile sarılmamış bir HTML içeriğinden nasıl bir çıktı almayı beklersiniz?
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
</html>

```
Göreceğiniz üzere bu örnek iki paragraftan oluşan bir metin gibi görünüyor. Ancak çıktıda göreceğiniz üzere durum maalesef böyle değil ve bütün metin tek satırda paragraflar olmadan gözüküyor.

Tarayıcı HTML'nizde bunun gibi yeni satırlarla karşılaştığında, bunları tek bir alana sıkıştıracaktır. Bu sıkıştırmanın sonucu, metnin tamamının tek bir uzun satırda toplanmasıdır. 

HTML'de paragraflar oluşturmak istiyorsak, her paragrafımızın sonuna yeni bir satır ekleyecek olan paragraf tag'ini kullanmamız gerekir . Bir paragraf tag'i, metin içeriğinin **"p"** etiketiyle sarılmasıyla tanımlanır.

Örneğimizi paragraflarımızı gösterecek şekilde güncelleyelim ve p etiketimizi kullanalım:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</body>
</html>

```
Evet gördüğünüz üzere örneğimizde paragraf etiketlerini kullandık ve elde etmek istediğimiz sonuca ulaştık. 2 paragraflık metnimizi düzgünce tek satır halinde olmadan, paragraflara ayrılmış şekilde yazabildik. 

# Başlıklar/h Etiketleri

Başlıklar diğer HTML metni öğelerinden farklıdır, başlık olduklarını belirtmek için diğer metinlerden daha büyük ve daha kalın görüntülenirler. 

Başlangıç ​​seviyesinde 6 farklı başlık seviyesi bulunmaktadır. **"h1"** den başlayarak **"h6"**'ya kadar devam eder. Bir başlık etiketi içindeki sayı, o başlığın düzeyini temsil eder. En büyük ve en önemli başlık h1, h6 ise en alt seviyedeki en küçük başlıktır.

Başlıklarda paragrafları oluşturduğumuz gibi etiketimizin içine alınarak yazılır. Örneğin "h1"'den "h6"'ya kadar etiketlerimizi kullanarak nasıl başlıklar elde edebileceğimizi görelim.

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <h1>BU BAŞLIK 1. BAŞLIKTIR</h1>
    <h2>BU BAŞLIK 2. BAŞLIKTIR</h2>
    <h3>BU BAŞLIK 3. BAŞLIKTIR</h3>
    <h4>BU BAŞLIK 4. BAŞLIKTIR</h4>
    <h5>BU BAŞLIK 5. BAŞLIKTIR</h5>
    <h6>BU BAŞLIK 6. BAŞLIKTIR</h6>
</body>
</html>
```

Başlık düzeyleri içeriğe bir hiyerarşi sağladığından dolayı doğru başlık düzeyini kullanmak önemlidir. Sayfanın genel başlığı için her zaman h1 başlığı kullanılmalı, sayfanın daha küçük bölümlerindeki içerik başlıkları olarak ise alt düzey başlıklar kullanılmalıdır.

# Metni Kalın Yapmak/strong Etiketi

**"strong"** etiketi metnimizi veya metnimizin içindeki herhangi bir cümleyi veya kelimeyi veya harfi veya rakamı ekstra bir önem taşıdığını vurgulayarak kalın yapmamızı sağlar. strong etiketini tek başına veya diğer metin etiketleriyle birlikte kullanabilirsiniz. Örneğin:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <strong>Bu metin kalın bir şekilde yazılmıştır.</strong>
</body>
</html>
```

Metnimizin içinde özellikle kalın yapmak istediğimiz yerde kullanım örneği:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <p>Bu metinde sadece <strong>simsiyah</strong> kelimesi kalın şekilde yazılmıştır.</p>
</body>
</html>
```

Bazen metni önemli bir anlam vermeden kalın yapmak isteyebilirsiniz. Bunu nasıl yapacağınızı notlarımızın ilerleyen bölümlerindeki CSS derslerinde öğreneceksiniz. Yine de ufak bir not olarak **b** etiketini vurgu yapmadan metin içeriğinizi kalın yapmak için kullanabileceğinizi belirtmek isterim.

# Metni İtalik Yapmak/em Etiketi

**"em"** etiketi metnimizi veya metnimizin içindeki herhangi bir cümleyi veya kelimeyi veya harfi veya rakamı ekstra bir önem taşıdığını vurgulayarak italik yapmamızı sağlar. Ufak bir hatırtlatma olarak eklemem gerekirse **i** etikinide ekstra vurgulama yapmadan metin içeriğinizi italik yapmak için kullanabilirsiniz. em etiketini tek başına veya diğer metin etiketleriyle birlikte kullanabilirsiniz. Örneğin:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <em>Bu metin italik bir yazı tipiyle yazılmıştır.</em>
</body>
</html>
```

Metnimizin içinde özellikle italik yapmak istediğimiz yerde kullanım örneği:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <p>Bu metinde sadece <em>yatay</em> kelimesi italik bir yazı tipiyle yazılmıştır.</p>
</body>
</html>
```

# HTML'deki Etiketlerin Girintili Olması

Bu notlardaki tüm örneklerde farkedeceğiniz üzere her oluşturduğumuz yeni etiket bir üzerindeki etiketle aynı hizada değil, bir üstündeki etiketin biraz daha ön tarafında yer alıyor. İşte bu duruma **"nesting"** deniyor.

Etiketleri diğer etiketlerin içine yerleştirdiğimizde aralarında bir ebeveyn ve çocuk ilişkisi yaratmış oluyoruz.(Parent ve child ilişkisi.) İç kısımdaki etiketimize; **child** onu kapsayan etiketmize ise; **parent** diyoruz. Örnek vermek gerekirse;

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
</body>
</html>
```
Bu örnekte göreceğimiz üzere p etiketlerini kapsayan etiket body etiketidir ve bu sebeple **body** etiketi; **parent**, **p** etiketi kapsandığı için; **child** durumundadır. Peki 2 tane aynı hizada bulunan p etiketinin birbiriyle ilişkisi nedir diye sorarsanız bu durumda bu ikisine de **kardeş** yani **sibling** diyoruz.

Girintileri öncelikle kendimiz ve gelecekte HTML dosyamızla çalışacak diğer geliştiriciler için net ve okunabilir hale getirmek için kullanıyoruz. Herhangi bir alt etiket için girinti kullanılması önerilir.

Ögeler arasındaki ebeveyn, çocuk ve kardeş ilişkileri daha sonra HTML'mizi CSS ile şekillendirmeye ve JavaScript ile davranış eklemeye başladığımızda çok daha önemli hale gelecektir. Ancak şimdilik, öğelerin nasıl birbiriyle ilişkili olduğu ve bu ilişkileri tanımlamak için kullanılan terimlerin ne olduğu ve ayrıca aralarındaki ayrımı bilmek önemlidir.

# HTML İçinde Yorumlama Yapmak

Tarayıcı üzerinde web sayfamızda görünmesini istemediğimiz, ancak HTML dosyamızın içinde barındırmak/bulundurmak istediğimiz kendimize veya gelecekte HTML dosyamız üzerinde çalışacak diğer geliştiriciler için notlar/yorumlar yazmak isteyebiliriz. Bu durumda bunu yapmamız zor olmayacaktır. Basit bir yöntem ile istediğimiz şekilde çalışmamızın üzerinde notlar yazabiliriz. Örnek ile kullanımını açıklamak gerekirse:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>4-YAZI FORMATLARI</title>
    </head>
<body>
    <p>Lorem ipsum dolor sit amet.</p>
    <!-- Ben bir HTML yorumuyum. Beni senden başka kimse web üzerinde canlı bir şekilde göremez! -->

    <p>Ut enim ad minim veniam.</p>
    <!-- Ben diğer bir HTML yorumuyum. Beni senden başka kimse web üzerinde canlı bir şekilde göremez! -->

</body>
</html>
```

NOT: **VSCode** için kullanımı kolaylaştıran bir kısayolu bulunmaktadır.
- **Mac** Kullanıyorsanız: CMD + /
- **Windows** veya **Linux** Kullanıyorsanız: CTRL + /
kısayollarını kullanabilirsiniz.

# Görev

- Kevin Powell'ın [HTML Paragraf ve Başlıklar Videosunu](https://www.youtube.com/watch?v=yqcd-XkxZNM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=4) İzleyin. (İngilizcedir.)
- Kevin Powell'ın [HTML Kalın ve İtalik Metin Videosunu](https://www.youtube.com/watch?v=gW6cBZLUk6M&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=5) izleyin. (İngilizcedir.)
- HTML'deki metinlerle çalışma konusunda biraz pratik yapmak için, farklı başlıklar kullanan, paragraflar kullanan ve paragraflarda bazı metinlerin kalın ve italik olduğu düz bir blog makale sayfası oluşturun. Sitelerinizi oluştururken gerçek metin yerine sahte metin oluşturmak **Lorem Ipsum** kullanabilirsiniz. VS Code sizin için lorem ipsum oluşturmaya yönelik bir **kısayol** içerir. Kısayolu kullanmak için **lorem** yazıp enter'a basmanız yeterli olacaktır.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır. Eğer soruları yanıtlarken sorun yaşıyorsanız sorunun üzerine tıklayın ve bağlantıyı inceleyin. (Bağlantılar ingilizcedir.)

- [HTML'de paragraf nasıl oluşturulur?](https://www.theodinproject.com/lessons/foundations-working-with-text#create-paragraph-element)
    - Cevap: p etiketi kullanılır.
- [HTML'de başlık nasıl oluşturulur?](https://www.theodinproject.com/lessons/foundations-working-with-text#headings)
    - Cevap: h etiketleri kullanılır.
- [HTML'de kaç farklı başlık vardır ve aralarındaki farklar nelerdir?](https://www.theodinproject.com/lessons/foundations-working-with-text#different-heading-level)
    - Cevap: h1'den h6'ya kadar bulunan 6 farklı başlık etiketi vardır. h1 en büyük olmak üzere h6 ya kadar boyutu ufalarak devam eden başlık etiketleridir.
- [Metni kalın yapmak için hangi etiketi kullanmalısınız?](https://www.theodinproject.com/lessons/foundations-working-with-text#strong-element)
    - Cevap: strong etiketi kullanılır.
- [Metni italik yapmak için hangi etiketi kullanmalısınız?](https://www.theodinproject.com/lessons/foundations-working-with-text#em-element)
    - Cevap: em etiketi kullanılır.
- [Child ve Parent İlişkisi nedir?](https://www.theodinproject.com/lessons/foundations-working-with-text#nested-relationship)
    - Cevap: Child parent'in içine sarılmış etiketlerdir.
- [Sibling ne anlam ifade eder?](https://www.theodinproject.com/lessons/foundations-working-with-text#elements-same-level)
    - Cevap: Aynı nesting'e sahip kardeş ikilidir.
- [HTML'de kendi notlarınızı websayfanız üzerinde görünmeden nasıl oluşturursunuz?](https://www.theodinproject.com/lessons/foundations-working-with-text#html-comments)
    - Cevap: <!-- -->

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [strong ve b / em ve i etiketleri arasındaki anlamsal fark ve bunların ne zaman kullanılacağı hakkında makale](https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)

- [Etkileşimli bir HTML metin biçimlendirme makalesi](https://www.w3schools.com/html/html_formatting.asp)