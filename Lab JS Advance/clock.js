//8.a Create a new class PrecisionClock that inherits from DigitalClock and adds the
//parameter precision – the number of ms between 'ticks'. This precision parameter
//should default to 1 second if not supplied.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

const myClock = new DigitalClock("my clock:");
myClock.start();
//8a. Create a new class PrecisionClock that inherits from DigitalClock and adds the
//parameter precision – the number of ms between 'ticks'. This precision parameter
//should default to 1 second if not supplied.
//8b.
class PrecisionClock extends DigitalClock {
  constructor(hours, mins, secs) {
    super(hours, mins, secs);
    this.hours = hours;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs, ms] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (ms < 10) ms = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

const myClock2 = new PrecisionClock("my precision clock:");
myClock2.start();
//8b. Create a new class AlarmClock that inherits from DigitalClock and adds the
//parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
//should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
//default to 07:00 if not supplied.
let x = {
  hours: 20,
  minutes: 0,
};
let y = {
  hours: 7,
  minutes: 0,
};
class AlarmClock extends DigitalClock {
  constructor(hours, mins, secs) {
    super(hours, mins, secs);
    this.hours = hours;
  }
  display() {
    let date = new Date();
    let [hours, mins, secs, ms] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ];
    let dtAlarm = new Date();
    dtAlarm.setHours(x.hours);
    dtAlarm.setMinutes(x.minutes);
    let dtNow = new Date();
    if (dtAlarm - dtNow > 0) {
      console.log("Set for today");
    } else {
      console.log("Reset Alarm");
      dtAlarm.setDate(dtAlarm.getDate() + 1);
    }
    var diff = dtAlarm - new Date();
    setTimeout(function () {
      console.log("Wake Up");
    }, diff = y);

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    if (ms < 10) ms = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock3 = new AlarmClock("my precision clock:");
myClock3.start();
