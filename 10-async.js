const {readFile, writeFile} = require("fs")

console.log("start")

readFile("./content/test.txt", "utf8", (err,result)=> {
    if (err) {
        console.log(err)
        return;
    }
    const first = result
    readFile("./content/test2.txt", "utf8", (err, result)=> {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/test4.txt',
             `This is the product of writeFile: ${first}, ${second}`,
             (err, result)=> {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("Done with this task")
             })
    })
})
console.log("starting a new task")