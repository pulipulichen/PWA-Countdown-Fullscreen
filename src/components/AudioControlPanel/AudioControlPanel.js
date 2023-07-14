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
  },
  computed: {
    isHidden () {
      let timerStatus = this.db.config.timerStatus
      return (timerStatus !== 'config' && timerStatus !== 'hold' && timerStatus !== 'pause')
    }
  },
  mounted() {
    this.initFitty()
  },
  methods: {
    initFitty () {
      setTimeout(() => {
        fitty(this.$refs.fittyAudio)
  
        fitty.fitAll()
      }, 1000)
    },
    toggleSoundEnable () {
      this.db.localConfig.soundEnable = !this.db.localConfig.soundEnable

      if (this.db.localConfig.soundEnable) {
        this.db.config.audioBeep.play()
      }
    }
  }
}

export default app