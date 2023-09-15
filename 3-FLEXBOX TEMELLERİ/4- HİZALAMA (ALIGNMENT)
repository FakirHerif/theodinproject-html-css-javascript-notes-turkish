# Giriş

Daha önce her öğeye eşit bir şekilde büyüme veya daralma sağlayan "flex: 1" kuralından farklı olarak, belirli bir boyuta sahip öğeleri düzenlemeyi öğrenmeyi ele alıyoruz. Yani, her öğenin aynı boyutta olmasını istediğiniz durumları ele alıyoruz. 

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Bir flex container'ı içindeki öğeleri hem dikey hem de yatay olarak hizalamanın nasıl yapıldığını öğreneceksiniz.

# Hizalama (Alignment)

Alignment, öğelerin belirli bir düzen içinde nasıl hizalandığını, aralarındaki boşluğu ve konumlarını ayarlamak için kullanılır.

**CSS'de hizalama için kullanılan bazı özellikler:**
- **text-align:** Metin içeriğinin yatay hizalamasını ayarlar, örneğin "left" (sol), "center" (orta) veya "right" (sağ).
- **vertical-align:** İçeriğin dikey hizalamasını belirler. Genellikle inline veya inline-block öğeler için kullanılır.
- **align-items ve justify-content:** Flexbox veya Grid gibi yerleşim düzenlerinde öğelerin yatay ve dikey hizalamasını kontrol eder.
- **margin ve padding:** Öğelerin birbirlerine veya konteynıra olan uzaklığını ayarlamak için kullanılır.
- **position ve top, right, bottom, left:** Öğelerin belirli bir konuma yerleştirilmesini sağlar.

