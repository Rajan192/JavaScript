//Pure Function

function noAffectOutSideOfClass(element)
{   
    let element2=element+element;
    console.log("This Function will not change anyThing Out Side Of Function");
}


//Impure Function 

let users=[{name:"Rajan",gmail:"rajanprajapati1199@gmail.com"}];

function addUsers(user)
{
    users.push(user);
}

addUsers({name:"secondName",gmail:"secondmail@gmail.com"});

console.log(users);