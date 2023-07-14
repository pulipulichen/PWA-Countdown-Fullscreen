export default function (app) {
  if (!app.methods) {
    app.methods = {}
  }

  app.methods.initAPP = function () {
      
    let preventMotion = function (event) 
    {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }

    window.addEventListener("scroll", preventMotion, false);
    window.addEventListener("touchmove", preventMotion, false);
    

    this.db.utils.PWAUtils.requestWakeLock()
  }

  app.methods.vibrate = function (ms = 200) {
    if (!('vibrate' in navigator)) {
      return false
    } 

    navigator.vibrate(ms)
  }
}