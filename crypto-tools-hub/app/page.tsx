import Link from "next/link"

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Crypto Tools Hub
      </h1>

      <p className="mt-4 text-gray-600">
        Find the right crypto tools for your needs.
      </p>

      <Link
        href="/tools"
        className="inline-block mt-6 text-blue-600 underline"
      >
        Browse tools
      </Link>
    </main>
  )
}
