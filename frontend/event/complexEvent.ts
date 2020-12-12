/* eslint-disable lines-between-class-members */
import { SimpleEvent, ComplexEvent } from "./interface";

class SequenceEvent {
  processSequence: string[];
  originSequence: string[];
  timer: number;
  onProcess: boolean;
  dispatch: Function;
  eventObejct: ComplexEvent;
  timerId: number;

  constructor(eventObject: ComplexEvent, dispatch: Function) {
    this.eventObejct = eventObject;
    this.originSequence = eventObject.sequence.slice();
    this.processSequence = eventObject.sequence.slice();

    this.timer = eventObject.timer;
    this.onProcess = false;
    this.dispatch = dispatch;
    this.timerId = -1;
  }

  init(): void {
    this.processSequence = this.originSequence.slice();
    this.onProcess = false;
  }

  runTimer(): void {
    const timerId = window.setTimeout(() => {
      if (this.processSequence.length <= 0) {
        this.dispatch(this.eventObejct);
      }
      this.init();
    }, this.timer);
    this.timerId = timerId;
  }

  notify(identifier: string): void {
    if (this.processSequence[0] === identifier) {
      this.processSequence.shift();

      if (!this.onProcess) {
        this.onProcess = true;
        this.runTimer();
      } else if (this.processSequence.length <= 0) {
        clearTimeout(this.timer);
        this.dispatch(this.eventObejct);
        this.init();
      }
    }
  }
}

export default SequenceEvent;
