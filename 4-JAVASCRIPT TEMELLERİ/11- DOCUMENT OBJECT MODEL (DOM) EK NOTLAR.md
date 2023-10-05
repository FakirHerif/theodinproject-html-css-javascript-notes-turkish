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

// p içeriği "New text!" oldu
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

// h1 içeriği "New Heading" oldu
```

Bu örnekte ise h1 tag'ini ve içeriğini **getElementById** yöntemiyle seçtik ve bunu element adlı değişekene atadık. Ardından element değişkenimize **innerHTML** yöntemini uyguladık ve h1'in "Old Heading" olan içeriğini "New Heading" ile değiştirdik.

# Bir Niteliğin Değerini Değiştirmek (with attribute)

```
document.getElementById(id).attribute = new value
```

Örnek

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<img id="image" src="smiley.gif" width="160" height="120">

<script>
document.getElementById("image").src = "landscape.jpg";
</script>

<p>The original image was smiley.gif, but the script changed it to landscape.jpg</p>

</body>
</html>

// src içeriği "landscape.jpg" oldu
```

Bu örnekte img tag'ini ve içeriğini **getElementById** yöntemiyle seçtik ve .src yöntemi ile ve img src "smiley.gif" olan içeriğini "landscape.jpg" ile değiştirdik.

# document.write()

JavaScript'te, document.write() işlevi doğrudan HTML çıktı akışına yazmak için kullanılabilir.

Örnek

```
<script>
document.write(Date());
</script>

// Çıktı tarihimiz olacak ve ekrana direkt yazdıracaktır.
```

# Stilleri Değiştirmek

HTML DOM, JavaScript'in HTML öğelerinin stilini değiştirmesine olanak tanır.

Bir HTML öğesinin stilini değiştirmek için bu sözdizimi kullanılır:

```
 document.getElementById(id).style.property = new style 
```

Örnek
```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>Changing the HTML style:</p>


<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";         // p2 id'li içeriğin rengini mavi yaptık
document.getElementById("p2").style.fontFamily = "Arial";   // p2 id'li içeriğin fontunu arial yaptık
document.getElementById("p2").style.fontSize = "larger";    // p2 id'li içeriğin font büyüklüğünü larger yaptık
</script>


</body>
</html>
```


# Event'leri Kullanma

HTML DOM, bir olay meydana geldiğinde kod yürütmenize olanak tanır.

HTML öğelerinde "bir şeyler olduğunda" tarayıcı tarafından event'ler oluşturulur:

- Bir öğeye tıklandığında
- Sayfa yüklendiğinde
- Input Fields değiştirildiğinde
- ve daha fazlası

Örnek (kullanıcı düğmeye tıkladığında id'si id1 olan içeriğin stili değişecek)
```
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">My Heading 1</h1>

<button type="button" 
onclick="document.getElementById('id1').style.color = 'red'">   // butona basınca içerik rengi kırmızı olacak
Click Me!</button>

</body>
</html>
```

# HTML DOM EVENTS

HTML DOM, JavaScript'in HTML olaylarına tepki vermesine olanak tanır.

Örnek (Bu örnekte, h1 tag'inin içeriği kullanıcı texte tıkladığında değişir)

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<h2 onclick="this.innerHTML='Ooops!'">Click on this text!</h2>

</body>
</html>
```

Bu örneği fonksiyon kullanarakta yazabiliriz:

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<h2 onclick="changeText(this)">Click on this text!</h2>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>

</body>
</html>
```

Örnek

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html>
```

Örnek

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
<p>Click "Try it" to execute the displayDate() function.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
</html> 
```

**Onload ve Onunload**

Kullanıcı sayfaya girdiğinde veya sayfadan çıktığında olaylar tetiklenir. Kullanıcı sayfaya girdiği anda cookie'lerin etkinleştirilmesi için bir örnek verelim.

Örnek

```
<!DOCTYPE html>
<html>
<body onload="checkCookies()">

<h2>JavaScript HTML Events</h2>

<p id="demo"></p>

<script>
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html> 
```

Örnek (Kullanıcı forma küçük harfler yazıp enter'a bastığında içerik 
otomatik büyüyecek)

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Events</h2>
Enter your name: <input type="text" id="fname" onchange="upperCase()">
<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>

</body>
</html>
```

**ONMOUSEOVER VE ONMOUSEOUT**

Kullanıcı mouse ile ögenin üstüne ve dışında kalan alana geldiği zaman olaylar tetiklenir.

Örnek

```
<!DOCTYPE html>
<html>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Mouse Over Me</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script>

</body>
</html>
```

**Onmousedown, onmouseup ve onclick**

Bu kısımda ilk olarak bir fare düğmesine tıklandığında onmousedown olayı daha sonra serbest bırakıldığında onmouseup olayı tetiklenir. 

Örnek

```
<!DOCTYPE html>
<html>
<body>

<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
Click Me</div>

<script>
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
</script>

</body>
</html>
```

Örnek (mouse düğmesine tıklanınca ışık yanar tıklamayı bırakınca söner)

```
<!DOCTYPE html>
<html>
<head>
<script>
function lighton() {
  document.getElementById('myimage').src = "bulbon.gif";
}
function lightoff() {
  document.getElementById('myimage').src = "bulboff.gif";
}
</script>
</head>

<body>

<img id="myimage" onmousedown="lighton()" onmouseup="lightoff()" src="bulboff.gif" width="100" height="180" />

<p>Click mouse and hold down!</p>

</body>
</html>
```