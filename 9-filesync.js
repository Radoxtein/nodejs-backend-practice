const {readFileSync, writeFileSync} = require("fs")
console.log("start")
const first = readFileSync("./content/test.txt", "utf8")
const second = readFileSync("./content/test2.txt", "utf8")


writeFileSync('./content/test3.txt', `Haiiti world: ${first}, ${second}`, {flag: "a"})

console.log("done with this task")
console.log("starting a new task")




