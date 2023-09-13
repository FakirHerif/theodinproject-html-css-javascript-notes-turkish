# Giriş

Artık HTML ve CSS'nin temel sözdizimini anladığınıza göre, konularda biraz daha ciddileşeceğiz. CSS'de uzmanlaşmanız gereken en önemli beceriler *konumlandırma(positioning)* ve *düzendir(layout).* Yazı tiplerini ve renkleri değiştirmek önemli bir beceridir, ancak web sayfasındaki öğeleri tam olarak istediğiniz yere yerleştirebilmek daha da önemlidir. Sonuçta, kesinlikle her öğenin üst üste istiflendiği kaç web sayfası bulabilirsiniz?

Bir web sayfasındaki öğeleri konumlandırmayı öğrenmek, yalnızca birkaç temel kavramı anladıktan sonra o kadar da zor değildir. Ne yazık ki, birçok öğrenci HTML ve CSS öğrenmeyi hızla tamamlar ve JavaScript'e geçer, bu da temel kavramları atlamalarına neden olur. Bu da sıkıntıya, zorluğa yol açar [komik bir gif](https://giphy.com/gifs/css-13FrpeVH09Zrb2).

Çünkü öğelerinizi sayfada olmalarını istediğiniz yere koyamıyorsanız dünyadaki tüm JavaScript becerileri anlamsızdır. Bunu aklımızda tutarak başlayalım.

# Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.
- Box Model hakkında her şeyi öğreneceksiniz.
- Öğelerin tam olarak doğru boyutta olduğundan nasıl emin olacağınızı öğreneceksiniz. (margin, padding, borders)

# Kutu Modeli (Box Model)

Box Model CSS'de başarılı olmak için anlamanız gereken en önemli kavramlardan biridir. Karmaşık değildir, ancak bu konuyu atlamak, ileride çok fazla hayal kırıklığına uğramanıza neden olacaktır.

Bir web sayfasındaki her şey dikdörtgen bir kutudur. Bu kutuların içinde başka kutular da bulunabilir ve yan yana durabilir. Sayfadaki her öğeye şu şekilde bir **border(kenarlık)** ekleyerek bunun nasıl çalıştığına dair kabaca bir fikir edinebilirsiniz: 
```
* {
  border: 2px solid red;
}
```
![Örnek Resim İçin Tıklayınız](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/boxes.png)

İsterseniz [bu sayfaya](https://www.theodinproject.com/lessons/foundations-the-box-model) denetçi ile border ekleyerek inceleyebilirsiniz.
![Örnek Resim İçin Tıklayınız](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/odin-lined.png)

Evet, yukarıdaki görüntüde bazı daireler olabilir... ancak düzenleme konusunda, bu daireler dikdörtgen kutular gibi bir araya gelir. Sonunda, bir web sayfasını düzenlemek ve tüm öğelerini konumlandırmak, bu kutuları nasıl iç içe yerleştireceğinizi ve istifleyeceğinizi belirlemektir.

Bu kutuların boyutunu ve aralarındaki boşluğu artırmak için birçok yol bulunmaktadır. Bunlar: dolgu (padding), kenar boşluğu (margin) ve kenarlık (border) özellikleridir. Görev bölümündeki vereceğim makaleler bu kavramları daha derinlemesine ele alıyor, ancak kısaca özetlemek gerekirse:

- padding, bir kutunun kenarı ile kutunun içeriği arasındaki boşluğu artırır.
- margin, bir kutunun kenarı ile komşu kutuların kenarları arasındaki boşluğu artırır.
- border, kenarlık ile dolgu arasına (sadece bir veya iki piksel bile olsa) boşluk ekler.

Lütfen örnek resimdeki şemayı dikkatlice inceleyin. Bu kavramı iyi anlamak, web tasarımında öğeleri düzgün bir şekilde yerleştirmenin anahtarıdır.

![Örnek Resim İçin Tıklayın](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/box-model.png)

# Görev

- [Bu Video:](https://www.youtube.com/watch?v=rIO5326FgPE) Box Model, Padding(dolgu) ve Margin(kenar boşluğu) konularını ele alan ve sizin bu konularda genel bir bakış açısı kazanmanıza yardımcı olacak temel bir eğitim videosudur.

- [MDN tarafından sunulan ders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model), Box Model konseptini daha derinlemesine ele almaktadır. Video ile aynı materyali kapsar ve sıradaki derslerde keşfedeceğiniz iç içe kutuları tanıtır. Örnekleri dikkatlice inceleyin ve tarayıcı içi düzenleyiciyi kullanarak denemeler yapın.

- [Bu CSS Tricks(ipuçları) sayfası](https://css-tricks.com/almanac/properties/m/margin/), margin özelliği hakkında daha fazla bilgi içerir. Özellikle "auto" ve "margin collapsing" ile ilgili bölümler, bilmeniz gereken önemli konuları içerir.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Box Model Özelliklerinin içeriden dışarıya sıralaması nasıldır?
- box-sizing özelliği tam ne olarak ne işe yarar?
- Standart Box Model ve Alternatif Box Model arasındaki fark nedir?
- 2 öge arasında daha fazla boşluk oluşturmak istiyorsanız margin mi padding mi kullanırsınız?
- Bir ögenin kenar sınırları içerisinde daha fazla boşluk oluşturmak istiyorsanız margin mi padding mi kullanırsınız?
- Oluşturduğunuz tüm ögeleriniz için Alternatif Box Model ayarlamak isterseniz hangi özelliği kullanmanız gerekir?
- Bir ögeyi yatay olarak nasıl ortalarsınız?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Box Model hakkında daha ayrıntılı bir açıklama ve örnek için bu videoyu inceleyebilirsiniz.](https://scrimba.com/scrim/cof3d488184abe24ec6258ab4)

