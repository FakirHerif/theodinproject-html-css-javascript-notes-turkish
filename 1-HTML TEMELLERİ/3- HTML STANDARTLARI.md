# Giriş

Tüm HTML dosyaları temel yapıya veye ortak metinlere sahiptir. Bu derste bu standart metnin farklı kısımlarını keşfedeceğiz ve hepsinin birbiriyle nasıl uyumlu olduğunu göreceğiz.

# Derse Genel Bakış

Bu bölümde HTML standartlarını öğreneceğiz.
- Bir HTML dosyasını nasıl yaratabiliriz ve içeriğini nasıl oluşturabiliriz?
- HTML dosyalarını tarayıcınızda nasıl açabilirsiniz?

# HTML Dosyası Yaratma

Herşeyden önce HTML ile çalışabilmemiz ve içeriğini oluşturabilmemiz için bir HTML dosyası oluşturmalıyız. Peki ama nasıl? Çok basit; bilgisayarınızda masaüstünüz veya istediğiniz herhangi bir klasörün içine yeni bir dosya oluşturun ve uzantısı *.html* olacak şekilde istediğiniz şekilde adlandırın. 

Örneğin oluşturacağımız dosyamızın adı "index" olsun; ve uzantısına ".html" yazalım ve işte bu hepsi bu kadar. "index.html" adlı ilk html dosyamızı oluşturmuş bulunmaktayız. Hatta dosyanıza iki kere tıklayarak oluşturduğunuz ilk html dosyanızı tarayıcınızda açabilirsiniz. Ancak tabi ki içeriği boş olduğu için beyaz bir sayfayla karşılaşacaksınız ama merak etmeyin içeriği dolduracağız. Genellikle html dosyaları adlandırılırken index ismi kullanılmaktadır.

# Metin/Kod Düzenleyici

