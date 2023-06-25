class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    startBtn.addEventListener('click', this.start);
    pauseBtn.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick(); // Immediately run the first tick
    this.intervalId = setInterval(this.tick, 50); // Declares an instance variable 'intervalId' in the Timer instance
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05; // whenever setting a instance var, the value becomes the arg of the func
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // GETTER
  // create an instance variable that returns a value returns from a function
  // the 'get' keyword will automatically invoke the function so no parentheses needed
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // SETTER
  // whatever value is assigned to the setter, becomes the first argument
  // the 'set' keyword will automatically invoke the function so no parentheses needed
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
