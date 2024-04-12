//Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;

//calculating the area of a circle :
const area = PI * radius * radius ;
console.log (area) // 78.5375

const minSpace = 0.8;
const initialCount = 20;

//Calculate maximum number of plants the total area can hold
 const maxPlants = area / minSpace;
 console.log(maxPlants) // 98.1718-total plant approx

  //Area needed for 20 plants in week 1:
  const areaWeek1 = initialCount * minSpace ;
  console.log (areaWeek1) // 16

 //The plants double in number every week.
 //week 2 : 40 plants-need how much area
 const areaWeek2 = 40 * minSpace;
 console.log(areaWeek2) //32

 //week 3 : 80 plants-need how much area
 const areaWeek3 = 80 * minSpace;
 console.log(areaWeek3) //64

 //week 4 : 160 plants
 const areaWeek4 = 160 * minSpace;
 console.log(areaWeek4) //128 which is higher than total area of garden
 //so not possible to go into week 4.
 
//Calculate 80% of the maximum capacity of the garden.
const maxLimitofplants = 0.8; //80% of the garden
const  maxCapacityallowed = maxLimitofplants * area;
console.log(maxCapacityallowed) // 62.83


//Control Flow
//Monitored, if they are growing at an acceptable rate.
//This condition should be met if the plant count is between 50% and
//80% of the maximum capacity of the garden after the given number of weeks.
console.log("========Control Flow=========")
if (areaWeek3 < area * 0.8){
    console.log("Plant more plants.");
} else if (areaWeek3 > area * 0.5 && areaWeek3 < area * 0.8){
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

