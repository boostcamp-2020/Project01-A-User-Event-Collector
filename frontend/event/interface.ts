export type EventType = "click" | "mouseover";

export interface SimpleEvent {
  className: string;
  event_id: number;
  event_type: EventType;
  once?: boolean;
  description?: string;
}
