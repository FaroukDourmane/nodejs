//const request = require("./request");

// Operating system
const os = require("os");

// Files handling
const fs = require("fs");

var users = ["Farouk","Jack","John"];
const getUser = (users,name) => {
    
    var newArray = [];
    for (let i = 0; i < users.length; i++) {
        newArray[i] = users[i].toLowerCase();
    }

    name = name.toLowerCase();

    if (newArray.includes(name))
    {
        console.log(newArray.indexOf(name));
    }else{
        console.log("user not found");
    }
};

getUser(users,"john");