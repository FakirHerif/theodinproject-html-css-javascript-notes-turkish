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

# DOM addEventListener

Bir HTML öğesine (element) belirli bir olayı (event) dinlemesi veya beklemesi için bir işlev (function) eklemek için kullanılır. Bu metot, kullanıcı etkileşimleri (örneğin, tıklama, fare hareketleri, tuş vuruşları gibi) veya diğer olaylar (örneğin, bir HTTP isteği tamamlandığında, bir animasyon tamamlandığında gibi) gibi olayları ele almak için kullanılır.

addEventListener()'ın temel kullanımı şu şekildedir:

```
element.addEventListener(event, function, useCapture);
```

- **element:** Olayı dinlemek istediğiniz HTML öğesini (DOM elementini) temsil eden bir değişken veya nesnedir.
- **event:** Dinlemek istediğiniz olayın adını belirtir. Örneğin, "click", "mouseover", "keydown" gibi.
- function: Belirtilen olay gerçekleştiğinde çalıştırılacak JavaScript işlevini temsil eder.
- **useCapture (isteğe bağlı):** Bu bir boolean değerdir ve olayın yakalama (capture) aşamasında mı yoksa bubbling aşamasında mı çalıştırılacağını belirler. Genellikle kullanılmaz ve varsayılan olarak false olarak kabul edilir.

Örnek

```
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  alert("Düğme tıklandı!");
});
```

Bu örnek, "myButton" adlı HTML düğmesine tıklama olayını dinler ve düğmeye tıklandığında bir uyarı penceresi görüntüler.

# HTML Collection

HTMLCollection, DOM (Document Object Model) ağacındaki belirli HTML öğelerini temsil eden bir koleksiyon türüdür. HTMLCollection, belirli bir HTML öğesine ait alt öğeleri veya belirli bir özellikle eşleşen öğeleri toplamak için kullanılır. HTMLCollection, genellikle HTML form elemanları veya belirli bir özellikle eşleşen öğeler gibi spesifik kullanım alanlarında kullanılır.

Örnek olarak, bir HTML formundaki tüm giriş (input) öğelerini bir HTMLCollection kullanarak toplamak istediğinizi düşünelim:

```
<form id="myForm">
  <input type="text" name="username" />
  <input type="email" name="email" />
  <input type="password" name="password" />
</form>


<script>
// HTMLCollection oluşturma
const form = document.getElementById("myForm");
const inputElements = form.elements; // form'un alt öğelerini içeren HTMLCollection

// HTMLCollection içindeki öğeleri döngü ile erişme
for (let i = 0; i < inputElements.length; i++) {
  console.log(inputElements[i]); // Her bir giriş öğesini konsola yazdırma
}
</script>
```

Yukarıdaki örnekte, form.elements kullanılarak form içindeki tüm input öğeleri bir HTMLCollection olarak alınır. Daha sonra bir döngü kullanarak HTMLCollection içindeki her bir öğeye erişebilirsiniz.

HTMLCollection, özellikle HTML form işlemleri gibi belirli kullanım senaryolarında çoklu öğeleri kolayca toplamak ve işlemek için kullanışlıdır.

# HTML DOM Node List

Node List, DOM ağacındaki belirli öğeleri toplamak ve bu öğeler üzerinde işlem yapmak için oldukça kullanışlı bir araçtır.

Node List, yaygın olarak şu yollarla elde edilebilir:

- document.querySelectorAll(selectors) Metodu:

```
const divElements = document.querySelectorAll("div");
```

- element.childNodes Özelliği:

```
divElements.forEach(function(element) {
  // Her bir <div> öğesi üzerinde işlem yapabilirsiniz.
  console.log(element.textContent);
});
```

# HTML DOM Node List Length

HTML DOM (Document Object Model) Node List Length, bir Node List'in (HTML öğelerinin bir koleksiyonu) uzunluğunu belirtir. Node List, DOM ağacındaki belirli bir tür (örneğin, tüm div öğeleri) veya bir seçici (örneğin, querySelectorAll ile seçilen öğeler) ile seçilen HTML öğelerinin bir koleksiyonunu temsil eder.

Node List Length, Node List içinde bulunan öğelerin sayısını ifade eder. Bu sayı, Node List içinde kaç tane HTML öğesi olduğunu gösterir. Örneğin, eğer bir Node List 5 div öğesini içeriyorsa, bu Node List Length değeri 5 olacaktır.

Node List Length özelliğine JavaScript ile erişmek için, Node List'i seçtiğiniz değişkenin üzerinden .length özelliğine erişebilirsiniz. Örnek:

```
<div></div>
<div></div>
<div></div>   // 3 tane div'imiz olduğunu varsayalım

// Bir Node List seçimi yapalım (örneğin, tüm <div> öğeleri)
const divElements = document.querySelectorAll("div");

// Node List'in uzunluğunu alalım
const nodeListLength = divElements.length;

console.log("Node List Length: " + nodeListLength); // Örneğin, bu çıktıda "Node List Length: 3" sonucunu görebilirsiniz.
```

# HTML Collection ve NodeList Farkları

