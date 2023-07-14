export default function (app) {
  if (!app.computed) {
    app.computed = {}
  }

  app.computed.configTimerSecond = function () {
    return this.db.localConfig.sec2 + 
      (this.db.localConfig.sec1 * 10) +
      (this.db.localConfig.min2 * 60) +
      (this.db.localConfig.min1 * 600)
  }

  app.computed.isCountdown = function () {
    return (this.db.config.timerStatus === 'start' || 
    this.db.config.timerStatus === 'stop' ||
    this.db.config.timerStatus === 'pause')
  }

  app.computed.isTimeToPlaySound = function () {
    let timerSecond = this.db.config.timerSecond
    if (timerSecond >= 300) {
      return (timerSecond % 300 === 0)
    }
    else if (timerSecond >= 60) {
      return (timerSecond % 60 === 0)
    }
    else if (timerSecond <= 5 && timerSecond > 0) {
      return true
    }
    else if (timerSecond === 30) {
      return true
    }
    return false
  }

  app.computed.percent = function () {
    
    let percent = 1 - (this.db.config.timerSecond / this.configTimerSecond)
    
    percent = Math.floor(percent * 100)

    // percent = 50

    if (percent > 100) {
      percent = 100
    }

    // console.log(percent)
    if (isNaN(percent)) {
      percent = 0
    }

    return percent
  }

  app.computed.progressLV = function () {
    let percent = this.percent
    if (percent >= 50 && percent < 75) {
      return 'lv1'
    }
    else if (percent >= 75) {
      return 'lv2'
    }
  }

  app.computed.isLV1Time = function () {
    if (!this.isTimeToPlaySound) {
      return false
    }
    return (this.progressLV === 'lv1')
  }

  app.computed.isLV2Time = function () {
    if (!this.isTimeToPlaySound) {
      return false
    }
    return (this.progressLV === 'lv2')
  }
}