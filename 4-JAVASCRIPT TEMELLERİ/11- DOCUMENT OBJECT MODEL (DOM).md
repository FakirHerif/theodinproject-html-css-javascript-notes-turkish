# Giriş

Document Object Model (DOM) verilen bir yapıyı manipüle etme yeteneğine sahiptir. DOM, bir web sayfasının temsil edildiği bir nesne ağacıdır ve JavaScript, bu ağaç yapısını kullanarak web sayfalarını dinamik olarak değiştirmenizi sağlar.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- DOM'un ne olduğunu öğreneceğiz.

- "node" ile "element" arasındaki farkları öğreneceğiz.

- "Selector"larla düğümleri nasıl hedefleyeceğimizi öğreneceğiz.

- DOM düğemlerini bulma/ekleme/çıkarma ve değiştirme temel yöntemlerini öğreneceğiz.

- "nodelist" ile “array of nodes” arasındaki farkı öğreneceğiz.

- "Bubbling"'in ne olduğunu ve nasıl çalıştığını öğreneceğiz.

# DOM - Document Object Model

DOM (Document Object Model), bir web sayfasının hiyerarşik yapısını temsil eden bir programlama arayüzüdür. DOM, HTML, XML veya diğer belge türlerini tarayıcılar veya programlar tarafından işlenirken kullanılır. Web sayfasındaki her öğeyi (örneğin, başlık, paragraf, resim, bağlantı, düğme) bir "nesne" olarak düşünerek bu nesneleri bir ağaç yapısında düzenler. Bu nesne ağacı, JavaScript gibi programlama dilleri tarafından erişilebilir ve bu sayede web sayfasının içeriği dinamik olarak değiştirilebilir ve manipüle edilebilir.

Özetle, DOM, web sayfalarının içeriğini programlar tarafından erişilebilir ve değiştirilebilir bir şekilde temsil eden bir yapıdır. Bu, web sayfalarının dinamik ve etkileşimli oluşturulmasına ve yönetilmesine olanak tanır.

```
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

Yukarıdaki örnekte, "div class="display", div id="container" öğesinin "çocuğudur" ve div class="controls" öğesinin kardeşidir. Bunu bir aile ağacı gibi düşünün. div id="container", her biri kendi "dalında" olan çocukları bir sonraki seviyede olan bir ebeveyndir.

# Seçicilerle düğümleri hedefleme

DOM ile çalışırken, çalışmak istediğiniz düğümleri hedeflemek için "seçicileri(selectors)" kullanırsınız. İstediğiniz düğümleri hedeflemek için CSS tarzı seçicilerin ve ilişki özelliklerinin bir kombinasyonunu kullanabilirsiniz. CSS tarzı seçicilerle başlayalım. Yukarıdaki örnekte, div class="display"'e başvurmak için aşağıdaki seçicileri kullanabilirsiniz:

- div.display
- .display
- #container > .display
- div#container > div.display

Düğümlerin sahip olduğu özel özelliklere sahip ilişkisel seçicileri de (örneğin, FirstElementChild veya lastElementChild vb.) kullanabilirsiniz.

```
const container = document.querySelector('#container');
// #container div'i seçer (sözdizimi konusunda endişelenmeyin, oraya geleceğiz)

console.dir(container.firstElementChild);                      
// // #container'ın ilk çocuğunu seçer => .display

const controls = document.querySelector('.controls');   
// // .controls div'i seçer

