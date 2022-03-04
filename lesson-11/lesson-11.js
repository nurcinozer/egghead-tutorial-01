"use strict";
// Similar to how we can declare read-only array types, we can declare read-only tuple types using the readonly modifier. Any attempt to mutate a value of a read-only tuple type will result in a type error.
function swap(tuple) {
    const [first, second] = tuple;
    return [second, first];
}
const keyValuePair = [1, "one"];
const valueKeyPair = swap(keyValuePair);
console.log(keyValuePair);
console.log(valueKeyPair);
