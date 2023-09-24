# Giriş

Programlamanın zorluklarından biri, büyük miktarda veri ile başa çıkmaktır. Örneğin, sınıfınızdaki tüm öğrencilerin adlarını saklamak isterseniz, bunu nasıl yaparsınız? Her ad için bir değişken oluşturabilirsiniz, ancak bu sıkıcı ve verimsiz olurdu. Ayrıca yönetmesi ve güncellemesi zor olurdu. İlerleyen zamanlarda adları değiştirmek veya erişmek isterseniz ne yapardınız?

Neyse ki, bu sorunu ele almak için daha iyi bir yol vardır. Bu derste, tek bir değişkende birden fazla değeri saklayabilen veri yapıları olan diziler hakkında bilgi edineceksiniz. Diziler, büyük miktardaki veriyi düzenlemek ve işlemek için çok kullanışlıdır. Ayrıca, bir kod bloğunu tekrar tekrar çalıştırmanıza izin veren kontrol yapıları olan döngüler hakkında da bilgi edineceksiniz. Döngüler, bir dizinin her elemanı üzerinde aynı işlemi yapmak için çok kullanışlıdır. Son olarak, kodunuzu yazmadan önce kodunuz için testler yazma uygulaması olan Test-Driven Development (TDD) yani Test Odaklı Geliştirme ile tanışacaksınız.

# Derse Genel Bakış

Bu bölüm, bu derste genel olarak neleri öğreneceğinizi içerir.

- Dizileri(Arrays) kullanma.

- Yerleşik dizi(built-in array) yöntemlerini kullanma.

- Döngüleri(loops) kullanma.

- TDD egzersizleriyle ellerinizi kirletin.

# Arrays (Diziler)

Dizeler ve sayılar yapı taşlarımız olabilir, ancak komut dosyalarınız karmaşıklaştıkça, bunların büyük miktarlarıyla başa çıkmanın bir yoluna ihtiyacınız olacak. Neyse ki JavaScript'te tam da bunun için kullanılan birkaç veri türü var. Bir Dizi basitçe öğelerin (string'ler, sayılar veya diğer şeyler) sıralı bir koleksiyonudur.