console.dir(controls.previousElementSibling);                  
// // önceki kardeşi seçer => .display
```

Yani belirli bir düğümü, etrafındaki düğümlerle olan ilişkilerine göre tanımlıyorsunuz.

# DOM Methodları

Web tarayıcısı, bir web sayfasının HTML kodunu işlerken, bu kodu bir DOM (Document Object Model - Belge Nesne Modeli) ağacına dönüştürür. DOM ağacı, web sayfasının içeriğini, yapısını ve özelliklerini temsil eden bir hiyerarşik nesne yapısıdır. Her HTML veya XML öğesi, bu DOM ağacında bir "node" (düğüm) olarak temsil edilir.

Bu düğümler, JavaScript gibi programlama dilleri tarafından erişilebilen nesnelerdir. Her bir düğümün sahip olduğu özellikler ve yöntemler vardır. Bu özellikler ve yöntemler, JavaScript'in web sayfasının içeriğini dinamik olarak değiştirmek, güncellemek veya manipüle etmek için kullanabileceği temel araçlardır.

web sayfalarını JavaScript kullanarak nasıl kontrol edebileceğinizin temelini oluşturan "query selectors" gibi araçları nasıl kullanacağımızı öğrenelim. Query selectorlar, belirli DOM düğümlerini seçmeye ve üzerlerinde işlem yapmaya yardımcı olan önemli araçlardır.

# Query selectors

- **element.querySelector(selector):** Bu yöntem, belirli bir seçiciye uyan ilk öğeyi seçer ve bir referansını döndürür. Yani, belirlediğiniz CSS veya DOM seçicisine uyan ilk öğeyi seçmek için kullanılır. Örneğin, element.querySelector(".baslik") çağrısı, DOM içinde sınıfı "baslik" olan ilk öğeyi seçer ve bu öğenin referansını döndürür.

- **element.querySelectorAll(selectors):** Bu yöntem, belirlediğiniz CSS veya DOM seçicilerine uyan tüm öğeleri seçer ve bir "nodelist" adı verilen bir koleksiyon olarak döndürür. Yani, tüm eşleşen öğelerin bir listesini almak için kullanılır. Örneğin, element.querySelectorAll("p") çağrısı, DOM içinde tüm paragraf öğelerini içeren bir nodelist döndürür.

Bu yöntemler, web sayfanızdaki öğeleri seçmek ve bu öğeler üzerinde işlem yapmak için çok kullanışlıdır. querySelector daha spesifik bir öğeyi seçmek için kullanılırken, querySelectorAll tüm eşleşen öğeleri seçmek için kullanılır.

Potansiyel (marjinal) performans avantajları sunan daha spesifik birkaç sorgu daha vardır, ancak şimdi bunların üzerinde durmayacağız.

Önemli bir not olarak belirtmek gerekir ki, querySelectorAll kullanırken dönen değer bir dizi(array) değildir. Bir dizi gibi görünür ve diziler gibi davranabilir, ancak aslında bir "nodelist"dir (düğüm listesi). Büyük fark, nodelistlerde bazı dizi yöntemlerinin eksik olmasıdır. Sorunlar ortaya çıkarsa çözümü; nodelist'i bir diziye dönüştürmektir. Bunu yapmak için Array.from() veya spread operatörünü kullanabilirsiniz.

Yani, querySelectorAll ile seçilen öğeler bir nodelist olarak döner. Nodelistler, bazı dizi işlemlerini doğrudan desteklemez, bu nedenle bir diziye dönüştürmek isterseniz Array.from() veya yayılma operatörünü "...nodelist" kullanabilirsiniz. Bu, nodelist üzerinde daha fazla dizi işlemi yapmanıza olanak tanır.

# Element Oluşturma

document.createElement(tagName, options) - tagName etiket türünde yeni bir element oluşturur. Bu durumda options, işleve bazı isteğe bağlı parametreler ekleyebileceğiniz anlamına gelir.

```
const div = document.createElement('div');
```

Bu fonksiyon yeni oluşturduğumuz HTML öğesi (element)'i sadece hafızada oluşturur, web sayfasının gerçek DOM'una henüz eklenmemiştir. Bu, öğeyi web sayfanızda görünmeden önce istediğiniz şekilde manipüle etmenize (stil eklemek, sınıflar, kimlikler, metin vb. eklemek) olanak tanır. Yani, oluşturulan öğeyi sayfaya eklemek için belirli yöntemleri kullanmamız gerekir. 

Aşağıdaki yöntemlerden birini kullanarak elementi DOM'a yerleştirebiliriz:

**Append elements / Element Ekleme**

- **parentNode.appendChild(childNode)** Bu yöntem, bir öğeyi başka bir öğenin altına eklemek için kullanılır. parentNode bir öğeyi temsil eden bir DOM düğümüdür ve childNode eklemek istediğiniz alt öğeyi temsil eder. Bu yöntem, childNode öğesini parentNode öğesinin son çocuğu olarak ekler. Yani, parentNode öğesinin içindeki son öğe olarak eklenir.

- **parentNode.insertBefore(newNode, referenceNode)** Bu yöntem, bir öğeyi belirli bir öğenin (referans öğesi) önüne eklemek için kullanılır. parentNode, yeni öğeyi temsil eden bir DOM düğümüdür ve newNode, eklemek istediğiniz yeni öğeyi temsil eder. referenceNode ise, yeni öğenin nereye ekleneceğini belirleyen bir referans öğesidir. newNode, referenceNode öğesinin önüne eklenir.

Özetle, bu yöntemler DOM yapısında öğeleri eklemek veya yerleştirmek için kullanılır ve belirli bir düğümün altına veya önüne yeni öğeler eklemek için oldukça kullanışlıdır.

**Remove elements / Element Çıkarma**

- **parentNode.removeChild(child)** Bu yöntem, bir öğeyi DOM'dan kaldırmak için kullanılır. parentNode, kaldırmak istediğiniz öğenin doğrudan üst öğesini temsil eden bir DOM düğümüdür ve child, kaldırmak istediğiniz öğeyi temsil eden bir DOM düğümüdür. Bu yöntem, child öğesini parentNode öğesinden kaldırır ve kaldırılan öğeyi referans olarak döndürür.

Özetle, bu yöntem, bir öğeyi DOM ağacından çıkarmak ve bu öğeyi daha sonra kullanmak için kullanılır. Kaldırılan öğe, işlem sonucunda geri döndürülür ve bu sayede öğeyi başka bir yere taşımak veya gerektiğinde yeniden kullanmak mümkün olur.

**Altering elements / Elementlerin Değiştirilmesi**

Bir elementin referansına (DOM düğümüne) sahip olduğumuzda, bu referansı kullanarak elementin kendi özelliklerini değiştirebiliriz. Bu, elementler üzerinde çeşitli faydalı değişiklikler yapmamıza olanak sağlar. Bu değişiklikler arasında; özellik eklemek/çıkarmak, sınıfları değiştirmek, içeriğe stil bilgisi eklemek ve daha fazlası bulunabilir.

Örneğin, bir DOM öğesinin sınıfını değiştirerek CSS kurallarını uygulayabilir, öğenin metnini değiştirerek içeriği güncelleyebilir veya öğeye yeni bir özellik veya nitelik ekleyebilirsiniz. Bu, web sayfalarını dinamik ve etkileşimli hale getirmenizi ve kullanıcı deneyimini geliştirmenizi sağlar.

**Adding inline style / Satır İçi Stil Ekleme**

```
div.style.color = 'blue';                                      
// belirtilen stil kuralını ekler

