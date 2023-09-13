# Giriş

Önceki derslerde temel olarak CSS'in syntax ve selector'larını ele aldık. Şimdi selectors bilgilerimizi CSS'in C'si olan cascade ile birleştirmenin zamanı geldi. 

# Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.
- Cascade'in ne işe yaradığı.
- Specificity ve CSS selector'larını birleştirme.
- Mirasın belirli özellikleri nasıl etkilediği.

# The Cascade of CSS

Bazen birbiriyle çelişen kurallarımız olabilir ve beklenmedik sonuçlar elde edebiliriz. Örneğin; "Belirlediğim bu paragrafların mavi olmasını istemiştim, neden diğer paragraflar gibi kırmızılar?" gibi durumlar ne kadar sinir bozucu olursa olsun, CSS'nin neden istediklerimize aykırı işler yaptığını anlamak önemlidir. Ama ne olursa olsun biz CSS'e ne yapmasını söylediysek CSS onu yapar. Bu durumlara istisna bi durum olarak bir tarayıcının varsayılan stiller oluşturmasıdır. Bu varsayılan stiller tarayıcıdan tarayıcıya değişebilir ve herhangi bir CSS kuralı yazmamış olmamıza rağmen örneğin; bir düğme yapısı iki farklı tarayıcıda farklı şekillerde görünebilir.

Dolayısıyla, böyle beklenmedik bir davranışla karşılaştığınız durumlar; ya varsayılan stillerden kaynaklanır, ya bir özelliğin nasıl çalıştığını anlamamamnızdan ya da cascade olarak adlandırılan bu küçük şeyi anlamadığınız içindir.

Cascade, HTML'imize hangi kuralların uygulandığını belirleyen faktördür. Cascade'in bunu belirlemek için kullandığı farklı faktörler vardır. Bu faktörlerden üçünü inceleyeceğiz ve bunların "CSS'den nefret ediyorum" söylemlerinizden kurtulmanıza yardımcı olacağını umuyoruz.

# Specificity (Özgüllük)

Daha spesifik (belirgin) olan bir CSS bildirimi, daha az spesifik olanlara üstünlük sağlar. Önceki derste incelediğimiz dahili stiller (inline styles), seçicilere(selectors) göre en yüksek özgünlüğe sahiptir, ancak her türden seçicinin kendine özgü bir özgünlük düzeyi vardır ve şimdiye kadar inceliklerimize odaklanıyoruz:
- ID Selectors (Kimlik Seçicileri) ===> En spesifik seçici türüdür.
- Class Selectors (Sınıf Seçicileri)
- Type Selectors (Tür Seçicileri)

ID seçici her zaman herhangi bir Class seçiciden üstündür ve onu geçersiz kılar.
Class seçici her zaman herhangi bir Type seçiciden üstündür ve onu geçersiz kılar.
Type seçici ise her zaman kendisinden daha az spesifik olan herhangi bir Type seçiciden üstündür ve onu geçersiz kılar. 

Ayrıca örneğin 2 adet veya daha fazla class seçici yazılmış bir CSS dosyasında her zaman rakam olarak en fazla class seçici yazılmış olan özellik geçerli olacaktır. Tüm bu durumları örnekle anlatmak daha sağlıklı olacaktır:
```
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>
```

```
/* kural 1 */
.subsection {
  color: blue;
}

/* kural 2 */
.main .list {
  color: red;
}
```
Bu örnekte göreceğimiz gibi **kural 2** daha fazla sınıf seçici kullandığı için bu durum daha spesifiktir ve **"color: red;"** özelliği öncelikli ve geçerli olacaktır.

ID ve Class için bir örnek yazalım:
```
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

```
/* kural 1 */
#subsection {
  color: blue;
}

/* kural 2 */
.main .list {
  color: red;
}
```
Bu örnekte ise **kural 2**'de ID seçiciden(1 adet) daha fazla Class Seçici(2 adet) bulunmasına rağmen **kural 1** daha spesifiktir ve **"color: blue;"** özelliği öncelikli ve geçerli olacaktır. Çünkü biraz önce anlattığımız gibi ID seçici Class seçiciden üstündür, Class seçiciyi geçersiz kılar ve kısaca ID VS CLASS = ID win diyebiliriz.

Başka bir örnekle devam edelim:
```
/* kural 1 */
#subsection {
  background-color: yellow;
  color: blue;
}

