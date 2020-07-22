const os = require('os')

//console.log('CPU info', os.cpus())
/* console.log(
    'IP address',
    os.networkInterfaces()['Wi-Fi'].map(x => x.address)
) */

//console.log('Free Memory', os.freemem())
//console.log('Type', os.type())
//console.log('OS Version', os.release())
console.log('User info', os.userInfo())
