# Giriş

Bağlantılar HTML'nin temel özelliklerinden biridir. Web'deki diğer HTML sayfalarına bağlantı vermemize olanak tanırlar. Aslında buna web denmesinin nedeni de budur.

Bu derste, nasıl bağlantı oluşturulacağını ve görselleri yerleştirerek web sitelerimize görsel bir hava katmayı öğreneceğiz. 

# Derse Genel Bakış

Bu bölümde bu derste öğreneceğiniz konulara genel bir bakış yer almaktadır.

- İnternetteki diğer web sitelerindeki sayfalar için bağlantılar nasıl eklenir?
- Kendi web sitenize kendi oluşturduğunuz sayfalar için nasıl bağlantı eklenir?
- Mutlak(Absolute) ve göreceli(Relative) bağlantılar arasındaki fark nedir?
- HTML kullanarak bir web sayfasında bir resim nasıl görüntülenir?

# Hazırlık

Bu ders boyunca bağlantıları ve görselleri kullanma konusunda biraz pratik yapmak için üzerinde çalışacağımız bir HTML projesine ihtiyacımız bulunmaktadır. Bu yüzden adımları izleyin:
1- odin-links-and-images adında yeni bir dizin/klasör oluşturun.
2- Bu dizinde/klasörün içinde index.html adlı bir html dosyası oluşturun.
3- Dosyayı VSCode veya kullandığınız editörde açın ve klasik HTML şablonunu oluşturun.
4- Son olarak body'e h1 etiketinizi ekleyin
Aşağıdaki gibi:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h1>
</body>
</html>
```

# Bağlantı Oluşturmak ve Bağlantıları Bulunduğumuz Sekmede Açmak

HTML'de bir bağlantı oluşturmak için bağlantı etiketini **"a"** kullanırız. Bir bağlantı etiketi, bir bağlantı olmasını istediğimiz metni veya başka bir HTML öğesini sararak tanımlanır. 

Oluşturduğumuz index.html içeriğine aşağıdakini ekleyin ve tarayıcıda açın:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h2>
        <a>Tıklayın</a>
</body>
</html>
```
Bu bağlantıya tıklamanın hiçbir şey yapmadığını fark etmiş olabilirsiniz. Bunun nedeni, bağlantı etiketinin tek başına nereye bağlanmak istediğimizi bilememesidir. Ona gidilecek yeri söylememiz gerekiyor. Bunu bir HTML özelliği kullanarak yaparız.

Bir HTML özelliği, bir HTML öğesine ek bilgi sağlar ve her zaman öğenin açılış etiketinde yer alır. Bir nitelik genellikle iki bölümden oluşur: bir ad ve bir değer; ancak tüm nitelikler bir değer gerektirmez. Bizim durumumuzda açılış bağlantı etiketine **href** (köprü referansı) niteliği eklememiz gerekiyor. **href** özelliğinin değeri bağlantımızın gitmesini istediğimiz hedeftir. 

Daha önce oluşturduğumuz bağlantı öğesine aşağıdaki href özelliğini ekleyin ve tekrar tıklamayı deneyin, yeni değişikliklerin uygulanabilmesi için tarayıcıyı yenilemeyi unutmayın:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h2>
        <a href="https://github.com/FakirHerif/theodinproject-html-css-javascript-notes-turkish">Tıklayın</a>
