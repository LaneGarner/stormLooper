// Use a do...while loop to console.log the numbers from 1 to 1000.

console.log('-----------1 to 1k----------')

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
console.log('---------LOG PERSON KEYS------------')

const logObjectKeys = (obj) => {
    console.log(Object.keys(obj));
}

logObjectKeys(person)

// Create a function that logs out the keys and values of the object using Object.entries().
console.log('-----------LOG PERSON KEYS AND VALUES----------')


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
    },
    {
        firstName: 'Bridgette',
        lastName: 'Sanchez',
        birthDate: 'June 14, 2012',
        gender: 'female'
    }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
console.log('-----------ODD BIRTH YEARS----------')


const oddBirthYear = () => {
    for (const person of arrayOfPersons) {
        if(person.birthDate.slice(-4) % 2 === 1) {
            console.log(person.birthDate)
        }
    }
}

oddBirthYear()

// Use .map() to map over the arrayOfPersons and console.log() their information.
console.log('-----------ARRAY MAP----------')

const mapPeople = arrayOfPersons.map(x => x)

console.log(mapPeople)

// Use .filter() to filter the persons array and console.log only males in the array.
console.log('-----------MALES----------')

const males = arrayOfPersons.filter(person => person.gender === 'male');

console.log(males)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
console.log('----------BORN BEFORE 1990 BOOLEAN-----------')

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
console.log('-----------BORN BEFORE 1990 FILTER----------')

const oldFolks = arrayOfPersons.filter(person => person.birthDate.slice(-4) < 1990);

console.log(oldFolks);

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
console.log('-----------IS 21 BOOLEAN----------')

const is21 = (date) => {
    let today = new Date().toLocaleDateString()
    let legalMonth = new Date().getMonth() +1
    let legalDay = new Date().getDate()
    let legalYear = today.slice(-4) - 21
    let legal = new Date(`${legalMonth}/${legalDay}/${legalYear}`)
    
    if (new Date(date) <= legal) {
        // console.log(true)
        return true
    } else {
        // console.log(false)
        return false
    }
}

console.log(is21('10/21/1987'))
console.log(is21('Jan 20, 1997'))
console.log(is21('99 Nov 7'))
console.log(is21('99 Nov 10'))
console.log(is21('10/21/2005'))
console.log(is21('20 Jan 2009'))

// BONUS - .filter() out the people in the array who are younger than 21.
console.log('----------UNDER 21 FILTER-----------')

const under21 = arrayOfPersons.filter(person => !is21(person.birthDate))

console.log(under21)

console.log('----------forEach to log name of under 21-----------')


const underTwentyOne = arrayOfPersons.forEach((person) => {
    const birthdates = new Date(person.birthDate)
    if (is21(birthdates) === false) {
        console.log(`${person.firstName} ${person.lastName}`)
    }
})