function userLogin(username="guest"){
    if(!username)
        console.log(" please  enter a username")
    else
    return `WELCOME ${username}`
}

//console.log(userLogin());


//rest operator


function calculatePrice(val1,val2,...prices) {
    return  val2,prices,val1
}
//console.log(calculatePrice(100,200,70,900,60,2000));



let user={
    name:"Ahmad",
    email:"xyz@gmail.com",
    bugdet:1500,
}


function handleObject(anyObject) {
    console.log(`${anyObject.name} have ${anyObject.bugdet} bugdet`);
}

//handleObject(user)



someUser=["jack","john","same","bobby","alison"]

function accessArray(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

accessArray(someUser)

