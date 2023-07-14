let appName = 'PWA-Countdown-Fullscreen'

let config = {
  version: '20230708-2332',

  view: 'main',
  resetLocalConfigHour: 0.5,

  voteURL: `https://script.google.com/macros/s/AKfycbzuGriN3krNlVJc2C3_sk1-QCypHW9hPDZwJKMStZtC4Ge9GTBb-48qiv82J1-HSw-E/exec`,

  timerStatus: 'config',
  timerSecond: -1,
  resetStatus: 'false',

  holdTimer: 1000,
  restartStatus: 'false',

  audioLevelUp: new Audio('./assets/audios/correct-6033.mp3'),
  audioBeep: new Audio('./assets/audios/beep-sound-8333.mp3'),
  audioFinalCountdown: new Audio('./assets/audios/countdown-3-96619.mp3'),
  audioFinish: new Audio('./assets/audios/success-1-6297.mp3'),
}

// ----------------------------------------------------------------

let configEnv = {
  appName,
  appNameID: appName,
  debug: {
    ErrorHandler: {
      verbose: true
    },
    enableRestore: true,
  },
  
  inited: false,
  urlGithub: `https://github.com/pulipulichen/${appName}/`,
  urlIssue: `https://github.com/pulipulichen/${appName}/issues/new`,
  
}

for (let name in configEnv) {
  config[name] = configEnv[name]
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config