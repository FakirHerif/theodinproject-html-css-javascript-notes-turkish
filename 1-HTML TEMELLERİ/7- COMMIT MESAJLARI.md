# Giriş

Bu ders, iyi commit mesajları oluşturmanın önemini, bunların nasıl yazılacağını, ne zaman commit atılacağını ve iyi bir commit geçmişine sahip olmanın neden bu kadar önemli olduğunu açıklayacaktır!

# Derse Genel Bakış

Bu bölümde bu derste öğreneceğiniz konulara genel bir bakış yer almaktadır.

- Commit nedir?
- Anlamlı bir commit nasıl yazılır?
- Anlamlı commitler neden önemlidir?
- Ne zaman commit atılmalı?

# Commit

Commit kelime anlamı olarak "işlemek" demektir. Git’e eklediğimiz dosyaları kalıcı olarak Git veri tabanına işlemeye commit denir. Projede belli başlı işlemler yapıldıktan sonra dosyaları commit etmek gerekir. Örnek olarak üye kayıt-giriş işlemlerini hallettikten sonra bir commit alabilirsiniz. Daha sonra üyenin yorum yapma özelliği aktifleştikten sonra bir commit alabilirsiniz. Bu tarz çok büyük olmayan ama ufak da olmayan değişikliklerde commit almak son derece sağlıklı bir yoldur.
**Kısaca Commit:** kullanıcının yaptığı değişiklikleri tarif ettiği, anlattığı kayıttır.

# Commit Neden Son Derece Önemlidir?

- İş başvurusunda bulunduğunuzda işverenler GitHub'daki projelerinizi inceleyecek ve commit geçmişinizi inceleyeceklerdir. Acemi bir geliştirici olarak iyi commitlere sahip olmak öne çıkmanıza yardımcı olacaktır.

- İyi bir commit geçmişine sahip olmak sizin (veya kodunuz üzerinde çalışan diğer geliştiricilerin) hangi değişikliklerin yapıldığını ve nedenini hızlı bir şekilde görmesine olanak tanır.

- İyi bir commit geçmişine sahip olmak, üzerinde çalıştığınız bir projeden bir süre uzaklaştıktan sonra geri dönmeniz durumunda da yararlı olacaktır. Kodu ilk yazarken düşünce sürecinizi ve yaptığınız değişiklikleri muhtemelen hatırlamayacaksınız bu yüzden commit'ler sizin bu süreci hatırlamanıza yardımcı olacaktır.

# Kötü Commit vs İyi Commit

İş commit yazmaya gelince nasıl etkili bir şekilde commit yazılacağını bilmek çok önemlidir. İşte hatalı bir commit örneği:
```
Hata giderildi.
```
Bu commit ne yaptığınızı açıklasa da mesaj çok belirsiz ve bu da ekibinizdeki diğer geliştiricilerin kafasını karıştıracaktır. Hatayı giderdiniz evet ama hangi hata? Nerede? gibi bir çok soruyu beraberinde getirecektir. İyi yazılan bir commit ise değişikliklerinizin hangi sorunu çözdüğünü ve bunları nasıl çözdüğünüzü açıklar. 

Etkili commit'ler iki ayrı bölümden oluşur. (Subject ve Body)

# Subject
Projede yaptığınız değişikliğin kısa bir özetidir. **Not:** GitHub'ın 72 karakterlik bir sınırı vardır, dolayısıyla commit'lerinizi bu sınır dahilinde tutmanız önerilmektedir.
```
Bu değişikliği kod temelinde gerçekleştirdim.
```

# Body
Ne yaptığınızın kısa ve net bir açıklaması.
```
Çözdüğünüz sorunu ve nasıl çözdüğünüzü açıklamalıdır.
```

Artık iyi bir commit oluşturmanın sırrını öğrendiğimize göre, daha önceki commit'lerimizi düzeltmeye çalışalım:
```
Websitesindeki logoda bulunması gereken bağlantı ve alternatif metin eklendi.

Ekran okuyucular alternatif metin olmadan görüntüleri engelli kullanıcılara okuyamaz.
```

