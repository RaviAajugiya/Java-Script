
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// function percentageOfWorld1(population){
//     return (population / 7900) * 100 ;
// }

// const percentageOfWorld1 = function (population){
//     return (population / 7900) * 100 ;
// }

const percentageOfWorld1 = population => (population / 7900) * 100 ;

const describePopulation = (country, population) => `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world`;

console.log(describeCountry('india', 50, 'delhi'));
console.log(percentageOfWorld1(1441));
console.log(describePopulation('india', 5000));

let populations = [500,800,600,800];
let percentages = [];

for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));    
}


console.log(populations.length === 4 ? true : false);
console.log(percentages);

let neighbours = ['pakistan', 'china','nepal', 'bangladesh'];

neighbours.push('sri lanka');
neighbours.pop();
console.log(neighbours);
console.log((!neighbours.includes('Germany')) ? 'probably not a central european country' : null);

neighbours[neighbours.indexOf('china')] = 'sri lanka';
console.log(neighbours);


let myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 500,
    'neighbours': ['pakistan', 'china','nepal', 'bangladesh'],

    describe : function(){
        return `${this.country} has ${this.population} million ${this.language}sh-speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}`
    },

    checkIsland: function(){
        this.isIsland = this.neighbours.length > 0 ? false : true;
        return this.isIsland;
    }
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}sh-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry['population'] = myCountry.population - 2; 
console.log(myCountry.population);
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

for (let i = 0; i <= 50 ; i++) {
    console.log(`vote number ${i} is currently voting`);
}

let populations2 = [];

for (let i = 0; i < populations.length; i++) {
    populations2.push(percentageOfWorld1(populations[i]));    
}
console.log(populations2);

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(listOfNeighbours[i][j]);        
    }    
}

let populations3 = [];
let i = 0;
while(i < populations2.length){
    populations3.push(populations2[i]);
    i++;
}

console.log(populations3);