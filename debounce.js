/*
deboncedCb(arg) -> called
deboncedCb(arg) -> called after 300 ms
wait 300ms
deboncedCb(arg) -> called

deboncedCb(arg) -> called
deboncedCb(arg) -> called after 300 ms
deboncedCb(arg) -> called after 300 ms
*/

const debounce = (delay, fn) => {
  let timeout = null;
  let callCbOnTimeoutEnd = false;
  let flag = false;

  return (...args) => {
    callCbOnTimeoutEnd = !!timeout || flag;
    if (!timeout && !flag) {
      fn(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (callCbOnTimeoutEnd) fn(...args);

      flag = true;
      setTimeout(() => {
        flag = false;
      }, delay);
    }, delay);
  };
};

const cb = (arg1) => console.log(arg1);

const debouncedCb = debounce(3000, cb);