div.style.cssText = 'color: blue; background: white;';          
// birkaç stil kuralı ekler

div.setAttribute('style', 'color: blue; background: white;');    
// birkaç stil kuralı ekler
```

Satır içi stiller hakkında daha fazla bilgi için [DOM Enlightenment'ın CSS Stil kuralları](https://domenlightenment.com/#6.2) makalesini inceleyin.

JS'den düz tire ile yazılmış bir CSS kuralına erişiyorsanız ya camelCase kullanmanız gerekeceğini ya da tire  yerine köşeli parantez kullanmanız gerekeceğini unutmayın.

```
div.style.background-color // çalışmıyor 
div.style.backgroundColor // div'in arka plan rengi stiline erişir
div.style['background-color'] // bu çalışıyor
div.style.cssText = "background-color: white;" // bir CSS dizesi atayarak div'in arka plan rengini ayarlar
```

**Editing Attributes / Nitelikleri Düzenleme**

```
div.setAttribute('id', 'theDiv');                              
// div adında bir HTML öğesine bir nitelik (attribute) ekler veya var olan bir niteliği günceller. Bu örnekte, öğeye "id" adında bir nitelik eklenir veya eğer "id" niteliği zaten varsa, bu nitelik "theDiv" değeriyle güncellenir. Yani, öğenin "id" niteliği "theDiv" olarak ayarlanır.
// "theDiv"

div.getAttribute('id');                                        
// div öğesinin "id" niteliğinin değerini döndürür
// "theDiv"

