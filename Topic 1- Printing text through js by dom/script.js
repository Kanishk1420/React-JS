var h1 = document.createElement("h1");
h1.innerText = "Hello World";
console.log(h1);
document.body.appendChild(h1); // use for the to print the element in the browser
let arr = {
    name: "Kanishk",
    age: 22,
    city: "Bangalore",
    profile: {
        hobbies:["coding", "playing"],
        coding:{
            languages: ["JavaScript", "Java", "Python"],
            experience: "2 years"
        },
        playing:['Online games', 'Offline games'],
        Online_games:{
            games: ["Genshin Impact", "Silksong", "Smash Cart"],
        },
        Offline_games:{
            games: ["Football", "Cricket", "Basketball"]
         }
    }
}
const fg = Object.keys(arr.profile.Online_games.games); // Object.keys is used to get the keys of an object and return them in an array.
console.log(fg);
const value = Object.values(arr.profile.Online_games.games); // Object.values is used to get the values of an object and return them in an array.
console.log(value);