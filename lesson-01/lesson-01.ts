// 01 - This lesson introduces the ?. operator which is known as optional chaining. We're going to look at how we can use ?. to safely descend into an object with properties which potentially hold the values null or undefined. We're also going to learn how to access properties with an expression using the ?.[] bracket notation and how to call functions which may not exist using the ?.() syntax.
type SerializationOptions = {
  formatting?: {
    getIndent?: () => number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
  const indent = options?.formatting?.getIndent?.();
  return JSON.stringify(value, null, indent);
}

const user = {
  name: "Marius Schulz",
  twitter: "mariusschulz",
};

const json = serializeJSON(user, {
  formatting: {
    getIndent: () => 2,
  },
});

console.log(json);
