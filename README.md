# Lure — Personal OS MVP

Lure is a widget-based personal dashboard for tasks, schedule, vault, finance, insights and goals. The first vertical slice is intentionally small and runs as a single Next.js app.

## Run

```bash
npm install
npm run dev
```

For local Ollama answers, copy `.env.example` to `.env.local`, set the model you have installed, and keep the API key server-side. The browser only receives the assistant response.

## Architecture notes

- `lib/data.ts` is the temporary typed data seam. PostgreSQL should replace it as the source of truth when persistence is added.
- `lib/widget-intelligence.ts` contains deterministic ranking rules. Manual pinning and move controls remain user-owned; Langflow can later provide a ranking signal through the same seam.
- `lib/ai/agents.ts` is the single registry for exactly five Langflow agents: Orchestrator, Memory, Execution, State and Reflection.
- `app/api/ai/route.ts` is the intentionally thin app-to-Langflow adapter boundary. It currently returns a local response until a Langflow endpoint is configured.
