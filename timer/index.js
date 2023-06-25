const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');

const circumference = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', circumference);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (circumference * timeRemaining) / duration - circumference
    );
  },
  onComplete() {
    console.log('timer complete');
  },
});
