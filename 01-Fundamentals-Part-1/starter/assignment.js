const country = 'india';
const continent = 'Asia';
const population = 40;

console.log(country, continent,population);

const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

language = 'chinese';

let halfPopulation = 500 / 2;
console.log(halfPopulation);
halfPopulation++;
console.log(halfPopulation);

let finlandPopulation = 6;
let avgPopulation = 33;
let isLargerPopulation = population > finlandPopulation;
let isLargerAvg = population > avgPopulation;
console.log(isLargerPopulation);
console.log(isLargerAvg);

// const description = country + " is in " + continent +  " and it's " + population + " million pepole speak " + language; 
const description = `${country} is in ${continent} and it's ${population} million pepole speak ${language}`; 
console.log(description);

if (population > 33){
    console.log(`india's population is above average`);
}else{
    console.log(`india's population is ${ (avgPopulation-population) / 2} million below average.`);
}


// const numNeighbours = prompt('How many neighbour countries does your country have?');
// if(Number(numNeighbours) === 1){
//     console.log('only 1 border');
// }else if(Number(numNeighbours) === 2){
//     console.log('2 border');
// }else{
//     console.log('none of above');
// }

const isSpeakEnglish = (language == 'Gujarati');
const isLessPopulation = (population < 50);

if(isSpeakEnglish && isLessPopulation && !isIsland){
    console.log(`country is suitable`);
}else{
    console.log(`Not suitable`);
}


switch (language) {
    case 'chinese':
    case 'mandarian':
        console.log("'MOST number of native speakers!'");
        break;
    case 'spanish':
        console.log("'2nd place in number of native speakers'");
        break;
    case 'english':
        console.log("'3rd place'");
        break;
    case 'hindi':
        console.log("'Number 4");
        break;
    case 'arabic':
        console.log("'5Th most spoken language'");
        break;

    default:
        console.log("great language too");
        break;
}

console.log(`${population>33 ? 'gujarati is above average' : 'gujarati is below average'}`);

