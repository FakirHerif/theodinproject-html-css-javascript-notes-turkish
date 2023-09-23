# Giriş

Başlamadan önce, geliştiricilerin sahip olması gereken en önemli beceri olan sorun çözme konusunu ele almamız gerekiyor.

Sorun çözme, yazılım geliştiricilerin yaptığı temel işlemdir. Kullandıkları programlama dilleri ve araçlar, bu temel becerinin yanında ikincil öneme sahiptir.

V. Anton Spraul, programlamadaki sorunu çözmeyi şu şekilde tanımlar:

- Sorun çözme, belirli bir dizi görevi gerçekleştiren ve tüm belirtilen kısıtlamalara uyan orijinal bir program yazmaktır.
- Bir Programcı Gibi Düşünün

Görevler dizisi, küçük kodlama alıştırmalarını çözmekten Facebook gibi bir sosyal ağ sitesi veya Google gibi bir arama motoru gibi büyük projeler oluşturmaya kadar uzanabilir. Her sorunun kendi kısıtlama seti vardır. Örneğin, yüksek performans ve ölçeklenebilirlik, kodlama alıştırmalarında çok fazla önem taşımayabilir, ancak Google gibi her gün milyarlarca arama sorgusunu hizmet vermek zorunda olan uygulamalarda hayati önem taşır.

Yeni programcılar genellikle sorun çözme becerisini geliştirmeyi en zor beceri olarak bulurlar. Sözdizimini öğrenme ve programlama kavramlarını anlama konularında hızla ilerleyebilirler, ancak kendi projelerini kodlamaya çalıştıklarında, metin düzenleyicilerine boş bakarken nereden başlayacaklarını bilemeyebilirler.

Sorun çözme yeteneğinizi geliştirmenin en iyi yolu, çok sayıda program yaparak deneyim kazanmaktır. Ne kadar çok pratik yaparsanız, gerçek dünya sorunlarını çözmek için o kadar iyi hazırlanırsınız.

Bu ders, sorun çözme sürecine yardımcı olmak için kullanılabilecek birkaç teknik üzerinden geçecektir.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Sorun çözme sürecindeki üç adımın açıklanması.

- Pseudocode nedir ve nasıl kullanılır, sorunları çözmek için kullanabilme becerisi kazanımı.

- Bir sorunu alt sorunlara ayırabilme.

# Sorunu Anlayın

Bir sorunu çözmenin ilk adımı, sorunun ne olduğunu tam olarak anlamaktır. Sorunu anlamazsanız, sorunu başarıyla çözüp çözemediğinizi bilemezsiniz ve yanlış bir çözüm üzerinde zaman kaybedebilirsiniz.

Sorunun ne olduğunu tam olarak anlamak için, sorunu bir kağıda yazın, size anlamlı gelene kadar yeniden yazın ve eğer yardımcı olacağını düşünüyorsanız diyagramlar çizin. Sorunu basit bir şekilde başkalarına açıklayabildiğiniz/ifade edebildiğiniz zaman, sorunun ne olduğunu anlamışsınız demektir.

Özetle, bir sorunu çözmenin ilk adımı, sorunu tam olarak anlamaktır. Sorunu anladığınızda, doğru bir çözüm üzerinde çalışmaya başlayabilir ve zamanınızı daha etkili bir şekilde harcayabilirsiniz.

# Plan

Artık neyi çözmeye çalıştığınızı bildiğinize göre, hemen kodlamaya başlamayın. İlk olarak nasıl çözeceğinizi planlamak için zaman ayırın. Bu sürecin bu aşamasında yanıtlamanız gereken bazı sorular şunlar olabilir:

- Programınızın bir kullanıcı arayüzü var mı? Nasıl görünecek? Arayüz hangi işlevlere sahip olacak? Bunları kağıt üzerine yazın.

- Programınızda hangi girdiler olacak? Kullanıcı veri mi girecek, yoksa başka bir yerden mi girdi alacak mısınız?

- İstenen çıktı nedir?

- Girdiğiniz bilgiler göz önüne alındığında, istenen çıktıyı elde etmek için gereken adımlar nelerdir?


Son soru, sorunu çözmek için bir algoritma yazacağınız yerdir. Bir algoritmayı, belirli bir problemi çözmek için bir reçete olarak düşünebilirsiniz. Algoritma, bir problemin çözülmesi için bilgisayar tarafından yapılması gereken adımları tanımlar ve bu adımları pesudokod ile ifade eder.

# Pseudocode

Pesudokod, programınızın mantığını kod yerine doğal bir dilde yazmaktır. Bu, sakin bir şekilde probleminizi çözmek için gereken adımları düşünmenize yardımcı olur.

Aşağıda, kullanıcının girilen bir sayıya kadar olan tüm sayıları yazdıran basit bir programın pesudokodunun nasıl görünebileceğine dair bir örnek bulunmaktadır:

- Kullanıcı bir sayı girdiğinde
- Bir sayaç değişkenini başlatın ve değerini sıfır olarak ayarlayın
- Sayaç kullanıcı tarafından girilen sayıdan küçük olduğu sürece sayaç değerini bir arttırın
- Sayaç değişkeninin değerini yazdırın

Bu, pesudokodun nasıl göründüğünü gösteren çok basit bir örnektir. Görevler kısmında daha fazla pesudokod örnekleri yer almaktadır.

# Böl ve Uygula (Divide and Conquer)

Planınızı oluşturduktan sonra, çözmeye çalıştığınız büyük problemin alt problemlerini belirlemiş olmalısınız. Daha önce yazdığımız algoritmadaki adımların her biri alt problemleri temsil eder. İlk olarak en küçük veya en basit alt probleme odaklanarak kodlamaya başlamalısınız.

Unutmanız gereken önemli bir nokta şudur: İhtiyaç duyabileceğiniz tüm adımları önceden bilemeyebilirsiniz, bu herhangi bir sorun teşkil etmez. Planlama aşamasında belirlediğiniz alt problemlerden birini çözmeye başlamak, genellikle bir sonraki çözmeye çalışabileceğiniz alt problemin yolunu açar. Ya da zaten bir sonraki alt problemin ne olduğunu biliyorsanız, ilk alt problem çözüldüğünde diğerinin çözümü daha basit olabilir.

Birçok başlangıç seviyesindeki programcı, büyük problemleri tek seferde çözmeye çalışır. Bunu yapmayın. Eğer problem yeterince karmaşıksa, kendinizi sıkışmış ve hayatınızı daha zor hale getirmiş olursunuz. Problemleri daha küçük ve çözmesi daha kolay alt problemlere bölme, çok daha iyi bir yaklaşımdır. Karmaşıklıkla başa çıkmak için başlıca yol, problemleri daha kolay ve anlaşılabilir hale getiren alt problemlere ayrıştırmaktır.

Kısacası, büyük probleminizi parçalara ayırın ve her bir alt problemi, büyük probleminizi çözebilene kadar çözmeye devam edin.

# Fizz Buzz

Bu çalışma akışını göstermek için, yaygın bir programlama alıştırması olan Fizz Buzz'u çözeceğiz. Problemi anlayarak başlayalım, ve [bu linkteki wiki makalesinde](https://en.wikipedia.org/wiki/Fizz_buzz) Fizz Buzz'ı inceleyebilirsiniz.

**Sorunu Anlamak**

*Kullanıcının girdisi alınarak, kullanıcının girdiği sayıya kadar olan sayıları yazdıran bir program yazın. Ancak, üçün katları için sayı yerine Fizz yazdırın ve beşin katları için Buzz yazdırın. Üç ve beşin katları olan sayılar için FizzBuzz yazdırın.*

Bu çözmeyi amaçladığımız bir problemdir. Oldukça basit olduğundan belki yeniden ifade etmeye ihtiyacımız olmayabilir, ancak yine de daha net ve anlaşılabilir olması için yapmayı düşündüğümüz bu proje gereksinimlerinin üzerinden tekrar geçmekte fayda olduğunu düşünüyorum:

- 1- Kullanıcı bir sayı girebilsin (1den başlayan ve sonsuza kadar giden)

- 2- Kullanıcının girdiği sayı 3'e bölünebiliyorsa (yani 3 ve 3'ün katları ise) ekrana çıktı olarak "Fizz" yazdırın

- 3- Eğer kullanıcının girdiği sayı 5'e bölünebiliyorsa (yani 5 ve 5'in katları ise) ekrana çıktı olarak "Buzz" yazdırın

- 4- Eğer kullanıcının girdiği sayı hem 3'e hem de 5'e bölünebiliyorsa (yani 3 ve 5 ile ortak bölünebilen sayılar gibi örneğin; 15, 30, 45 vs gibi) ekrana çıktı olarak "FizzBuzz" yazdırın

- 5- Eğer kullanıcının girdiği sayı 3 veya 5'e bölünemiyorsa (örneğin 2, 4, 6 vs gibi) ekrana çıktı olarak girdiği sayıyı yazdırın

**Plan**

Programınızın bir arayüzü var mı? Neye benzeyecek? FizzBuzz çözümümüz bir tarayıcı konsolu programı olacağı için bir arayüze ihtiyacımız yok. Tek etkileşimimiz kullanıcıların bir sayı girmesine izin vermek olacaktır. 

Programınızda hangi girdiler olacak? Kullanıcı veri mi girecek yoksa başka bir yerden mi veri alacaksınız? Kullanıcı bir istemden (açılır kutu) bir sayı girecektir. 