/* kural 2 */
.main #subsection {
 color: red;
}
```
Bu örnekte ise **kural 1** bir adet id seçici kullanırken **kural 2** ise bir adet class ve bir adet id seçici kullanıyor. Bu durumda aslında iki kuralında birbirinden spesifik bir durumu bulunmuyor. Çünkü iki kuralda da birbirinden üstün olmayan bir id seçici mevcut. Ve Cascade bu tarz durumda seçicinin tip sayısını kontrol ediyor ve **kural 2**'nin bir id seçiciye ek olarak bir class seçiciye de sahip olduğunu tespit ediyor ve **kural 2**'nin özgünlüğünün daha yüksek olduğu sonucuna varıyor ardından **kural 2**'yi geçerli kılıyor ve **"color:red;"** özelliğini uyguluyor. 

Unutmadan söylememiz gereken diğer durum ise **kural 1**'de yazılan **"background-color: yellow;"** özelliği ise herhangi bir çelişki durumu yaratmadığı için bu özellikte uygulanacaktır. 

*Her şey özgünlüğe katkıda bulunmaz. Seçicileri karşılaştırırken, evrensel seçici (*) için özel sembollerin yanı sıra kombinatörler (+, ~, > ve boş bir boşluk) hakkında bilgi edinebilirsiniz. Bu semboller, kendileri başına herhangi bir özgünlük eklememektedirler.*

```
/* kural 1 */
.class.second-class {
  font-size: 12px;
}

/* kural 2 */
.class .second-class {
  font-size: 24px;
}
```
Burada hem kural 1 hem de kural 2 aynı özgünlüğe sahiptir. Kural 1, chaining selector/zincirleme bir seçici kullanır (boşluk yok) ve kural 2, bir descendant combinator/soy birleştirici kullanır (bir boşluk). Ancak her iki kural da iki sınıf içerir ve birleştirici sembolü kendisi başına özgünlüğe katkıda bulunmaz.

```
/* kural 1 */
.class.second-class {
  font-size: 12px;
}

/* kural 2 */
.class > .second-class {
  font-size: 24px;
}
```
Bu örnek de aynı şeyi gösteriyor. Kural 2'de child birleştirici kullanılmasına rağmen ( >), bu özgünlük değerini değiştirmez. Her iki kuralın da hala iki sınıfı vardır, dolayısıyla aynı özgünlük değerlerine sahiptirler.

```
/* kural 1 */
* {
  color: black;
}

/* kural 2 */
h1 {
  color: orange;
}
```
Bu örnekte kural 2'nin özgünlüğü daha yüksek olacaktır ve orange değer bu öğe için öncelikli olacaktır. Kural 2, en düşük özgünlük değerine sahip olan bir tür seçiciyi kullanır. Ancak kural 1 evrensel seçiciyi kullanır ( *) hiçbir özgünlük değeri yoktur.

# Inheritance (Miras)

Miras, bir öğeye uygulandığında, o öğenin soyundaki öğeler tarafından miras alınan belirli CSS özelliklerine atıfta bulunur. Bu özellikler, soy için açıkça bir kural yazmasak bile, soy öğeleri tarafından miras alınır. Genellikle tipografiye dayalı özellikler (renk, font boyutu, font ailesi vb.) miras alınırken, diğer birçok özellik miras alınmaz.

Bunun istisnası, bir öğenin doğrudan hedeflenmesidir, çünkü bu her zaman alınan mirası yener ve üstündür: 
```
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

```
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}

```

Parent öğenin bir ID ile daha yüksek bir özgünlüğe sahip olmasına rağmen, child öğeyi doğrudan hedef aldığı için color:blue stili uygulanırken, parent'in color:red özelliği yalnızca miras alınır.

# Rule Order (Kural Sırası)

Son faktör kural sırasıdır. Diyelim ki ögelerin bir veya birden fazla sınıfı var ve bu durumda cascade hangi kuralın uygulanacağını nasıl belirler?
Aslında çok basit, bu tarz durumlarda her zaman kazanacak olan **EN SON** yazılan olacaktır.