Haydi şimdi aşağıdaki örneğe bakalım:
```
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```
.container {
  height: 140px;
  padding: 16px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```

[Örneği codepen üzerinden canlı görmek için tıklayınız.](https://codepen.io/TheOdinProjectExamples/pen/MWoyBzR)

Eğer bu örnekte .item ögesine flex: 1; eklerseniz neler olacağını tahmin edebiliyor olmalısınız. Konuya devam etmeden önce deneyin!

.item ögesine flex: 1; eklemek; her ögenin mevcut alanı dolduracak şekilde büyümesini sağlar. Peki her ögenin aynı genişlikte kalmasını ve container içinde öğelerin arasındaki boşlukları veya dağılımı ayarlamak istersek? Evet bunu yapmak gerçekten çok kolay:

- 1.adım => .item ögesinden flex: 1; 'i kaldırın.
- 2.adım => .container ögesine justify-content: space-between; ekleyin.

Bunları yapmak size resimdeki gibi bir sonuç vermelidir:
![Örnek Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/07.png)

justify-content, ögeleri **main axis(ana eksen)** boyunca hizalar. Burada kullanabileceğiniz birkaç farklı değer var. Bu farklı değerleri görevler bölümünde bulabilirsiniz. Şimdilik **"center"** özelliğimizi kullanalım, yapmanız gereken şey çok basit; **justify-content** değerini **center** olarak ayarlamak (**justify-content: center;**). Evet gördüğünüz gibi bu, kutuların ana eksen boyunca ortalanmasını sağladı.

Peki şimdi de ögeleri **cross axis(çapraz eksen)** boyunca hizalamaya yarayan **align-items'ı** kullanalım. container ögemize align-items: center; ekleyelim. Sonuç görseldekine benzer olmalı:

![Örnek Görsel](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/08.png)

Gördüğünüz gibi justify-content ve align-items, container'ınızın ana ekseni (main axis) ve çapraz ekseni (cross axis) temel alındığı için, flex container'ın flex-direction özelliğini değiştirdiğinizde davranışları değişir. 

Örneğin, flex-direction'ı column olarak değiştirdiğinizde, justify-content dikey hizalama yapar ve align-items yatay hizalama yapar. Ancak en yaygın davranış, ana ekseni varsayılan olarak yatay olduğu için justify-content öğeleri yatay olarak hizalar (çünkü ana eksen varsayılan yatay olarak ayarlıdır) ve align-items onları dikey olarak hizalar. Flexbox'ı yeni öğrenmeye başlayanlar için en büyük sorunlardan biri bu davranış değiştiğinde yaşanan kafa karışıklığıdır.

# Açıklık (Gap)

Gap özelliği, flex'in çok işlevli özelliklerinden biridir. Bir flex container'ına gap değeri vermek, flex öğeleri arasına belirli bir boşluk ekler ve bu, öğelere bir kenar boşluğu eklemeye benzer şekildedir. 

Gap, yeni bir özellik olduğu için henüz birçok kaynakta bulunmaz, ancak tüm modern tarayıcılarda güvenilir bir şekilde çalışır, bu nedenle bunu kullanmak güvenlidir ve çok kullanışlıdır!

Biraz önceki örneğimize gap: 8px; değeri ekleyerek neler olacağını görelim:

```
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```
.container {
  height: 140px;
  padding: 16px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```

[Örneği codepen üzerinden canlı görmek için tıklayınız.](https://codepen.io/TheOdinProjectExamples/pen/qBjZyea)

Evet örnekte gördüğünüz gibi aralara 8px boyutlu boşluklar eklemiş olduk.

Aşağıdaki vereceğim kaynaklarda öğreneceğiniz daha çok şey var, ancak bu noktaya kadar flexbox'ın ne kadar yararlı ve kullanışlı olduğunu kesinlikle görmüş olmalısınız. Şu ana kadar ele aldığımız konulardaki özelliklerle, şimdiden bazı etkileyici düzenleri bir araya getirebilir ve oluşturabilirsiniz.

Aşağıda vereceğim kaynaklara mutlaka göz atın. Bu kaynaklarda zaten şu ana kadar öğrendiğiniz konuların bazılarını göreceksiniz. Ancak bu kaynaklar konuları daha derin bir şekilde ele almaktadır ve henüz bizim bahsetmediğimiz bazı konulara değinmektedir. 

Şu aşamada her ayrıntıyı ezberlemeye çalışmayın. Sadece örneklerle birlikte kendinizi geliştirmeye devam edin ve örneklerin içerdiği kodları muhakkak yazarak çalışın. Flexbox ile mümkün olan her şeyi içselleştirmek için elinizden gelenin en iyisini yapın. 

Alıştırma yapmaya başladığınız zaman bu kaynaklara tekrar göz atmanız gerekecek, merak etmeyin bu gayet normal ve kabul edilebilir bir durum. Elinizdeki kaynakları, notları, örnekleri ne kadar çok inceler, kullanır ve tekrarlarsanız, bu konu ve kavramlar çok daha iyi bir şekilde hafızanıza yerleşecektir. Pratik yapmayı sakın unutmayın. İyi çalışmalar ve iyi eğlenceler!

# Görev

(Bağlantı içerikleri ingilizcedir.)

- [Bu bağlantıdaki harika Flexbox Kılavuzu](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), bilmeniz gereken her şeyi kapsar. Daha önce değindiğimiz kavramları gerçekten eğlenceli ve yaratıcı örneklerle pekiştirmenize yardımcı olacaktır.

- [Flexbox'ın tipik kullanım durumları](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox) daha pratik ipuçlarını kapsayan bir MDN makalesidir. İnteraktif bölümleri atlamayın!

- [CSS Tricks'in "Flexbox Kılavuzu"](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) klasik bir kaynaktır. Burada sizin için yeni bilgiler yok, ancak görseller ve örnekler son derece faydalıdır. Bu, muhtemelen sık sık başvuracağınız harika bir referanstır. (Alışmalar ve egzersizler için elinizin altında bulundurun!)

- [The Odin Project'in CSS Egzersizleri Reposuna tıklayın](https://github.com/TheOdinProject/css-exercises) ve flex klasörüne/dizinine gidin. Alıştırmaları tamamlamadan önce her README dosyasını inceleyin. **Not:** Bu alıştırmaların çözümleri her alıştırmanın çözüm(solution) klasöründe bulunabilir.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- justify-content ve align-items arasındaki fark nedir?

- Herhangi bir div'i flexbox container'ının içinde tamamen ortalamak için hangi flexbox özelliklerini ve bu flexbox özelliklerini nasıl kullanırsınız?

- justify-content: space-between ve justify-content: space-around arasındaki fark nedir?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Flexbox Froggy](https://flexboxfroggy.com/#tr), flexbox ile nesneleri hareket ettirmeye yönelik küçük ve eğlenceli bir oyundur.

- [Flexbox Zombies](https://mastery.games/flexboxzombies/), flexbox'ın oyunlaştırılmış başka bir versiyonudur. Ücretsizdir ancak bir hesap oluşturmak gerekmektedir.

- [Flexbox'ın Temel Kavramları Makalesi](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) MDN'de bulunan diğer kaynaklardan biridir, iyi bir başlangıç ​​noktasıdır. Yararlı örneklere ve etkileşimli bölümlere sahiptir. 

- [Flex Container'daki Aligning Items Makalesi](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container), eksenler konusunu ve align-items / justify-content konularını daha derinlemesine ele alıyor.

- [Freecodecamp'ın Flexbox Eğitimi](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/) değerli kaynaklardan bir diğeridir.

- [Flexbox Hızlandırılmış Kurs](https://www.youtube.com/watch?v=3YW65K6LcIA), Traversy Media'nın güzel bir kaynağıdır.

- Daha etkileşimli demolar için, [Scrim'de bulunan justify-content](https://scrimba.com/learn/flexbox/justify-content-flexbox-tutorial-cVWPacR) ve [Scrim'de bulunan align-items](https://scrimba.com/learn/flexbox/align-items-flexbox-tutorial-cJqymH9) konularını inceleyin. (Bu bağlantıdaki içerikleri görüntüleyebilmek için oturum açılması gerektiğini unutmayın.)