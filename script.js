//variables
const PI = 3.1415;
const radius = 5;

const area = PI * radius * radius;
console.log("Garden area", area);

//plants
const plantSpace = 0.8;
const startingPlants = 20;

//week growth
let week = 1;

//plant weekly double growth
let plantCount = startingPlants * (2 ** week);


//PHUDOCODE! Write out your progress