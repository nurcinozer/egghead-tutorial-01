// This lesson introduces assertion functions which let us narrow the type of a variable or property for the remainder of the containing scope. We're going to learn how to create an assertion function by using the asserts keyword in the function signature. In particular, we're going to focus on narrowing the unknown type to a more specific type.
function assertIsNumber(value, name) {
    if (typeof value !== "number") {
        throw Error("Expected \"".concat(name, "\" to be a number"));
    }
}
function range(from, to) {
    assertIsNumber(from, "from");
    assertIsNumber(to, "to");
    var values = [];
    for (var i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(range("A", "F"));
