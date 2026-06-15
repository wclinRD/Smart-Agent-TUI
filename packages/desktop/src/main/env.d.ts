interface ImportMetaEnv {
  readonly SMART_CHANNEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "virtual:smart-server" {
  export namespace Server {
    export const listen: typeof import("../../../smart/dist/types/src/node").Server.listen
    export type Listener = import("../../../smart/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../smart/dist/types/src/node").Config.get
    export type Info = import("../../../smart/dist/types/src/node").Config.Info
  }
  export const bootstrap: typeof import("../../../smart/dist/types/src/node").bootstrap
}
