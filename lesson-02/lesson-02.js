// 02 - This lesson introduces the ?? operator which is known as nullish coalescing. The ?? operator produces the value on the right-hand side if (and only if) the value on the left-hand side is null or undefined, making it a useful operator for providing fallback values.
function serializeJSON(value, options) {
    var _a, _b;
    var indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indent) !== null && _b !== void 0 ? _b : 2;
    return JSON.stringify(value, null, indent);
}
var user02 = {
    name: "Marius Schulz",
    twitter: "mariusschulz"
};
var json02 = serializeJSON(user02, {
    formatting: {
        indent: 4
    }
});
console.log(json02);
