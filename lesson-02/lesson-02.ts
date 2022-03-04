// 02 - This lesson introduces the ?? operator which is known as nullish coalescing. The ?? operator produces the value on the right-hand side if (and only if) the value on the left-hand side is null or undefined, making it a useful operator for providing fallback values.

// We'll contrast the ?? operator with the || logical OR operator which produces the value on the right-hand side if the value on the left-hand side is any falsy value (such as null, undefined, false, "", 0, …).

type SerializationOptions02 = {
  formatting?: {
    indent?: number;
  };
};

function serializeJSON02(value: any, options?: SerializationOptions02) {
  const indent = options?.formatting?.indent ?? 2;
  return JSON.stringify(value, null, indent);
}

const user02 = {
  name: "Marius Schulz",
  twitter: "mariusschulz",
};

const json02 = serializeJSON02(user02, {
  formatting: {
    indent: 4,
  },
});

console.log(json02);
