const tap = require('tap');
const isAsyncFunction = require('../src');

tap.test('Should return true', (t) => {
  t.ok(isAsyncFunction(async () => {}));
  t.end();
});

tap.test('Should return false', (t) => {
  t.notOk(isAsyncFunction(() => {}));
  t.notOk(isAsyncFunction(1));
  t.notOk(isAsyncFunction('1'));
  t.notOk(isAsyncFunction(undefined));
  t.notOk(isAsyncFunction(null));
  t.end();
});
