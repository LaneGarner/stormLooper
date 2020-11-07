// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;
do {
    console.log(i++)
}
while (i <= 1000);

// Create an object (with keys and values) called person with the following data:

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}

// Create a function that logs out the keys of the object using Object.keys().

const logObjectKeys = (obj) => {
    console.log(Object.keys(obj));
}

logObjectKeys(person)

// Create a function that logs out the keys and values of the object using Object.entries().

const logKeysAndValues = (obj) => {
    console.log(Object.entries(obj));
}

logKeysAndValues(person)

// Create an arrayOfPersons that contains multiple 'people' objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        birthDate: 'Jan 5, 1925',
        gender: 'female'
    },
    {
        firstName: 'John',
        lastName: 'Johnson',
        birthDate: 'September 8, 1964',
        gender: 'male'
    },
    {
        firstName: 'Jamie',
        lastName: 'Jackson',
        birthDate: 'June 25, 1999',
        gender: 'other'
    },
    {
        firstName: 'Daniel',
        lastName: 'Perez',
        birthDate: 'April 6, 1972',
        gender: 'male'
    }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

const oddBirthYear = () => {
    for (const person of arrayOfPersons) {
        if(person.birthDate.slice(-4) % 2 === 1) {
            console.log(person.birthDate)
        }
    }
}

oddBirthYear()

// Use .map() to map over the arrayOfPersons and console.log() their information.

const mapPeople = arrayOfPersons.map(x => x)

console.log(mapPeople)

// Use .filter() to filter the persons array and console.log only males in the array.

const males = arrayOfPersons.filter(person => person.gender === 'male');

console.log(males)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const before1990 = (arr) => {
    arr.forEach((person)=>{
        old = person.birthDate.slice(-4)
        if(old < 1990) {
            // return true
            console.log(`${person.firstName} ${person.lastName}: true`)
        }
    })
}

before1990(arrayOfPersons)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldFolks = arrayOfPersons.filter(person => person.birthDate.slice(-4) < 1990);

console.log(oldFolks);

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

const is21 = (date) => {
let today = new Date()
date = new Date(date);
let legal = new Date(today.getFullYear()-21, today.getMonth(), today.getDate());

return date.getTime()<legal.getTime();


}

console.log(is21(10/21/1987))
console.log(is21(12/21/2005))


// const is21yrs = (date) => {
// 	var now = new Date();
// 	var date = new Date(date);
// 	var old = new Date(now.getFullYear()-21, now.getMonth(), now.getDate());
// 	return date.getTime()<old.getTime();
// }

// console.log(is21yrs(10/21/1987))

// BONUS - .filter() out the people in the array who are younger than 21.
