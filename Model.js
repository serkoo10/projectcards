const fs = require('fs')

class Model {
  constructor() {
  }


readdir(){
//   console.log('Model')
// fs.readdir('./topics', (err,filesNames) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(filesNames[x])

// }
// )
// }
}
read(){
    // console.log(`./topics/${file[0]}`)
    fs.readFile(`./topics/30.txt`,'utf-8',(err,data) => {
      if(err) {
        console.log(err)
      }
      console.log(data.split(','))
      return arr
    })
  }
}


module.exports = Model

// Model.read('Topics #1')