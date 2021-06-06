const shouldPass = () => Math.random < 0.5;
const obj = { a: { b: 1 } };
const fn1 = (a, b) => a + b;
const arr = [1, 2, 3];

const one = () => {
  return shouldPass ? 'pass' : 'fail';
};

const two = () => {
  return shouldPass && 'pass';
};

const three = () => {
  return shouldPass || 'fail';
};

const four = () => {
  return [obj?.a?.b, obj?.a?.b?.c];
};

const five = () => () => () => 1;

const negative = [NaN, null, undefined, '', 0, false].map(Boolean);
const positive = [[], {}, 'abc', 123, true].map(Boolean);

void (function () {
  return 1;
})();

fn1(...arr);
[...arr, 1];
const [x, y, z] = arr;
const {
  xx: { zz },
} = { xx: { zz: 1 } };

const fn2 = ({ x }) => {
  return x;
};