HTML dosyamızın içeriğini oluşturabilmek için bir metin düzenleyiciye ihtiyacımız vardır. En basit şekilde HTML dosyanızın içeriğini not defteri ile de düzenleyebilirsiniz ancak bu genellikle önerilmez. Örnek olarak [Visual Studio Code / Vscode](https://code.visualstudio.com/) en çok kullanılan kod editörleri arasındadır. Kendi işletim sisteminize uygun olan bir tanesini seçebilirsiniz. Tercih size kalmış.

# DOCTYPE

Her HTML içeriği bir DOCTYPE bildirimiyle başlar. Bu DOCTYPE'ın amacı tarayıcıya belgeyi oluşturmak için hangi HTML sürümünü kullanması gerektiğini söylemektir. HTML'in en son sürümü HTML5'dir.

HTML içeriğimizde ilk satırda kullanacağımız DOCTYPE'ımız:
```
<!DOCTYPE html>
```

# HTML Ögesi

DOCTYPE'ımızı yazdıktan sonra bir html etiketi oluşturmalıyız, bu etiket dosyamızın kök ögesi olarak bilinir. Yani bu dosyamızın içindeki diğer tüm öge ve etiketler onun soyundan geleceği anlamı taşımaktadır. Bu html etiketini her html dosyamızın içine dahil etmemiz gerektiğini asla unutmamalıyız.
Devam edelim ve html etiketimizi kaldığımız yerden devam ederek dosyamıza ekleyelim:
```
<!DOCTYPE html>

<html lang="en">
</html>
```

# LANG Nedir?

HTML etiketimizin içinde yer alan Lang metin içeriğimizin dilini belirtir. Bu özellik web sayfasının erişebilirliğini arttırmak için kullanılır. Yardımcı teknolojilerin dile göre uyum sağlamasına olanak tanır.

# Başlık/Head Elemanı

Başlık yani "head" elemanımız web sayfalarımız hakkında önemli meta bilgilerinin yer aldığı kısımdır. Web sayfalarımızın tarayıcıda doğru bir şekilde görüntülenmesi için gereklidir. Ayrıca head kısmının içine içerik görüntüleyen hiçbir ögeyi yazmamalıyız. 
Devam edelim ve html dosyamıza "head" etiketimizi ekleyelim:

```
<!DOCTYPE html>

<html lang="en">
    <head>
    </head>
</html>
```

# Meta Ögemiz Olan "Charset"

Oluşturduğumuz head kısmının içinde muhakkak meta charset bulunmalıdır. Bunu kullanmamızın amacı farklı dillerdeki özel sembol ve karakterlerin tarayıcımızda doğru görüntülenmesini sağlamaktır.
Devam edelim ve html dosyamıza "meta charset" etiketimizi ekleyelim:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
</html>
```

# HTML sayfama Başlık/Title Oluşturma

Head kısmımıza her zaman dahil etmemiz gereken diğer etiket ise "title" etiketidir. Bu, web sayfamızın tarayıcı sekmesinde görüntülenir ve herkes tarafından okunabilir. Eğer sayfamıza title eklemezsek varsayılan olarak sekmede görüntülecek başlığımız "dosyamızınadı.html" olarak görüntülenir. 

Örneğin title eklemezsek dosyamızın adı: "index.html" ise varsayılan olarak sekme başlığında "index.html" yazacaktır. Bu da kullanıcılar için pek anlamlı olmayan bir ifadedir. Ayrıca birden çok sekme açıkken bizim web sayfamızın olduğu sekmeyi bulabilmek zorlaşacak ve kullanıcı anlamsız görünen başlığa sahip bu sekmeyi içeriğini kontrol etmeden kapatabilecektir.

Head kısmımızın içinde yer alabilecek birçok öge/etiket vardır ancak şimdilik burada ele aldığımız iki unsuru bilmek çok önemli ve yeterli olacaktır. İlerleyen konularda daha fazlasını anlatacağız.
Devam edelim ve html dosyamıza "title" etiketi ekleyelim ve başlığımızın ismini belirleyelim:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BAŞLIK</title>
    </head>
</html>
```

# Gövde/Body Elemanı

HTML ortak metnini tamamlamak için gereken son ögemiz, "body" elemanıdır. Kullanıcılara görüntülenecek tüm içeriğin (metin, görseller, listeler, bağlantılar vb.) oluşturulacağı yer burasıdır. "Body" elemanımız her zaman "head" elemanımızın altında yer alacaktır.
Devam edelim ve html dosyamıza "body" etiketi ekleyelim:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BAŞLIK</title>
    </head>
    <body>
    </body>
</html>
```

# HTML Dosyalarını Tarayıcıda Görüntüleme
index.html dosyamız bu noktada tamamlandı.

**Not:** Bu notların ilerleyen tüm bölümlerinde temel tarayıcımız olarak *Google Chrome* kullanacağız. Sizinde *Google Chrome* kullanmanızı tavsiye ederim.

- HTML Dosyamızı Tarayıcıda Nasıl Görüntüleriz?
    - HTML dosyanızı tarayıcınıza sürükleyip bırakabilirsiniz.
    - HTML dosyanızın üzerine iki defa tıklayabilirsiniz.
    - HTML dosyanızı açmak için terminal kullanabilirsiniz.

Şuan dosyamızı açsak bile ekranımızın boş olduğunu göreceğiz, çünkü daha herhangi bir içerik eklemedik. Şimdi gövdemize bir başlık etiketi ekleyerek bir başlık oluşturalım:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BAŞLIK</title>
    </head>
    <body>
        <h1>Merhaba, Bu benim ilk başlığım.</h1>
    </body>
</html>
```
dosyamızı kaydedelim ve tarayıcımızda açalım. Eveeet tebrikler, ilk içeriğinizi oluşturdunuz ve ekranda "Merhaba, Bu benim ilk başlığım." yazısını görüntülüyorsunuz. 

# VSCode için HTML Kısayolu

VSCode'da HTML için tüm ortak metni tek seferde oluşturmak için kullanabileceğiniz yerleşik bir kısayol bulunmaktadır. Bu kısayolun sadece ".html" uzantılı dosyalarda çalışacağını lütfen unutmayın. 
**Kısayolumuz** "!" ünlem işaretidir. html dosyamıza gelerek içeriği silin ve ünlem "!" işaretine basın artından enter'a basın ve tüm gerekli standartların otomatik olarak doldurulduğunu göreceksiniz:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Bu kısayola sahip olmayan not defteri gibi (ALLAH KORUSUN) metin düzenleyici kullanmanız durumunda tüm gerekli standartların nasıl yazılacağını bilmek her zaman yararlıdır. Standartlara aşina olabilmek için ünlem işareti "!" kısayolunu kullanmadan kendiniz yazmayı deneyin. Böylelikle bu durumu güçlü bir hafızaya alarak kendinize alışkanlık edindirmiş olursunuz. 

# Görev

- Kevin Powell'ın [İlk Web Sayfanızı Oluşturma Videosunu](https://www.youtube.com/watch?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&t=93&v=V8UAEoOvqFg&feature=youtu.be) izleyin. (İngilizcedir.)
- Notlarda öğrendiğimiz tüm HTML içeriğini kendiniz oluşturmayı deneyin. Eğer takıldığınız bir nokta olursa notlara göz atmaktan çekinmeyin. Kendi kendinize yapana kadar denemeye devam edin.
- Oluşturduğunuz HTML dosyanızı [W3 HTML doğrulayıcı](https://validator.w3.org/) veya alternatif olarak bu [HTML doğrulayıcı](https://www.freeformatter.com/html-validator.html) aracılığıyla çalıştırın. Doğrulayıcılar, işaretlemenizin doğru olmasını sağlar ve mükemmel bir öğrenme aracıdır; çünkü sık sık yapıyor olabileceğiniz ve farkında olmadığınız sözdizimi hataları (ör. eksik kapanış etiketleri ve HTML'nizdeki fazladan boşluklar gibi) hakkında size geri bildirim sağlarlar. 

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır. Eğer soruları yanıtlarken sorun yaşıyorsanız sorunun üzerine tıklayın ve bağlantıyı inceleyin. (Bağlantılar ingilizcedir.)

- [DOCTYPE'IN AMACI NEDİR?](https://www.theodinproject.com/lessons/foundations-html-boilerplate#the-doctype)
    - Cevap: DOCTYPE'ın amacı tarayıcıya belgeyi oluşturmak için hangi HTML sürümünü kullanması gerektiğini söylemektir.
- [HTML ELEMENTİ NEDİR?](https://www.theodinproject.com/lessons/foundations-html-boilerplate#html-element)
    - Cevap: Kök öge olarak bilinen, html'in diğer tüm öğelerinin onun soyundan geleceği anlamı taşıyan elementtir.
- [HEAD ELEMANININ KULLANIM AMACI NEDİR?](https://www.theodinproject.com/lessons/foundations-html-boilerplate#head-element)
    - Cevap: Web sayfalarımız hakkında önemli meta bilgilerinin yer aldığı kısımdır. Web sayfalarımızın tarayıcıda doğru bir şekilde görüntülenmesi için gereklidir.
- [BODY ELEMANININ KULLANIM AMACI NEDİR?](https://www.theodinproject.com/lessons/foundations-html-boilerplate#body-element)
    - Cevap: Kullanıcılara görüntülenecek tüm içeriği (metin, görseller, listeler, bağlantılar vb.) içinde barındırma amacını taşır. Kısaca tüm içeriği sarıp sarmalar.

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Hangi Charset'leri kullanmanız gerektiğiyle ilgili bu makaleyi baştan sona okuyun](https://www.positioniseverything.net/html-encoding/)

- [Lang özelliğini tam olarak anlayabilmek için buraya göz atabilirsiniz](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)


