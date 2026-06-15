<p align="center">
  <a href="https://smart.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Smart logo">
    </picture>
  </a>
</p>
<p align="center">El agente de programación con IA de código abierto.</p>
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

### Instalación

```bash
# YOLO
curl -fsSL https://smart.ai/install | bash

# Gestores de paquetes
npm i -g smart-ai@latest        # o bun/pnpm/yarn
scoop install smart             # Windows
choco install smart             # Windows
brew install anomalyco/tap/smart # macOS y Linux (recomendado, siempre al día)
brew install smart              # macOS y Linux (fórmula oficial de brew, se actualiza menos)
sudo pacman -S smart            # Arch Linux (Stable)
paru -S smart-bin               # Arch Linux (Latest from AUR)
mise use -g smart               # cualquier sistema
nix run nixpkgs#smart           # o github:anomalyco/smart para la rama dev más reciente
```

> [!TIP]
> Elimina versiones anteriores a 0.1.x antes de instalar.

### App de escritorio (BETA)

Smart también está disponible como aplicación de escritorio. Descárgala directamente desde la [página de releases](https://github.com/anomalyco/smart/releases) o desde [smart.ai/download](https://smart.ai/download).

| Plataforma            | Descarga                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `smart-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `smart-desktop-mac-x64.dmg`     |
| Windows               | `smart-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, o AppImage         |

```bash
# macOS (Homebrew)
brew install --cask smart-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/smart-desktop
```

#### Directorio de instalación

El script de instalación respeta el siguiente orden de prioridad para la ruta de instalación:

1. `$SMART_INSTALL_DIR` - Directorio de instalación personalizado
2. `$XDG_BIN_DIR` - Ruta compatible con la especificación XDG Base Directory
3. `$HOME/bin` - Directorio binario estándar del usuario (si existe o se puede crear)
4. `$HOME/.smart/bin` - Alternativa por defecto

```bash
# Ejemplos
SMART_INSTALL_DIR=/usr/local/bin curl -fsSL https://smart.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://smart.ai/install | bash
```

### Agentes

Smart incluye dos agentes integrados que puedes alternar con la tecla `Tab`.

- **build** - Por defecto, agente con acceso completo para tareas de desarrollo
- **plan** - Agente de solo lectura para análisis y exploración de código
  - Deniega ediciones de archivos por defecto
  - Pide permiso antes de ejecutar comandos bash
  - Ideal para explorar codebases desconocidas o planificar cambios

Además, incluye un subagente **general** para búsquedas complejas y tareas de varios pasos.
Se usa internamente y se puede invocar con `@general` en los mensajes.

Más información sobre [agentes](https://smart.ai/docs/agents).

### Documentación

Para más información sobre cómo configurar Smart, [**ve a nuestra documentación**](https://smart.ai/docs).

### Contribuir

Si te interesa contribuir a Smart, lee nuestras [docs de contribución](./CONTRIBUTING.md) antes de enviar un pull request.

### Proyectos basados en Smart

Si estás trabajando en un proyecto basado en Smart y usas "smart" como parte del nombre, por ejemplo, "smart-dashboard" u "smart-mobile", agrega una nota en tu README para aclarar que no está hecho por el equipo de Smart y que no está afiliado con nosotros de ninguna manera.

---

**Únete a nuestra comunidad** [Discord](https://discord.gg/smart) | [X.com](https://x.com/smart)
