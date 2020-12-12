"use strict";
// /* eslint-disable lines-between-class-members */
// import { SimpleEvent, ComplexEvent } from "./interface";
exports.__esModule = true;
// class SequenceEvent {
//   processSequence: string[];
//   originSequence: string[];
//   timer: number;
//   onProcess: boolean;
//   dispatch: Function;
//   eventObejct: ComplexEvent;
//   constructor(eventObject: ComplexEvent, dispatch: Function) {
//     this.eventObejct = eventObject;
//     this.originSequence = eventObject.sequence.slice();
//     this.processSequence = eventObject.sequence.slice();
//     this.timer = eventObject.timer;
//     this.onProcess = false;
//     this.dispatch = dispatch;
//   }
//   init(): void {
//     this.processSequence = this.originSequence;
//   }
//   notify(identifier: string): void {
//     if (this.processSequence[0] === identifier) {
//       this.processSequence.shift();
//       if (!this.onProcess) {
//         this.onProcess = true;
//         setTimeout(() => {
//           if (this.processSequence.length === 0) {
//             this.dispatch(this.eventObejct);
//             this.init();
//           } else {
//             this.init();
//           }
//         }, this.timer);
//       }
//     }
//   }
// }
// export default SequenceEvent;
var test = setTimeout(function () { return console.log("asd"); }, 1000);
console.log(test);
exports["default"] = test;