- [Bu eğitim](https://www.w3schools.com/js/js_arrays.asp) harika bir giriş niteli taşır.

- [Bu makale](https://www.w3schools.com/js/js_array_methods.asp) en kullanışlı dizi methodlarından bazılarını kapsamaktadır. Bu temel bilgiler her gün kullanacağınız yapılardır, bu yüzden çok acele etmeden detaylı bir şekilde gözden kaçırmadan öğrenmeye çalışın.

- [Bu video](https://www.youtube.com/watch?v=7W4pQQ20nJg) yaklaşık 6 dakika içinde JavaScript'teki dizilere genel bir şekilde açıklıyor.

# Loops (Döngüler)

Bilgisayarlar yorulmaz ve gerçekten çok hızlıdırlar! Bu nedenle, hesaplamaların birden çok kez yapılmasını gerektiren problemleri çözmek için çok uygundurlar. Bazı durumlarda, bir bilgisayar, bir insanın saatler sürebilecek bir görevi yalnızca birkaç saniye içinde binlerce, hatta milyonlarca kez tekrarlayabilir (Açıkçası buradaki hız, hesaplamanın karmaşıklığına ve bilgisayarın hızına bağlıdır). Bir bilgisayarın tekrarlayan bir görevi yapmasını sağlamanın bir yolu döngü kullanmaktır.

- [Bu MDN makalesini okuyun.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) Uzun bir makaledir ve sayfanın altındaki 'Aktif Öğrenme' bölümlerini ele aldığınızdan emin olun.

- Aynı bilgiler, [JavaScript.info'da](https://javascript.info/while-for) biraz daha farklı bir bağlamda ele alınmıştır. (Her şeyi bildiğinizi düşünüyorsanız burada yer alan bilgilere göz atmanıza gerek yok, ancak sayfanın sonundaki görevleri unutmayın. Öğrenmenin en iyi yolu pratik yapmaktır.)

# Test Driven Development (Test Odaklı Geliştirme)

Test Driven Development (TDD), yazılım geliştirme dünyasında sıkça duyduğumuz bir terimdir. Bu, kodunuzu yazmadan önce kodunuzun nasıl çalışması gerektiğini tanımlayan otomatik testler yazma pratiği olarak tanımlanır. Örneğin, birkaç sayıyı toplayan bir fonksiyon yazmak istiyorsanız, öncelikle bu fonksiyonu kullanan ve beklenen çıktıyı sağlayan bir test yazarsınız. Siz kodunuzu yazmadan önce test başarısız olacaktır ve testi geçtiğinizde kodunuzun doğru çalıştığını bilmeniz gerekir.

Birçok açıdan TDD, testler olmadan kod yazmaktan daha verimlidir. Yukarıdaki toplama işlevi için bir testimizin olmadığını düşünün, çalıştığından emin olana kadar kodu sürekli olarak kendimizi çalıştırmamız, farklı sayıları girerek işlevin çalıştığını doğrulamamız gerekecekti... basit bir toplama işlemi için örneğin add(2,2) için çok önemli değil evet ama ancak daha karmaşık işlevler yapmak zorunda olduğunuzu hayal edin, birinin tic tac toe oyununu kazanıp kazanmadığını kontrol etmek gibi: (game_win(["o", null,"x",null,"x",null,"x", "o", "o"]) ). Eğer TDD yapmadıysanız, fonksiyonun düzgün çalışıp çalışmadığını test etmek için aslında kendinize karşı birden fazla oyun oynamak zorunda kalabilirsiniz!

Kursun ilerleyen bölümlerinde size bu testleri yazma sanatını öğreteceğiz. Aşağıdaki görevde sizin için önceden yazılmış testler bulunmaktadır. Tek yapmanız gereken test ortamını kurmak, özellikleri okumak ve bunların geçmesini sağlayan kodu yazmak!

# Görev

Yerel ortamınızı ayarlamak için [the odin project'in JavaScript egzersizleri deposuna](https://github.com/TheOdinProject/javascript-exercises) gidin ve [deponun README dosyasını](https://github.com/TheOdinProject/javascript-exercises#readme) inceleyin. Depoyu klonlayıp Jest'i yükledikten sonra, aşağıdaki alıştırmaları sırayla tamamlamadan önce her README dosyasını inceleyin:

- 01_helloWorld (Bu alıştırma, her şeyi doğru şekilde ayarladığınızdan emin olmak için kasıtlı bir şekilde çok basit olarak hazırlanmıştır!)

- 02_repeatString

- 03_reverseString

- 04_removeFromArray

- 05_sumAll

- 06_leapYears

- 07_tempConversion

**Not:** Bu alıştırmaların çözümleri her alıştırmanın çözüm klasöründe bulunmaktadır.

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır.

- [Array/dizi nedir?](https://www.w3schools.com/js/js_arrays.asp)

- [Diziler ne işe yarar?](https://www.w3schools.com/js/js_arrays.asp)

- [Bir dizi öğesine nasıl erişirsiniz?](https://www.w3schools.com/js/js_arrays.asp)

- [Bir dizi öğesini nasıl değiştirirsiniz?](https://www.w3schools.com/js/js_arrays.asp)

- [Bazı yararlı dizi özellikleri nelerdir?](https://www.w3schools.com/js/js_arrays.asp)

- [Bazı yararlı dizi methodları nelerdir?](https://www.w3schools.com/js/js_array_methods.asp)

- [Loops/döngüler ne işe yarar?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#why_bother)

- [Break ifadesi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break)

- [Continue ifadesi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue)

- [Otomatik testler yazmanın avantajı nedir?](https://www.theodinproject.com/lessons/foundations-fundamentals-part-4#test-driven-development)

# Ek Kaynaklar

Bu bölümde herhangi bir ek kaynak bulunmamaktadır.

# EKSTRA NOTLAR
*JAVASCRIPT TEMELLERİ klasörü/dizini içerisinde yer alan, tüm konuların ele alındığı, açıklandığı ve anlatıldığı şahsi olarak oluşturduğum ek notları incelemeyi unutmayın !!!*