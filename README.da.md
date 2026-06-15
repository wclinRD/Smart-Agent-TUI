<p align="center">
  <a href="https://smart.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Smart logo">
    </picture>
  </a>
</p>
<p align="center">Den open source AI-kodeagent.</p>
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

### Installation

```bash
# YOLO
curl -fsSL https://smart.ai/install | bash

# Pakkehåndteringer
npm i -g smart-ai@latest        # eller bun/pnpm/yarn
scoop install smart             # Windows
choco install smart             # Windows
brew install anomalyco/tap/smart # macOS og Linux (anbefalet, altid up to date)
brew install smart              # macOS og Linux (officiel brew formula, opdateres sjældnere)
sudo pacman -S smart            # Arch Linux (Stable)
paru -S smart-bin               # Arch Linux (Latest from AUR)
mise use -g smart               # alle OS
nix run nixpkgs#smart           # eller github:anomalyco/smart for nyeste dev-branch
```

> [!TIP]
> Fjern versioner ældre end 0.1.x før installation.

### Desktop-app (BETA)

Smart findes også som desktop-app. Download direkte fra [releases-siden](https://github.com/anomalyco/smart/releases) eller [smart.ai/download](https://smart.ai/download).

| Platform              | Download                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `smart-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `smart-desktop-mac-x64.dmg`     |
| Windows               | `smart-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, eller AppImage     |

```bash
# macOS (Homebrew)
brew install --cask smart-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/smart-desktop
```

#### Installationsmappe

Installationsscriptet bruger følgende prioriteringsrækkefølge for installationsstien:

1. `$SMART_INSTALL_DIR` - Tilpasset installationsmappe
2. `$XDG_BIN_DIR` - Sti der følger XDG Base Directory Specification
3. `$HOME/bin` - Standard bruger-bin-mappe (hvis den findes eller kan oprettes)
4. `$HOME/.smart/bin` - Standard fallback

```bash
# Eksempler
SMART_INSTALL_DIR=/usr/local/bin curl -fsSL https://smart.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://smart.ai/install | bash
```

### Agents

Smart har to indbyggede agents, som du kan skifte mellem med `Tab`-tasten.

- **build** - Standard, agent med fuld adgang til udviklingsarbejde
- **plan** - Skrivebeskyttet agent til analyse og kodeudforskning
  - Afviser filredigering som standard
  - Spørger om tilladelse før bash-kommandoer
  - Ideel til at udforske ukendte kodebaser eller planlægge ændringer

Derudover findes der en **general**-subagent til komplekse søgninger og flertrinsopgaver.
Den bruges internt og kan kaldes via `@general` i beskeder.

Læs mere om [agents](https://smart.ai/docs/agents).

### Dokumentation

For mere info om konfiguration af Smart, [**se vores docs**](https://smart.ai/docs).

### Bidrag

Hvis du vil bidrage til Smart, så læs vores [contributing docs](./CONTRIBUTING.md) før du sender en pull request.

### Bygget på Smart

Hvis du arbejder på et projekt der er relateret til Smart og bruger "smart" som en del af navnet; f.eks. "smart-dashboard" eller "smart-mobile", så tilføj en note i din README, der tydeliggør at projektet ikke er bygget af Smart-teamet og ikke er tilknyttet os på nogen måde.

---

**Bliv en del af vores community** [Discord](https://discord.gg/smart) | [X.com](https://x.com/smart)
