"use strict";
// This lesson introduces private class fields which (unlike regular class fields) cannot be examined or modified outside of the class they're defined in. We're going to contrast private class fields with TypeScript's private modifier and public class fields.
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Counter_count;
// We're also going to take a look at the JavaScript code that the TypeScript compiler emits when downlevel-compiling private class fields. Note that this code requires that the JavaScript runtime implement the WeakMap data structure (introduced as part of ES2015). Finally, we're going to learn how we can use closures to get true privacy guarantees in older runtime environments that do not implement WeakMap.
class Counter {
    constructor() {
        _Counter_count.set(this, 0);
    }
    increment() {
        __classPrivateFieldSet(this, _Counter_count, __classPrivateFieldGet(this, _Counter_count, "f") + 1, "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _Counter_count, "f");
    }
}
_Counter_count = new WeakMap();
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);
