let localConfig = {
  lastChanged: null,

  min1: 0,
  min2: 2,
  sec1: 0,
  sec2: 0,

  soundEnable: true
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig