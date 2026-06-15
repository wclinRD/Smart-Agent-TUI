import { $ } from "bun"

await $`bun ./scripts/copy-icons.ts ${process.env.SMARTCODE_CHANNEL ?? "dev"}`

await $`cd ../smart && bun script/build-node.ts`