HTMLCollection ve NodeList, her ikisi de DOM (Document Object Model) ağacındaki HTML öğelerini temsil eden koleksiyon türleridir, ancak aralarında bazı önemli farklar bulunur:

- **Oluşturma Yöntemi:**
    - **HTMLCollection:** HTMLCollection, HTML öğeleri üzerinde otomatik olarak oluşturulan bir koleksiyondur. Özellikle HTML öğelerine isim (name) veya sınıf (class) gibi belirli özelliklere göre erişmek için kullanılır. Örneğin, getElementsByName() veya getElementsByClassName() gibi metotlarla oluşturulur.
    - **NodeList:** NodeList, JavaScript kodu tarafından manuel olarak oluşturulan veya çeşitli DOM metotları (örneğin, querySelectorAll()) tarafından döndürülen bir koleksiyondur.

- **Canlılık (Live) Durumu:**
    - **HTMLCollection:** HTMLCollection canlıdır, yani belirli bir özellikle eşleşen HTML öğeleri değiştiğinde otomatik olarak güncellenir. Yani, bir HTMLCollection oluşturulduktan sonra, yeni öğeler eklediğinizde veya var olanları kaldırdığınızda koleksiyon güncellenir.
    - **NodeList:** NodeList de canlı olabilir veya olmayabilir. Bazı durumlarda NodeList canlıdır ve DOM'daki değişikliklere tepki verirken, bazı durumlarda bir kopya (static) olabilir ve DOM değişikliklerine tepki vermez.

- **İndeksleme:**
    - **HTMLCollection:** HTMLCollection nesneleri, öğeleri sıfırdan başlayarak indeksler. Örneğin, myCollection[ 0] şeklinde erişebilirsiniz.
    - **NodeList:** NodeList nesneleri, öğeleri indeks numarası veya item(index) yöntemi ile erişebilirsiniz. Örneğin, myList.item(0) veya myList[ 0 ] gibi.

- **Kullanım Alanı:**
    - **HTMLCollection:** HTMLCollection genellikle HTML formları, radyo düğmeleri, form elemanları gibi belirli HTML öğeleri üzerinde çalışmak için kullanılır.
    - **NodeList:** NodeList, daha genel bir kullanım alanına sahiptir ve belirli bir özellik veya sorgu sonucu seçilen HTML öğeleri üzerinde işlem yapmak için kullanılabilir.

Özetle, HTMLCollection ve NodeList, DOM koleksiyonlarını temsil eder, ancak oluşturma yöntemleri, canlılık durumu ve kullanım alanları gibi önemli farklar vardır. Kullanırken, belirli bir senaryoya ve ihtiyaca uygun olanını seçmek önemlidir.

# HTMLCollection Metodları

- **item(index):** Belirtilen indeksteki öğeyi döndürür.

Örnek

```
const myCollection = document.getElementsByClassName("my-class");
const firstElement = myCollection.item(0);
```

- **namedItem(name):** Belirtilen isme (name) sahip öğeyi döndürür. Özellikle HTML formlarındaki isimlendirilmiş öğeleri almak için kullanışlıdır.

Örnek

```
const formElements = document.forms[0].elements;
const usernameInput = formElements.namedItem("username");
```

- **length:** Koleksiyonun uzunluğunu (eleman sayısını) döndürür.

Örnek

```
const myCollection = document.getElementsByClassName("my-class");
const collectionLength = myCollection.length;
```

# NodeList Metodları

- **item(index):** Belirtilen indeksteki öğeyi döndürür. HTMLCollection ile aynı adı taşıyan bu metod, NodeList için de kullanılabilir.

Örnek:

```
const myNodeList = document.querySelectorAll("p");
const firstParagraph = myNodeList.item(0);
```

- **forEach(callback):** NodeList içindeki her bir öğe üzerinde bir geri çağırma işlevini (callback function) çalıştırır. Bu metod, dizi elemanları üzerinde işlem yapmak için kullanılır.

Örnek:

```
const myNodeList = document.querySelectorAll("p");
myNodeList.forEach(function(node) {
  console.log(node.textContent);
});
```

- **entries():** NodeList içindeki her bir öğeyi ve ilgili indeksi içeren bir iterator nesnesini döndürür.

Örnek:

```
const myNodeList = document.querySelectorAll("p");
const iterator = myNodeList.entries();
for (const [index, node] of iterator) {
  console.log(`Index: ${index}, Text: ${node.textContent}`);
}
```

- **keys():** NodeList içindeki her bir öğenin indekslerini içeren bir iterator nesnesini döndürür.

Örnek:

```
const myNodeList = document.querySelectorAll("p");
const keysIterator = myNodeList.keys();
for (const index of keysIterator) {
  console.log(`Index: ${index}`);
}
```

- **values():** NodeList içindeki her bir öğenin kendisini içeren bir iterator nesnesini döndürür.

Örnek:

```
const myNodeList = document.querySelectorAll("p");
const valuesIterator = myNodeList.values();
for (const node of valuesIterator) {
  console.log(`Text: ${node.textContent}`);
}
```