div.removeAttribute('id');                                     
// belirtilen özelliği siler
```

Mevcut özellikler hakkında daha fazla bilgi için [MDN'nin HTML Nitelikleri](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) bölümüne bakın.

**Working With Classes / Class'lar İle Çalışmak**

```
div.classList.add('new');                                      
// div'e "new" sınıfını ekler

div.classList.remove('new');                                   
// "new" sınıfını div'den kaldırır

div.classList.toggle('active');                                
// div'de  "active" sınıfının varlığını kontrol eder.
// Eğer "active" sınıfı yoksa, bu satır "active" sınıfını ekler. Eğer "active" sınıfı zaten varsa, bu satır "active" sınıfını kaldırır.
```

Satır içi stil eklemek ve kaldırmak yerine CSS stilini açıp kapatmak (toggle etmek)  genellikle daha yaygın bir kullanım şeklidir.

**Adding Text Content / Metin İçeriği Eklemek**

```
div.textContent = 'Hello World!'                               
// div'de "Hello World!" şeklinde metin düğümü (text node) oluşturur ve bu metin düğümünü div öğesine ekler.
// div öğesinin içeriği "Hello World!" olarak ayarlanır
```

**Adding HTML Content / HTML İçeriği Eklemek**

```
div.innerHTML = '<span>Hello World!</span>';                   
// div'in içeriği <span>Hello World!</span> ile değiştirilir.
```

Bu yöntem, bir HTML öğesinin içeriğini HTML koduyla tamamen değiştirmek için kullanılır. Özellikle dinamik olarak içerik eklemek veya değiştirmek gerektiğinde kullanışlıdır. Ancak, içeriği tamamen değiştirmek, önceki içeriği kaybedebilir, bu nedenle dikkatli bir şekilde kullanılmalıdır. [Bu videoyu izleyin.](https://www.youtube.com/watch?v=ns1LX6mEvyM)

Bir dakikamızı ayıralım, ele aldığımız konuları gözden geçirelim ve devam etmeden önce size bu konularda pratik yapma şansı verelim. Bir web sayfasına DOM öğesi oluşturma ve eklemeyle ilgili bu örneğe göz atın:

```
<!-- HTML dosyanız: -->
<body>
  <h1>
    WEB SAYFANIZIN BAŞLIĞI
  </h1>
  <div id="container"></div>
</body>
```

```
// JavaScript dosyanız
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```

JavaScript dosyasında ilk önce HTML'mizde zaten mevcut olan konteyner div'e bir referans alıyoruz. Daha sonra yeni bir div oluşturup onu değişken içeriğinde saklıyoruz. İçerik div'e bir sınıf ve bir miktar metin ekliyoruz ve son olarak bu div'i konteynere ekliyoruz. Sonuçta bu basit bir süreç. JavaScript kodu çalıştırıldıktan sonra DOM ağacımız şu şekilde görünecektir:

```
<!-- DOM -->
<body>
  <h1>
    WEB SAYFANIZIN BAŞLIĞI
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
```

JavaScript'in HTML'nizi değiştirmediğini ancak DOM'u değiştirdiğini unutmayın; HTML dosyanız aynı görünecektir, ancak JavaScript, tarayıcının oluşturduğu şeyi değiştirir.

JavaScript kodunuz, çoğunlukla JS dosyası çalıştırıldığında veya HTML içindeki script etiketiyle karşılaşıldığında çalışır. Eğer JavaScript kodunuzu dosyanızın en üstünde ekliyorsanız, DOM manipülasyon yöntemlerinin birçoğu çalışmayabilir çünkü JS kodu, DOM düğümleri oluşturulmadan önce çalışır. Bu sorunu en basit şekilde çözmek için JavaScript kodunuzu HTML dosyanızın altında eklemelisiniz, böylece DOM düğümleri ayrıştırılıp oluşturulduktan sonra çalışır.

Alternatif olarak, JavaScript dosyanızı HTML belgenizin head bölümünde bağlayabilirsiniz. script etiketini kullanarak src özelliğini kullanarak JS dosyasının yolunu içeren bir şekilde ve bu dosyanın HTML ayrıştırıldıktan sonra yüklenmesini sağlamak için defer anahtar kelimesini ekleyerek şu şekilde yapabilirsiniz:

```
<head>
  <script src="js-dosyası.js" defer></script>
