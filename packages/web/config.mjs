const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://smart.ai" : `https://${stage}.smart.ai`,
  console: stage === "production" ? "https://smart.ai/auth" : `https://${stage}.smart.ai/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/smart",
  discord: "https://smart.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
