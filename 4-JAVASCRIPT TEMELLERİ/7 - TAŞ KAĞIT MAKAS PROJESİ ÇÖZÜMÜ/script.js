/* TAŞ KAĞIT MAKAS PROJEMİZİN ÇÖZÜMÜ BU KISIMDA ADIM ADIM AÇIKLAMARIYLA BİRLİKTE ANLATILMIŞTIR.

--- NOT: --- BURAYI İNCELEMEYE BAŞLAMADAN ÖNCE KENDİ KODUNUZU OLUŞTURMUŞ OLDUĞUNUZDAN EMİN OLUN... HİÇBİR KOD YAZMADAN SADECE ÇÖZÜME BAKMAK VE ÇÖZÜMDEN BAKA BAKA PROJE OLUŞTURMAYA ÇALIŞMAK SİZİ GELİŞTİRMEZ BUNU UNUTMAYIN !!! KENDİNİZİ GELİŞTİRMEK İÇİN MUHAKKAK KODLARI KENDİNİZ YAZMAK İÇİN ÇABALAYIN. TAKILDIĞINIZ VEYA YAPAMADIĞINIZ BİR YER OLDUĞU ZAMAN BUNU ADIM ADIM PARÇALARA BÖLÜN VE İNTERNETTEN ARAYARAK ÜSTESİNDEN GELMEYE ÇALIŞIN... TÜM SONUCA BİR ANDA ULAŞMAYA ÇALIŞMAYIN !!! VE UNUTMAYIN Kİ KODLAMA YAPARKEN BİR SONUCA ULAŞMANIN FARKLI FARKLI YOLLARI VARDIR. HER GELİŞTİRİCİ AYNI SONUCA ULAŞMAK İÇİN FARKLI YOLLARDAN GİDEBİLİR... EMİN OLUN İŞİN MANTIĞINI KAVRADIĞINIZ ZAMAN AYNI SONUCA KENDİ YOLUNUZDAN KOLAYLIKLA ULAŞABİLECEKSİNİZ. ÖNCELİĞİNİZ HER ZAMAN MANTIĞI ANLAMAK VE KAVRAMAK OLSUN. BOL BOL KODLAYIN VE PRATİK YAPIN. HATA YAPMAKTAN KORKMAYIN !!! */


// KODLARI HTML DOSYANIZDA SCRIPT TAG'LERİ ARASINA YAZARAK KULLANABİLİR VEYA DAHA İYİ BİR YOL OLAN; HARİCİ BİR JS DOSYASI OLUŞTURUP KULLANABİLİRSİNİZ. TERCİH SİZE KALMIŞ.


// --- HADİ BAŞLAYALIM ---


let playerScore = 0;        // 1- playerScore adında kullanıcının puanını 0'dan başlatan bir değişken oluşturduk.
let computerScore = 0;      // 2- computerScore adında bilgisayarın puanını 0'dan başlatan bir değişken oluşturduk.

