export default function currying(fn) {
  return function first(one) {
    return function second(other) {
      return fn(one, other);
    };
  };
}

function curryingExample() {
  function sum(one, other) {
    return one + other;
  }

  const result = currying(sum)(1)(3);

  const addOne = currying(sum)(1);

  const resultOfAddOne = addOne(3);
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
