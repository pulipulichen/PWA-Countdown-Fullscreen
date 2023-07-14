import fitty from 'fitty'

let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
    'db.config.timerStatus' () {
      if (this.db.config.timerStatus === 'stop') {
        setTimeout(() => {
          this.restart()
        }, 10000)
      }
    }
  },
  computed: {
    computedClassName () {
      let className = []

      if (this.db.config.restartStatus === 'false') {
        className.push('hide')
      }

      if (this.db.config.restartStatus === 'fadeout') {
        className.push('fadeout')
      }

      return className
    }
  },
  mounted() {
    this.initFitty()
  },
  methods: {
    initFitty () {
      setTimeout(() => {
        fitty(this.$refs.fittyStop)
        fitty(this.$refs.fittyStopMessage)
        // fitty(this.$refs.fittyAudio)
  
        fitty.fitAll()
      }, 1000)
    },
    restart () {
      if (this.db.config.restartStatus !== 'wait') {
        return false
      }
      this.db.config.restartStatus = 'fadeout'
      this.db.config.timerStatus = 'config'
      // console.log(this.restartStatus)
      if (this.db.localConfig.soundEnable) {
        this.db.config.audioBeep.play()
      }
      setTimeout(() => {
        this.db.config.restartStatus = 'false'
      }, 500)
    },
  }
}

export default app