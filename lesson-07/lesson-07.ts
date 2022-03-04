// This lesson introduces private class fields which (unlike regular class fields) cannot be examined or modified outside of the class they're defined in. We're going to contrast private class fields with TypeScript's private modifier and public class fields.

// We're also going to take a look at the JavaScript code that the TypeScript compiler emits when downlevel-compiling private class fields. Note that this code requires that the JavaScript runtime implement the WeakMap data structure (introduced as part of ES2015). Finally, we're going to learn how we can use closures to get true privacy guarantees in older runtime environments that do not implement WeakMap.

class Counter {
    #count = 0;
  
    increment() {
      this.#count += 1;
    }
  
    get count() {
      return this.#count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.increment();

  // counter.#count = -100;
  
  console.log(counter.count);