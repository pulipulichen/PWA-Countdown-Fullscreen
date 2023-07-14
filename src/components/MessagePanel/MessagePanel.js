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
    isCountdown () {
      return this.$parent.isCountdown
    },
  },
  mounted() {
    this.initFitty()
  },
  methods: {
    initFitty () {
      setTimeout(() => {
        fitty(this.$refs.fittyMessage)
        fitty(this.$refs.fittyMessagePause)
        fitty.fitAll()
      }, 1000)
    },
  }
}

export default app