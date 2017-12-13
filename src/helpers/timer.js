'use strict';

export default class Timer {
  constructor() {
    this.startTime = window.performance.now();
  }

  getTimeElapsed() {
  	return window.performance.now() - this.startTime;
  }
}
