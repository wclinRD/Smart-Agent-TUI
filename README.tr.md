<p align="center">
  <a href="https://smart.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Smart logo">
    </picture>
  </a>
</p>
<p align="center">Açık kaynaklı yapay zeka kodlama asistanı.</p>
<p align="center">
  <a href="https://smart.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/smart-ai"><img alt="npm" src="https://img.shields.io/npm/v/smart-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/smart/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/smart/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![Smart Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://smart.ai)

---

### Kurulum

```bash
# YOLO
curl -fsSL https://smart.ai/install | bash

# Paket yöneticileri
npm i -g smart-ai@latest        # veya bun/pnpm/yarn
scoop install smart             # Windows
choco install smart             # Windows
brew install anomalyco/tap/smart # macOS ve Linux (önerilir, her zaman güncel)
brew install smart              # macOS ve Linux (resmi brew formülü, daha az güncellenir)
sudo pacman -S smart            # Arch Linux (Stable)
paru -S smart-bin               # Arch Linux (Latest from AUR)
mise use -g smart               # Tüm işletim sistemleri
nix run nixpkgs#smart           # veya en güncel geliştirme dalı için github:anomalyco/smart
```

> [!TIP]
> Kurulumdan önce 0.1.x'ten eski sürümleri kaldırın.

### Masaüstü Uygulaması (BETA)

Smart ayrıca masaüstü uygulaması olarak da mevcuttur. Doğrudan [sürüm sayfasından](https://github.com/anomalyco/smart/releases) veya [smart.ai/download](https://smart.ai/download) adresinden indirebilirsiniz.

| Platform              | İndirme                            |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `smart-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `smart-desktop-mac-x64.dmg`     |
| Windows               | `smart-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` veya AppImage       |

```bash
# macOS (Homebrew)
brew install --cask smart-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/smart-desktop
```

#### Kurulum Dizini (Installation Directory)

Kurulum betiği (install script), kurulum yolu (installation path) için aşağıdaki öncelik sırasını takip eder:

1. `$SMART_INSTALL_DIR` - Özel kurulum dizini
2. `$XDG_BIN_DIR` - XDG Base Directory Specification uyumlu yol
3. `$HOME/bin` - Standart kullanıcı binary dizini (varsa veya oluşturulabiliyorsa)
4. `$HOME/.smart/bin` - Varsayılan yedek konum

```bash
# Örnekler
SMART_INSTALL_DIR=/usr/local/bin curl -fsSL https://smart.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://smart.ai/install | bash
```

### Ajanlar

Smart, `Tab` tuşuyla aralarında geçiş yapabileceğiniz iki yerleşik (built-in) ajan içerir.

- **build** - Varsayılan, geliştirme çalışmaları için tam erişimli ajan
- **plan** - Analiz ve kod keşfi için salt okunur ajan
  - Varsayılan olarak dosya düzenlemelerini reddeder
  - Bash komutlarını çalıştırmadan önce izin ister
  - Tanımadığınız kod tabanlarını keşfetmek veya değişiklikleri planlamak için ideal

Ayrıca, karmaşık aramalar ve çok adımlı görevler için bir **genel** alt ajan bulunmaktadır.
Bu dahili olarak kullanılır ve mesajlarda `@general` ile çağrılabilir.

[Ajanlar](https://smart.ai/docs/agents) hakkında daha fazla bilgi edinin.

### Dokümantasyon

Smart'u nasıl yapılandıracağınız hakkında daha fazla bilgi için [**dokümantasyonumuza göz atın**](https://smart.ai/docs).

### Katkıda Bulunma

Smart'a katkıda bulunmak istiyorsanız, lütfen bir pull request göndermeden önce [katkıda bulunma dokümanlarımızı](./CONTRIBUTING.md) okuyun.

### Smart Üzerine Geliştirme

Smart ile ilgili bir proje üzerinde çalışıyorsanız ve projenizin adının bir parçası olarak "smart" kullanıyorsanız (örneğin, "smart-dashboard" veya "smart-mobile"), lütfen README dosyanıza projenin Smart ekibi tarafından geliştirilmediğini ve bizimle hiçbir şekilde bağlantılı olmadığını belirten bir not ekleyin.

---

**Topluluğumuza katılın** [Discord](https://discord.gg/smart) | [X.com](https://x.com/smart)
