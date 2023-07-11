// Install plugin 
// import Vue from 'vue'
// // import Fitty from './Fitty.vue'
// import Fitty from 'vue-fitty' 
// Vue.use(Fitty)

import fitty from 'fitty'


// import $ from 'jquery'

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
      timerStatus: 'config',
      timerSecond: -1,
      countdownTimer: null,
      startTimer: null,
      resetStatus: 'false',
      resetTimer: null,

      holdTimer: 1000,
      restartStatus: 'false',

      audioLevelUp: new Audio('./assets/audios/correct-6033.mp3'),
      audioBeep: new Audio('./assets/audios/beep-sound-8333.mp3'),
      audioFinalCountdown: new Audio('./assets/audios/countdown-3-96619.mp3'),
      audioFinish: new Audio('./assets/audios/success-1-6297.mp3'),
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    isCountdown () {
      return (this.timerStatus === 'start' || 
      this.timerStatus === 'stop' ||
      this.timerStatus === 'pause')
    },
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
      return Math.floor(this.timerSecond / 60)
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
      return this.timerSecond % 60
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

    isTimeToPlaySound () {
      if (this.timerSecond >= 300) {
        return (this.timerSecond % 300 === 0)
      }
      else if (this.timerSecond >= 60) {
        return (this.timerSecond % 60 === 0)
      }
      else if (this.timerSecond <= 5 && this.timerSecond > 0) {
        return true
      }
      else if (this.timerSecond === 30) {
        return true
      }
      return false
    }
    
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

    setTimeout(() => {
      // // console.log(fitty)
      // this.$refs.fitty.forEach(el => {
      //   fitty(el)
      // })
      fitty(this.$refs.fitty)
      fitty(this.$refs.fittyUp)
      fitty(this.$refs.fittyDown)
      fitty(this.$refs.fittyMessage)
      fitty(this.$refs.fittyMessagePause)
      fitty(this.$refs.fittyStop)
      fitty(this.$refs.fittyStopMessage)
      fitty(this.$refs.fittyAudio)

      fitty.fitAll()
    }, 1000)
  },
  methods: {
    plusAttr (attr, min = 0, max = 9, interval = 1) {
      if (this.isCountdown) {
        return false
      }
      this.db.localConfig[attr] = this.db.localConfig[attr] + interval
      if (this.db.localConfig[attr] > max) {
        this.db.localConfig[attr] = (this.db.localConfig[attr] - max - 1)
      }
      this.timerStatus = 'config'
    },
    minusAttr (attr, min = 0, max = 9, interval = 1) {
      if (this.isCountdown) {
        return false
      }
      this.db.localConfig[attr] = this.db.localConfig[attr] - interval
      if (this.db.localConfig[attr] < min) {
        this.db.localConfig[attr] = max - (min - this[attr] - 1)
      }
      this.timerStatus = 'config'
    },
    readyToStart (event) {
      if (event.which !== 1) {
        return false
      }

      if (this.timerStatus !== 'config') {
        return false
      }

      this.timerStatus = 'hold'
      clearTimeout(this.startTimer)
      this.startTimer = setTimeout(() => {
        if (this.timerStatus !== 'hold') {
          return false
        }
        this.timerStatus = 'start'
        this.startCountdown()
      }, this.holdTimer)
      // console.log('start')
    },
    cancelToStart () {
      if (this.timerStatus === 'hold') {
        this.timerStatus = 'config'
      }
    },
    startCountdown () {
      this.timerSecond = this.db.localConfig.sec2 + 
        (this.db.localConfig.sec1 * 10) +
        (this.db.localConfig.min2 * 60) +
        (this.db.localConfig.min1 * 600)

      this.startCountdownInterval()
    },
    startCountdownInterval () {
      if (this.db.localConfig.soundEnable) {
        this.audioBeep.play()
      }
      clearInterval(this.countdownTimer)
      this.countdownTimer = setInterval(() => {
        this.timerSecond--
        this.playTickSoundEffect()

        if (this.timerSecond === 0) {
          clearInterval(this.countdownTimer)

          if (this.db.localConfig.soundEnable) {
            this.audioFinish.play()
          }
          setTimeout(() => {
            this.timerStatus = 'stop'
            this.restartStatus = 'wait'

            setTimeout(() => {
              this.restart()
            }, 10000)
          }, 100)
        }
      }, 1000)
    },
    playTickSoundEffect () {
      if (!this.isTimeToPlaySound) {
        return false
      }

      if (!this.db.localConfig.soundEnable) {
        return false
      }

      if (this.timerSecond >= 30) {
        this.audioLevelUp.play()
      }
      else {
        this.audioFinalCountdown.pause()
        this.audioFinalCountdown.currentTime = 0
        this.audioFinalCountdown.play()
      }
    },
    pauseOrContinue () {
      if (!this.isCountdown) {
        return false
      }

      if (this.timerStatus === 'start') {
        this.timerStatus = 'pause'
        if (this.db.localConfig.soundEnable) {
          this.audioBeep.play()
        }
        clearInterval(this.countdownTimer)
      }
      else if (this.timerStatus === 'pause') {
        this.timerStatus = 'start'
        this.startCountdownInterval()
      }
    },
    readyToReset (event) {
      if (event.which !== 1) {
        return false
      }
      this.resetStatus = 'hold'
      console.log(this.resetStatus)
      clearTimeout(this.resetTimer)
      this.resetTimer = setTimeout (() => {
        // console.log('gogogo?')
        if (this.resetStatus !== 'hold') {
          return false
        }
        this.timerStatus = 'config'
        if (this.db.localConfig.soundEnable) {
          this.audioBeep.play()
        }
      }, this.holdTimer)
    },
    cancelToReset () {
      if (this.resetStatus !== 'hold') {
        return false
      }
      this.resetStatus = 'false'
      clearTimeout(this.resetTimer)
    },
    restart () {
      if (this.restartStatus !== 'wait') {
        return false
      }
      this.restartStatus = 'fadeout'
      this.timerStatus = 'config'
      // console.log(this.restartStatus)
      if (this.db.localConfig.soundEnable) {
        this.audioBeep.play()
      }
      setTimeout(() => {
        this.restartStatus = 'false'
      }, 500)
    }
  }
}

export default app