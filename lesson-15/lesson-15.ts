// In this lesson, we're going to learn about conditional types, a powerful feature of TypeScript's type system. Conditional types let us express non-uniform type mappings, that is, type transformations that differ depending on a condition.

// A conditional type describes a type relationship test and selects one of two possible types, depending on the outcome of that test. It always has the form T extends U ? X : Y, which makes conditional types look similar to conditional expressions in JavaScript.

// We're going to use a conditional type to implement a NonNullish<T> helper type. This type is identical to the NonNullable<T> helper type which is defined in the core type declaration files that ship with the TypeScript compiler. Step by step, we're going to resolve an application of the NonNullish<T> type to understand how conditional types are being evaluated.

type NonNullish<T> = T extends null | undefined ? never : T;

type A = NonNullish<string>;
type B = NonNullish<string | null>;
type C = NonNullish<string | null | undefined>;
type D = NonNullish<null>;
type E = NonNullish<undefined>;

// =============================================================================

type EmailAddress = string | string[] | null | undefined;

type NonNullableEmailAddress = NonNullable<EmailAddress>;

type NonNullableEmailAddress1 = NonNullable<
  string | string[] | null | undefined
>;

type NonNullableEmailAddress2 =
  | NonNullable<string>
  | NonNullable<string[]>
  | NonNullable<null>
  | NonNullable<undefined>;

type NonNullableEmailAddress3 =
  | (string extends null | undefined ? never : string)
  | (string[] extends null | undefined ? never : string[])
  | (null extends null | undefined ? never : null)
  | (undefined extends null | undefined ? never : undefined);

type NonNullableEmailAddress4 = string | string[] | never | never;

type NonNullableEmailAddress5 = string | string[];
