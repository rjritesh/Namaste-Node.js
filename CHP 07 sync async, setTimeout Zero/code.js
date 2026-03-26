console.log("Hello world");
var a = 1078698;
var b = 20986;

// Runs immediately when the call stack of the main thread is empty
setTimeout(() => {
    console.log("call me ASAP");
}, 0);

function mulFn(x, y) {
    const result = x * y;
    return result;
}

var c = mulFn(a, b);
console.log("multiplication result is: ", c);