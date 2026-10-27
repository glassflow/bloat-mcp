# bloat-mcp

A deliberately bloated MCP server for a context-rot demo. Its one tool,
`search_handbook`, returns the whole (synthetic) company handbook, about 44 KB
(roughly 15k tokens), instead of the matching paragraph. Stateless, no auth,
no storage, no logging.

## Install (Claude Code)

    claude mcp add --transport http bloat https://<host>/mcp

## The prompt

    Use the bloat handbook search to answer two questions: how many vacation days do full-time staff get, and how soon must expense reports be filed? Search once per question, then save both answers to answers.md and tell me what they are.

Run `/context` before and after to watch the context window jump, then look at
the trace in your Rius console.

## Deploy

    vercel deploy --prod

Local test: `node server.js 8787`, then `claude mcp add --transport http bloat http://127.0.0.1:8787/mcp`.

Keep each result under about 50 KB: Claude Code spills larger MCP results to a
file instead of inlining them, which defeats the demo.

MIT licensed.
