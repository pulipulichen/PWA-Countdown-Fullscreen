// Install plugin 
import Vue from 'vue'
import Fitty from 'vue-fitty' 
Vue.use(Fitty)

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
    min1 () {
      return '0'
    },
    min2 () {
      return '0'
    },
    sec1 () {
      return '0'
    },
    sec2 () {
      return '1'
    },
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app