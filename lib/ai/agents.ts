export const langflowAgents = [
  { id: "orchestrator", name: "Orchestrator", role: "Routes requests to the right specialist." },
  { id: "memory", name: "Memory", role: "Vault retrieval with RAG / GraphRAG and personal memory." },
  { id: "execution", name: "Execution", role: "Plans goals, projects and tasks." },
  { id: "state", name: "State", role: "Understands current life and workload state." },
  { id: "reflection", name: "Reflection", role: "Finds patterns and proactive insights." },
] as const;

export type LangflowAgentId = (typeof langflowAgents)[number]["id"];
