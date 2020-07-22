const fs = require('fs')

fs.copyFile('naranja.txt', 'platzi/limon.txt', err => {
    if (err) {
        return console.log(err)
    }

    console.log('naranja.txt copiado como limon.txt')
})
