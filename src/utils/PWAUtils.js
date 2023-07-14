// The wake lock sentinel.
let wakeLock = null;

export default {
  requestWakeLock: async function () {
    try {
      wakeLock = await navigator.wakeLock.request();
      wakeLock.addEventListener('release', () => {
        // console.log('Screen Wake Lock released:', wakeLock.released);
      });
      // console.log('Screen Wake Lock released:', wakeLock.released);
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  }
}