</body>
</html>
```

Varsayılan olarak, bağlantı **"a"** etiketi **"href"** özelliği olmadan herhangi bir düz metin gibi görünecektir. Eğer **"href"** özelliği mevcutsa, tarayıcı metine mavi bir renk verecek ve bunun bir bağlantı olduğunu belirtmek için altını çizecektir. 

Yalnızca diğer HTML belgelerine değil, internetteki herhangi bir tür kaynağa bağlantı vermek için bağlantı etiketlerini kullanabileceğinizi belirtmekte fayda var. Videolara, pdf dosyalarına, resimlere vb. bağlantı verebilirsiniz.

# Bağlantıları Yeni Sekmede Açmak

Biraz önce gösterilen yöntem, bağlantıları, onları içeren web sayfasıyla aynı sekmede açar. Bu, çoğu tarayıcının varsayılan davranışıdır ve nispeten kolay bir şekilde değiştirilebilir. Tek ihtiyacımız olan **"target"** özelliğidir. 

**"href"** hedef bağlantıyı belirtir ve **"target"** ise bu bağlantının nerede açılacağını belirtir. **"target"** belirtmediğiniz sürece varsayılan (**"_self"**) olarak bağlantınız mevcut sekmenizde açılacaktır. Peki yeni sekmede açmak için kullanacağımız **"_blank"** özelliğini örnekle açıklayalım:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h2>
        <a href="https://github.com/FakirHerif/theodinproject-html-css-javascript-notes-turkish" target="_blank" rel="noopener noreferrer">Tıklayın</a>
</body>
</html>
```

**target="_blank"** özelliğimizin hemen arından gizlice bir **rel** özelliği girdiğimizi farketmişsinizdir. Bu, geçerli sayfa ile bağlantılı belge arasındaki ilişkiyi tanımlamak için kullanılır.

**noopener** değeri; açılan bağlantının açıldığı web sayfasına erişmesini engeller.
**noreferrer** değeri; açılan bağlantının hangi web sayfasının veya kaynağın kendisine bir bağlantıya (veya 'referansa') sahip olduğunu bilmesini engeller.

Peki bağlantıları yeni sekmelerde açmak için neden bu ek davranışa ihtiyacımız var? Tamamen güvenlik nedenlerinden dolayı. 

# Mutlak(Absolute) ve Göreceli(Relative) Bağlantılar

Genel olarak oluşturacağımız iki tür bağlantı vardır:

- İnternetteki diğer web sitelerindeki sayfalara bağlantılar
- Kendi web sitemiz için oluşturduğumuz sayfaların bağlantıları

# Mutlak(Absolute) Bağlantılar

İnternetteki diğer web sitelerindeki sayfalara verilen bağlantılara mutlak bağlantı denir. Tipik bir mutlak bağlantı **protocol://domain/path** parçalarından oluşacaktır. Mutlak bir bağlantı her zaman hedefin protokolünü ve etki alanını içerecektir. 

Mutlak bir bağlantıyı zaten biraz önce kendimiz kullarak gördük. Daha önce Tıklayın bağlantısı içinde oluşturduğumuz bağlantı, protokolü ve etki alanını içerdiğinden mutlak bir bağlantıydı.
https://github.com/FakirHerif/theodinproject-html-css-javascript-notes-turkish

# Göreceli(Relative) Bağlantılar

Kendi web sitemiz için oluşturduğumuz sayfaların bağlantılarına göreceli bağlantılar denir. Bu bağlantılar alan adını içermez, aynı sitedeki başka bir sayfa olduğundan, alan adının bağlantıyı oluşturduğumuz sayfayla aynı olacağını varsayar. 

Bu oldukça soyut bir konu olduğu için bunu örnek kullanarak uygulamalı olarak görelim:

Oluşturduğunuz klasörün içinde bulunan index.html dosyanızın yanına **about.html** adlı farklı bir html dosyası oluşturun ve içine aşağıdaki kodu yapıştırın:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Hakkımızda</h2>
</body>
</html>
```
Ardından hakkında sayfamız için bir bağlantı oluşturmak için ana sayfamız olan **index.html** dosyamıza geçelim ve **about.html** sayfamızın bağlantısını yerleştirelim.
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h2>
        <a href="https://github.com/FakirHerif/theodinproject-html-css-javascript-notes-turkish" target="_blank" rel="noopener noreferrer">Tıklayın</a>

        <a href="about.html">HAKKIMIZDA</a>
</body>
</html>
```
Bu bağlantının doğru yapıldığından emin olmak için index.html dosyanızı tarayıcınızda açın ve "HAKKIMIZDA" bağlantısına tıklayın. "HAKKIMIZDA" bağlantısına tıklamak yeni oluşturmuş olduğumuz "HAKKIMIZDA" sayfasına gitmelidir. 

