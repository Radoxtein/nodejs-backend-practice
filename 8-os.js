const os = require("os")

// info about user
const user = os.userInfo()
console.log(user)


//  system uptime
console.log(`The System Uptime is ${os.uptime()}s`)

// more info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)