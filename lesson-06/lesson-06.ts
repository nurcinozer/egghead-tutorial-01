// In this lesson, we're going over how to create private class fields using TypeScript's private modifier. However, as we're going to see, the private modifier doesn't give us any actual protection at runtime; it only exists in TypeScript's type system and is completely compiled away when emitting JavaScript code.

class Counter {
    private _value = 0;
  
    increment() {
      this._value += 1;
    }
  
    get count() {
      return this._value;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.increment();
  
  counter["_value"] = -100;
  
  console.log(counter.count);