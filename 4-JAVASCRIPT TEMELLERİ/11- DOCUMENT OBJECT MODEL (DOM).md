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