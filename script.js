//Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;

//calculating the area of a circle :
const area = PI * radius * radius ;
console.log (area) // 78.5375 sqm

const minSpace = 0.8;
const initialCount = 20;

//Calculate maximum number of plants the total area can hold
 const maxPlants = area / minSpace;
 console.log(maxPlants) // 98.1718-total plant approx

  //Area needed for 20 plants in week 1:
  const areaWeek1 = initialCount * minSpace ;
  console.log (areaWeek1) // 16 sqm

 //The plants double in number every week.
 //week 2 : 40 plants-need how much area
 const areaWeek2 = 40 * minSpace;
 console.log(areaWeek2) //32 sqm

 //week 3 : 80 plants-need how much area
 const areaWeek3 =  80 * minSpace;
 console.log(areaWeek3) //64sqm

//week 4 : 160 plants - needs
//128 sqm which is higher than total area of garden
//so not possible to go into week 4.
 
//Calculate area of 80% of the maximum capacity of the garden.
const maxLimitofplants = 0.8; //80% of the garden
const maxAreaAllowed= maxLimitofplants * area;
console.log(maxAreaAllowed) // 62.83 sqm

 
//Calculate area of 50% of the minimum capacity of the garden.
const minLimitofplants = 0.5; //50% of the garden
const minAreaAllowed= minLimitofplants * area;
console.log(minAreaAllowed) // 39.27 sqm


//Calculate plant count for 80% in the garden:
const totalPlants = maxAreaAllowed / minSpace;
console.log(totalPlants) // 78.537 plants approximately

//Calculate plant count for 50% in the garden:
const totalPlants1 = minAreaAllowed / minSpace;
console.log(totalPlants1)// 49.085 plants

//Calculate plant count for week 3 


//Control Flow

//Monitored, if they are growing at an acceptable rate.
//This condition should be met if the plant count is between 50% and
//80% of the maximum capacity of the garden after the given number of weeks.
console.log("========Control Flow=========")
let n = 52; // say week 3 plant count
if (n < totalPlants1){
    console.log("Plant more");
} else if (n > totalPlants1 && n < totalPlants){
    console.log("Just monitor the plants.");
} else {
    console.log("Prune the Plants");
}

// Part 2: Thinking Bigger
//The amount of additional space that would be required 
// if the scientists were to start with 100 plants, 
//and did not prune them for 10 weeks.
 const newPlants = 100;

 //calculate the area needed for the 100 plants in new garden

 const newGardenarea = newPlants * minSpace ;
 console.log(newGardenarea); // 80 sq.meters for week 1 in newgarden.

//calculate space needed for the 100 plants at the end of 10 weeks


