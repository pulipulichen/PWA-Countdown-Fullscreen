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
    computedClassName () {
      let className = []
      let percent = this.db.Index.percent
      if (percent >= 50 && percent < 75) {
        className.push('lv1')
      }
      else if (percent >= 75) {
        className.push('lv2')
      }

      if (this.db.Index.isCountdown) {
        className.push('show')
      }

      return className
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app