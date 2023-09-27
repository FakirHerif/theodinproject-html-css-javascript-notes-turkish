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