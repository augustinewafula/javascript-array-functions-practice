const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const characterNames = characters.map(character => character.name)
console.log("🚀 ~ file: worksheet.js ~ line 35 ~ characterNames", characterNames)

//2. Get array of all heights
const characterHeights = characters.map(character => character.height)
console.log("🚀 ~ file: worksheet.js ~ line 39 ~ characterHeights", characterHeights)

//3. Get array of objects with just name and height properties
const characterNameAndHeight = characters.map(character => {
    return {
        name: character.name,
        height: character.height
    }
})
console.log("🚀 ~ file: worksheet.js ~ line 48 ~ characterNameAndHeight", characterNameAndHeight)

//4. Get array of all first names
const characterFirstNames = characters.map(character => character.name.split(' ')[0])
console.log("🚀 ~ file: worksheet.js ~ line 52 ~ characterFirstNames", characterFirstNames)

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((total, character) => total + character.mass, 0)
console.log("🚀 ~ file: worksheet.js ~ line 57 ~ totalMass", totalMass)

//2. Get total height of all characters
const totalHeight = characters.reduce((total, character) => total + character.height, 0)
console.log("🚀 ~ file: worksheet.js ~ line 61 ~ totalHeight", totalHeight)

//3. Get total number of characters by eye color
const totalByEyeColor = characters.reduce((total, character) => {
    if (total[character.eye_color]) {
        total[character.eye_color]++
    } else {
        total[character.eye_color] = 1
    }
    return total
}, {})
console.log("🚀 ~ file: worksheet.js ~ line 67 ~ totalByEyeColor", totalByEyeColor)

//4. Get total number of characters in all the character names
const totalByName = characters.reduce((total, character) => total + character.name.length, 0)
console.log("🚀 ~ file: worksheet.js ~ line 73 ~ totalByName", totalByName)

//***FILTER***
//1. Get characters with mass greater than 100
const heavyCharacters = characters.filter(character => character.mass > 100)
console.log("🚀 ~ file: worksheet.js ~ line 78 ~ heavyCharacters", heavyCharacters)

//2. Get characters with height less than 200
const shortCharacters = characters.filter(character => character.height < 200)
console.log("🚀 ~ file: worksheet.js ~ line 82 ~ shortCharacters", shortCharacters)

//3. Get all male characters
const maleCharacters = characters.filter(character => character.gender === 'male')
console.log("🚀 ~ file: worksheet.js ~ line 89 ~ maleCharacters", maleCharacters)

//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
console.log(
  "🚀 ~ file: worksheet.js ~ line 89 ~ femaleCharacters",
  femaleCharacters
);

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass);
console.log("🚀 ~ file: worksheet.js ~ line 103 ~ sortByMass", sortByMass)

//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
console.log("🚀 ~ file: worksheet.js ~ line 107 ~ sortByHeight", sortByHeight)

//3. Sort by name
const sortByName = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log("🚀 ~ file: worksheet.js ~ line 111 ~ sortByName", sortByName)

//4. Sort by gender
const sortByGender = characters.sort((a, b) => a.name.localeCompare(b.gender));
console.log("🚀 ~ file: worksheet.js ~ line 111 ~ sortByGender", sortByGender);

//***EVERY***
//1. Does every character have blue eyes?
const everyCharacterHasBlueEyes = characters.every(character => character.eye_color === 'blue')
console.log("🚀 ~ file: worksheet.js ~ line 117 ~ everyCharacterHasBlueEyes", everyCharacterHasBlueEyes)

//2. Does every character have mass more than 40?
const everyCharacterHasMassMoreThan40 = characters.every(character => character.mass > 40)
console.log("🚀 ~ file: worksheet.js ~ line 121 ~ everyCharacterHasMassMoreThan40", everyCharacterHasMassMoreThan40)

//3. Is every character shorter than 200?
const everyCharacterIsShorterThan200 = characters.every(character => character.height < 200)
console.log("🚀 ~ file: worksheet.js ~ line 125 ~ everyCharacterIsShorterThan200", everyCharacterIsShorterThan200)

//4. Is every character male?
const everyCharacterIsMale = characters.every(character => character.gender === 'male')
console.log("🚀 ~ file: worksheet.js ~ line 132 ~ everyCharacterIsMale", everyCharacterIsMale)


//***SOME***
//1. Is there at least one male character?
const hasMaleCharacter = characters.some(character => character.gender === 'male')
console.log("🚀 ~ file: worksheet.js ~ line 138 ~ hasMaleCharacter", hasMaleCharacter)

//2. Is there at least one character with blue eyes?
const hasBlueEyesCharacter = characters.some(character => character.eye_color === 'blue')
console.log("🚀 ~ file: worksheet.js ~ line 142 ~ hasBlueEyesCharacter", hasBlueEyesCharacter)

//3. Is there at least one character taller than 210?
const hasTallCharacter = characters.some(character => character.height > 210)
console.log("🚀 ~ file: worksheet.js ~ line 146 ~ hasTallCharacter", hasTallCharacter)

//4. Is there at least one character that has mass less than 50?
const hasMassLessThan50 = characters.some(character => character.mass < 50)
console.log("🚀 ~ file: worksheet.js ~ line 150 ~ hasMassLessThan50", hasMassLessThan50)
