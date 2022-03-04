// In this lesson, we're going to write another conditional type. This time, we'll implement a ReturnTypeOf<T> helper type which lets us extract the return type of a function type. This type is identical to the ReturnType<T> helper type that's defined in the core type declaration files that ship with the TypeScript compiler.

type ReturnTypeOf<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type A = ReturnTypeOf<() => string>;
type B = ReturnTypeOf<typeof Math.random>;
type C = ReturnTypeOf<typeof Array.isArray>;
// type D = ReturnTypeOf<string>;

console.log();
