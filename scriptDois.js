'use strict';
// Exercícios e Testes parte 2
function describeCountry(country,population,capitalcity){

const describeCountry = `${country} has ${population} million people and its capital city is ${capitalcity}`

return describeCountry;

}


const descricao = describeCountry('Finland',6,'Helsinki');
console.log(descricao)

//Atividade 2
function percentageOfWorld(population){
    return (population / 7900) * 100
}

const country1 = percentageOfWorld(11)
const country2 = percentageOfWorld(1800)
const country3 = percentageOfWorld(2500)
console.log(country1,country2,country3);

//Atividade 3 - 
const percentageOfWorld3 = population => (population / 7900)*100
const perc = percentageOfWorld3(1400)
console.log(perc)

 
// Atividade 4 - 
const describePopulation = function(country, population){
    const percentage = percentageOfWorld(population);
    const description = `${country} has ${population} million people, wich is about ${percentage}% of the world`
    console.log(description)
}

describePopulation('USA', 332)

// Atividade 5 - 

// const places = ['Brazil', 'Sweden', 'Thailand']

// places.push('Russia');
// console.log(places)

// places.pop();
// console.log(places)


// if (!places.includes('Germany')) {
//     console.log("Probably not a central European Country")
// }
// places[places.indexOf('Sweden')] = 'Republic of Sweden'

// console.log(places);

//Atividade 6 - 
const myCountry = {
    country : 'Finland',
    population : 6,
    capitalCity : 'Helsinki',
    language : 'finnish',
    neighbors : ['Norway', 'Sweden', 'Russia']



}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people ,
${myCountry.neighbors.length} neighbouring and a capital called ${myCountry.capitalCity}.`)


myCountry.population +=2;
console.log(myCountry.population)

myCountry.population -= 2;
console.log(myCountry.population)

// Coding Desafio # 4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 43


const conta = 275;
const gorjeta = conta <= 300 && conta >=50 ? conta*0.15 :conta*0.2

console.log(`A conta foi de ${conta}, a gorjeta foi de ${gorjeta}, no total o valor pago foi de ${conta + gorjeta}`)

// Desafio #5


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


// const calcAverage = (a,b,c) => (a+b+c) /3; 
// const koalasScore = calcAverage(65,54,49);
// const dolphinScore = calcAverage(44,23,71);
// console.log(koalasScore + ' koala')
// console.log(dolphinScore + ' dolphin')


// function checkWinner(koalasScore,dolphinScore){
//     if (dolphinScore >= 2 * koalasScore) {
//         console.log("Dolphins Wins")
//     }else if(koalasScore >= 2* dolphinScore){
//         console.log('KOALA WINS')
//     }else{
//         console.log('no team won')
//     }

// }

// console.log(checkWinner(dolphinScore,koalasScore))

// console.log(checkWinner(100,100));

