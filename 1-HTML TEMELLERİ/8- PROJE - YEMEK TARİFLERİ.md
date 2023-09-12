# Giriş

Edindiğiniz tüm HTML bilgilerini pratiğe dökmenin zamanı geldi. Bu projede temel bir yemek tarifi web sitesi oluşturacaksınız.

Oluşturacağımız bu websitesi birkaç yemek tarifi bağlantısı içeren bir ana dizin sayfasından oluşacaktır. İşimiz bittiğinde bu web sitesi görsel olarak pek hoş görünmeyecektir.

Bu projede temel amacımız öğrendiğimiz HTML bilgilerimizi kullanmak olduğu için görüntüye pek takılmayacağız ve ilerleyen konularda oluşturduğumuz bu projeyi CSS ile stil vermek için tekrar ele alacağız.

# Projeniz İçin Github Repository Oluşturma

Bu kısım temel git ve github kullanımını bildiğinizi varsaymaktadır.
[Bilmiyorsanız lütfen tıklayın, git ve github kullanımı detayları hakkında bilgi sahibi olun.](https://www.theodinproject.com/lessons/foundations-introduction-to-git)

- Github'ınızda projeniz için repository oluşturun ve projenizi adım adım inşa ederken commit atarak repository'nize yükleyin.

# Ne Zaman Commit Atacağınıza Dair İpuçları

Kısaca adım adım ilerlerken commit atmanız beklenmektedir.
1- git add .
2- git commit -m "commit mesajınız"
3- git push origin main

# Görev

- **Başlangıç Yapısı**
1. Temel bir dizin/klasör oluşturun (örneğin; odin-recipes) ardından içine index isimli bir html dosyası oluşturun (index.html)

2. index.html'in içeriğini standart bir şekilde doldurun. h1 etiketine "Yemek Tarifleri" başlığını ekleyin.

- **Tarif Sayfası**
1. Oluşturduğunuz temel klasörünüzün/dizininizin (veya örnekte isimlendirdiğimiz odin-recipes) içine recipes adlı bir klasör/dizin daha oluşturun. 
2. Ve bu recipes isimli dizinin içine "makarna.html" isimli veya sevdiğiniz bir yemeğin adını içeren html dosyası oluşturun.
3. Bu html dosyanızın içine h1 içeriği olarak yemeğinizin ismini taşıyan başlığı yazın.
4. index.html dosyanızda tarif sayfanıza bir bağlantı oluşturun. Örneğin:
```
<a href="recipes/makarna.html">Makarna Tarifi</a>
```

- **Tarif Sayfası İçeriği**
Yeni tarif sayfanız aşağıdaki içeriğe sahip olmalıdır:
1. Eklediğiniz h1 başlığı etiketindeki yemeğin resmini ekleyin.
2. Görselin altında "Açıklama" başlığı ve ardından yemek tarifinin anlatıldığı bir veya iki paragraf bulunmalıdır.
3. Ardından yemek tarifi için gerekli olan "Malzemeler" başlıklı sırasız bir liste oluşturun.
4. Son olarak, "Malzemeler" kısmının altında "Pişirme Adımları" başlıklı sıralı bir liste oluşturun.

- **Daha Fazla Tarif Ekleyin**
1. Daha önce oluşturduğunuz tarif sayfasına ek olarak aynı sayfa yapılarına sahip iki tarif daha ekleyin.
2. Dizininizde/klasörünüzde bulunan yeni yemek tarifleri için bağlantı vermeyi unutmayın. Ayrıca tüm bu bağlantıları tek bir satırda bulunmadan liste halinde oluşturun.
Örnek:
```
 <ul>
    <li><a href="recipes/makarna.html">Makarna Tarifi</a></li>
    <li><a href="recipes/pilav.html">Pilav Tarifi</a></li>
    <li><a href="recipes/nohut.html">Nohut Tarifi</a></li>
  </ul>
```

# Projenizi Web Üzerinde Görmek

Çalışmanızı (projenizi) başkalarına göstermek istiyorsanız bunu github repository bağlantınızı paylaşarak sağlayabilirsiniz.

Github üzerinde veya başka bir platformda paylaşılan/yayınlanan bu projeye benzer projeleri incelediğiniz zaman kendi kendinize şunu soruyor olabilirsiniz: "Neden bu kadar güzel görünüyorlar, benim projem neden böyle güzel görünmüyor?"

**İşte cevap:**

- Bu kadar iyi görünmelerinin ana nedeni, yeni başlayanlar tarafından yapılmamış olmalarıdır. Bu projeleri yapan kişiler muhtemelen programlama konusunda biraz deneyimi olan veya Odin Projesini daha önce tamamlamış kişiler tarafından gönderilmiştir. 
- Projenizin başlangıçta çok güzel görünmesine ihtiyacınız yok, yeni başlayan olarak acele etmeden yavaş yavaş emin adımlarla ilerlemeye devam edin ve esas olarak bu projenin temel gereksinimlerine odaklanın. 
**NOT:** Merak etmeyin eğitiminize ve ilerlemenize sadık kaldığınız sürece siz çok daha güzellerini yapacaksınız.

Daha fazla bilgi için ve bu konuda güveninizi arttırmak, içinizi rahatlatmak, doğru yolda olduğunuzu görebilmek için lütfen [bu bağlantıdaki](https://dev.to/theodinproject/learning-code-f56) kısmı okuyunuz.

**Temel Olarak bu projenin içeriğini görebilmeniz için proje.html adlı bir dosya içinde temelleri sizinle paylaştım, onu inceleyebilirsiniz.**