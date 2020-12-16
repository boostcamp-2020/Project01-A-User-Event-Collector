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
export type WindowEventType =
  | "pagehide"
  | "pageshow"
  | "popstate"
  | "fullscreenchange"
  | "resize"
  | "scroll";

export type EventType = ComponentEventType | WindowEventType;

export interface SimpleEvent {
  event_id: number;
  event_type: EventType;
  once?: boolean;
  description?: string;
  stopPropagation?: boolean;
  activateOn?: (...args: any[]) => boolean;
}

export interface ComplexEvent {
  event_id: number;
  event_type: string;
  once?: boolean;
  description?: string;
  timer: number;
  sequence: string[];
}