Bu işe yarayacaktır çünkü index.html ve about.html dosyalarımız aynı dizin/klasör içinde yer almaktadır. Bu yüzden sadece "about.html" değerini href'e yazmak yeterli olacaktır, eğer başka klasör/dizin içine koysaydık tam yolumuzu belirtmemiz gerekecekti.

about.html dosyamızı farklı bir dizin/klasör içine yerleştirelim ve bir de bu şekilde deneyelim. ana klasörümüzün altında **"pages"** adlı bir klasör oluşturalım ve **"about.html"** dosyamızı yeni oluşturduğumuz **"pages"** adlı klasörümüzün içine taşıyalım.

Şimdi tarayıcımızı yenileyelim ve **"HAKKIMIZDA"** bağlantısına tıklayalım. Evet gördüğünüz gibi artık bu bağlantı çalışmıyor. Çünkü bunun sebebi **about.html** dosyamızı farklı bir konuma taşıdığımız için.

Bunu düzeltmek için **"href"** değerimizi güncellememiz yeterli olacaktır. 
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Sayfalar</h2>

        <a href="pages/about.html">HAKKIMIZDA</a>
</body>
</html>
```
Gördüğünüz gibi oluşturduğumuz **"pages"** isimli klasörü **href** değerimizin içinde belirttik ve **about.html** dosyamızın tam olarak yeni konumunu yazmış olduk. **"pages/about.html"**

Tarayıcınızı yenileyin ve **"HAKKIMIZDA"** bağlantısına tekrar tıklayın, göreceksiniz ki bağlantımız tekrar çalışır duruma gelmiş olacaktır.

Çoğu durumda bu gayet işe yarayacaktır; ancak unutmamak gerekir ki bu yaklaşımla yine de beklenmedik sorunlarla karşılaşabilirsiniz. Bu yüzden dizin belirttiğimiz değerin en başına muhakkak **./**  eklemeliyiz. Bunu yapmak çoğu durumda yaşanabilecek sorunları önleyecektir. Kısaca:
```
<a href="./pages/about.html">HAKKIMIZDA</a>
```

# Resimler

Web siteleri yalnızca metin görüntüleyebilselerdi oldukça sıkıcı olurdu. Neyse ki HTML, her türlü farklı medyayı görüntülemek için çok çeşitli öğeler sağlar. Bunlardan en yaygın kullanılanı ise resim unsurudur.

Bir resmi HTML'de görüntülemek için **"img"** etiketi kullanırız. Öğrendiğimiz diğer etiketlerden farklı olarak **"img"** etiketi kendiliğinden kapanır, etiketi kapatmak için herhangi bir kapanış etiketi yazmamıza gerek yoktur.

İçeriği bir açılış ve kapanış etiketiyle sarmak yerine, tarayıcıya resim dosyasının nerede bulunduğunu bildiren bir **"src"** niteliğini kullanarak sayfaya bir resim yerleştirir. 

**"src"** niteliği, bağlantı etiketlerinin href niteliğine çok benzer şekilde çalışır. Hem mutlak hem de göreceli yolları kullanarak bir görüntüyü ekleyebilir.

Örneğin, mutlak bir yol kullanarak Odin Projesi sitesinde bulunan bir resmi görüntüleyebiliriz: 
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h2>

    <img src="https://www.theodinproject.com/mstile-310x310.png">

</body>
</html>
```

