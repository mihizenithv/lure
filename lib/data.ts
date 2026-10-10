export type WidgetId = "todo" | "today" | "vault" | "finance" | "insight" | "goals";

export type Task = { id: number; title: string; tag: string; due: string; done: boolean; urgent?: boolean };

export const tasks: Task[] = [
  { id: 1, title: "Review quarterly narrative", tag: "WORK", due: "Today", done: false, urgent: true },
  { id: 2, title: "Buy ingredients for ramen", tag: "LIFE", due: "Today", done: false },
  { id: 3, title: "Finish systems thinking chapter", tag: "LEARN", due: "Tomorrow", done: false },
  { id: 4, title: "Send the launch notes", tag: "WORK", due: "Fri", done: true },
];

export const schedule = [
  { time: "09:30", title: "Deep work · narrative", meta: "Focus block · Studio" },
  { time: "12:30", title: "Lunch with Maya", meta: "Personal · Little Lemon" },
  { time: "15:00", title: "Product sync", meta: "Work · Room 2B" },
  { time: "18:30", title: "Spanish class", meta: "Learning · Online" },
];

export const widgetLabels: Record<WidgetId, { name: string; icon: string; accent: string }> = {
  todo: { name: "Todo", icon: "✦", accent: "mint" },
  today: { name: "Today", icon: "◷", accent: "sun" },
  vault: { name: "Vault", icon: "⌘", accent: "lavender" },
  finance: { name: "Finance", icon: "¤", accent: "coral" },
  insight: { name: "Insight", icon: "✧", accent: "gold" },
  goals: { name: "Goals", icon: "◎", accent: "blue" },
};
