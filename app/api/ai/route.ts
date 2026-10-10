import { NextResponse } from "next/server";
import { langflowAgents } from "@/lib/ai/agents";

export async function POST(request: Request) {
  let body: { message?: unknown };
  try {
    body = (await request.json()) as { message?: unknown };
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON" }, { status: 400 });
  }
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return NextResponse.json({ error: "Message is required" }, { status: 400 });
  const ollamaUrl = process.env.OLLAMA_BASE_URL ?? "http://127.0.0.1:11434";
  const model = process.env.OLLAMA_MODEL ?? "llama3.2";
  try {
    const ollamaResponse = await fetch(`${ollamaUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(process.env.OLLAMA_API_KEY ? { Authorization: `Bearer ${process.env.OLLAMA_API_KEY}` } : {}) },
      body: JSON.stringify({ model, stream: false, messages: [{ role: "system", content: "You are Lure, a concise personal operating system assistant. Give practical, warm advice. Do not claim to modify data unless asked." }, { role: "user", content: message }] }),
      signal: AbortSignal.timeout(15000),
    });
    if (!ollamaResponse.ok) throw new Error(`Ollama returned ${ollamaResponse.status}`);
    const result = (await ollamaResponse.json()) as { message?: { content?: string } };
    return NextResponse.json({ agent: "orchestrator", routedThrough: langflowAgents.map((agent) => agent.name), provider: "ollama", reply: result.message?.content ?? "Ollama returned an empty response." });
  } catch {
    return NextResponse.json({ agent: "orchestrator", routedThrough: langflowAgents.map((agent) => agent.name), provider: "local-fallback", reply: `I’m ready to help with “${message}”. Start Ollama locally and make sure the selected model is available for live answers.` });
  }
}
