const assert = require('assert');
const wasm = require('wasm-bindgen-test');

exports.call_exports = async function() {
  await wasm.async_do_nothing();
  assert.strictEqual(1, await wasm.async_return_1());
  assert.strictEqual(2, await wasm.async_return_2());
  await wasm.async_nothing_again();
  assert.strictEqual(3, await wasm.async_return_3());
  assert.strictEqual(4, await wasm.async_return_4());
  assert.strictEqual(5, (await wasm.async_return_5()).val);
  assert.strictEqual(6, (await wasm.async_return_6()).val);
  assert.strictEqual(7, (await wasm.async_return_7()).val);
  assert.strictEqual(8, (await wasm.async_return_8()).val);
  await assert.rejects(wasm.async_throw(), /async message/);
};
