// 度量时间复杂度，比较起始-结束时间
var test = function (fn, ...args) {
  var start, end, duration, res
  start = window.performance.now()

  if (fn) res = fn.apply(null, args)

  end = window.performance.now()
  duration = end - start
  console.log(`fn ----- ${fn.name}`)
  console.log(`res ----- ${res}`)
  console.log(`duration ----- ${duration}ms`);
  console.log(``);
  // return duration;
}