</head>
```

Daha fazla bilgi için [MDN makalesindeki](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#applying_css_and_javascript_to_html) ikinci maddeyi okuyabilirsiniz. Bu madde ayrıca ek script yükleme stratejilerine yönlendiren bir bağlantı içerir.

# Alıştırmalar

Yukarıdaki örneği kendi bilgisayarınızdaki dosyalara kopyalayın. Çalışmasını sağlamak için HTML iskeletinin geri kalanını sağlamanız ve JavaScript dosyanızı bağlamanız veya JavaScript'i sayfadaki bir komut dosyası etiketine yerleştirmeniz gerekir. Devam etmeden önce her şeyin çalıştığından emin olun!

YALNIZCA JavaScript'i ve yukarıda gösterilen DOM yöntemlerini kullanarak aşağıdaki elementleri kapsayıcıya ekleyin.

- "Hey ben kırmızıyım!" yazan kırmızı renkli bir p etiketi oluşturun

- "Ben mavi bir h3'üm!" yazan mavi renkli bir h3 etiketi oluşturun

- içinde aşağıdaki öğelerin bulunduğu, siyah kenarlıklı ve pembe arka plan rengine sahip bir div etiketi oluşturun.
    - "Ben bir div'in içindeyim" yazan başka bir h1 etiketi oluşturun.
    - "BEN DE!" yazan bir p etiketi oluşturun.
    - Bunun için ipucu: createElement ile div'i oluşturduktan sonra, container'a eklemeden önce h1 ve p etiketlerini buna ekleyin.

# Events

DOM'u JavaScript ile manipüle etmeyi öğrendikten sonra, bir sonraki adım web sayfalarınızda bu işlemi dinamik veya talep üzerine nasıl gerçekleştireceğinizi öğrenmektir! Events, bu sihirli olayları sayfalarınızda gerçekleştirmenin yoludur. Events, web sayfanızda gerçekleşen fare tıklamaları veya klavye tuş vuruşları gibi eylemlerdir ve JavaScript'i kullanarak web sayfanızın bu event'ları dinlemesini ve tepki vermesini sağlayabiliriz.

Bu işlemi üç temel yol ile gerçekleştirebilirsiniz: HTML öğeleriniz üzerinde doğrudan fonksiyon niteliklerini belirleyebilirsiniz, JavaScript'teki DOM düğmelerinin form olaylarına (onclick, onmousedown vb.) ait özelliklerini ayarlayabilirsiniz veya JavaScript'teki DOM düğmelerine etkinlik dinleyicileri ekleyebilirsiniz. Etkinlik dinleyicileri(event listeners) kesinlikle tercih edilen yöntemdir, ancak diğer iki yöntemi de sıkça göreceksiniz, bu nedenle üçünü de ele alacağız.

Tıklandığında "Merhaba Dünya" uyarısını veren 3 düğme oluşturacağız. Hepsini kendi HTML dosyanızı kullanarak veya CodePen gibi bir araç kullanarak deneyin.

**Birinci Yöntem**

```
<button onclick="alert('Hello World')">Click Me</button>
```

Bu yöntem, HTML dosyamızı JavaScript ile karıştırarak ideal olmayan bir yaklaşım sağlar. Ayrıca, bu yöntemi kullanarak bir DOM öğesi başına yalnızca bir "onclick" özelliği ayarlayabiliriz, bu nedenle bu yöntemi kullanarak tıklama olayına yanıt olarak birden fazla farklı fonksiyonu çalıştıramayız.

**İkinci Yöntem**

```
<!-- HTML DOSYASI -->
<button id="btn">Click Me</button>
```

```
// JavaScript DOSYASI
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```

Bu yöntem biraz daha iyi. JS'yi HTML'den bir JS dosyasına taşıdık ancak hala bir DOM öğesinin yalnızca 1 "onclick" özelliğine sahip olabilmesi sorunuyla karşı karşıyayız.
 
Arrow fonksiyonları gözden geçirmeniz mi gerekiyor? [Bu bağlantıya tıklayın.](https://javascript.info/arrow-functions-basics)

**Üçüncü Yöntem**

```
<!-- HTML DOSYASI -->
<button id="btn">Click Me Too</button>
```

```
// JavaScript DOSYASI
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

