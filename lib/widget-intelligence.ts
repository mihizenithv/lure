import type { Task, WidgetId } from "./data";

export type WidgetContext = { hour: number; tasks: Task[]; hasEveningEvent: boolean };

export function rankWidgets(baseOrder: WidgetId[], context: WidgetContext, pinned: WidgetId[]): WidgetId[] {
  const urgentTasks = context.tasks.filter((task) => !task.done && (task.urgent || task.due === "Today")).length;
  const scores: Partial<Record<WidgetId, number>> = { todo: urgentTasks * 3, today: context.hasEveningEvent ? 2 : 1, insight: 1, goals: 1 };
  if (context.hour >= 17) scores.insight = 4;
  if (context.hour >= 17) scores.today = 3;
  const sorted = [...baseOrder].sort((a, b) => (scores[b] ?? 0) - (scores[a] ?? 0));
  const pinnedFirst = pinned.filter((id) => sorted.includes(id));
  return [...pinnedFirst, ...sorted.filter((id) => !pinned.includes(id))];
}
