import { SearchEngine } from "./searchEngine"

const engine = new SearchEngine()

engine.addPage({
  title: "TypeScript Guide",
  url: "https://example.com/typescript",
  content: "Learn TypeScript programming language and modern development"
})

engine.addPage({
  title: "Node.js Backend",
  url: "https://example.com/node",
  content: "Build backend APIs using Node and TypeScript"
})

const results = engine.search("typescript backend")

console.log(results)