/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { Effect } from "effect"
import { PluginV2 } from "../plugin"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customizeOpencodeContent from "./skill/customize-smart.md" with { type: "text" }

export const CustomizeOpencodeContent = customizeOpencodeContent

export const Plugin = PluginV2.define({
  id: PluginV2.ID.make("skill"),
  effect: Effect.gen(function* () {
    const skill = yield* SkillV2.Service
    const transform = yield* skill.transform()

    yield* transform((editor) => {
      editor.source(
        new SkillV2.EmbeddedSource({
          type: "embedded",
          skill: new SkillV2.Info({
            name: "customize-smart",
            description:
              "Use ONLY when the user is editing or creating smartcode's own configuration: smartcode.json, files under .smart/ or .smartcode/, or files under ~/.config/smartcode/. Also use when creating or fixing smartcode agents, subagents, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring smartcode itself.",
            location: AbsolutePath.make("/builtin/customize-smart.md"),
            content: CustomizeOpencodeContent,
          }),
        }),
      )
    })
  }),
})
