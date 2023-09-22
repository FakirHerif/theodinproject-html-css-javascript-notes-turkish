# Giriş

İşler gerçekten heyecanlı bir hal almak üzere. Şu ana kadar çeşitli sorunları çözmek için etkileyici miktarda kod yazdınız, ancak bu kodlar olabileceği kadar kullanışlı olmadı. Bir betik düşünün ve bu kodu yeniden yazmadan veya değiştirmeden tekrar tekrar kullanabileceğiniz küçük bir pakete koyduğunuzu hayal edin. İşte fonksiyonların gücü budur ve JavaScript'te sürekli olarak kullanılırlar.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Farklı türde fonksiyonların nasıl tanımlanacağı ve çağrılacağını öğreneceksiniz.

- Return değerinin nasıl kullanılacağını öğreneceksiniz.

- function scope'un (fonksiyon kapsamı) ne olduğunu öğreneceksiniz.

# Fonksiyonlar

- [Bu detaylı MDN makalesi](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) iyi bir başlangıç ​​noktasıdır. Bu dersin kapsamının ötesine geçebilecek bazı fonksiyonler olabilir, ancak özellikle "Fonksiyon Scope" bölümlerine özellikle dikkat etmek önemlidir. Scope, hem başlangıç seviyesi hem de orta seviye kodlayıcıların sıklıkla kafasını karıştıran bir konu olduğundan, bu konuya önem vermek faydalı olacaktır. Ayrıca bu makalenin kendi alıştırmaları bulunsa da, henüz ele almadığımız bilgiler içerdiği için bu alıştırmaları yapmamanız gerektiğini unutmayın. 

