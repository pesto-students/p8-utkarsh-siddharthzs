/**
 * generalized memoize function
 * @param {function} fn
 * @returns function
 */
const memoize = (fn) => {
  let cache = new Map();
  let key = arguments.toString();
  return (...arguments) => {
    if (cache.has(key)) return cache[key];
    cache[key] = fn(...arguments);
    return cache[key];
  };
};

/**
 * Add 2 numbers
 * @param {number} a
 * @param {number} b
 * @returns number
 */
const add2 = (a, b) => {
  return a + b;
};
/**
 * Add 4 numbers
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns number
 */
const add4 = (a, b, c, d) => {
  return a + b + c + d;
};
/**
 * adds all the numbers passed
 * @param  {...any} args all number type
 * @returns number
 */
const add = (...args) => {
  return args.reduce((prev, cur) => (prev += cur), 0);
};

const print = (data) => {
  console.time();
  console.log(data);
  console.timeEnd();
};

add2WithMemo = memoize(add2);
add4WithMemo = memoize(add4);
addWithMemo = memoize(add);

console.log("=================");
console.log("AddWithMemo:");
print(addWithMemo(1, 2, 3, 4, 5));
print(addWithMemo(1, 2, 3, 4, 5));
print(addWithMemo(1, 2, 3, 4, 5));

console.log("=================");
console.log("Add2WithMemo:");
print(add2WithMemo(2, 3));
print(add2WithMemo(2, 3));
print(add2WithMemo(2, 3));

console.log("=================");
console.log("Add4WithMemo:");
print(add4WithMemo(2, 3, 4, 5));
print(add4WithMemo(2, 3, 4, 5));
print(add4WithMemo(2, 3, 4, 5));
