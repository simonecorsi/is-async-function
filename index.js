module.exports = (fn) => {
  if (typeof fn !== 'function') return false;
  return fn[Symbol.toStringTag] === 'AsyncFunction';
};