İstenilen çıktı nedir? İstenilen çıktı, kullanıcının 1'den sonsuza kadar girebildiği sayıların bir listesidir. Ancak 3'e bölünebilen her sayının çıktısı Fizz 5'e bölünebilen her sayı çıktı olarak Buzz ve hem 3'e hem de 5'e bölünebilen her sayı çıktı olarak FizzBuzz gösterilecektir.

**Pseudocode**

İstenilen çıktıyı döndürmek için gerekli adımlar nelerdir? İşte bu soruna yönelik bir pseudocode örneği:

- Kullanıcı bir sayı girdiğinde

- 1'den girilen sayıya kadar bir döngü

- Mevcut sayı 3'e bölünebiliyorsa "Fizz" yazdırın

- Mevcut sayı 5'e bölünebiliyorsa "Buzz" yazdırın

- Mevcut sayı 3 ve 5'e bölünebiliyorsa "FizzBuzz" yazdırın

- Aksi takdirde mevcut sayıyı yazdırın

**Divide and Conquer**

Geliştirdiğimiz algoritmadan da anlaşılacağı üzere çözebileceğimiz ilk alt problem kullanıcıdan girdi almaktır. O halde oradan başlayalım ve girilen sayıyı yazdırarak çalıştığını doğrulayalım.

Prompt yöntemini kullanacağız:
```
let answer = parseInt(prompt("Sayı Giriniz: "));
```
Yukarıdaki kod, kullanıcıdan bir sayı isteyen küçük bir açılır kutu oluşturmalıdır. Kullanıcıdan aldığımız veri answer değişkenimizde saklanacak. **Not:** Kullanıcının girişinden bir sayının döndürülmesi için istem çağrısını bir parseInt işlevine sardık.

Bunu yaptıktan sonra bir sonraki alt probleme geçelim: *"1'den girilen sayıya kadar döngü"* Bunu JavaScript'te yapmanın birçok yolu vardır. Aslında Java, C++ ve Ruby gibi diğer birçok dilde yaygın bir şekilde kullanılan yollardan birisi [for döngüsüdür:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

```
let answer = parseInt(prompt("Sayı Giriniz: "));
for (let i = 1; i <= answer; i++) {
  console.log(i);
}
```

For döngüsünü daha önce görmedik ama merak etmeyin son derece basit bir yöntemdir. 

Bir i değişkeni bildiriyoruz ve ona 1 sayısını atıyoruz ve bu i değişkenimizin başlangıç değerinin 1 olmasını sağlıyor. (**NOT:** Genellikle programcılar döngüleri 0'dan başlatırlar. Programımızın ihtiyaçları nedeniyle biz 1'den başlatıyoruz) 

İkinci adımımız: i <= answer bir koşul ifadesidir ve şunu ifade eder: "i, answer'dan küçük veya eşit olduğu sürece döngü devam etmelidir." Diğer bir ifadeyle; answer i'den büyük veya eşit olduğu sürece döngü devam etmelidir.

Üçüncü adımımız: i++ yani döngümüzde i değişkeni her adımda 1 arttırılır. Bu yüzcden 1,2,3, ... , answer'a kadar bu döngü devam eder. (Örneğin, kullanıcı 10 sayısını girdiyse döngü 1'den 10'a kadar olan sayıları konsola yazdırır)

Bu şekilde çalıştıktan sonra bir sonraki probleme geçelim: Mevcut sayı 3'e bölünebiliyorsa Fizz'i yazdırın.

```
let answer = parseInt(prompt("Sayı Giriniz: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
```

Mevcut sayıyı üçe bölmek için burada modül operatörünü (%) kullanıyoruz. Önceki derslerden modül operatörünün ne işe yaradığını hatırlıyor olmalısınız, eğer hatırlamıyorsanız lütfen göz atın. Kısaca sayı 3'e bölündüğünde kalan 0 ise konsola Fizz yazdır demiş olduk.

Bu değişiklikten sonra, programı çalıştırdığınızda ve kullanıcı 10 değerini girdiğinde program artık bunun çıktısını alacaktır:
```
1
2
Fizz
4
5
Fizz
7
8
Fizz
10
```

Program gittikçe şekillenmeye başlıyor. Temel yapı mevcut olduğundan son birkaç alt problemin çözülmesi kolay olmalı ve bunlar halihazırda mevcut olan koşulun sadece farklı varyasyonları. Şimdi bir sonraki adıma geçelim: Mevcut sayı 5'e bölünebiliyorsa Buzz'ı yazdıralım:

```
let answer = parseInt(prompt("Sayı Giriniz: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Programı şimdi çalıştırdığınızda, kullanıcı 10 değerini girdiğinde bu çıktıyı görmelisiniz:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```

