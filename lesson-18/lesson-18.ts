// In this final lesson, we're going to dive deep into a more complex example in which we combine mapped types, key remapping, template literal types, and indexed access types to statically type a highly dynamic JavaScript function in TypeScript.

function createGetterObject<TObj extends Record<string, unknown>>(
  obj: TObj
): PropGetters<TObj> {
  const newObj: any = {};
  for (const key of Object.keys(obj)) {
    const capitalizedKey = key[0].toUpperCase() + key.substr(1);
    const getterKey = `get${capitalizedKey}`;
    newObj[getterKey] = () => obj[key];
  }
  return newObj;
}

type PropGetters<TObj extends Record<string, unknown>> = {
  [TKey in string & keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

const user = createGetterObject({
  name: "Nurçin Özer",
  twitter: "nurcinozer",
});

console.log(user);
console.log(user.getName());
console.log(user.getTwitter());
