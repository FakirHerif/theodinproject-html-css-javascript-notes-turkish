# Giriş

Flex container içindeki öğelerin yönlerinin **flex-direction** kullanılarak nasıl kontrol edilebileceğini görelim.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Flex container'ın 2 ekseni hakkında bilgi edineceksiniz.
- İçeriğinizi satırlar yerine sütunlar halinde düzenlemek için bu eksenleri nasıl değiştireceğinizi öğreneceksiniz.

Flexbox'ın en kafa karıştırıcı yanlarından bir tanesi de yatay veya dikey olarak çalışabilmesidir. Ayrıca hangi yönde çalıştığınıza bağlı olarak kurallar farklılık gösterebilir.

Flex container'ın varsayılan yönü yataydır yani **row**. Ama bu varsayılan yönü dikey yani **column** olarak değiştirebilirsiniz. Bir örnekle açıklamak gerekirse:
```
.flex-container {
  flex-direction: column;
}
```

# Eksenler (Axes)

Hangi yönü kullanırsanız kullanın (row veya column), flex container'larınızın iki eksene sahip olduğunu bilmelisiniz. Bunlar:
- Ana Eksen (Main Axis)
- Çapraz Eksen (Cross Axis)

**Ana eksen,** flex box'ların sıralandığı veya hizalandığı ana yönü belirtir. Bu, genellikle flex-direction özelliğinin belirlediği yöndür. Örneğin, **flex-direction: row;** kullanıldığında, ana eksen **yataydır ve öğeler soldan sağa doğru** sıralanır. **flex-direction: column;** kullanıldığında ise, ana eksen **dikeydir ve öğeler üstten alta doğru** sıralanır.

**Çapraz eksen,** ana eksenin dik konumundaki yönü belirtir. Yani, ana eksenin yönüne dik olarak yer alır. Örneğin, **flex-direction: row;** kullanıldığında, çapraz eksen **dikeydir ve öğeler üstten alta doğru** sıralanır. **flex-direction: column;** kullanıldığında, çapraz eksen **yataydır ve öğeler soldan sağa doğru** sıralanır.

Bu iki eksen, flex box'ların düzenlemesi ve hizalanması için önemlidir. Hangi ekseni ana eksen olarak seçerseniz, öğeler bu yönde sıralanır veya hizalanırken, çapraz ekseni kullanarak öğelerin diğer yönde nasıl davranacağını belirleyebilirsiniz.

Diğer bir deyişle, aşağıdaki örneğimizde bir div üzerine **display: flex;** ekledik ve alt öğelerini **yatay olarak** düzenledik. Bu, **varsayılan ayar** olan **flex-direction: row'un** bir göstergesidir. Eğer örneğimizde yer alan **flex-direction: column;** yazan satırı **yorum satırından çıkarırsanız**, bu divler **dikey olarak** yığılacaktır.
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
  /* flex-direction: column; */
}

/* Bu .flex-container içindeki tüm div'leri seçer */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 80px;
  flex: 1 1 auto;
}
```

[Örneği codepen üzerinden canlı görmek için tıklayınız.](https://codepen.io/TheOdinProjectExamples/pen/BaZKPdw)

Unutulmaması gereken diğer bir nokta ise; eğer **flex: 1 1 auto;** olan değer yerine varsayılan olan **flex: 1;** değerimizi yazsaydık **flex-direction: column;** değeri tam olarak beklediğimiz şekilde çalışmayacaktı (bunu siz de değeri değiştirerek deneyip gözlemleyebilirsiniz.)

Muhtemelen peki neden böyle oldu diye soruyorsunuz. Bunun nedeni flex: 1; yazdığımız zaman varsayılan olarak flex-basis değerinin 0 olarak ayarlanmış olmasıdır. Bu da flex-grow ve flex-shrink hesaplamalarının 0'dan başlayacağı anlamına gelir. Boş div'ler varsayılan olarak 0 yüksekliğe sahiptir, bu nedenle flex öğelerimizin container'larının yüksekliğini doldurabilmesi için aslında herhangi bir yüksekliğe ihtiyaçları yoktur.

Yukarıdaki örnekte; flex: 1 1 auto; değeri yazarak aslında istediğimiz yükseklik değerini belirttiğimiz yükseklik değerine(80px) otomatik olarak ayarlamasını söylemiş olduk. (auto yazan basis değerine 10px, 50px gibi değerler yazarak bunu siz de gözlemleyebilirsiniz.)

Diğer bir ayrıntı ise; flex-direction'ı column olarak değiştirdiğimizde, flex-basis width(genişlik) yerine height(yükseliği) ifade eder.

Konudan biraz uzaklaştık gibi görünüyor... Aslında, biz esasen "flex-direction" ve eksenler hakkında konuşuyorduk. Konuyu yeniden ele almak gerekirse, varsayılan davranış "flex-direction: row" dur, bu da nesnelerin yatay olarak düzenlenmesini sağlar. Bunun genellikle CSS'teki diğer detayları değiştirmeden gayet iyi çalışmasının sebebi, blok düzeyindeki öğelerin varsayılan olarak üst ögelerin(parents) tam genişliğinine sahip olmasıdır.

"flex-direction: column" kullanmak karmaşıklığı arttırır. Çünkü blok düzeyindeki öğeler içeriklerinin yüksekliğine varsayılan olarak uyum sağlarlar.

Ayrıca, yukarıdan aşağıya veya sağdan sola doğru yazı yazılan bir dil kullanıyorsanız "flex-direction" davranışının değişebileceği bazı durumlar vardır, ancak bununla ilgilenmeyi, Arapça veya İbranice gibi dillerde bir web sitesi oluşturmaya hazır olana kadar ertelemeniz daha iyi olur.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Flex ögelerinin yatay yerine dikey olarak düzenlenmesini nasıl sağlarsınız?

- flex-direction: column; olduğu durumda flex-basis neyi ifade eder?

- flex-direction: row; olduğu durumda flex-basis neyi ifade eder?

- Önceki iki sorunun cevapları neden birbirinden farklıdır? 

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Bu bağlantı, flex ve özellikleri hakkında faydalı içeriklere sahiptir.](https://flexbox.malven.co/)
    
- [İnteraktif bir demo için, bu Scrimba'daki Flexbox ekseni konusundaki içeriğe göz atın.](https://scrimba.com/learn/flexbox/main-axis-and-cross-axis-flexbox-tutorial-cz94MT8) (Bu bağlantıdaki içeriği görüntüleyebilmek için oturum açılması gerektiğini unutmayın.)