```
<div class="warning alert"></div>
```

```
.alert {
  color: red;
}

.warning {
  color: yellow;
}
```
Bu örnekte .warning kuralı yazılan son kural olduğu için uygulanacak kural bu olacaktır. Eğer tek sınıfa sahip olsaydı yine son yazılan kural geçerli olacaktı:

```
<div class="warning"></div>
```

```
.warning {
  color: red;
}

.warning {
  color: yellow;
}
```

# Görev

- [CSS alıştırmaları deposuna](https://github.com/TheOdinProject/css-exercises) tıklayın ve ardından **"foundations"** dizinine/klasörüne gidin. **"06-cascade-fix"** isimli alıştırmayı tamamlayın. Alıştırmayı çözmeye başlamadan önce README dosyasını okumayı unutmayın.
Not: Bu alıştırmanın çözümü alıştırmanın içinde bulunan **"solution"** klasöründe/dizininde yer almaktadır.

- HTML Temelleri bölümünden pratik olarak oluşturduğunuz Tarif sayfasını hatırlıyor musunuz? Oldukça sade görünüyor, değil mi? Biraz CSS ekleyerek bunu düzeltelim!
    
- Nasıl stil vereceğniz tamamen size kalmış, CSS yöntemini kullanmalısınız. Önceki derste bahsedilen birkaç özelliği kullanmayı deneyin (renk, arka plan rengi, yazı tipi özellikleri vb.). Farklı özellikler denemek ve ne yaptıklarını anlamak için kendinize biraz zaman tanıyın. Şu an için projenizin iyi görünüp görünmemesini düşünmeyin. Şuan sadece alıştırma yapmak ve CSS yazmayı alışkanlık haline getirmeyi hedefleyin. Bu çalışma, portföyünüzde sergilemeniz için yapılan bir çalışma değildir.
    
- Özel bir yazı tipini nasul kullancağımızı henüz öğrenmedik, bu nedenle şimdilik kullanabileceğiniz genel fontların listesini bulmak için [CSS Fonts](https://www.w3schools.com/Css/css_font.asp) sayfasına göz atın ve CSS için en iyi ve güvenli fontlar için [CSS Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.php) sayfasına göz atın. Bu sayfadaki fontlar, her bilgisayar ve cihazda hazır bir şekilde yüklü ve kullanılabilir haldedir. (ancak yine de yedek olarak farklı bir font eklemeyi unutmayın).

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Bir sınıf seçici kullanan bir kural ile üç tür seçici kullanan bir kural arasında hangi kuralın özgünlüğü daha yüksektir? 

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [CSS Cascade](https://2019.wattenberger.com/blog/css-cascade), gerçekte hangi CSS kurallarının uygulandığını etkileyen diğer faktörler hakkında biraz daha ayrıntılı bilgi veren harika ve etkileşimli bir makaledir. 

- [Yazı Tipi Değiştirmek](https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service), özel yazı tiplerinin kullanımına ilişkin birkaç farklı yaklaşımı anlatır. 

- Kevin Powell tarafından sunulan [CSS Özgünlüğü Açıklaması](https://www.youtube.com/watch?v=c0kfcP_nD9E) başlıklı içerik, özgünlük örneklerini ele almakta ve özgünlükle başa çıkma konusunda bazı öneriler sunmaktadır. Bu içerik, CSS özgünlüğünü daha iyi anlamak ve onunla başa çıkmak isteyenlere yardımcı olabilir.

- [CSS Özgünlük Hesaplayıcı seçicilerinizi doldurmanıza ve özgünlüklerinin hesaplanmasına ve görselleştirilmesine olanak tanır.](https://specificity.keegan.st/)

- [Mozilla CSS Özellikleri Referansı, belirli bir CSS özelliğinin miras alınıp alınmadığını öğrenmek için kullanılabilir; sadece Resmi Tanım bölümündeki "Inherited" alanını arayın.](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index) [İşte CSS renk özelliği için bir örnek.](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition)
    
- [CSS Cascade Hakkında İnteraktif Bir Eğitim (Interactive Scrim).](https://scrimba.com/scrim/c9gwmnAR)

