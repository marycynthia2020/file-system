
const fs = require("fs")
const path = require('path');

function watchFolder(folderName){
    try{
    fs.watch(path.join(__dirname, folderName), (eventType, filename) =>{
          const timeStamp = new Date().getTime()
          if(filename){
            const logMessage = `an event type of ${eventType} occured on  ${filename} at ${timeStamp} `
            fs.appendFile("message-log.txt", logMessage, (err)=>{
                if(err){
                    console.log("log message not appended")
                    return
                }
                console.log("log message appended successfully")
            })
          }
    })
}catch{
    console.log("no such file")
}
}

watchFolder()