Şimdi, sorumlulukların ayrı tutulduğu ve gerektiğinde birden çok etkinlik dinleyicisi kullanılabilen bir yöntem kullanıyoruz. Üçüncü yöntem, çok daha esnek ve güçlüdür, ancak kurulumu biraz daha karmaşıktır.

Bu yöntemlerin üçünün de aşağıdaki gibi isimlendirilmiş fonksiyonlarla kullanılabileceğini unutmayın:

```
<!-- HTML DOSYASI -->
<!-- BİRİNCİ YÖNTEM -->
<button onclick="alertFunction()">CLICK ME BABY</button>
```

```
// JavaScript DOSYASI
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// İKİNCİ YÖNTEM
btn.onclick = alertFunction;

// ÜÇÜNCÜ YÖNTEM
btn.addEventListener('click', alertFunction);
```

İsimlendirilmiş fonksiyonları kullanmak kodunuzu önemli ölçüde temizleyebilir ve eğer fonksiyon birden fazla yerde kullanmak isteyeceğiniz bir şeyse gerçekten iyi bir fikirdir.

Her üç yöntemle de çağırdığımız fonksiyona bir parametre ileterek olay hakkında daha fazla bilgiye erişebiliriz. Bunu kendinizde deneyin:

```
btn.addEventListener('click', function (e) {
  console.log(e);
});
```

