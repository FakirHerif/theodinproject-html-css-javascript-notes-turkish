# Giriş

Önceki dersde, farklı display türlerinin benzersiz kutu modellerine sahip olduğunu keşfettik. CSS'nin iki kutu türü vardır: **block** ve **inline**, bu kutu türleri öğe davranışını ve etkileşimini belirler. Display özelliği, HTML öğelerinin web sayfasında nasıl görüneceğini kontrol eder. Bu derste bu özelliklerin çeşitli seçeneklerini daha ayrıntılı olarak inceleyeceğiz.

# Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- "Normal Akış(**Normal Flow**)" hakkında bilgi edineceksiniz.
- **Block** ve **inline** arasındaki farkı öğreneceksiniz.
- Hangi öğelerin **varsayılan olarak block** olduğunu ve hangi öğelerin **varsayılan olarak inline** olduğunu öğreneceksiniz.
- **div** ve **span** öğelerinin ne olduğunu öğreneceksiniz.

# Blok ve Satır İçi'nin Karşılaştırması (Block vs Inline)

Şimdiye kadar öğrendiğiniz öğelerin çoğu blok öğelerdir. Başka bir deyişle, bunların varsayılan stili **"display: block"** olarak ayarlanmıştır. Varsayılan olarak, blok öğeleri sayfada birbirinin üzerine yığılmış olarak görüntülenir ve her yeni öğe yeni bir satırda başlar.

