"use client"

import { useState } from "react"
import Link from "next/link"
import { tools } from "@/app/data/tools"
import type { Tool } from "@/app/types/tool"
import { useCompareStore } from "@/app/state/compareStore"

/* =======================
   Helper functions
======================= */

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[-_/]/g, "")
    .replace(/\s+/g, "")
    .trim()
}

function getMatchReasons(tool: Tool, query: string) {
  const q = normalize(query)
  const reasons: string[] = []

  if (normalize(tool.name).includes(q)) {
    reasons.push("Tool name matches your search")
  }

  if (normalize(tool.category).includes(q)) {
    reasons.push("Category matches your interest")
  }

  if (tool.apiAccess && q.includes("api")) {
    reasons.push("Provides API access")
  }

  if (
    tool.supportedChains.some((c) =>
      normalize(c).includes(q)
    )
  ) {
    reasons.push("Supports this blockchain")
  }

  return reasons
}

/* =======================
   Page Component
======================= */

export default function SearchPage() {
  const [query, setQuery] = useState("")

  // ✅ Hooks MUST be here
  const toggle = useCompareStore((s) => s.toggle)
  const selected = useCompareStore((s) => s.selected)

  const results = tools.filter((tool: Tool) => {
    if (query.trim().length === 0) return false

    const q = normalize(query)

    const searchableText = [
      tool.name,
      tool.category,
      tool.dataTypes.join(" "),
      tool.bestFor.join(" "),
      tool.supportedChains.join(" "),
    ]
      .map(normalize)
      .join(" ")

    return (
      searchableText.includes(q) ||
      (q.includes("api") && tool.apiAccess) ||
      (q.includes("export") && tool.exportData)
    )
  })

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Search Crypto Tools
      </h1>

      <input
        type="text"
        placeholder="Search by use case, chain, data type..."
        className="mt-6 w-full border p-3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-8 space-y-4">
        {query.length === 0 && (
          <p className="text-gray-500">
            Start typing to discover tools.
          </p>
        )}

        {query.length > 0 && results.length === 0 && (
          <p className="text-gray-500">
            No tools match your search.
          </p>
        )}

        {results.map((tool) => {
          const reasons = getMatchReasons(tool, query)
          const isSelected = selected.includes(tool.slug)

          return (
            <div
              key={tool.id}
              className="border p-4 rounded"
            >
              <Link
                href={`/tools/${tool.slug}`}
                className="text-xl font-semibold text-blue-600 underline"
              >
                {tool.name}
              </Link>

              <p className="text-sm text-gray-500 mt-1">
                {tool.category}
              </p>

              <p className="text-sm mt-2">
                <strong>Best for:</strong>{" "}
                {tool.bestFor.join(", ")}
              </p>

              <button
                className={`mt-3 text-sm border px-3 py-1 ${
                  isSelected
                    ? "bg-black text-white"
                    : ""
                }`}
                onClick={() => toggle(tool.slug)}
              >
                {isSelected ? "Selected" : "Compare"}
              </button>

              {reasons.length > 0 && (
                <ul className="mt-3 text-sm text-green-700">
                  {reasons.map((reason, index) => (
                    <li key={index}>
                      • {reason}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>

      {/* ✅ Compare floating box */}
      {selected.length >= 2 && (
        <div className="fixed bottom-4 right-4 border bg-white p-4 shadow">
          <p className="text-sm">
            Comparing {selected.length} tools
          </p>

          <Link
            href={`/compare?tools=${selected.join(",")}`}
            className="mt-2 inline-block underline font-medium"
          >
            Go to compare →
          </Link>
        </div>
      )}
    </main>
  )
}
