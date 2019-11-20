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


// WEEK ! PROBLEM 1 - create array of user objects based on the customers array of objects (each user object should just have name and age properties) HINT: use .map()

let users = customers.map(e =>{
   let user ={};
   user.name = e.name;
   user.age = e.age;
   return user
});

console.log(users);


// WEEK 1 PROBLEM 2 - determine the average age of customers HINT: use .reduce()

let ages = customers.reduce((a,c) => {return a + c.age},0);
console.log(ages);

let averageAge = ages / customers.length;
console.log(averageAge);

// Week 2 PROBLEM 1 - Clicking on the button the font, font size, and color of the paragraph text will be changed.

$("#jsstyle").click(function(){
    $("#text").toggleClass("editP");
});

// WEEK 2 PROBLEM 2 - Animates a paragraph to fade toggle (complete the animation within 500 milliseconds).

$("#fade").click(function() {
    $("#text").fadeToggle();
});

// WEEK 2 PROBLEM 3 - Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++)
{
    let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("You have already read " + book);
    } else
    {
        console.log("You still need to read " + book);
    }
};