(e) fonksiyonunun addEventListener'dan bir callback olduğunu unutmayın. Callback'lerle ilgili daha fazla açıklamayı [BURADA](https://dev.to/i3uckwheat/understanding-callbacks-2o9e) bulabilirsiniz.

Bu fonksiyondaki e, olayın kendisine başvuran bir nesnedir. Bu nesnenin içinde, hangi fare düğmesine veya tuşa basıldığı gibi birçok yararlı özellik ve yönteme (bir nesnenin içinde yaşayan işlevler) veya veya etkinliğin hedefi (tıklanan DOM düğümü) hakkında bilgiye ulaşabilirsiniz.

Bunu deneyin:

```
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
```

Ve şimdi bunu deneyin:

```
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
```

Oldukça hoş, değil mi?

**Attaching listeners to groups of nodes / Dinleyicileri düğüm gruplarına ekleme**

Birçok öğeye çok sayıda benzer olay dinleyicisi ekliyorsanız, bu çok fazla kod karmaşası gibi görünebilir. Bunu daha verimli bir şekilde yapmanın birkaç yolu vardır. Yukarıda, querySelectorAll('selector') ile belirli bir seçiciyle eşleşen tüm öğelerin düğüm listesini alabileceğimizi öğrendik. Her birine bir dinleyici eklemek için tüm listeyi şu şekilde tekrarlamamız yeterlidir:

```
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
```

```
// butonlar bir düğüm listesidir. Bir diziye çok benziyor ve öyle davranıyor.
const buttons = document.querySelectorAll('button');

// her düğmeyi yinelemek için .forEach yöntemini kullanıyoruz
buttons.forEach((button) => {

  // // ve her biri için bir 'click' listener ekliyoruz
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```

DOM manipülasyonu ve olay yönetimi söz konusu olduğunda bu sadece buzdağının görünen kısmıdır ancak bazı egzersizlerle başlamanız için bu yeterlidir. Şu ana kadarki örneklerimizde yalnızca 'tıklama' olayını kullandık ama kullanabileceğiniz çok daha fazlası var. (click, dblclick, keydown, keyup gibi)

[Bu sayfada](https://www.w3schools.com/jsref/dom_obj_event.asp) her olayın açıklamalarını içeren eksiksiz bir liste bulabilirsiniz.

# Görev

Web sayfalarını manipüle etmek, JavaScript dilinin birincil faydasıdır! Bu teknikler, bir ön uç geliştirici olarak muhtemelen her gün uğraşacağınız şeylerdir, o yüzden hadi pratik yapalım!

- [Bu MDN makalesindeki](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list) mücadeleyi tamamlayın ve becerilerinizi test edin!

- Bu [JavaScript DOM Eğitimindeki](https://www.javascripttutorial.net/javascript-dom/) ilk 2 bölümü inceleyin. getElementById gibi bazı yöntemlerin daha eski olduğunu ve günümüzde daha az kullanıldığını unutmayın. Daha sonra 7. bölümü inceleyin.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- [DOM nedir?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#dom-document-object-model)

- [Çalışmak istediğiniz düğümleri nasıl hedeflersiniz?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#targeting-nodes-with-selectors)

- [DOM'da element nasıl oluşturursunuz?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#element-creation)

- [DOM'a bir elementi nasıl eklersiniz?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#append-elements)

- [Bir elementi DOM'dan nasıl kaldırırsınız?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#remove-elements)

- [DOM'daki elementi nasıl değiştirebilirsiniz?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#altering-elements)

- [Bir DOM elementine metin eklerken textContent'i mi yoksa innerHTML'i mi kullanmalısınız?  Neden?](https://www.youtube.com/watch?v=ns1LX6mEvyM)

- [DOM düğümleriyle çalışırken JavaScript tag'inizi HTML dosyanızın neresine eklemelisiniz?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#important-note)

- [Event'lar ve listener'lar nasıl çalışır?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events)

- [Kodunuzda event'ları kullanmanın üç yolu nedir?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events)

- [Event listener neden event'ları ele almanın en tercih edilen yoludur?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#attaching-listeners-to-groups-of-nodes)

- [Listener'larda isimlendirilmiş fonksiyonları kullanmanın faydaları nelerdir?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#method-3)

- [querySelector ve querySelectorAll'ın return değerleri arasındaki fark nedir?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#query-selectors)

- [Bir “düğüm listesi(nodelist)” neleri içerir?](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#query-selectors)

- [“capture” ve “bubbling” arasındaki farkı açıklayın.](https://www.youtube.com/watch?v=F1anRyL37lE)

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz.

- [Eloquent JS - DOM](eloquentjavascript.net/13_dom.html)

- [Eloquent JS - Event'ları Yönetme](https://eloquentjavascript.net/15_event.html)

- [DOMenlightenment](https://domenlightenment.com/)

- [Plain JavaScript, JS'nin diğer yönlerinin yanı sıra DOM ile ilgili JavaScript kod parçacıkları ve açıklamalara bir referanstır. jQuery öğrendiyseniz, o olmadan işleri nasıl yapacağınızı anlamanıza yardımcı olacaktır.](https://plainjs.com/javascript/)

- [Bu W3Schools makalesi DOM hakkında basit ve anlaşılması kolay dersler sunmaktadır.](https://www.w3schools.com/js/js_htmldom.asp)

- [JS DOM Hızlandırılmış Kursu, Traversy Media tarafından DOM hakkında kapsamlı ve iyi açıklanmış 4 bölümlük bir video serisidir.](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s)

- [Dom'u Anlamak, DigitalOcean'ın uygun şekilde adlandırılmış makale tabanlı bir eğitim serisidir.](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model)

- [MDN'nin event'lara girişi, event'larla ilgili bu derste öğrendiğiniz konuların aynılarını kapsar.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

- [Wes Bos'un Drumkit JavaScript30 programı görevin kapsadığı içeriği güçlendirir.](https://www.youtube.com/watch?v=VuN8qwZoego) [Videoda kullanımdan kaldırılmış bir tuş kodu klavye olayının kullanıldığını fark edeceksiniz.](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) [bunu önerilen kod klavyesi olayıyla değiştirin ve veri anahtarı etiketlerini buna göre değiştirin.](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)

- [Wes Bos'un JavaScript30 programından Event Capture, Propagation and Bubbling videosu.](https://www.youtube.com/watch?v=F1anRyL37lE)

# EKSTRA NOTLAR
*JAVASCRIPT TEMELLERİ klasörü/dizini içerisinde yer alan, tüm konuların ele alındığı, açıklandığı ve anlatıldığı şahsi olarak oluşturduğum ek notları incelemeyi unutmayın !!!*