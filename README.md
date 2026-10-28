# bloat-mcp

A deliberately bloated MCP server for a context-rot demo. Its one tool,
`search_handbook`, returns the whole (synthetic) company handbook, about 44 KB
(roughly 15k tokens), instead of the matching paragraph. Each call answers one
question, so three questions cost three copies. Stateless, no auth,
no storage, no logging.

## Install (Claude Code)

    claude mcp add --transport http bloat https://bloat-mcp.vercel.app/mcp

## The prompt

    Use the bloat handbook search to answer three questions: how many vacation days do full-time staff get, how soon must expense reports be filed, and how often are laptops replaced? Search once per question. Save the answers to answers.md, then read the file back and tell me what it says.

The file write and read-back matter: Rius's context rot rule fires when one tool's
results take 30% or more of a model call's input and hold for the next 2 calls.

Run `/context` before and after to watch the context window jump, then look at
the trace in your Rius console.

## Deploy

    vercel deploy --prod

Local test: `node server.js 8787`, then `claude mcp add --transport http bloat http://127.0.0.1:8787/mcp`.

Keep each result under about 50 KB: Claude Code spills larger MCP results to a
file instead of inlining them, which defeats the demo.

MIT licensed.
