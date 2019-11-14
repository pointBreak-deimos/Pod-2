// Write a JavaScript program to redirect to a specified URL

// const redirect = (url, asLink) =>{
//     if (asLink == true) {
//         return (window.location.href = url)
//     }else {
//        return window.location.replace(url).redirect('https://google.com');
//     }
// };
//
// redirect("https://yahoo.com", false);
//     asLink ? (window.location.href = url) : window.location.replace(url);
// redirect('https://google.com');


function myFunction() {

    if (window.location.href.indexOf("andrew2")> -1) {
        window.location.replace("andrew.html")
    } else {
        window.location.replace("andrew2.html")
    }
}

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

let listOfHamsters = Array.from(hamsters.reduce((accumulator, color) => {
    color.fur.map(animal => accumulator.add(animal));
    return accumulator;
}, new Set()));

console.log(listOfHamsters);