Ancak satır içi (inline) öğeler yeni bir satırda başlamazlar. Yan yana yerleştirildikleri diğer öğelerle aynı satırda görünürler. **"a"** etiketi veya **"link"** bu konuda açık birer örnektir. Bu etiketlerden birini metnin ortasına eklerseniz, paragrafın bir parçası gibi davranır.[Örneğin Bu Link gibi...](https://www.youtube.com/watch?v=dQw4w9WgXcQ) Link, o paragrafın diğer kelimelerinin yanında yer alacaktır. Ayrıca, satır içi öğeler üzerinde dolgu (padding) ve kenar boşluğu (margin) farklı şekilde davranır. Genel olarak, satır içi öğeler üzerine fazladan dolgu veya kenar boşluğu eklemeye çalışmak istemezsiniz.

# Ortada Bulunan Satır İçi Block (The middle ground inline-block)
**"display: inline-block"** özellikle satır içi (inline) ve blok (block) davranışlarının ortasında bir noktada bulunur. Satır içi öğeler gibi davranırlar, ancak blok tarzı dolgu (padding) ve kenar boşluğu (margin) kullanabilirler. **"display: inline-block"**, bilmekte faydalı bir araçtır, ancak pratikte birçok kutuyu hizalamaya çalışıyorsanız genellikle bir sonraki derste daha ayrıntılı olarak ele alınacak olan **"flexbox'a"** daha sık başvurabilirsiniz.

# Div ve Spans

Bloklar ve satır içi öğeler hakkında konuşurken, **div**ler ve **span**ler hakkında da konuşmadan geçemeyiz. Şimdiye kadar karşılaştığımız diğer HTML öğeleri içeriklerine anlam verirler. Örneğin, **paragraf öğeleri** tarayıcıya içerdikleri metni bir paragraf olarak göstermesini söyler. **Strong öğeleri** tarayıcıya içindeki metinlerin önemli olduğunu belirtir vb. Ancak divler ve spanlar içeriklerine özel bir anlam vermezler. Bunlar, içerebilecekleri herhangi bir şeyi içeren genel kutulardır.

Bu tür öğelere sahip olmak, ilk bakışta göründüğünden çok daha kullanışlıdır. Sık sık sadece **"hook(kanca)"** olarak kullanabileceğimiz öğelere ihtiyacımız olacaktır. Bunlara CSS ile stil vermek için bir id veya class atayabiliriz. Sıkça karşılaşacağımız başka bir kullanım durumu ise ilgili öğeleri sayfanın üzerinde doğru bir şekilde konumlandırmak için bir parent altında gruplandırmaktır. Divler ve spanlar bize bunu yapabilme yeteneği sağlar.

Div, varsayılan olarak blok düzeyinde bir öğedir. Genellikle diğer öğeleri gruplamak için bir **container(konteyner)** öğesi olarak kullanılır. Divler, sayfayı farklı bloklara bölmek ve bu bloklara stil uygulamamıza olanak tanır.
Örneğin:
```
<div class="introduction">
   <h2>Introduction</h2>
</div>

<div class="main-content">
   <h2>Main Content</h2>
</div>

<div class="contact-us">
   <h2>Contact Us</h2>
</div>

```

```
div {
  padding: 30px;
  text-align: center;
  margin-bottom: 10px;
  color: #EEEEEE;
}

.introduction {
  background-color: #548CA8;
}

.main-content {
  background-color: #476072;
}

.contact-us {
  background-color: #334257;
}
```
[Bu örneği canlı olarak görüntülemek için tıklayın.](https://codepen.io/TheOdinProjectExamples/pen/KKXXbwR)

Span, varsayılan olarak satır içi düzeyde bir öğedir. Metin içeriğini ve satır içi HTML öğelerini gruplamak ve stil vermek için kullanılabilir ve başka bir anlamlı HTML öğesi uygun olmadığında kullanılmalıdır.
Örneğin:
```
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, <span class="highlight">quis nostrud <a href="https://www.dictionary.com/browse/exercitation">exercitation</a>
  ullamco laboris</span> nisi ut aliquip ex ea commodo consequat.   
</p>
```

```
.highlight {
  background-color: yellow;
}
```
[Bu örneği canlı olarak görüntülemek için tıklayın.](https://codepen.io/TheOdinProjectExamples/pen/abLLPor)

# Görev

- "Normal Flow" kavramı, kutu modeli kaynaklarında ima edilmektedir, ancak çok spesifik bir şekilde açıklanmamıştır. Öğelerin varsayılan olarak nasıl düzenlendiğini anlamak için [MDN'den "Normal Flow" başlıklı bölümü](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) okuyun.

- [W3 schools'un "HTML Blok ve Satır İçi Öğeleri"](https://www.w3schools.com/html/html_blocks.asp) başlığı altında varsayılan blok ve satır içi öğelerin tanımını ve listesini içeren bu kaynağı inceleyin.

- [Digital Ocean'un "CSS'de Inline ve Inline-block Görüntüleme"](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block) başlıklı rehberi, satır içi ve satır içi blok arasındaki farkı açıklayan bazı harika örnekler içerir.

- [CSS alıştırmaları deposuna](https://github.com/TheOdinProject/css-exercises) gidin ardından "margin-and-padding" (kenar boşluğu ve dolgu) dizinine gidin. Aşağıdaki egzersizlerin her birini sırayla tamamlayın ve başlamadan önce README dosyalarını gözden geçirin:
    - 01-margin-and-padding-1
    - 02-margin-and-padding-2

- Box Model hakkında öğrendiklerinizi, daha önceki projemiz olan Tarifler'in  görünümünü iyileştirmek için uygulayın. Şu anda bu proje sadece düz bir liste şeklinde, bu yüzden projenizin görünümünü benzersiz ve etkileyici kılmak için düzenler, renkler ve stiller konusunda yaratıcı olun.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Bir blok öğe ile satır içi bir öğe arasındaki fark nedir (block vs inline)?
- Bir satır içi öğe ile bir satır içi blok öğe arasındaki fark nedir?
- Bir h1 öğesi blok mu yoksa satır içi midir?
- Bir düğme (button) öğesi blok mu yoksa satır içi midir?
- Bir div öğesi blok mu yoksa satır içi midir?
- Bir span öğesi blok mu yoksa satır içi midir?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Bu eğitim biraz eski sayılabilir, ancak örnekleri açıklayıcıdır. İlk 6 slayt şimdiye kadar gördüklerimizi kapsar.](https://learnlayout.com/no-layout.html)

- ["Normal Flow" Terimi CSS'de Ne Anlama Gelir başlıklı bu basit kısa videoyu izleyin.](https://www.youtube.com/watch?v=nfXRw06FgK8)

- [Block ve Inline hakkında daha interaktif bir açıklama sunan bu Scrim videosunu izleyin.](https://scrimba.com/scrim/co5024997a7e46c232d9abe55)