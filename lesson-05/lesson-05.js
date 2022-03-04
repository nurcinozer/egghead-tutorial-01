// In this lesson, we're going to look at how to perform null checks with assertion functions. We're going to assert that a nullable value doesn't hold the value null. In the process, we're going to learn how assertion functions integrate with TypeScript's control flow analysis.
function assertIsNonNullish(value, message) {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
var root = document.getElementById("root");
assertIsNonNullish(root, "Couldn't find DOM element #root");
root.addEventListener("click", function (e) {
    // ...
});
