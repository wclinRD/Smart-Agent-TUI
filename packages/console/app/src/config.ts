/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://smart.ai",

  // GitHub
  github: {
    repoUrl: "https://github.com/anomalyco/smart",
    starsFormatted: {
      compact: "160K",
      full: "160,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/smart",
    discord: "https://discord.gg/smart",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "900",
    commits: "13,000",
    monthlyUsers: "7.5M",
  },
} as const
