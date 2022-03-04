// 03 - In this lesson, we'll go over TypeScript's unknown type. The unknown type is the type-safe counterpart of the any type. Both unknown and any are so-called top types (also known as universal supertypes) of the type system. This means that every type in TypeScript is assignable to both unknown and any.
// The main difference between the two types is that unknown is much less permissive than any: We have to do some form of checking before performing most operations on values of type unknown, whereas we don't have to do any checks before performing operations on values of type any.
// Another difference is that any is assignable to every type, whereas unknown is only assignable to any and unknown itself. To assign unknown to any other types, we have to narrow it to a more specific type first.
// function range(from: number, to: number): number[];
function range(from, to) {
    if (typeof from !== "number" || typeof to !== "number") {
        throw Error("range() expects exactly 2 numbers");
    }
    var values = [];
    for (var i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(range(0, 5));
