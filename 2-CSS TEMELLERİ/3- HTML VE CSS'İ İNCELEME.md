# Giriş

HTML ve CSS'i gözden geçirebilmek ve hataları ayıklayabilmek, ön uç geliştirme açısından kritik bir öneme sahiptir. Bu ders bize, öğeleriniz ve CSS kurallarınız hakkında ayrıntılı bilgi sahibi olmanıza olanak sağlamanın yanı sıra kodunuzdaki sorunları bulup düzeltmenize yardımcı olacak Chrome Geliştirme Araçları'nı tanıtacaktır.

# Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.
- Element denetçiye nasıl erişeceğinizi öğreneceksiniz.
- Belirli öğeleri nasıl seçip inceleyeceğinizi öğreneceksiniz.
- Denetçide HTML ve CSS'i nasıl test edeceğinizi öğreneceksiniz.

# Denetçi (The inspector)

Denetçi aracı, web sayfalarının yapısını ve stillerini incelemek için kullanabileceğiniz güçlü bir araçtır. "Öğeler" ve "Stiller" bölümleri, sayfanın HTML yapısını ve CSS kodlarını görsel olarak görüntülemenizi sağlar. İhtiyacınıza göre bu araçları kullanarak sayfa üzerinde farklı öğeleri seçebilir ve stil kurallarını inceleyebilirsiniz. Bu, web geliştirme ve CSS öğrenme sürecinizde oldukça faydalıdır.

Denetçiyi açmak için bir web sayfasının herhangi bir yerine sağ tıklayıp "İncele" seçeneğine tıklayabilir veya F12 tuşuna basabilirsiniz. Evet şu an sayfanın HTML VE CSS kodlarını görmektesiniz.

Şu an "Öğeler" ve "Stiller" bölümlerine odaklanacağız.

# Öğelerin İncelenmesi

Öğeler bölmesinde sayfanızın HTML yapısının tamamını görebilirsiniz. Belirli bir öğeyi seçmek için bu bölmedeki öğelerden herhangi birine tıklayabilirsiniz. Alternatif olarak, aşağıda solda gösterilen maviyle vurgulanmış simgeye tıklayabilir ve sayfadaki herhangi bir öğenin üzerine gelebilirsiniz. 

![Görsel İçin Tıklayınız](https://cdn.statically.io/gh/TheOdinProject/curriculum/594984d7c9f9e744577f19ea475b3864e8cc7c91/html_css/v2/foundations/inspecting-html-and-css/imgs/01.png)

Bir öğe seçildiğinde, Stiller sekmesi, geçerli olarak uygulanan tüm stillerin yanı sıra üzerine yazılan tüm stilleri (metnin üstü çizili olarak gösterilir) gösterir. Örneğin, [The Odin Project ana sayfasındaki](https://www.theodinproject.com/) "Web Geliştirmede Kariyeriniz Burada Başlıyor/Your Career in Web Development Starts Here" başlığına tıklamak için denetçiyi kullanırsanız, aşağıda görüldüğü gibi sağ tarafta, o anda öğeyi etkileyen tüm stilleri göreceksiniz:

![Görsel İçin Tıklayınız](https://cdn.statically.io/gh/TheOdinProject/curriculum/f8fd38fc62578d8e8368f5303126215a492847f0/foundations/html_css/inspecting-html-and-css/imgs/03.png)

# Denetçide Stilleri Test Etmek

Stiller bölmesi ayrıca stilleri doğrudan tarayıcıda düzenlemenize de olanak tanır. Yeni bir kural eklemek için herhangi bir seçicinin içine tıklayabilir veya mevcut bir özelliği veya değeri değiştirebilirsiniz. Bunu yaparken, web sayfası değişikliklere gerçek zamanlı olarak yanıt verir. Bu, metin düzenleyicinizdeki kaynak kodunu etkilemez ancak sayfayı tekrar tekrar yüklemenize gerek kalmadan çeşitli nitelikleri ve değerleri hızlı bir şekilde test etmek için son derece kullanışlıdır. 

# Görev

Aşağıdaki adımları takip ederek resmi [Chrome DevTools belgelerinin](https://developer.chrome.com/docs/devtools/) aşağıdaki bölümlerini inceleyebilirsiniz:
- [Genel Bakış(Overview):](https://developer.chrome.com/docs/devtools/overview/) Bu bölümde, DevTools'un hangi araçlarının mevcut olduğu hakkında bilgi edinmek için belgeyi gözden geçirin. Şu anda tüm araçları nasıl kullanacağınızı öğrenmeye odaklanmak yerine, sadece mevcut araçların neler olduğunu anlamaya çalışın.
- [Chrome DevTools'u Açma:](https://developer.chrome.com/docs/devtools/open/) Bu bölüm, yukarıda anlattığımız gibi Chrome DevTools'u nasıl açacağınızı açıklar. Ayrıca ekstra bilgiler içerebilir, bu yüzden bu bilgilere de göz atın.
- [DOM'u Görüntülemeye ve Değiştirmeye Başlayın:](https://developer.chrome.com/docs/devtools/dom/) Bu bölümde, DOM'u (Belge Nesne Modeli) görüntülemeye ve değiştirmeye başlama konusunda adımları öğrenebilirsiniz. Ancak, JavaScript konsolunu kullanan kısımları atlayabilirsiniz.
- [CSS Görüntüleme ve Değiştirme](https://developer.chrome.com/docs/devtools/css/) Bu bölümde, CSS'inizi görüntüleme ve değiştirme hakkında talimatları takip edin. Etkileşimli talimatları dikkatlice izlemek, CSS becerilerinizi geliştirmenize yardımcı olacaktır.

Bu belgeler, Chrome DevTools'un temel özelliklerini anlamak ve kullanmaya başlamak için faydalı kaynaklar olacaktır. Bu araçlar, web geliştirme sürecinizde oldukça önemli bir rol oynar.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- Tarayıcınızın geliştirici araçlarıyla sayfanızdaki belirli bir öğeyi nasıl seçersiniz? 
- Tarayıcınızın geliştirici araçlarında CSS bildirimindeki üstü çizili işaret ne anlama gelir? 
- Tarayıcınızın geliştirici araçlarını kullanarak bir web sayfasının belirli öğelerinde CSS'i gerçek zamanlı olarak nasıl değiştirirsiniz? 

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

[Bu makale, geliştirici araçları içindeki CSS genel bakışını nasıl kullanabileceğimizi ele alıyor. Bu araç, belirli bir web sayfasında kullanılan renkler, yazı tipleri, medya sorguları vb. hakkında bilgi edinmemize yardımcı olur.](https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/)