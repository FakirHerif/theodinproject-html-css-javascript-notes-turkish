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