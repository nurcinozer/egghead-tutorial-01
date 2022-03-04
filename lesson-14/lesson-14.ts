// In this lesson, we're going to learn how we can use const assertions to implement an enum-style object in TypeScript. We generally don't want widening of any literal types in this object, so we can use a const assertion. We're also going to compare our enum-style object to a native TypeScript enum.

// const HTTPRequestMethod = {
//   GET: "GET",
//   POST: "POST",
// };

const HTTPRequestMethod = {
  GET: "GET",
  POST: "POST",
} as const;

type ValuesOf<T> = T[keyof T];
type HTTPRequestMethodType = ValuesOf<typeof HTTPRequestMethod>;

// async function fetchJSON(url: string, method: "GET" | "POST") {
async function fetchJSON(url: string, method: HTTPRequestMethodType) {
  const response = await fetch(url, { method });
  return response.json();
}

fetchJSON("https://example.com/", HTTPRequestMethod.GET).then((data) => {
  // ...
});
