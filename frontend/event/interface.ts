export type ComponentEventType =
  | "click"
  | "dblclick"
  | "mouseover"
  | "mousemove"
  | "mousedown"
  | "mouseup"
  | "mouseout"
  | "reset"
  | "submit"
  | "dragstart"
  | "drag"
  | "dragend"
  | "dragenter"
  | "dragover"
  | "dragleave"
  | "drop";

export type EventType = ComponentEventType;

export interface SimpleEvent {
  event_id: number;
  event_type: EventType[];
  description?: string;
  stopPropagation?: boolean;
}

export interface ComplexEvent {
  event_id: number;
  description?: string;
  timer: number;
  sequence: string[];
}

export interface EventObject {
  simple?: { [identifier: string]: SimpleEvent };
  complex?: { [identifier: string]: ComplexEvent };
}
