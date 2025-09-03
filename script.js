
const fs = require("fs")
const path = require('path');

function watchFolder(folderName){
    try{
    fs.watch(path.join(__dirname, folderName), (eventType, filename) =>{
          const timeStamp = new Date().getTime()
          if(filename){
            console.log(`an event type of ${eventType} occured on  ${filename} at ${timeStamp} `)
          }
    })
}catch{
    console.log("no such file")
}
}

watchFolder("assignment")


