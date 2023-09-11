# Giriş
İster IMDB'nin en iyi 250 filmi, ister FBI'ın en çok aranan filmleri olsun, listeler internette her yerde mevcuttur ve eninde sonunda web sayfalarınızda bir listeye ihtiyacınız olacak.

Neyse ki, HTML'de birkaç farklı türde liste elinizin altında bulunmaktadır. 

# Derse Genel Bakış

Bu bölümde bu derste öğreneceğiniz konulara genel bir bakış yer almaktadır.

- Sırasız bir liste nasıl oluşturulur
- Sıralı bir liste nasıl oluşturulur?

# Sırasız Listeler

Sıranın herhangi bir önemi olmadığı ögeleri örneğin alışveriş listesine benzer ögeleri sıralamak istiyorsanız sırasız bir liste kullanabilirsiniz.

Sırasız listeler **"ul"** etiketi içinde **"li"** etiketleri kullanılarak oluşturulur. 

Sırasız bir listedeki her öge yuvarlak bir madde işaretiyle başlar. Örneğin:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>5-LİSTELER</title>
    </head>
<body>
    <ul>
        <li>Öge 1</li>
        <li>Öge 2</li>
        <li>Öge 3</li>
    </ul>
</body>
</html>
```

# Sıralı Listeler

Bir tarifin adım adım talimatlarını veya en sevdiğiniz 10 TV şovu gibi sıranın önemli olduğu sıralı bir liste oluşturmak istediğiniz durumlarda sıralı listeleri kullanabilirsiniz.

Sıralı listeler **"ol"** etiketi içinde **"li"** etiketleri kullanılarak oluşturulur. Sırasız listeden temel farkı ise her listedeki öge bir rakamla başlar. Örneğin:
```
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>5-LİSTELER</title>
    </head>
<body>
    <ol>
        <li>Öge 1</li>
        <li>Öge 2</li>
        <li>Öge 3</li>
    </ol>
</body>
</html>
```

# Görev

Listeleri kullanma konusunda biraz pratik yapmak için yeni bir HTML belgesi oluşturun ve aşağıdaki listeleri oluşturun:

- En sevdiğiniz yiyeceklerin sıralanmamış bir alışveriş listesi
- Bugün yapmanız gereken yapılacakların sıralı bir listesi
- Bir gün ziyaret etmek isteyeceğiniz yerlerin sıralanmamış listesi
- Tüm zamanların en sevdiğiniz 5 video oyunu veya filminin sıralı listesi

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır. Eğer soruları yanıtlarken sorun yaşıyorsanız sorunun üzerine tıklayın ve bağlantıyı inceleyin. (Bağlantılar ingilizcedir.)

- [Sırasız bir liste oluşturmak için hangi HTML etiketleri kullanılır?](https://www.theodinproject.com/lessons/foundations-lists#unordered-lists)
    - Cevap:
    ```
    <ul>
        <li></li>
    </ul>
    ```
- [Sıralı bir liste oluşturmak için hangi HTML etiketleri kullanılır?](https://www.theodinproject.com/lessons/foundations-lists#ordered-lists)
    - Cevap:
    ```
    <ol>
        <li></li>
    </ol>
    ```
- [Hem sırasız hem de sıralı listele oluşturmak için kullanılan ortak HTML elementi nedir?](https://www.theodinproject.com/lessons/foundations-lists#li)
    - Cevap:
    ```
    <li></li>
    ```

# Ek Kaynaklar

- [Sırasız Listeler İçin Kaynak](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

- [Sıralı Listeler İçin Kaynak](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

- [Shay Howe'un HTML listeleri eğitimi](https://learn.shayhowe.com/html-css/creating-lists/)