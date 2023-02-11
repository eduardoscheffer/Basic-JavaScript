// Profile Lookup (Using for & If...Else):
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

function lookUpProfile (name, prop) {
    for (let i = 0; i < contacts.length; i++) { // for loop to cicle through the contacts list 
        if (contacts[i].firstName === name) { // nested if statements to first check if the firstname matches, then checks if the prop matches. 
            if (prop in contacts[i]) { 
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contacts"; // return "No such contacts" out of the for loop as a final catch-all;
}

console.log(lookUpProfile('Kristian', 'likes')); // ["JavaScript", "Gaming", "Foxes"];

// OUTRA MANEIRA DE ESCREVER A MESMA FUNÇÃO:
function profileLookUp (name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";
};

console.log(profileLookUp('Akira', 'likes')) // ["Pizza", "Coding", "Brownie Points"];