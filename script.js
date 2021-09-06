/*
//Mark
let markHeight = 1.69;
let markWeight = 78;
//John
let johnHeight = 1.95;
let johnWeight = 92;

let bmiMark = markWeight / markHeight **2; // 27.3

let bmiJohn = johnWeight / johnHeight **2 // 24.1

let markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI)
// next bmi test
markHeight = 1.88
markWeight = 95
johnWeight = 85
johnHeight = 1.76





bmiMark = markWeight / markHeight**2; // 26.8
bmiJohn = johnWeight / johnHeight**2 // 27.4

markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI)

*/
// Atividade 1 -

 const country = "Brasil"
 const continent = "South America"
 let population = 200

 console.log(country, continent, population)

 // Atividade 2 -

const isIsland = false;
let language;

console.log(typeof isIsland, typeof country,typeof language,typeof population)

// Atividade 3 -
language = 'english'

population = 100;
population++;
const finlad = 6

console.log(country>finlad)

averagePopulation = 33

console.log(country>averagePopulation)

const description = 'Portugal is in Europe, and its 11 million people speak portuguese'

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language} `)

// Atividade 4 - 
population = 130
if (population > 33) {
    console.log(`${country}'s population is above average`)
}else{
    console.log(`${country}'s population is ${averagePopulation - population} million below average`)
}
/*
//Teste 2 - Improved BMI


//Mark
let markHeight = 1.69;
let markWeight = 78;
//John
let johnHeight = 1.95;
let johnWeight = 92;


let bmiMark = markWeight / markHeight **2; // 27.3

let bmiJohn = johnWeight / johnHeight **2 // 24.1




if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's")
}else{
    console.log("John's BMI is higher than Mark's")
}

// Parte 2
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`)
}else{
    console.log("John's BMI is higher than Mark's")
}

*/


 //Atividade 5 - 

console.log('9' - '5'); // '4'
'19' - '13' + '17'; // 617
console.log('19' - '13' + 17); //23
'123' < 57; // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Atividade 6 -

/*let numNeighbors = Number(prompt("How many neighbors does your country have?"));

if (numNeighbors === 1) {
    console.log('Only 1 border!')
}else if(numNeighbors > 1){
    console.log('More than 1 border')
}else{
    console.log('No borders')
}
*/

// Atividade 7 - 
 //population = 30 // teste
 
if (language == 'english' && population < 50 && isIsland == false) {
      console.log("You should live in Portugal")  
}else{
    console.log("Portugal does not meet your criteria :( ")
}



// Atividade 8 -
language = 'english'
switch (language) {
    case 'chinese':
    case 'mandarin':    
        console.log("Most numbers of native speakers")
        break;
    case 'spanish':
        console.log("2nd place in native speakers number")
        break;
    case 'english':
        console.log("3rd place")
        break;
    case 'hindi':
        console.log("number 4")
        break;
    case 'arabic':
        console.log("5th most spoken language")
        break;        
    default:
        console.log("Great language too")
        break;
}

// Test Dolphins and Koalas

/*
const averageScoreDolphin = (96+108+89) / 3 ;

const averageScoreKoalas = (88+91+110) / 3 ;
if (averageScoreDolphin > averageScoreKoalas) {
    console.log("Dolphin is the winner")
}else if (averageScoreDolphin === averageScoreKoalas){
    console.log("ITS A DRAW")
}else if(averageScoreDolphin < averageScoreKoalas){
    console.log("Koala is the winner")
}else if(averageScoreDolphin > 100){

}
*/

const averageScoreDolphin = (97+112+81) / 3 ;

const averageScoreKoalas = (109+95+86) / 3 ;
if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100) {
    console.log("Dolphin is the winner")
}else if (averageScoreDolphin === averageScoreKoalas && averageScoreKoalas >=100 && averageScoreDolphin >=100){
    console.log("ITS A DRAW")
}else if(averageScoreDolphin < averageScoreKoalas && averageScoreKoalas >=100){
    console.log("Koala is the winner")
}else{
    console.log("No team wins")
}

// Atividade 9 - 
population = 13
population >=33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)