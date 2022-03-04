var _a, _b;
class User {
}
const user = new User();
// Without the --strictPropertyInitialization flag enabled,
// TypeError: Cannot read property 'toLowerCase' of undefined
const username = (_b = (_a = user.username) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "n/a";
// The reason for the runtime error is that the username property holds the value undefined because there's no assignment to that property. Therefore, the call to the toLowerCase() method fails.
