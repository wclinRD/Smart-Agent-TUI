import { Effect } from "effect"
import { PluginV2 } from "../../plugin"
import { ProviderV2 } from "../../provider"

export const OpencodeZenPlugin = PluginV2.define({
  id: PluginV2.ID.make("opencode-zen"),
  effect: Effect.gen(function* () {
    return {
      "catalog.transform": Effect.fn(function* (evt) {
        for (const item of evt.provider.list()) {
          if (item.provider.api.type !== "aisdk") continue
          if (item.provider.api.package !== "@ai-sdk/openai-compatible") continue
          if (item.provider.id !== ProviderV2.ID.opencodeZen) continue
          evt.provider.update(item.provider.id, (provider) => {
            provider.request.headers["HTTP-Referer"] ??= "https://smart.ai/"
            provider.request.headers["X-Title"] ??= "OpenCode Zen"
          })
        }
      }),
    }
  }),
})
