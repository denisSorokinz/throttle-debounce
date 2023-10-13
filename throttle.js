// TASK:
// create throttle function that
// accepts ms and fn
// and calls fn maximum every ms period

const throttle = (ms, fn) => {
  let timer = null;
  return (...args) => {
      if(timer) return;

      timer = setTimeout(() => {
          timer = null;
      }, ms)

      return fn(...args);
  }
}