function game (){   // 3- game adlı bir fonksiyon oluşturduk.
    let getPlayerChoice = prompt("Taş, Kağıt, Makas").toString().toLocaleLowerCase();
    console.log("Seçiminiz: " + getPlayerChoice);       // 4- kullanıcının taş,kağıt,makas yazabileceği bir prompt oluşturduk ve bu prompt'a girilen harflerin hepsini küçülttük. ardından bunu getPlayerChoice adlı bir değişkene atadık.
    
    let getComputerChoice = ["taş", "kağıt", "makas"];  // 5- getComputerChoice adlı bir değişken oluşturduk ve içinde taş,kağıt,makas elemanları bulunan bir array tanımladık.

    function computerSelection() {      // 6- computerSelection adlı bilgisayarın taş,kağıt,makas üçlüsünden birini rastgele seçebilmesi için bir fonksiyon oluşturduk.
        getComputerChoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)]     // 7- bilgisayarın taş,kağıt,makas üçlüsünden birini rastgele seçebilmesi için methodlarımızı uyguladık ---Math.floor(Math.random() * getComputerChoice.length)--- ve seçilen rastgele bu yeni değeri tekrar getComputerChoice isimli değişkenimize atadık. 
        console.log("Rakibin Seçimi: " + getComputerChoice);    // 8- rastgele seçilen bu değeri görebilmek için konsolumuzda yazdırdık.
    };
    
    computerSelection();    // 9- bilgisayarımızın rastgele seçim yapmasını sağlayan fonksiyonumuzun çalışması için onu burada çağırdık.

    if ((getPlayerChoice == getComputerChoice )) {              // 10- bir if değeri oluşturduk. (eğer kullanıcının ve bilgisayarın seçimi eşit ise dedik konsol ve alert ekranında çıktı almak için alttaki adımlara geçtik)
        console.log(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);      // 11- eğer kullanıcının ve bilgisayarın seçimi eşit ise konsola; kullanıcının seçimi vs bilgisayarın seçimi BERABERE!!! kullanıcının ve rakibin puanının gösterildiği çıktıyı yazdırdık.
        alert(`${getPlayerChoice} vs ${getComputerChoice} BERABERE!!! Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);    // 12- eğer kullanıcının ve bilgisayarın seçimi eşit ise alert ekranına; kullanıcının seçimi vs bilgisayarın seçimi BERABERE!!! kullanıcının ve rakibin puanının gösterildiği çıktıyı yazdırdık.
    } else if ((getPlayerChoice == "taş" && getComputerChoice == "makas") || (getPlayerChoice == "kağıt" && getComputerChoice == "taş") || (getPlayerChoice == "makas" && getComputerChoice == "kağıt"))  {             // 13- kullanıcının kazanacağı durumları burada belirttik, eğer kullanıcı taş seçer ve bilgisayar makas seçerse gibi kullanıcının kazanacağı tüm durumları yazdık.
        playerScore += 1;                   // 14- ve kullanıcının bu kazandığı durumlarda 1.adımda oluşturduğumuz ve 0'dan başlattığımız playerScore isimli değişken rakamının 1 arttırılmasını sağladık. yani 0dan başladı ve kazandı 1 eklendi artık yeni değeri 1 olmuş oldu.
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);    // 15- ve kullanıcının seçimi, bilgisayarın seçimi, kazanma durumu ve açıklamayı, kullanıcı puanı ve rakibin puanınıyla birlikte konsolumuza yazdırdık.
        alert(`${getPlayerChoice} vs ${getComputerChoice} KAZANDINIZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yener. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);  // 16- 15. adımda yer alan sonucu alert ekranına yazdırdık.
    } else if ( (getComputerChoice == "taş" && getPlayerChoice == "makas") || (getComputerChoice == "kağıt" && getPlayerChoice == "taş") || (getComputerChoice == "makas" && getPlayerChoice == "kağıt") ) {            // 17- 13. adımda kullanıcının kazanacağı durumları belirttiğimiz gibi bu adımda da bilgisayarın kazanacağı durumları belirttik.
        computerScore += 1;             // 18- 14. adımdaki gibi bilgisayarın sahip olduğu 0 değerini 1 arttırdık.
        console.log(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);     // 19- 15. adımdaki gibi detaylar içeren kullanıcının kaybettiği mesajı konsola yazdırdık.
        alert(`${getPlayerChoice} vs ${getComputerChoice} KAYBETTİNİZ!!! ${getPlayerChoice} ${getComputerChoice}'ı yenemez. Puanınız: ${playerScore} - Rakibin Puanı: ${computerScore}`);     // 20- 19.adımdaki konsola yazdırdığımız detayları alert ekranına yazdırdık.
    } else {        // 21- eğer yukarıda durumların hiçbiri geçerli değilse; örneğin, kullanıcının taş, makas, kağıt yerine farklı bir şey yazması veya yazım hatası yapması vs gibi durumlarda ekrana bir hata çıktısı yazdırdık.
        console.log("HATA !!! TAŞ, KAĞIT VEYA MAKAS YAZMALISINIZ.");    // 22- hatayı konsola yazdırdık.
        alert("HATA !!! TAŞ, KAĞIT VEYA MAKAS YAZMALISINIZ.");      //23- hatayı alert ekranına yazdırdık.
    }
};

while(playerScore < 5 && computerScore < 5) {   // 24- Oyunun kullanıcı veya bilgisayardan herhangi birinin 5 puana ulaşana kadar devam etmesi için bir while döngüsü oluşturduk ve 5 puana ulaşıldığı zaman döngünün durmasını sağladık.
    game();     //25- game isimli fonksiyonumuzu çağırdık ve burada başlattık.
    if (playerScore == 5) {     // 26- kullanıcı 5 puana ulaştığı zaman kazandığını bildiren mesajı hem konsol hem de alert ekranında yazdırdık.
        console.log(`OYUN ${playerScore} - ${computerScore} BİTTİ. KAZANDINIZ TEBRİKLER !!!`);
        alert(`OYUN ${playerScore} - ${computerScore} BİTTİ. KAZANDINIZ TEBRİKLER !!!`);
    } else if (playerScore == computerScore) {  // 27- kullanıcı ve bilgisayarın puanlarının eşit olduğu durumda, puanların eşit olduğunu bildiren mesajı hem konsol hem de alert ekranında yazdırdık.
        console.log(`SKOR: ${playerScore} - ${computerScore} KRİTİK BİR AN PUANLAR EŞİT !!!`);
        alert(`SKOR: ${playerScore} - ${computerScore} KRİTİK BİR AN PUANLAR EŞİT !!!`);
    } else if (computerScore == 5) {    // 28- bilgisayar 5 puana ulaştığı zaman kullanıcının kaybettiğini bildiren mesajı hem konsol hem de alert ekranında yazdırdık.
        console.log(`OYUN ${playerScore} - ${computerScore} BİTTİ. ÜZGÜNÜM KAYBETTİNİZ !!!`);
        alert(`OYUN ${playerScore} - ${computerScore} BİTTİ. ÜZGÜNÜM KAYBETTİNİZ !!!`);
    } else {    // 29- her adımda oyunun 5'te biteceğini ve bu sonuca kadar devam ettiğini bildiren mesajı hem konsol hem de alert ekranında yazdırdık.
        console.log(`5'TE BİTER... OYUN DEVAM EDİYOR !!! ${playerScore} - ${computerScore}`)
        alert(`5'TE BİTER... OYUN DEVAM EDİYOR !!! ${playerScore} - ${computerScore}`)
    }
};
