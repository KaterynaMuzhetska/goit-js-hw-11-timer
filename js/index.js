class CountdownTimer {
  constructor(countdownObject) {
    this.targetDate = countdownObject.targetDate;
    this.daysRef = document.querySelector(`${countdownObject.selector} span[data-value= days]`);
    this.hoursRef = document.querySelector(`${countdownObject.selector} span[data-value='hours']`);
    this.minsRef = document.querySelector(`${countdownObject.selector} span[data-value='mins']`);
    this.secsRef = document.querySelector(`${countdownObject.selector} span[data-value='secs']`);
    this.start();
  }
  start() {
    setInterval(() => {
      const targetTime = new Date(this.targetDate).getTime();
      const currentTime = Date.now();
      const deltaTime = targetTime - currentTime;
      const time = this.getTimeComponents(deltaTime);
      
      this.updateCountdown(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2,  0 );
  }
  updateCountdown({ days, hours, mins, secs }) {
    this.daysRef.textContent = `${days}`;
    this.hoursRef.textContent = `${hours}`;
    this.minsRef.textContent = `${mins}`;
    this.secsRef.textContent = `${secs}`;
  }
}

new CountdownTimer({
  selector:  '#timer-1' ,
  targetDate: new Date('June, 26, 21'),
});