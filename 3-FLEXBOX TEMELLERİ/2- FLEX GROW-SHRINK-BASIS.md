# Giriş

Son derste öğrendiğimiz flex özelliğini flex:1 olarak ayarladığımızda neler olduğuna biraz daha yakından bakalım.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Flex üzerinde kullanılan 3 öğenin neler olduğunu ve bunları ayrı ayrı nasıl kullanacağınızı öğreneceksiniz.

# Flex'in Barındırdığı Üç Özellik

Flex özelliği aslında üç ayrı özelliği bir araya getirir. Kısaca "flex" özelliği, bu üç özelliği tek bir satırda tanımlamanıza olanak sağlar. Bu sayede daha kısa ve daha okunaklı stil dosyaları yazabilirsiniz, bu da zaman ve enerji tasarrufu sağlar. [Kaynak](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

Bu durumda, "flex" aslında **"flex-grow"**, **"flex-shrink"** ve **"flex-basis"** için bir kısaltmadır.

![Örnek Resim](https://cdn.statically.io/gh/TheOdinProject/curriculum/0cc6b26bb0c4b94524369d327c97a8fb11e83b6b/foundations/html_css/flexbox/imgs/10.png)

Yukarıdaki ekran görüntüsünde **flex: 1;** 'in anlamı aslında şudur:
- **flex-grow: 1**
- **flex-shrink: 1**
- **flex-basis: 0**

Bir diğer ifadeyle; **"flex: 1;"** özelliği bu şekilde kullanıldığında aslında **"flex: 1 1 0;"** kullanmış oluyoruz.


# Flex Grow

Bu özellik, esnek öğenin büyüme oranını belirler. Yani, bir konteyner içindeki diğer esnek öğelerle karşılaştırıldığında, ne kadar büyüyeceğini kontrol eder. Örneğin, eğer tüm esnek öğelerin flex-grow değeri 1 ise, alanları eşit olarak büyür. Eğer bir öğenin flex-grow değeri 2 ise, diğerlerine göre iki kat daha fazla büyür.

Aşağıdaki örnekte farkı tam olarak anlayabilmeniz için, flex-shrink ve flex-basis için varsayılan değerler ayarlandı ve flex-grow değeri 2 olarak ayarlandı.
```
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```
.flex-container {
  display: flex;
}

/* Bu .flex-container içindeki tüm div'leri seçer */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  flex: 1 1 0%;
}

/* Burada yalnızca div.two seçilidir */
.flex-container .two {
  flex: 2 1 0%;
}
```

[Codepen üzerinden canlı görmek için tıklayınız.](https://codepen.io/TheOdinProjectExamples/pen/YzQqvgK) **Not:** Tarayıcı boyutunuzu küçülterek aradaki farkı görmeyi unutmayın.

Örnekte gördüğünüz gibi, div.two olan diğerlerine(div.one ve div.three) göre 2 kat daha büyük, çünkü grow değerini 2 olarak ayarladık.

# Flex Shrink

Flex-shrink; flex-grow'a benzer bir yapıdadır ancak bu bir flex öğesinin **"daralma faktörünü"** ayarlar yani bir flex öğesinin ne kadar daralabileceğini belirler. Bu, genellikle ekranda sınırlı bir alan varsa önemlidir. Örneğin, bir dizi flex öğesi belirli bir genişliğe sahipken ve bu öğeleri içeren flex-container daha küçük bir genişliğe sahipse, bu öğeler daralmak zorunda kalır.

Örnek olarak, 3 div'iniz olsun ve her birinin varsayılan olarak **flex-shrink: 1;** olsun. Bu, her bir öğenin **eşit olarak daralacağı** anlamına gelir. Ancak flex-container daha küçük bir genişliğe sahipse, bu 3 div, belirli bir oranda daralacak ve eşit bir şekilde küçüleceklerdir. 

Bir öğenin **daralmasını istemiyorsanız** **flex-shrink: 0;** olarak ayarlayabilirsiniz.

Aşağıdaki örnekte birazdan açıklayacağımız nedenlerden dolayı flex-basis: auto; olarak ayarlandı. Bu örnekte **flex-grow** her ögenin **eşit boyutta** olması gerektiğini belirtiyor ancak **tarayıcı boyutununuzu küçülttüğünüz zaman** **div.two'nun** hiçbir zaman ayarlanan **width: 250px;** değerinden daha fazla küçülemediğini fark edeceksiniz. Ayrıca diğer div'ler için flex-shrink değerleri 1 olarak ayarlandığı için onların daraldığını göreceksiniz.

```
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div
```

```
.flex-container {
  display: flex;
}

/* Bu .flex-container içindeki tüm div'leri seçer */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  width: 250px;
  flex: 1 1 auto;
}

