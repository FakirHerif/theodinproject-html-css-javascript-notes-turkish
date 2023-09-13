# Giriş

Öğreneceğiniz gibi, web sayfalarında öğeleri çeşitli şekillerde taşımak için birçok yöntem vardır. Yıllar içinde yeni yöntemler geliştirildi ve eski yöntemlerin modası geçti. Flexbox, CSS'de öğeleri manipüle etmenin nispeten [yeni bir yoludur](https://medium.com/@BennyOgidan/history-of-css-grid-and-css-flexbox-658ae6cfe6d2) ve Flexbox ilk çıktığı zaman devrim niteliğindeydi.

Birçok kaynak, teknoloji olarak nispeten yeni olduğu için Flexbox'u müfredatlarının sonlarına koyar. Ancak bu, birçok geliştirici için öğeleri konumlandırmanın varsayılan yolu haline gelmiştir. Flexbox, toolbox'ınızda en çok kullanılan araçlardan biri olacak, o halde neden önce Flexbox öğrenmeyesiniz?

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Flexbox kullanarak ögeleri nasıl konumlandıracağınızı öğreneceksiniz.
- **Flex containers** ve **flex items** hakkında bilgi edineceksiniz.
- Sadece öğeleri sıralamak ve ortalamakla sınırlı olmayan faydalı bileşenler ve düzenler oluşturmayı öğreneceksiniz.

# Başlamadan Önce

Flexbox düzenleri biraz karmaşık olabilir. Önceki derslerde, tarayıcınızın geliştirici araçlarını kullanarak bir şeyleri nasıl inceleyeceğinizi ve hata ayıklayacağınızı öğrendiniz. Bu araçlar, size gelecek derslerde önemli bir şekilde destek sağlayacak. Bir şey beklediğiniz gibi çalışmıyorsa, geliştirici araçları kullanarak incelemek her zaman ilk adımınız olmalıdır. 

Flexbox'ın şu ana kadar ele aldığımız diğer kavramlardan daha zor olduğu söylenemez ancak ancak birkaç daha fazla hareketli parçaya sahiptir. Bu derslerde öğrendiğiniz kavramlardan sonuna kadar faydalanıp hepsini bir araya getirene kadar biraz zor olacak. İlerledikçe kendinize bir iyilik yapın ve tüm kod örnekleriyle çalışmalar yapın.

Büyük olasılıkla bu bölümün sonundaki görevlere geldiğinizde öğrendiklerinizi tekrar incelemek veya size sunduğumuz kaynaklardan bazılarına başvurmanız gerekecektir, ancak zamanınızı ayırıp sunduğumuz tüm kod örnekleriyle denemeler yaparsanız, zamanı geldiğinde nereye bakmanız gerektiğini daha iyi bileceksiniz.

# Flex Zamanı!!!

Flexbox, öğeleri sıralamak için bir yol sunar. Bu öğeler, tanımlayabileceğiniz bazı basit kurallara göre esneklik gösterecek (yani büyüyecek veya küçülecek). Başlamak için basit bir örneği inceleyelim.

*Not: Bu derslerde birçok etkileşimli örnekler yer alıyor. Zihninizdeki kavramları pekiştirmeye çalışırken bu örneklerle denemeler yapmak için kendinize zaman ayırın.*

```
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```
.flex-container {
  /* display: flex; */
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  /* flex: 1; */
}
```
[Bu örneği canlı olarak görüntülemek için tıklayınız.](https://codepen.io/TheOdinProjectExamples/pen/QWgNxrp)

Bu örnekte tam olarak neler olduğunu birazdan anlatacağız. Ancak şimdilik örnekte bulunan yorum satırı oluşturmaya yarayan simgeleri kaldıralım ve neler olduğuna bakalım. (Sadece /* ve */ işaretlerini silelim. İçinde yer alanları silmiyoruz.)

**Not:** Yorum satırları içine aldığımız tüm kodların ve ifadelerin kullanımını engeller. Adı üstünde yorum satırı; yorumlama yapmak için kullanılır. CSS kullanımı /* BU BİR YORUM SATIRIDIR */ şeklindedir. İçinde yer alan kodu aktif hale getirmek için işaretleri kaldırmamız yeterlidir.

Evet şimdi 3 kutu da yan yana gelmiş olmalıdır. Border'ı "1px","5px" veya "25px" olarak yeniden boyutlandırdığınızda kutu çerçevelerinin eşit bir şekilde incelip kalınlaştığını göreceksiniz.

HTML'e başka bir "div" daha eklerseniz diğer kutuların yanında eşit boyutlarda bir tane daha kutu görünecek.

# Flex Konteynerları ve Flex Öğeleri (Flex Containers ve Flex Items)

Gördüğünüz gibi, flexbox yalnızca tek bir CSS özelliği değil, ihtiyacınız olan yere öğeleri yerleştirmek için kullanabileceğiniz bir dizi özelliklerdir. Bu özelliklerin bazıları flex konteynerıne aittir, bazıları ise flex öğelerine aittir. Bu basit ama önemli bir kavramdır.

Bir flex konteyneri, üzerinde display: flex bulunan herhangi bir öğedir. Bir flex öğesi ise doğrudan bir flex konteynerının içinde bulunan herhangi bir öğedir.
[Bu kavramın görselini görmek için tıklayın](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/03.png)

Biraz kafa karıştırıcı olabilir, herhangi bir öğe hem bir flex konteynerı hem de bir flex öğesi olabilir. Yani; bir öğe, display: flex özelliğine sahip olduğunda, bu öğe bir "flex konteyneri" olur. Örneğin, bir div öğesini alıp üzerine display: flex; stilini eklediğinizde, bu öğe artık içindeki diğer öğeleri düzenlemek için bir "flex konteyneri" olarak davranır.

Bir öğe, display: flex özelliğine sahip bir flex konteyneri içinde bulunuyorsa, bu öğe bir "flex öğesi" olur. Örneğin, yukarıdaki flex konteynerine eklediğiniz bir başka div öğesi, bu konteynerin içinde bir "flex öğesi" olur ve bu iç öğeleri düzenlemek için flexbox özelliklerini kullanabilirsiniz.
[Bu kavramın görselini görmek için tıklayın](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/04.png)

Yani herhangi bir öğe hem bir flex konteyneri hem de bir flex öğesi olabilir ve bu sayede esnek bir düzen oluşturmak için iç içe geçmiş flex konteynerleri ve flex öğeleri oluşturabilirsiniz. Bu, esnek ve karmaşık düzenler oluşturmak için oldukça güçlü bir araçtır.
(https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/05.png)

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Flex Item ve Flex Container arasındaki fark nedir?
- Flex Item nasıl oluşturulur?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Bu Flexbox öğreticisi, Interneting Is Hard tarafından modern CSS düzenleri için hazırlanmış kullanıcı dostu bir öğreticidir.](https://internetingishard.netlify.app/html-and-css/flexbox/index.html)

- [Daha etkileşimli bir açıklama ve örnek için bu Flexbox eğitimini deneyebilirsiniz. (Bu içeriği görüntüleyebilmek için oturum açılması gerektiğini unutmayın)](https://scrimba.com/learn/flexbox/your-first-flexbox-layout-flexbox-tutorial-canLGCw)

