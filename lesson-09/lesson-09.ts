class User {
  // If we enable --strictPropertyInitialization, the type checker raises an error:  
  // Type error: Property 'username' has no initializer
  // and is not definitely assigned in the constructor
  username: string | undefined; // One way to make the type error go away is to give the username property a type that includes undefined:
}

const user = new User();

// Without the --strictPropertyInitialization flag enabled,
// TypeError: Cannot read property 'toLowerCase' of undefined
const username = user.username?.toLowerCase() ?? "n/a";

// The reason for the runtime error is that the username property holds the value undefined because there's no assignment to that property. Therefore, the call to the toLowerCase() method fails.