Programı tamamlamak için çözmemiz gereken bir alt problemimiz daha var: Mevcut sayı 3 ve 5'e bölünebiliyorsa FizzBuzz'ı yazdıralım.

```
let answer = parseInt(prompt("Sayı Giriniz: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

İşe yaraması için koşul cümlelerini biraz değiştirmemiz gerekti.
İlk koşul artık i'nin sadece 3'e bölünebilir olup olmadığını kontrol etmek yerine i'nin 3'e ve 5'e bölünebilir olup olmadığını kontrol ediyor. Bunu yapmak zorundaydık çünkü eğer bu şekilde devam etseydik, yani koşulu (i % 3 === 0) olduğu gibi bıraksaydık, i 3'e bölünebiliyorsa Fizz yazdırıp diğer adıma geçecekti hatta 5'e bölünebilse yine diğer adıma geçecekti. Bu yüzden böyle bir değişiklik yaptık.

if (i % 3 === 0 && i % 5 === 0) koşulunun ilk önce gelmesiyle, i'nin hem 3'e hem de 5'e bölünebilir olup olmadığını kontrol ediyoruz ve ardından ayrı ayrı 3'e veya 5'e bölünebilir olup olmadığını kontrol etmiş oluyoruz.

Program artık tamamlandı! Şimdi çalıştırırsanız, kullanıcı 20 değerini girdiğinde bu çıktıyı almalısınız:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

# Görev

- Richard Reis'in yazdığı [Bir Programcı Gibi Nasıl Düşünülür - Problem Çözme Dersleri](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/) adlı bu makaleyi okuyun.

- Coding Tech'in yayınladığı [Bir Programcı Gibi Düşünmeye Nasıl Başlanır?](https://www.youtube.com/watch?v=azcrPFhaY9k) adlı bu videoyu izleyin. Bir saat uzunluğunda ama bilgilerle dolu ve kesinlikle izlemeye değer.

- Viking Code School'un [Pseudocode Nedir](https://web.archive.org/web/20211229231605/https://www.vikingcodeschool.com/software-engineering-basics/what-is-pseudo-coding) makalesini okuyun.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- [Problem çözme sürecinin üç aşaması nelerdir?](https://www.theodinproject.com/lessons/foundations-problem-solving#problem-solving-stages)

- [Öncelikle sorunu açıkça anlamak neden önemlidir?](https://www.theodinproject.com/lessons/foundations-problem-solving#important-understand-problem)

- [Sorunun daha net anlaşılmasına yardımcı olmak için ne yapabilirsiniz?](https://www.theodinproject.com/lessons/foundations-problem-solving#help-understand-problem)

- [Problem çözme sürecinin planlama aşamasında yapmanız gerekenlerden bazıları nelerdir?](https://www.theodinproject.com/lessons/foundations-problem-solving#planning-stage)

- [Algoritma nedir?](https://www.theodinproject.com/lessons/foundations-problem-solving#algorithm)

- [Pseudocode nedir?](https://www.theodinproject.com/lessons/foundations-problem-solving#pseudo)

- [Bir sorunu parçalara ayırmanın ve daha küçük sorunları çözmenin avantajları nelerdir?](https://www.theodinproject.com/lessons/foundations-problem-solving#breaking-problem)

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz.

- [Bir Programcı Gibi Düşünün: Yaratıcı Problem Çözmeye Giriş  adlı kitabın (kitap ücretsiz değil) ilk bölümünü okuyun.](https://nostarch.com/thinklikeaprogrammer) Bu kitabın örnekleri C++ dilindedir, ancak kitabın ana fikri programcılara sorunları daha iyi çözmeyi öğretmek olduğundan her şeyi anlayacaksınız. Harika bir kitap ve her kuruşuna değer. Bu sizi daha iyi bir programcı yapacaktır.

- [Tekrarlayan programlama teknikleriyle ilgili bu videoyu izleyin.](https://ocw.mit.edu/courses/res-tll-004-stem-concept-videos-fall-2013/resources/basic-programming-techniques/)

- [Jonathan Blow'un, yazılım projelerinde problem çözmeye nasıl yaklaşılacağı konusunda akıllıca tavsiyeler verdiği zor problemleri çözme hakkındaki videosunu izleyin.](https://www.youtube.com/watch?v=6XAu4EPQRmY)

# EKSTRA NOTLAR

*JAVASCRIPT TEMELLERİ klasörü/dizini içerisinde yer alan, tüm konuların ele alındığı, açıklandığı ve anlatıldığı şahsi olarak oluşturduğum ek notları incelemeyi unutmayın !!!* ***Ayrıca for döngüsü konusundaki notlarım ve açıklamalarım "4 - TEMELLER ÜÇÜNCÜ KISIM EK NOTLAR" dosyasının en altında yer almaktadır, incelemeyi unutmayın!***