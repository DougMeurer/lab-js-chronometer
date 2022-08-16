class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
        // the below is to safeguard the code in case no value is passed. by doing so your method exists and returs true.
      if (printTimeCallback) {
        printTimeCallback()
      }
  },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value
    } else {
      return String(value);
    }
  }

  stop() {
    return clearInterval(this.intervalId)
    
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
  }
}
