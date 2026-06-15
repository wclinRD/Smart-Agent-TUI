import { Context } from "effect"
import type { InstanceContext } from "@/project/instance-context"
import type { WorkspaceV2 } from "@smartcode-ai/core/workspace"

export const InstanceRef = Context.Reference<InstanceContext | undefined>("~smart/InstanceRef", {
  defaultValue: () => undefined,
})

export const WorkspaceRef = Context.Reference<WorkspaceV2.ID | undefined>("~smart/WorkspaceRef", {
  defaultValue: () => undefined,
})
