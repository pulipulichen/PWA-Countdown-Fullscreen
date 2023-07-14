/* global Node */
// import mainVisual from './main.gif'

let Index = {
  props: ['db', 'view', 'search'],
  components: {
    // ConfigurationPanel: () => import(/* webpackChunkName: "components/ConfigurationPanel" */ './ConfigurationPanel/ConfigurationPanel.vue'),
    // ConfigurationToggleButton: () => import(/* webpackChunkName: "components/ConfigurationToggleButton" */ './ConfigurationToggleButton/ConfigurationToggleButton.vue'),
    // WebcamVideo: () => import(/* webpackChunkName: "components/WebcamVideo" */ './WebcamVideo/WebcamVideo.vue'),
    // VotePanel: () => import(/* webpackChunkName: "components/VotePanel" */ './VotePanel/VotePanel.vue'),
    DigitTimer: () => import(/* webpackChunkName: "components/DigitTimer" */ './DigitTimer/DigitTimer.vue'),
    AudioControlPanel: () => import(/* webpackChunkName: "components/AudioControlPanel" */ './AudioControlPanel/AudioControlPanel.vue'),
    StopPanel: () => import(/* webpackChunkName: "components/StopPanel" */ './StopPanel/StopPanel.vue'),
    MessagePanel: () => import(/* webpackChunkName: "components/MessagePanel" */ './MessagePanel/MessagePanel.vue'),
    ProgressPanel: () => import(/* webpackChunkName: "components/ProgressPanel" */ './ProgressPanel/ProgressPanel.vue'),
  },
  data() {
    this.$i18n.locale = this.db.config.localConfig
    return {
      // mainVisual
      // viewList: ['todo', 'completed'],
      // mainGif
    }
  },
  computed: {
    isInIframe () {
      try {
        if (window.self !== window.top) {
          return false
        }
      } catch (e) {
        return true
      }
    },
  },
  watch: {
    'db.config.inited'(inited) {
      if (inited === false) {
        return false
      }
    },
    'view' (view) {
      this.db.config.view = view
    },
    'search' (search) {
      if (!search) {
        search = ''
      }
      this.db.config.search = search
    },
    'db.config.view' () {
      this.pushRouter()
    },
    'db.config.search' () {
      this.pushRouter()
    },
  },
  mounted() {
    if (this.view) {
      this.db.config.view = this.view
    }
    if (this.search) {
      this.db.config.search = this.search
    }

    this.initFileSystem()
    this.db.Index = this
    // this.initTaskUtils()
  },
  methods: {

    pushRouter: async function () {
      this.db.config.showConfiguration = false
      this.db.config.focusedTask = false
      await this.$router.replace(`/${this.db.config.view}/${this.db.config.search}`, () => {}, () => {})
    },

    
    initFileSystem: async function () {
      await this.db.utils.FileSystemUtils.init(this.db.config.appNameID)
    },

    // toggleFullScreen() {
    //   if (!document.fullscreenElement) {
    //     if (document.documentElement.requestFullscreen) {
    //       document.documentElement.requestFullscreen();
    //     } else if (document.documentElement.mozRequestFullScreen) {
    //       document.documentElement.mozRequestFullScreen();
    //     } else if (document.documentElement.webkitRequestFullscreen) {
    //       document.documentElement.webkitRequestFullscreen();
    //     } else if (document.documentElement.msRequestFullscreen) {
    //       document.documentElement.msRequestFullscreen();
    //     }
    //   } else {
    //     if (document.exitFullscreen) {
    //       document.exitFullscreen();
    //     } else if (document.mozCancelFullScreen) {
    //       document.mozCancelFullScreen();
    //     } else if (document.webkitExitFullscreen) {
    //       document.webkitExitFullscreen();
    //     } else if (document.msExitFullscreen) {
    //       document.msExitFullscreen();
    //     }
    //   }
    // }
    
  }
}

import IndexMethodsPWA from './IndexMethodsPWA.js'
IndexMethodsPWA(Index)

import IndexComputed from './IndexComputed.js'
IndexComputed(Index)

export default Index