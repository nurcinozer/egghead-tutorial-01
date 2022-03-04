// TypeScript lets us define array types as read-only so that we get a type error if we attempt to add, remove, or replace any elements of the array. We can use the readonly keyword to make an array type read-only. Alternatively, we can use the ReadonlyArray<T> type instead of Array<T> or T[].

function intersperse<T>(array: readonly T[], separator: T): T[] {
  const newArray: T[] = [];
  for (const element of array) {
    if (newArray.length !== 0) {
      newArray.push(separator);
    }
    newArray.push(element);
  }
  return newArray;
}

const values: readonly string[] = ["A", "B", "C"];
const valuesWithSeparators = intersperse(values, "X");

console.log(values);
console.log(valuesWithSeparators);
