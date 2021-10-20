/**
 * Checks if input parameter is an AsyncFunction
 * @param {(...params) => any | any} fn
 * @returns boolean
 */
function isAsyncFunction(fn) {
  if (typeof fn !== 'function') return false;
  return fn[Symbol.toStringTag] === 'AsyncFunction';
}

module.exports = isAsyncFunction;