Kendi projenizde bulunan görselleri kullanmak içinde bir yol belirtebilirsiniz.
1- Ana klasörünüz/dizininizin içine **"images"** adlı bir klasör oluşturun.
2- Kullanmak istediğiniz görüntüyü bu klasörün içine taşıyın. 
3- Kullanmak istediğiniz görselin ismine **"test"** yazın ve uzantısına dikkat edin. (örneğin: jpg, png, svg veya gif olup olmadığını tespit ederek bunları src yolunuzda belirtmeyi unutmayın. Ayrıca bunlar web'de kullanabileceğiniz dört temel görsel formatıdır.)
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Anasayfa</h2>

    <img src="./images/test.png">

</body>
</html>
```
Kaydedin ve tarayınızda **index.html** dosyanızı açın ve görseli tarayıcınızda görebileceksiniz.

# Ana Dizinler

Peki oluşturduğumuz **pages** klasörümüzde bulunan **about.html** dosyamızda *test.png* görselimizi kullanmak istersek ne olur? Bu durumda **pages** klasöründen/dizininden çıkıp ana klasöre/dizine dönmemiz gerekir ve böyleyece oluşturduğumuz **images** klasörüne/dizinine erişebiliriz.

Ana dizine/klasöre gitmek için ilgili dosya yolunda **"../"** kullanmamız gerekir. Bunu da **about.html** dosyamızın içinde uygulamalı olarak görelim:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>6-LİNKLER VE RESİMLER</title>
    </head>
<body>
    <h1>Sayfalar</h2>

        <img src="../images/test.png">

</body>
</html>
```

# Alternatif Metin Özelliği

Her görsel öğesinin src niteliğinin yanında bir de **"alt"** (alternatif metin) niteliğinin olması gerekir. 

**"alt"** özelliği bir görseli tanımlamak için kullanılır. Görselin yüklenemediği durumlarda görselin yerine metin açıklaması olarak kullanılacaktır. Ayrıca görme engelli kullanıcılara görüntünün ne olduğunu anlatmak için ekran okuyucularla birlikte kullanılır. 
```
<img src="https://www.theodinproject.com/mstile-310x310.png" alt="The Odin Project Logo">
```
Evet gördüğünüz gibi yerleştirdiğimiz görsel için **"alt"** kısmına bir metin açıklaması ekledik. Görselin yüklenemediği durumlarda ekranda bu açıklama metni görünecektir.

# Görev

- [Kevin Powell'ın HTML Bağlantıları Videosunu izleyin.](https://www.youtube.com/watch?v=tsEQgGjSmkM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=5) (İngilizcedir.)
- [Kevin Powell'ın HTML Görselleri Videosunu izleyin.](https://www.youtube.com/watch?v=0xoztJCHpbQ&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=6) (İngilizcedir.)
- [Kevin Powell'ın Dosya Yapısı Videosunu izleyin.](https://www.youtube.com/watch?v=ta3Oxx7Yqbo&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=7) (İngilizcedir.)
- [Web'de kullanılabilecek dört ana resim formatı hakkında bilgi edinin.](https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats) (İngilizcedir.)

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır. (Bu bölümden itibaren Bilgi Kontrolü başlıkları altındaki soruların cevapları verilmeyecektir. Notları takip eden kişilerin sağlıklı bir ilerleme sağlayabilmeleri için kendilerinin çözmeleri beklenmektedir.)

- Bağlantı oluşturmak için hangi etiket kullanılır?
- Nitelik nedir?
- Hangi özellik bağlantılara nereye gidileceğini söyler?
- Bağlantıları yeni bir sekmede/pencerede açmak için hedef özelliğini kullanmak istiyorsanız hangi güvenlik hususlarının dikkate alınması gerekir?
- Mutlak ve göreceli bağlantı arasındaki fark nedir?
- Bir resmi görüntülemek için hangi etiket kullanılır?
- Görsellerin her zaman sahip olması gereken alt özelliği nedir?
- Dosya yolundaki ana dizine nasıl erişirsiniz?
- Web'deki görseller için kullanabileceğiniz dört ana görsel formatı nelerdir?

# Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Bağlantılar ve Resimler](https://internetingishard.netlify.app/html-and-css/links-and-images/)

- [Google tüm interneti kara listeye aldıktan sonra özür diledi](https://www.itpro.com/609724/google-apologises-after-blacklisting-entire-internet)

- [Chris Coyier'in CSS Püf Noktalarında target=”_blank” ne zaman kullanılır?](https://css-tricks.com/use-target_blank/)
