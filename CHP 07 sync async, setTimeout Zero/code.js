const fs = require("fs");
const https = require("https");
console.log("Hello world");
var a = 1078698;
var b = 20986;

https.get("https://www.example.com", (res) => {
  console.log("fetched example.com");
});

// Runs immediately when the call stack of the main thread is empty
setTimeout(() => {
  console.log("call me ASAP");
}, 0);

fs.readFile("./file.txt", (err, data) => {
  console.log("text file read");
});

function mulFn(x, y) {
  const result = x * y;
  return result;
}

var c = mulFn(a, b);
console.log("multiplication result is: ", c);
