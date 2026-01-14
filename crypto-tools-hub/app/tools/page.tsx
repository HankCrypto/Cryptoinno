import { tools } from "../data/tools"

export default function ToolsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Crypto Tools
      </h1>

      <p className="mt-2 text-gray-600">
        Browse and compare crypto tools based on verified information.
      </p>

      <ul className="mt-8 space-y-6">
        {tools.map((tool) => (
          <li
            key={tool.id}
            className="border rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold">
              {tool.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Category: {tool.category}
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <strong>Pricing:</strong>{" "}
                {tool.pricing.model}
                {tool.pricing.startingPrice
                  ? ` ($${tool.pricing.startingPrice}/month)`
                  : ""}
              </p>

              <p>
                <strong>Supported Chains:</strong>{" "}
                {tool.supportedChains.join(", ")}
              </p>

              <p>
                <strong>Data Types:</strong>{" "}
                {tool.dataTypes.join(", ")}
              </p>

              <p>
                <strong>API Access:</strong>{" "}
                {tool.apiAccess ? "Yes" : "No"}
              </p>

              <p>
                <strong>Export Data:</strong>{" "}
                {tool.exportData ? "Yes" : "No"}
              </p>

              <p>
                <strong>Learning Curve:</strong>{" "}
                {tool.learningCurve}
              </p>

              <p>
                <strong>Best for:</strong>{" "}
                {tool.bestFor.join(", ")}
              </p>
            </div>

            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 underline"
            >
              Visit official website
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
