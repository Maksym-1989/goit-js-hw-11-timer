class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.daysRef = document.querySelector(
      `${this.selector} [data-value="days"]`,
    );
    this.hoursRef = document.querySelector(
      `${this.selector} [data-value="hours"]`,
    );
    this.minsRef = document.querySelector(
      `${this.selector} [data-value="mins"]`,
    );
    this.secsRef = document.querySelector(
      `${this.selector} [data-value="secs"]`,
    );
  }

  start() {
    const time = this.targetDate - new Date();
    this.getTimeComponents(time);
    setInterval(() => {
      const time = this.targetDate - new Date();
      this.getTimeComponents(time);
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.textContentAdd(days, hours, mins, secs);
  }

  textContentAdd(days, hours, mins, secs) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 25, 2021'),
});

timer.start();
