declare global {
  const SMART_VERSION: string
  const SMART_CHANNEL: string
}

export const InstallationVersion = typeof SMART_VERSION === "string" ? SMART_VERSION : "local"
export const InstallationChannel = typeof SMART_CHANNEL === "string" ? SMART_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
