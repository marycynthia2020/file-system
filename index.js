const { error, trace } = require("console")
const fs = require("fs")
const promisefs = require("fs/promises")

const students = "Pero\nNamba\nUnique\nJoshua\nNewking"
const newStudents = "\nPromise\nChinemerem"

// Question 1

async function createStudentsFile(student){
    try{
        await promisefs.writeFile("students.txt", student)
    }
    catch(error){
       return error.message
    }
}

// createStudentsFile(students).then(message =>console.log(message))

// Question 2

async function addnewStudents(newStudents){
    try{
        const data = await promisefs.appendFile("students.txt", newStudents)
        return data
    }
    catch(error){
        return error.message
    }
}

// addnewStudents(newStudents).then(message=>console.log(message))

// Question 3

async function readStudentsFile(){
   try{
     const data = await promisefs.readFile("students.txt", "utf-8")
     return data
   }
   catch(err){
    return err.message
   }
}
// readStudentsFile().then(message =>console.log(message))

// Question 4

async function renameStudentsFile(){
   try{
     await promisefs.rename("web2.txt", "students.txt")
   }
   catch(err){
    return err.message
   }
}

// renameStudentsFile().then(message =>console.log(message))

// Question 5
async function copyWeb2File(){
    try{
        promisefs.copyFile("web2.txt", "web2-advance.txt")
    }
    catch(err){
        return err
    }
}
// copyWeb2File().then(message =>console.log(message))

// Question 6

async function deleteWeb2File(){
   try{
     await promisefs.unlink("web2.txt")
   }
   catch(err){
    return err
   }
}

// deleteWeb2File().then(message => console.log(message))

// Question 7

async function moveFileToBackup(){
    try {
        await promisefs.mkdir("../backup")
        await promisefs.rename("web2.txt", "../backup/web2.txt")
    }
    catch(err){
        return err.message
    }
}

// moveFileToBackup().then(message => console.log(message))

// Question 8

async function createUserJson(){
   try{
     await promisefs.writeFile("user.json", JSON.stringify([]))
   }
   catch(err){
    console.log(err.message)
   }
}

// createUserJson().then(message => console.log(message, ))

function addNewuser(newuser){
      let usersData = []
    fs.readFile("user.json", "utf-8", (e, data) =>{
        if(e){
            console.log(e.message)
            return
        }

        if(data){
            try{
             usersData = JSON.parse(data)
        } catch(err){
            console.log("Error parsing JSON", err)
            return
        }
        }

        const alreadyExistingUser = usersData.find(user => user.id === newuser.id)

        if(alreadyExistingUser) {
            console.log("user already exist")
            return
        }
        console.log("go ahead and add user")
        usersData.push(newuser)

        fs.writeFile("user.json", JSON.stringify(usersData), (err) =>{
            if(err){
                console.log(err.message)
                return
            }
            console.log("added succefully")
        })
        
    })

}

// addNewuser({id: 681, name:"hekk", email: "kdhhdhs"})

function updateUserEmail(userToUpdate){
    let usersData = []

    fs.readFile("user.json", "utf-8", (e, data) =>{
        if(e){
            console.log(e.message)
            return
        }
        if(data){
        try{
            usersData = JSON.parse(data)
        }catch(err){
            console.log("Error parsing JSON", err)
            return
        }
        }
        console.log(usersData)
        
        const foundUser = usersData.find(user => user.id === userToUpdate.id)

        if(!foundUser) {
            console.log("User does not exist on this database")
        } else {
            console.log("go ahead and updatae")
            foundUser.email = userToUpdate.email

            fs.writeFile("user.json", JSON.stringify(usersData), (err) =>{
                if(err) {
                    console.log(err.message)
                    return
                }
                console.log("user email succesfully updated")
            })
        }
       })  
}


// updateUserEmail({id: 691, name:"hekk", email: "maryg"})


function deleteUser(id){
    let usersData = []

    fs.readFile("user.json", "utf-8", (e, data) =>{
        if(e){
            console.log(e.message)
            return
        }
        if(data){
        try{
            usersData = JSON.parse(data)
        }catch(err){
            console.log("Error parsing JSON", err)
            return
        }
        }
        console.log(usersData)

        const foundUser = usersData.find(user => user.id === id)
        if(!foundUser){
            console.log("user does not exist on this database")
        } else {
            console.log("user ready to be deleted")

            const newUserData = usersData.filter(user => user.id !== foundUser.id)
    
            fs.writeFile("user.json", JSON.stringify(newUserData), (err) =>{
                    if(err) {
                        console.log(err.message)
                        return
                    }
                    console.log("user deleted successfully")
            })
        }

    })
}

// deleteUser(681)

function readAllUsers(){
    let usersData = []

    fs.readFile("user.json", "utf-8", (e, data) =>{
        if(e){
            console.log(e.message)
            return
        }
        if(data){
            try{
                usersData = JSON.parse(data)
            }catch(err){
                console.log("Error parsing JSON", err)
            }
        }
        console.log(usersData)
    })  
}