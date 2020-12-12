export type EventType = "click" | "mouseover";

export interface SimpleEvent {
  event_id: number;
  event_type: EventType;
  once?: boolean;
  description?: string;
}

export interface ComplexEvent {
  event_id: number;
  event_type: string;
  once?: boolean;
  description?: string;
  timer: number;
  sequence: string[];
}
