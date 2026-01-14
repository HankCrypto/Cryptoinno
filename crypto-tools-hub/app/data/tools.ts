import { Tool } from "../types/tool"

export const tools: Tool[] = [
  {
    id: "dune",
    name: "Dune",
    slug: "dune",
    category: "On-chain Analytics",

    pricing: {
      model: "Free",
    },

    supportedChains: [
      "Ethereum",
      "Polygon",
      "Arbitrum",
      "Optimism",
    ],

    dataTypes: [
      "On-chain data",
      "Custom dashboards",
    ],

    apiAccess: false,
    exportData: true,

    learningCurve: "High",

    bestFor: ["Researcher", "Builder"],

    website: "https://dune.com",
    lastUpdated: "2026-01-01",
  },

  {
    id: "nansen",
    name: "Nansen",
    slug: "nansen",
    category: "On-chain Analytics",

    pricing: {
      model: "Paid",
      startingPrice: 99,
    },

    supportedChains: [
      "Ethereum",
      "BNB Chain",
      "Polygon",
      "Arbitrum",
      "Solana",
    ],

    dataTypes: [
      "Wallet labeling",
      "Smart money tracking",
      "On-chain analytics",
    ],

    apiAccess: true,
    exportData: true,

    learningCurve: "Medium",

    bestFor: ["Trader", "Investor"],

    website: "https://nansen.ai",
    lastUpdated: "2026-01-01",
  },

  {
    id: "arkham",
    name: "Arkham",
    slug: "arkham",
    category: "On-chain Analytics",

    pricing: {
      model: "Freemium",
    },

    supportedChains: [
      "Ethereum",
      "Arbitrum",
      "Optimism",
    ],

    dataTypes: [
      "Entity tracking",
      "Address intelligence",
    ],

    apiAccess: false,
    exportData: false,

    learningCurve: "Medium",

    bestFor: ["Trader", "Researcher"],

    website: "https://arkhamintelligence.com",
    lastUpdated: "2026-01-01",
  },
]
