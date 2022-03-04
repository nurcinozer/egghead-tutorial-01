// Closures are an alternative to truly private class fields. If you need to encapsulate a private variable so that it can only be accessed in a controlled way, you can use a closure. This technique is particularly useful when your code has to run in older JavaScript environments that don't yet support truly private class fields or the ES2015 WeakMap data structure.

function createCounter() {
  let value = 0;
  return {
    increment() {
      value += 1;
    },
    get count() {
      return value;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();

console.log(counter.count);