.flex-container .two {
  flex-shrink: 0;
}
```

[Codepen üzerinden canlı görmek için tıklayınız.](https://codepen.io/TheOdinProjectExamples/pen/JjJXZVz) **Not:** Tarayıcı boyutunuzu küçülterek aradaki farkı görmeyi unutmayın.

Burada dikkate almanız gereken önemli bir nokta ise, flex-grow veya flex-shrink değerlerini belirttiğinizde, flex öğelerinin belirlediğiniz genişlik değerlerine kesin olarak uymayabileceğidir. Yani, tüm 3 div'e 250px genişlik verilmiş olsa da, ebeveynleri yeterince büyük olduğunda bu divler büyür ve genişliklerini doldurur. Aynı şekilde, ebeveynleri çok küçükse, varsayılan davranışları, onların sığabileceği şekilde daralmalarıdır. Bu, bir hata değil, ancak böyle bir sonuç beklemiyor olabilirsiniz ve bu durum biraz kafa karıştırıcı olabilir.

# Flex Basis

flex-basis, bir flex öğesinin başlangıç boyutunu ayarlar, bu nedenle her türlü flex büyümesi veya daralması bu temel boyutla başlar. Varsayılan değer: **flex-basis: 0%**'dır. Flex-shrink örneğinde bunu auto olarak ayarlamamızın  nedeni, eğer 0 olarak ayarlasaydık bu öğelerin genişliğini görmezden gelecekti ve her şey eşit olarak daralacaktı. Bir öğenin flex-basis olarak auto değerle kullanılması, bir genişlik beyanını (örneğin width: 250px) kontrol etmesini sağlar.

**Flex-basis hakkında önemli bir not:**
Flex-basis'in aslında **gerçek varsayılan değeri auto**'dur, ancak bir öğede flex: 1; belirttiğinizde, bunu **flex: 1 1 0;** olarak yorumlar. Eğer bir öğenin yalnızca flex-grow'unu ayarlamak istiyorsanız, bunu bu şekilde doğrudan (yani sadece flex: 1; yazarak) kullanabilirsiniz. Aksi halde sadece flex-basis değerinin auto olmasını istiyorsanız **flex: auto;** yazarak **flex: 1 1 auto;** olarak yorumlanmasını sağlayabilirsiniz.

**Flex: auto; nedir?**
flex: auto; flex'in kısaltmalarından biridir. flex: auto; olarak ayarlandığında **"flex-grow: 1, flex-shrink: 1 ve flex-basis: auto"** yani diğer bir ifadeyle  **"flex: 1 1 auto;"** değerine eşittir.

Bir öğeyi flex: auto; olarak ayarlarsanız, bu öğe hem büyüme hem de daralma faktörlerini 1 olarak ayarlar ve temel boyutunu otomatik olarak belirler. Bu, öğenin büyümesine veya daralmasına izin verirken, temel boyutunun otomatik olarak belirlenmesini sağlar.

**Not:** Değerin auto olmasından dolayı bu ifadenin varsayılan bir değer olmadığını unutmayın. 

Muhtemelen pratikte flex-grow, flex-shrink ve flex-basis için karmaşık değerleri kullanmayacaksınız. Genellikle ögeleri eşit şekilde büyütmek için flex: 1; ve ögelerin daralmamasını engellemek için flex-shrink: 0; kullanacaksınız.

# Görev

- [W3C'nin flex bölümünü yaygın flex kısaltma değerlerinin temelini anlamak için okuyun.](https://www.w3.org/TR/css-flexbox-1/#flex-common)

- [Bu MDN dokümanı](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) flex kısaltma değerlerini tamamen özetler ve önceki makalede ele alınmayan bazı yeni sözdizimlerini de tanıtır.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Flex özelliğinde tanımlanan 3 değer nedir (örneğin, flex: 1 1 auto)?

- flex flex: auto; için tanımlanan 3 değer nedir?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Flexbox'ın Nasıl Çalıştığını Açıklayan Bu Videoyu İzleyin.](https://www.youtube.com/watch?v=u044iM9xsWU&t=1s&pp=ugMICgJhchABGAE%3D)

- [Etkileşimli bir açıklama ve gösterim için, flex ile ilgili bu Scrim'i inceleyin.](https://scrimba.com/learn/flexbox/the-flex-property-flexbox-tutorial-cGNKJTv) [Alternatif olarak, flex-grow, flex-shrink ve flex-basis kullanımlarının açıklamasını içeren bu Scrim'i görüntüleyebilirsiniz.](https://scrimba.com/learn/flexbox/flex-grow-shrink-basis-flexbox-tutorial-ck6L7fv) (Bu içerikleri görüntüleyebilmek için oturum açılması gerektiğini unutmayın.)