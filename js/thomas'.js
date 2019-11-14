"use strict";

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


// PROBLEM 1 - create array of user objects based on the customers array of objects (each user object should just have name and age properties) HINT: use .map()

let users = customers.map(e =>{
   let user ={};
   user.name = e.name;
   user.age = e.age;
   return user
});

console.log(users);


// PROBLEM 2 - determine the average age of customers HINT: use .reduce()

let ages = customers.reduce((a,c) => {return a + c.age},0);
console.log(ages);

let averageAge = ages / customers.length;
console.log(averageAge);
