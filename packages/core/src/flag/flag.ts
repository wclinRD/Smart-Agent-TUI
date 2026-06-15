import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["SMART_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["SMART_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("SMART_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  SMART_AUTO_HEAP_SNAPSHOT: truthy("SMART_AUTO_HEAP_SNAPSHOT"),
  SMART_GIT_BASH_PATH: process.env["SMART_GIT_BASH_PATH"],
  SMART_CONFIG: process.env["SMART_CONFIG"],
  SMART_CONFIG_CONTENT: process.env["SMART_CONFIG_CONTENT"],
  SMART_DISABLE_AUTOUPDATE: truthy("SMART_DISABLE_AUTOUPDATE"),
  SMART_ALWAYS_NOTIFY_UPDATE: truthy("SMART_ALWAYS_NOTIFY_UPDATE"),
  SMART_DISABLE_PRUNE: truthy("SMART_DISABLE_PRUNE"),
  SMART_DISABLE_TERMINAL_TITLE: truthy("SMART_DISABLE_TERMINAL_TITLE"),
  SMART_SHOW_TTFD: truthy("SMART_SHOW_TTFD"),
  SMART_DISABLE_AUTOCOMPACT: truthy("SMART_DISABLE_AUTOCOMPACT"),
  SMART_DISABLE_MODELS_FETCH: truthy("SMART_DISABLE_MODELS_FETCH"),
  SMART_DISABLE_MOUSE: truthy("SMART_DISABLE_MOUSE"),
  SMART_FAKE_VCS: process.env["SMART_FAKE_VCS"],
  SMART_SERVER_PASSWORD: process.env["SMART_SERVER_PASSWORD"],
  SMART_SERVER_USERNAME: process.env["SMART_SERVER_USERNAME"],
  SMART_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("SMART_DISABLE_FFF"),

  // Experimental
  SMART_EXPERIMENTAL_FILEWATCHER: Config.boolean("SMART_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  SMART_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("SMART_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  SMART_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("SMART_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  SMART_MODELS_URL: process.env["SMART_MODELS_URL"],
  SMART_MODELS_PATH: process.env["SMART_MODELS_PATH"],
  SMART_DB: process.env["SMART_DB"],

  SMART_WORKSPACE_ID: process.env["SMART_WORKSPACE_ID"],
  SMART_EXPERIMENTAL_WORKSPACES: enabledByExperimental("SMART_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get SMART_DISABLE_PROJECT_CONFIG() {
    return truthy("SMART_DISABLE_PROJECT_CONFIG")
  },
  get SMART_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("SMART_EXPERIMENTAL_REFERENCES")
  },
  get SMART_TUI_CONFIG() {
    return process.env["SMART_TUI_CONFIG"]
  },
  get SMART_CONFIG_DIR() {
    return process.env["SMART_CONFIG_DIR"]
  },
  get SMART_PURE() {
    return truthy("SMART_PURE")
  },
  get SMART_PERMISSION() {
    return process.env["SMART_PERMISSION"]
  },
  get SMART_PLUGIN_META_FILE() {
    return process.env["SMART_PLUGIN_META_FILE"]
  },
  get SMART_CLIENT() {
    return process.env["SMART_CLIENT"] ?? "cli"
  },
}
