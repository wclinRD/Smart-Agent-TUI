// @ts-nocheck

import { Smart } from "@smart-ai/core"
import { ReadTool } from "@smart-ai/core/tools"

const smart = Smart.make({})

smart.tool.add(ReadTool)

smart.tool.add({
  name: "bash",
  schema: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run.",
      },
    },
    required: ["command"],
  },
  execute(input, ctx) {},
})

smart.auth.add({
  provider: "openai",
  type: "api",
  value: process.env.OPENAI_API_KEY,
})

smart.agent.add({
  name: "build",
  permissions: [],
  model: {
    id: "gpt-5-5",
    provider: "openai",
    variant: "xhigh",
  },
})

const sessionID = await smart.session.create({
  agent: "build",
})

smart.subscribe((event) => {
  console.log(event)
})

await smart.session.prompt({
  sessionID,
  text: "hey what is up",
})

await smart.session.prompt({
  sessionID,
  text: "what is up with this",
  files: [
    {
      mime: "image/png",
      uri: "data:image/png;base64,xxxx",
    },
  ],
})

await smart.session.wait()

console.log(await smart.session.messages(sessionID))
