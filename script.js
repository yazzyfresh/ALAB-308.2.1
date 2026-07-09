//variables
const PI = 3.1415;
const radius = 5;

const area = PI * radius * radius;

//plants
const minSpacePerPlant = 0.8;
const startingPlants = 20;

//week growth
let week = 1;

//plant weekly double growth
let plantCount = startingPlants * 2 ** week;

//Area / Max Capacity of the plants

let maxCapacity = area / minSpacePerPlant;

console.log("Garden area", area);
console.log("Maximum capacity", maxCapacity);

// weeks making a loop for usablility

for (let week = 1; week <= 3; week++) {
  let plantCount = startingPlants * 2 ** week;

  console.log("Week:" + week);
  console.log(plantCount);

  //===================pruned?
  if (plantCount > maxCapacity * 0.8) {
    console.log("Recomend : pruned");

    ///monitor
  } else if (plantCount >= maxCapacity * 0.5) {
    console.log("recomend : mmonator");

    //planted
  } else {
    console.log("recomed: planted");
  }
}

//=============================pt 2

const largeStartingPlants = 100;

const weeks = 10;

const largePlantCount = largeStartingPlants * (2 ** weeks);

const requiredArea = largePlantCount * minSpacePerPlant


// Math.sqrt////calculate the square root of a number.
const newRadius =  Math.sqrt(requiredArea / PI);

console.log("plants after 10 weeks:", largePlantCount);
console.log("new area", newArea);
console.log("new radius" , newRadius);


//=================pt3 