Eveeett, bu çok daha iyi! Artık geliştiriciler bu commit'i daha iyi anlayabilirler çünkü bu commit şunları yapar: 
- Kodunuzun eylemini belirten bir konu sağlar (örneğin, "websitesindeki logoya eksik bağlantıyı ve alternatif metni ekleyin")
- Taahhüdün neden yapılması gerektiğine dair kısa ve net bir açıklama sağlayan bir metin içerir (örneğin, "Ekran okuyucular alternatif metin olmadan görüntüleri engelli kullanıcılara okuyamaz.")
- Boş bir satır ile konuyu açıklamadan ayırır. Bu durum, commitleri diğer geliştiricilerin okumasını kolaylaştırır.

# Ne Zaman Commit Atılmalı?

Commit atmanın başlıca en önemli avantajı kodunuz üzerinde yaptığınız değişikliğin *"anlık görüntüsünü"* alabilmenizdir. 

Kod yazarken, kodda anlamlı bir değişiklik yaptığınızda ve bu değişikliği commit atmanız en iyi uygulama olarak kabul edilir. Bu, ilerlemeniz için bir zaman çizelgesi oluşturacak ve bitmiş kodunuzun birdenbire ortaya çıkmadığına en büyük kanıt olacaktır.

Üzerinde çalıştığınız bir kod parçasını yazdıktan sonra istediğiniz gibi çalışması durumunda veya bir yazım hatasını düzeltmeniz durumunda veya herhangi bir hatayı düzeltmeniz durumunda hemen bir commit atın. Deneyim kazandıkça, hangi durumlarda commit atmanız gerektiği konusunda daha iyi fikir sahibi olacaksınız.

Bir proje üzerinde çalıştığınız süreç boyunca attığınız commit her zaman size fayda sağlayacaktır. Kodlama esnasında bir süre sonra üzerinde çalıştığınız projede neyi değiştirdiğinizi unutabilirsiniz, en son nereyi düzelttiğinizi, nereye ekleme yaptığınızı vs hatırlamıyor olabilirsiniz. Bu durumda çalıştırmayı denediğiniz proje istediğiniz gibi çalışmazsa ve işler yolunda gitmezse en son değişikliklerinizi geri almak isteyebilirsiniz. İşte bu durumda daha önceden attığınız commit geçmişinize geri dönebilir, kodunuzu çalışan şekilde attığınız commit'e geri döndürebilirsiniz veya o commit'i inceleyerek kodunuzun o esnada nasıl olduğunu inceleyebilirsiniz.

***NOT:*** **Commit atmaktan çekinmeyin. Bol bol commit atın. Commit her anlamda size fayda sağlayacaktır ve olumsuz/istenmeyen durumlarda hayat kurtarıcı olacaktır.**

# Görev

- [Git Commit Nasıl Atılır](https://cbea.ms/git-commit/) başlıklı bu makaleyi okuyun. Bu makale iyi commit'lerin nasıl atılacağına ilişkin tüm temelleri kapsar. Makalenin tamamı harika ve bilgilendiricidir. Kısaca makalenin özü şudur: "Harika bir commit'in yedi kuralı."

# Bilgi Kontrolü

Bu kısımda, bu dersi anladığınızı kontrol edebilmeniz için sorular bulunmaktadır. (Bir önceki bölümde bilgilendirdiğim üzere; Bilgi Kontrolü başlıkları altındaki soruların cevapları verilmeyecektir. Notları takip eden kişilerin sağlıklı bir ilerleme sağlayabilmeleri için kendilerinin çözmeleri beklenmektedir.)

- İyi yazılmış commit'lerin ve sağlam bir commit geçmişine sahip olmanın faydaları nelerdir?
- Commit'ler için GitHub'ın maximum kaç karakterlik bir sınırı vardır?

# Ek Kaynaklar

Bu kısımda bu içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bağlantıları incelemeniz gerekli değil sadece tamamlayıcı ve destekleyici bilgiler olarak düşünebilirsiniz. (Bağlantı içerikleri ingilizcedir.)

- [Yüksek bilgi içeren geleneksel Commit'ler.](https://www.conventionalcommits.org/en/v1.0.0/)
- [Gelenekler Commit'ler için muhteşem bir eğitim eğitim videosu](https://www.youtube.com/watch?v=OJqUWvmf4gg)