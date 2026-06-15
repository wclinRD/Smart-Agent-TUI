import { run as runTui, type TuiInput } from "@smart-ai/tui"
import { Global } from "@smart-ai/core/global"
import { Effect } from "effect"

export function run(input: TuiInput) {
  return runTui(input).pipe(Effect.provide(Global.defaultLayer))
}
