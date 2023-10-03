# Giriş

Bu bölümde the odin project notlarından bağımsız, şahsi olarak oluşturduğum notlar yer almaktadır.

Bu bölümde yer alan notlar:

- HTML öğelerinin içeriği nasıl değiştirilir?
- HTML öğelerinin stili (CSS) nasıl değiştirilir?
- HTML DOM olaylarına nasıl tepki verilir?
- HTML öğeleri nasıl eklenir ve silinir?


# DOM (DOCUMENT OBJECT MODEL)

DOM (Document Object Model), web sayfalarının yapısını ve içeriğini temsil eden bir programlama arayüzüdür. Web tarayıcıları, HTML veya XML gibi belge türlerini birer ağaç yapısı olarak temsil ederler. DOM, bu yapının programlar tarafından erişilmesine ve değiştirilmesine olanak tanır. Kısaca, DOM, web sayfalarının içeriği ile etkileşimde bulunmak için kullanılan bir araçtır.

**HTML DOM Nesne Ağacı**

![Görsel](https://www.w3schools.com/js/pic_htmltree.gif)

- JavaScript sayfadaki tüm HTML öğelerini değiştirebilir
- JavaScript sayfadaki tüm HTML niteliklerini değiştirebilir
- JavaScript sayfadaki tüm CSS stillerini değiştirebilir
- JavaScript mevcut HTML öğelerini ve niteliklerini kaldırabilir
- JavaScript yeni HTML öğeleri ve nitelikleri ekleyebilir
- JavaScript, sayfadaki mevcut tüm HTML etkinliklerine tepki verebilir
- JavaScript sayfada yeni HTML etkinlikleri oluşturabilir

# DOM Programlama Arayüzü

HTML DOM'a JavaScript (ve diğer programlama dilleri) ile erişilebilir. DOM'da tüm HTML öğeleri nesneler olarak tanımlanır.

**Property**, HTML elemanlarının özelliklerine ve içeriğine erişmek veya bu özellikleri değiştirmek için kullanılır (bir HTML öğesinin içeriğini değiştirmek gibi).

- **innerHTML:** Bir HTML elemanının içeriğini okuma veya değiştirme özelliği olarak kullanılır.
- **textContent:** Bir HTML elemanının metin içeriğine erişmek veya bu içeriği değiştirmek için kullanılır.
- **value:** Bir form elemanının değerini okuma veya değiştirme özelliği olarak kullanılır.
- **style:** Bir HTML elemanının stil özelliklerine (örneğin, renk, boyut, vb.) erişmek veya bu özellikleri değiştirmek için kullanılır.
- **parentNode:** Bir HTML elemanının üst düğümünü (parent node) temsil eden özelliktir.

**Method**, belirli görevleri gerçekleştirmek için kullanılır (bir HTML öğesini eklemek veya silmek gibi).

- **getElementById(id):** Belirli bir HTML elemanını, bu elemanın benzersiz kimliği (ID) ile seçmek için kullanılır.
- **querySelector(selector):** Belirli bir CSS selektörü ile uyumlu olan ilk HTML elemanını seçmek için kullanılır.
- **appendChild(node):** Bir elemana başka bir elemanı eklemek için kullanılır.
- **removeChild(node):** Bir elemandan başka bir elemanı kaldırmak için kullanılır.
- **addEventListener(event, function):** Bir HTML elemanına belirli bir olayı (event) dinlemek için bir olay dinleyici eklemek için kullanılır.

Bir Örnek Verelim:

```
<!DOCTYPE html>
<html>
<body>

<h2>My First Page</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

bu örnekte, id'si demo olan bir paragraf tag'imiz var ve içeriği boş. Öncelikle bunu **getElementById** yöntemiyle seçtik ve daha sonra **innerHTML** yöntemi kullanarak içeriğini değiştirdik yani "Hello World!" ekledik. 

# HTML Element'lerini Bulmak

**Method**

- **document.getElementById(id):** id'den ögeyi bulur

Örnek

```
<p id="intro">Finding HTML Elements by Id</p>

<script>
const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

</script>

// Çıktı ===> The text from the intro paragraph is: Finding HTML Elements by Id
```

- **document.getElementsByTagName(name):** tag'den ögeyi bulur

Örnek

```
<p>Finding HTML Elements by Tag Name.</p>
<p>This example demonstrates the <b>getElementsByTagName</b> method.</p>

<script>
const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;

</script>

// Çıktı ===> The text in first paragraph (index 0) is: Finding HTML Elements by Tag Name.
```

- **document.getElementsByClassName(name):** Class'tan ögeyi bulur

Örnek

```
<p>Finding HTML Elements by Class Name.</p>
<p class="intro">Hello World!</p>
<p class="intro">This example demonstrates the <b>getElementsByClassName</b> method.</p>

<p id="demo"></p>

<script>
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
</script>

// Çıktı ===> The first paragraph (index 0) with class="intro" is: Hello World!
```

# HTML Element'lerini Değiştirmek

**Property**

- **element.innerHTML =  new html content:** HTML ögesini değiştirir
- **element.attribute = new value:** HTML ögesinin value değerini değiştirir
- **element.style.property = new style:** HTML ögesinin stilini değiştirir

**Method**

- **element.setAttribute(attribute, value):** HTML ögesinin özellik değerini değiştirir

# Öge Eklemek ve Silmek

**Method**

- **document.createElement(element):** HTML elementi oluşturur (örneğin div)
- **document.removeChild(element):** HTML child elemanı kaldırır
- **document.appendChild(element):** HTML child elemanı ekler
- **document.replaceChild(new, old):** HTML child elemanı yenisiyle değiştirir

# Olay İşleyicisi Eklemek

**Method**

- **document.getElementById(id).onclick = function(){code}:** avaScript kullanılarak bir HTML elemanının tıklama olayına bir işlev (function) atanmasını sağlayan bir kod örneğidir.

Örnek

```
document.getElementById("myButton").onclick = function() {
  // Tıklama olayı gerçekleştiğinde çalışacak kod buraya gelir.
  alert("Düğme tıklandı!");
};
```

Yukarıdaki kod, "myButton" adlı bir HTML elemanına tıklama olayı ekler ve bu eleman tıklandığında bir uyarı penceresi görüntüler. Bu şekilde, belirli bir HTML elemanı tıklandığında ne olacağını tanımlayabilirsiniz.

# CSS Seçicilere Göre HTML Öğelerini Bulmak

- **document.querySelectorAll()** elirtilen bir CSS seçiciyle eşleşen tüm HTML öğelerini (id, class names, types, attributes, values of attributes, vs vs) bulmak istiyorsanız querySelectorAll() yöntemini kullanın.

Örnek

```
<p>Finding HTML Elements by Query Selector</p>
<p class="intro">Hello World!.</p>
<p class="intro">This example demonstrates the <b>querySelectorAll</b> method.</p>

<p id="demo"></p>

<script>
const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
</script>

// Çıktı ===> The first paragraph (index 0) with class="intro" is: Hello World!.
```

# HTML İçeriğini Değiştirmek (with innerHTML)

Bir HTML öğesinin içeriğini değiştirmenin en kolay yolu, innerHTML özelliğini kullanmaktır.

```
 document.getElementById(id).innerHTML = new HTML
```

Örnek

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript can Change HTML</h2>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

<p>The paragraph above was changed by a script.</p>

</body>
</html>

// p içeriği "New text!" olacak
```

Bu örnekte p tag'inin içeriğini yani "Hello World!" metnini önce **getElementById** yöntemiyle "p1" id'sini seçerek daha sonra **innerHTML** yöntemiyle "New text!" ile değiştirmiş olduk.

Başka Bir Örnek

```
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Old Heading</h1>

<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

<p>JavaScript changed "Old Heading" to "New Heading".</p>

</body>
</html> 

// h1 içeriği "New Heading" olacak
```

Bu örnekte ise Bu örnekte h1 tag'ini ve içeriğini **getElementById** yöntemiyle seçtik ve bunu element adlı değişekene atadık. Ardından element değişkenimize **innerHTML** yöntemini uyguladık ve h1'in "Old Heading" olan içeriğini "New Heading" ile değiştirdik.

# Bir Niteliğin Değerini Değiştirmek (with attribute)

```
document.getElementById(id).attribute = new value
```

