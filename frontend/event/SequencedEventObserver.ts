import { ComplexEvent } from "./interface";

class SequencedEventObserver {
  eventObejct: ComplexEvent;

  sequence: string[];

  remainingQueue: string[];

  timer: number;

  timerId: number;

  dispatch: Function;

  isTimerRun: boolean;

  constructor(eventObject: ComplexEvent, dispatch: Function) {
    this.eventObejct = eventObject;
    this.sequence = eventObject.sequence.slice();
    this.remainingQueue = eventObject.sequence.slice();

    this.timer = eventObject.timer;
    this.isTimerRun = false;
    this.dispatch = dispatch;
    this.timerId = -1;
  }

  init(): void {
    this.remainingQueue = this.sequence.slice();
    this.isTimerRun = false;
  }

  runTimer(): void {
    const timerId = window.setTimeout(() => {
      if (this.remainingQueue.length <= 0) {
        this.dispatch(this.eventObejct);
      }
      this.init();
    }, this.timer);
    this.timerId = timerId;
  }

  notify(identifier: string): void {
    if (this.remainingQueue[0] === identifier) {
      this.remainingQueue.shift();

      if (!this.isTimerRun) {
        this.isTimerRun = true;
        this.runTimer();
      } else if (this.remainingQueue.length <= 0) {
        clearTimeout(this.timer);
        this.dispatch(this.eventObejct);
        this.init();
      }
    }
  }
}

export default SequencedEventObserver;
