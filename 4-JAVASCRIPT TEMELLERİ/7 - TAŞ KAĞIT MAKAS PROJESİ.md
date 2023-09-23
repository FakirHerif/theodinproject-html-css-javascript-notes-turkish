# Giriş

İlkokul klasiği olan “taş kağıt makas”ın basit bir uygulamasını yapacağız. Bunun ne olduğunu bilmiyorsanız [Wikipedia makalesine](https://en.wikipedia.org/wiki/Rock_paper_scissors) veya [burada yer alan](https://www.wikihow.com/Play-Rock,-Paper,-Scissors) ayrıntılı adım adım açıklamaya bakın. Şimdilik oyunu tarayıcı konsolundan oynayacağız. Ancak bu projeye daha sonraki derste tekrar değineceğiz ve düğmeler ve metin içeren bir Grafiksel Kullanıcı Arayüzü ekleyeceğiz. Bu yüzden kodunuzu github'da tutmayı unutmayın! 

# Başlamadan Önce Hızlı Egzersizler

- Bir sayfaya JavaScript eklemenin üç yolunu belirleyin.

- Test Edin! JavaScript'te console.log("Merhaba Dünya"); yazın, tarayıcınızı açın ve tarayıcınızın konsolunda görüntülenip görüntülenmediğini kontrol edin.

Son olarak, bu sıfırdan oluşturulmuş ilk JavaScript programınızdır, bu yüzden sorun çözmeyle ilgili önceki dersi unutmayın. Herhangi bir kod yazmadan önce çözümünüzü planlayın ve bir sonraki aşamaya geçmeden önce çalıştığından emin olmak için her parçayı oluştururken test edin!

# Görev

Sık sık commit atmayı unutmayın. Nasıl yapılacağını hatırlamıyorsanız veya bilmiyorsanız [bu bağlantıyı](https://www.theodinproject.com/lessons/foundations-commit-messages) inceleyin.

- Projeniz için yeni bir Git Repo'su oluşturun.

- script tag içeren boş bir HTML belgesi oluşturun (İpucu: harici bir .js dosyası oluşturmak en iyi yöntemdir). Bu oyun tamamen konsoldan çalışacak, bu yüzden oraya başka bir şey koyma konusunda endişelenmeyin.

- Oyununuz bilgisayara karşı oynanacak, bu nedenle getComputerChoice adlı ve 'Taş', 'Kağıt' veya 'Makas'tan birini rastgele döndürecek bir işlevle başlayın. Oyun içerisinde bu fonksiyonu bilgisayarın oynamasını sağlamak için kullanacağız. İpucu: Bir sonraki adıma geçmeden önce bunun beklenen çıktıyı döndürdüğünden emin olmak için konsolu kullanın!

- Tek bir Taş Kağıt Makas turu oynatan bir fonksiyon yazın. İşlev iki parametreyi almalı - playerSelection ve ComputerSelection - ve ardından turun kazananını şu şekilde bildiren bir dize döndürmelidir: "Kaybettin! Kağıt, Taşı'ı yener" gibi.
    - İşlevinizin playerSelection parametresini büyük/küçük harfe duyarlı hale getirin (böylece kullanıcılar taş, TAŞ, TaŞ veya başka bir varyasyon girebilir).

- **Önemli not:** console.log() işlevini değil, bu işlev çağrısının sonuçlarını döndürmek istiyorsunuz. Daha sonra döndürdüğünüz şeyi kullanacaksınız, bu nedenle sonuçları görmek için console.log'u kullanarak bu işlevi test edelim:

```
function playRound(playerSelection, computerSelection) {
  // kodlarınız buraya !!!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
```

- game() adında yeni bir fonksiyon oluşturun. Skora ulaşan ve sonunda kazananı veya kaybedeni bildiren 5 turluk bir oyun oynamak için bunun içindeki bir önceki fonksiyonu kullanın.
    - Fonksiyon çağrılarını tekrarlamak için kod üzerinde nasıl "döngü" oluşturulacağını resmi olarak öğrenmediniz… Döngüleri zaten biliyorsanız (veya biraz daha öğrenmek istiyorsanız) bunları kullanmaktan çekinmeyin. (Ayrıca döngüler ile ilgili notlar; "4 - JAVASCRIPT TEMELLER ÜÇÜNCÜ KISIM EK NOTLAR" içerisinde yer almaktadır, göz atmayı unutmayın) Döngüleri kullanamayacağınızı düşünüyorsanız bunun için endişelenmeyin, playRound fonksiyonunuzu art arda 5 kez çağırmanız yeterli. Ayrıca döngüleri detaylı bir şekilde bir sonraki derste yeniden ele alacağız.
    - Bu noktada her turun sonuçlarını ve sonunda kazananı görüntülemek için console.log() işlevini kullanıyor olmalısınız.
    - Kullanıcıdan girdi almak için prompt() işlevini kullanın. [Gerekirse buradaki belgeleri okuyun.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
    - İhtiyacınız olursa önceki fonksiyonlarınızı yeniden çalıştırmaktan çekinmeyin. Özellikle, dönüş(return) değerini daha kullanışlı bir değerle değiştirmek isteyebilirsiniz.
    - Yararlı olacağını düşünüyorsanız daha fazla "yardımcı" fonksiyon oluşturmaktan çekinmeyin.

*Bunun gibi etkileşimli projeler yaparken, daha fazla özellik eklemek, etkileşimi geliştirmek, kullanıcı deneyimini geliştirmek, tasarım ve stil eklemek vb. gibi şeyler size cazip gelebilir. Ama bunu yapmamanızı ve bu çabanızı portföy projeleriniz için saklamanızı öneriyoruz. Şimdilik sadece sizden bekleneni yapın.*

Öğrenme zihniyeti hakkında daha fazla bilgi için ve portföy parçaları hakkında daha fazla bilgi için [bu bağlantıyı](https://dev.to/theodinproject/learning-code-f56), [bu bağlantıyı](https://dev.to/theodinproject/strategically-building-your-portfolio-1km4) ve [bu bağlantıyı](https://dev.to/theodinproject/becoming-a-top-success-story-mindset-3dp2) okuyun.