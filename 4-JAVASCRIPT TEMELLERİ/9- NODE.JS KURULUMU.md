# Giriş

Node.js, JavaScript'i web tarayıcınızın dışında çalıştırmanıza olanak tanıyan bir JavaScript çalışma zamanı ortamıdır. Gelecek derslerde bazı alıştırmalar için bunu kullanmamız gerekecek. Başlamadan önce, sisteminize Node'u yükleyebilmek için gereken bazı araçlara ihtiyacımız var.

Node'u yüklemek için **nvm** (Node Sürüm Yöneticisi) kullanacağız, çünkü Node sürümlerini değiştirmeyi ve Node'un sürümünü yükseltmeyi kolaylaştırır. JavaScript ortamlarında kullanılan çeşitli kütüphaneleri ve araçları yüklemek için daha sonra kullanacağımız başka bir araç olan **npm** (Node Paket Yöneticisi) de bulunmaktadır. Bu iki aracı birbiriyle karıştırmak kolay olabilir, bu nedenle dikkatlice okuyun!

Node'u nvm kullanarak yüklemek de çok kolaydır, bu nedenle işlem hızlı bir şekilde tamamlanmalıdır.

# Derse Genel Bakış

- Node Sürüm Yöneticisini ve Node Paket Yöneticisini nasıl yükleyeceğinizi öğrenin.

- Node konsolunu nasıl çalıştıracağınızı öğrenin

# NVM Kurulumu

# Windows İçin Kurulum

NVM çoğunlukla Linux ve Mac'te desteklenir. Windows desteği yoktur. Ancak coreybutler tarafından Windows'ta bir nvm deneyimi sağlamak için oluşturulan [nvm-windows](https://github.com/coreybutler/nvm-windows) adında benzer bir araç vardır.

nvm-windowsWindows'ta Node.js sürümlerini yönetmek için bir yönetim yardımcı programı sağlar.

**Birinci Adım --->** [Bu bağlantıya](https://github.com/coreybutler/nvm-windows#readme) gidin ve Download Now butonuna basın.

![Görsel](https://www.freecodecamp.org/news/content/images/size/w2400/2022/09/image-338.png)

Burası, farklı NVM sürümlerini gösteren bir sayfa açacaktır. 

**İkinci Adım --->** Aracın kurulum dosyası olan **"nvm-setup.exe"** tıklayın ve indirin. (Aracın en son sürümü bu yazının yazıldığı an itibariyle v1.1.11'dir)

![Görsel](https://www.freecodecamp.org/news/content/images/size/w2400/2022/09/image-340.png)

**Üçüncü Adım --->** İndirdiğiniz dosyayı açın ve kurulumu tamamlayın.

**Dördüncü Adım --->** İşlem bittiğinde terminalinize aşağıdaki komutu yazın ve nvm'in kurulduğunu doğrulayın.

```
nvm -v
```

Nvm doğru bir şekilde kurulmuşsa, bu komut size kurulu olan nvm sürümünü gösterecektir.

# Linux İçin Kurulum

**Sıfırıncı Adım --->** Nvm'yi düzgün bir şekilde kurmak için **curl**'e ihtiyacınız olacak. Aşağıdaki komutu çalıştırmanız yeterlidir:

```
sudo apt install curl
```

**Not:** Curl kurulumunun tamamlanması için Ubuntu paket listelerini en son sürüme güncellemeniz gerekebilir. Eğer öyleyse, aşağıdaki komutu çalıştırın:

```
sudo apt update && sudo apt upgrade
```

**Birinci Adım --->** İndirip yüklemek için şu komutu çalıştırın:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

nvm yüklenmiş olacak.

**İkinci Adım --->** Terminalde nvm'in nasıl başlatılacağına dair bazı talimatlar bulunmaktadır. Göremiyorsanız (veya terminalden kopyalamak istemiyorsanız) şu komutları çalıştırın:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

nvm'in kurulduğunu şu komutla doğrulayabilirsiniz:

```
command -v nvm
```

Eğer nvm: command not found çıktısı alıyorsanız, terminali kapatın ve işlemlere yeniden başlayın.

# MacOS İçin Kurulum

MacOS 10.15 ve üzeri sürümlerde varsayılan shell artık zsh'dir. Kurulum sırasında nvm, kullanıcı ana dizininizde bir .zshrc dosyası arayacaktır. Varsayılan olarak bu dosya mevcut olmadığından onu oluşturmamız gerekiyor.

.zshrc dosyasını oluşturmak ve nvm kurulumunu başlatmak için aşağıdaki komutları çalıştırın:

```
touch ~/.zshrc
```

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

Terminalinizi yeniden başlatın veya aşağıdakileri kopyalayıp terminalinize yapıştırın ve Enter tuşuna basın:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

Nvm kurulumunuzun doğru olup olmadığını bu komutu çalıştırarak kontrol edin:

```
nvm --version
```

Daha fazla bilgi için [NVM'nin github belgelerine](https://github.com/nvm-sh/nvm#installation-and-update) bakın.


# Node Kurulumu

Artık nvm'i kurduğumuza göre Node'u kurabiliriz.

**Birinci Adım --->** Kurulum için bu komutu çalıştırın:

```
nvm install --lts
```

Bu, Node'un en son kararlı sürümünü 'ong-term support' (LTS) yükleyecektir ve terminalinizde çok fazla çıktı göreceksiniz. Her şey yolunda ve doğruysa, çıktı satırlarının herhangi bir yerinde buna benzer bir şey görmelisiniz (Örnek çıktıda sayılar yerine x'ler kullanılmıştır):

```
Downloading and installing Node vXX.xx.x...
```

Eğer böyle bir şey görmüyorsanız, terminali kapatın, yeniden açın ve nvm install --lts komutunu tekrar çalıştırın.

**İkinci Adım --->** Node sürümünü ayarlamak aşağıdaki komutu çalıştırıyoruz, son derece kolay:

```
nvm use --lts
```

Nvm'e bilgisayarımızda yüklü olan Node'un en güncel LTS sürümünü kullanmasını söyledik. Gelecek derslerde kuracağımız paketlerle olan uyumsuzlukları önlemek için Node'un LTS sürümünü kullanmalısınız. Node'un LTS sürümü, ilk piyasaya sürülmesinden sonra otuz ay boyunca destek garantisi verilen bir sürümdür. Node'un LTS olmayan sürümüne göre daha kararlı ve çeşitli paketlerle uyumludur.

**Üçüncü Adım --->** Kurulumun tamamen doğru bir şekilde tamamlandığını doğrulayabilmek için aşağıdaki komutu çalıştırın:

```
node -v
```

Eğer versiyonu görebiliyorsanız herşey doğru demektir, göremiyorsanız tüm işlemlere baştan başlayın.

# Node Konsol Kullanımı

Node, kullanıcıya JavaScript kodlarını doğrudan terminalde çalıştırıp düzenleyebilmesini sağlayan etkileşimli bir konsol sunar. Bu, Ruby için IRB gibi, kodunuzu her seferinde tarayıcıyı açmadan hızlı bir şekilde hata ayıklamak veya küçük kod parçacıklarını test etmek için oldukça faydalıdır.

Node konsolunu çalıştırmak için terminalinizi açın ve "node" yazın. Konsolu kapatmak için ".exit" komutunu kullanabilirsiniz.

Bu, küçük kod parçacıklarını hızlıca test etmek veya JavaScript kodunuzu denemek istediğinizde faydalı bir araçtır.

# Ek Kaynaklar

Bu bölümde herhangi bir ek kaynak bulunmamaktadır.