- [Dönüş(return) değerleri hakkında bu makaleyi okuyun.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

- Aşağıdaki örnek fonksiyon bağlamında parametreleri ve argümanları tartışalım:

```
 function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
 }

 console.log(favoriteAnimal('Goat'))
```

JavaScript'te parametreler, fonksiyon bildiriminde parantezler arasında listelenen öğelerdir. Fonksiyon argümanları, fonksiyona iletmeye karar verdiğimiz gerçek değerlerdir. 

Yukarıdaki örnekte fonksiyon tanımı ilk satırda yazılır: function favoriteAnimal(animal). Parametre, animal, parantezlerin içinde bulunur. Animal yerine pet, x veya y gibi başka bir şey de yazabilirdik. Ancak bu durumda parametreyi animal olarak adlandırmak, kodumuzu okuyan birinin gelecekte animal'ın ne içerebileceğini tahmin etmesine gerek kalmadan biraz bağlam sağlar. 

Animal'ı favoriteAnimal() fonksiyoninin parantezlerinin içine koyarak, JavaScript'e favoriteAnimal fonksiyonina bazı değerler göndereceğimizi söylüyoruz. Bu, animal'ın sadece gelecekteki bir değer için bir yer tutucu olduğu anlamına gelir. Ancak hangi değeri gönderiyoruz? favoriteAnimal('Goat') ile, favoriteAnimal fonksiyonunu çağırdığımız ve bu fonksiyonun içine 'Goat' değerini ilettiğimiz yer burasıdır. Burada 'Goat', argümanımızdır. 

favoriteAnimal fonksiyonuna, "Lütfen 'Goat' değerini favoriteAnimal fonksiyonuna gönderin ve 'animal' yer tutucusunun olduğu her yerde 'Goat' kullanın." diyoruz. Bir parametre kullanmanın sunduğu esneklik nedeniyle, favori hayvanımız olarak herhangi bir hayvanı bildirebiliriz.

Dikkat edin, favoriteAnimal('Goat') fonksiyonunu console.log() içinde çağırarak fonksiyonin dönüş değerini, "Goat is my favorite animal!" dizesini konsola yazdırdığımızı gözlemleyin. Bir fonksiyon çağrısı favoriteAnimal('Goat')'ı, farklı bir fonksiyon çağrısında - log() içinde bir argüman olarak geçiriyoruz. Bu olasılığı aklınızda bulundurun çünkü sıkça fonksiyon çağrılarını argüman olarak ileteceksiniz. Eğer sadece fonksiyonu console.log kullanmadan çağırırsak, konsolda hiçbir şey görünmez, ancak yine de fonksiyon o dizesini döndürür.

Kendi başınıza kodla denemeler yapabilir ve 'Goat' yerine favori hayvanınızı koyabilirsiniz. Argümanı istediğiniz gibi değiştirebileceğinizi unutmayın. Fonksiyon bildiriminde ve fonksiyon gövdesinde animal'ı değiştirmeyi denerseniz ne olur?

- Şimdi [Javascript.info'daki bu makaleyi](https://javascript.info/function-basics) okuyun. Bundan daha önce bahsetmiştik ancak JavaScript yıllar içinde değişti ve son zamanlarda fonksiyonlarda bazı yenilikler oldu. Bu makale bunları ele almaktadır: 'varsayılan parametreler'. (NOT: Bu dersin sonundaki son “görev”, bir sonraki derste öğreneceğiniz döngüleri kullanır. Bu konuda endişelenmeyin.)

- Şimdi, size JavaScript'teki fonksiyonlar hakkında daha fazla bağlam sağlamak için [bu makaleyi](https://javascript.info/function-expressions) okumanızı öneriyorum ve modern JavaScript'te yeni bir özellik olan arrow fonksiyona giriş yapmak için mutlaka bu makaleye göz atın. Arrow fonskiyonu yararlıdır ancak şu an için çok önemli değildir, bu yüzden şu anda bu konuda çok fazla endişelenmeyin. Arrow fonksiyon ile karşılaşmanız muhtemel olduğu için burada konumuza dahil ediyoruz ve karşınıza çıktığı zaman neyle karşılaştığınız hakkında en azından bir fikriniz olmasını istiyoruz.

- Son olarak, [bu makaleyi](https://www.javascripttutorial.net/javascript-call-stack/) zincirleme fonksiyon çağrılarının bağlamında çağrı yığınları ve return'un nasıl çalıştığı hakkında okumanızı öneriyorum. Eğer tam olarak anlamıyorsanız endişelenmeyin, ancak return değerlerinizin nereye gittiğini aklınızda tutmanız önemlidir.

# Görev

Hadi bazı fonksiyonlar yazalım! Bunları HTML dosyasının içinde script tag'leri içinde yazın. Nasıl yapılacağını unuttuysanız Temeller Birinci Kısım'daki talimatları inceleyin.

Her fonskiyonu yazın ve çıktıyı console.log ile test edin.

- Bir sayı alıp bu sayıyı +7 olarak döndüren add7 adında bir fonksiyon yazın.

- multiply adında, 2 sayıyı alıp bunların çarpımını döndüren bir fonksiyon yazınız.

- Bir dize alan ve bu dizeyi yalnızca ilk harfi büyük olacak şekilde döndüren, capitalize adında bir fonksiyon yazın. Küçük harf, BÜYÜK HARF veya BoTh karakter dizilerini alabildiğinden emin olun.

- Bir dize alan ve bu dizenin en son harfini döndüren, lastLetter adında bir fonksiyon yazın.
    - lastLetter("abcd") "d" değerini döndürmeli.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- [Fonksiyonlar ne işe yarar?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
    
- [Bir fonskiyonu nasıl çağırırsınız?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#invoking_functions)

- [Anonim fonksiyonlar nelerdir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions_and_arrow_functions)

- [Scope nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)

- [Return değerleri nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

- [Arrow fonksiyonu nedir?](https://javascript.info/arrow-functions-basics)

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz.

- [“let” ve “var” kullanımı arasındaki fark nedir?](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope))

- [JavaScript Kodu nasıl yürütülür?](https://www.youtube.com/watch?v=iLWTnMzWtj4)

# EKSTRA NOTLAR
*JAVASCRIPT TEMELLERİ klasörü/dizini içerisinde yer alan, tüm konuların ele alındığı, açıklandığı ve anlatıldığı şahsi olarak oluşturduğum ek notları incelemeyi unutmayın !!!*