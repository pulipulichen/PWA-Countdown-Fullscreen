// Install plugin 
// import Vue from 'vue'
// // import Fitty from './Fitty.vue'
// import Fitty from 'vue-fitty' 
// Vue.use(Fitty)

import fitty from 'fitty'


let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      // min1: 0,
      // min2: 2,
      // sec1: 0,
      // sec2: 0
      
      countdownTimer: null,
      startTimer: null,
      resetTimer: null,
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    computedClassName () {
      let className = []

      if (!this.isCountdown) {
        className.push('config')
      }

      if (this.db.config.timerStatus === 'pause') {
        className.push('pause')
      }

      if (this.db.Index.isLV1Time) {
        className.push('lv1')
      }
      else if (this.db.Index.isLV2Time) {
        className.push('lv2')
      }
      else if (this.db.Index.isTimeToPlaySound) {
        className.push('lv1')
      }

      return className
    },
    isCountdown () {return this.$parent.isCountdown},
    isTimeToPlaySound () {return this.$parent.isTimeToPlaySound},
    min1 () {
      if (this.isCountdown) {
        return this.countdownMin1
      }
      return this.db.localConfig.min1
    },
    min2 () {
      if (this.isCountdown) {
        return this.countdownMin2
      }
      return this.db.localConfig.min2
    },
    sec1 () {
      if (this.isCountdown) {
        return this.countdownSec1
      }
      return this.db.localConfig.sec1
    },
    sec2 () {
      if (this.isCountdown) {
        return this.countdownSec2
      }
      return this.db.localConfig.sec2
    },

    countdownMin () {
      return Math.floor(this.db.config.timerSecond / 60)
    },
    countdownMin1 () {
      if (this.countdownMin < 10) {
        return 0
      }
      return Math.floor(this.countdownMin / 10)
    },
    countdownMin2 () {
      return this.countdownMin % 10
    },
    countdownSec () {
      return this.db.config.timerSecond % 60
    },
    countdownSec1 () {
      if (this.countdownSec < 10) {
        return 0
      }
      return Math.floor(this.countdownSec / 10)
    },
    countdownSec2 () {
      return this.countdownSec % 10
    },

    
    
  },
  mounted() {
    // setTimeout(() => {
    //   // window.dispatchEvent(new Event('resize'))
    //   // this.$refs.fitty.fit()
    //   // this.sec2v = 6
    //   // console.log($)
    //   console.log(fitty)
    //   fitty.fitAll()
    // }, 1000)
    
    this.$parent.initAPP()
    this.initFitty()
  },
  methods: {
    
    initFitty () {
      setTimeout(() => {
        // // console.log(fitty)
        // this.$refs.fitty.forEach(el => {
        //   fitty(el)
        // })
  
        let fittyElements = document.querySelectorAll('.to-fitty')
        for (let i = 0; i < fittyElements.length; i++) {
          // console.log(this.$refs[fitty[i])
          fitty(fittyElements[i])
        }
        // console.log($)
        // fitty(this.$refs.fitty)
        // fitty(this.$refs.fittyUp)
        // fitty(this.$refs.fittyDown)
        // fitty(this.$refs.fittyMessage)
        // fitty(this.$refs.fittyMessagePause)
        // fitty(this.$refs.fittyStop)
        // fitty(this.$refs.fittyStopMessage)
        // fitty(this.$refs.fittyAudio)
  
        fitty.fitAll()
      }, 1000)
    },
    plusAttr (attr, min = 0, max = 9, interval = 1) {
      if (this.isCountdown) {
        return false
      }
      this.db.localConfig[attr] = this.db.localConfig[attr] + interval
      if (this.db.localConfig[attr] > max) {
        this.db.localConfig[attr] = (this.db.localConfig[attr] - max - 1)
      }
      this.db.config.timerStatus = 'config'
    },
    minusAttr (attr, min = 0, max = 9, interval = 1) {
      if (this.isCountdown) {
        return false
      }
      this.db.localConfig[attr] = this.db.localConfig[attr] - interval
      if (this.db.localConfig[attr] < min) {
        this.db.localConfig[attr] = max - (min - this[attr] - 1)
      }
      this.db.config.timerStatus = 'config'
    },
    readyToStart (event) {
      // console.log(event, event.which, this.timerStatus, this.resetStatus)
      if (event.which !== 1) {
        return false
      }


      if (this.db.config.timerStatus !== 'config') {
        return false
      }

      if (this.db.config.restartStatus !== 'false') {
        return false
      }

      this.db.config.timerStatus = 'hold'
      clearTimeout(this.startTimer)
      this.startTimer = setTimeout(() => {
        if (this.db.config.timerStatus !== 'hold') {
          return false
        }
        this.readyToStartHandler(false)
      }, this.db.config.holdTimer)
      // console.log('start')
    },
    readyToStartHandler (check = true) {
      if (check) {
        if (this.isCountdown) {
          return false
        }

        if (this.db.config.timerStatus !== 'config') {
          return false
        }
        
        if (this.db.config.restartStatus !== 'false') {
          return false
        }
      }

      // console.log('me?', this.timerStatus, this.restartStatus)
      this.db.config.timerStatus = 'start'
      this.startCountdown()
    },
    cancelToStart (event) {
      if (event.which !== 1) {
        return false
      }

      if (this.db.config.timerStatus === 'hold') {
        this.db.config.timerStatus = 'config'
      }
    },
    startCountdown () {
      this.db.config.timerSecond = this.$parent.configTimerSecond

      this.startCountdownInterval()
    },
    startCountdownInterval () {
      if (this.db.localConfig.soundEnable) {
        this.db.config.audioBeep.play()
      }

      this.db.Index.vibrate()
      clearInterval(this.countdownTimer)
      this.countdownTimer = setInterval(() => {
        this.startCountdownIntervalHandler()
      }, 1000)
    },
    startCountdownIntervalHandler () {
      this.db.config.timerSecond--
      this.playTickSoundEffect()

      if (this.db.config.timerSecond === 0) {
        this.countdownIntervalStopHandler()
      }
    },
    countdownIntervalStopHandler () {
      clearInterval(this.countdownTimer)

      if (this.db.localConfig.soundEnable) {
        this.db.config.audioFinish.play()
      }
      setTimeout(() => {
        this.db.config.timerStatus = 'stop'
        this.db.config.restartStatus = 'wait'
      }, 100)
    },
    playTickSoundEffect () {
      if (!this.isTimeToPlaySound) {
        return false
      }

      if (!this.db.localConfig.soundEnable) {
        return false
      }

      if (this.db.config.timerSecond >= 30) {
        this.$parent.vibrate()
        this.db.config.audioLevelUp.play()
      }
      else {
        this.db.config.audioFinalCountdown.pause()
        this.db.config.audioFinalCountdown.currentTime = 0
        this.db.config.audioFinalCountdown.play()
      }

      
    },
    
    pauseOrContinue () {
      if (!this.isCountdown) {
        return false
      }

      if (this.db.config.timerStatus === 'start') {
        this.db.config.timerStatus = 'pause'
        if (this.db.localConfig.soundEnable) {
          this.db.config.audioBeep.play()
        }
        this.$parent.vibrate()
        clearInterval(this.countdownTimer)
      }
      else if (this.db.config.timerStatus === 'pause') {
        this.db.config.timerStatus = 'start'
        this.startCountdownInterval()
      }
    },
    readyToReset (event) {
      if (event.which !== 1) {
        return false
      }
      this.db.config.resetStatus = 'hold'
      // console.log(this.resetStatus)
      clearTimeout(this.resetTimer)
      this.resetTimer = setTimeout (() => {
        // console.log('gogogo?')
        if (this.db.config.resetStatus !== 'hold') {
          return false
        }
        this.readyToResetHandler(false)
      }, this.db.config.holdTimer)
    },
    readyToResetHandler (check = true) {
      if (check) {
        if (this.db.config.timerStatus !== 'pause') {
          return false
        }
      }
        

      this.db.config.timerStatus = 'config'
      if (this.db.localConfig.soundEnable) {
        this.db.config.audioBeep.play()

        // setTimeout(() => {
        //   this.restartStatus = 'false'
        // }, 500)
      }
    },
    cancelToReset () {
      if (this.db.config.resetStatus !== 'hold') {
        return false
      }
      this.db.config.resetStatus = 'false'
      clearTimeout(this.resetTimer)
    },
  }
}

export default app