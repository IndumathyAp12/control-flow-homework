//Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;

//calculating the area of a circle :
const area = PI * radius * radius ;
console.log (area) // 78.5375

const minSpace = 0.8;
const initialCount = 20;
 //Area needed for 20 plants in week 1:
 const areaWeek1 = initialCount * minSpace ;
 console.log (areaWeek1) // 16

 //Calculate maximum number of plants the total area can hold
 const maxPlants = area / minSpace;
 console.log(maxPlants) // 98.1718

 //The plants double in number every week.
 //week 2 : 40 plants
 const areaWeek2 = 40 * 0.8;
 console.log(areaWeek2) //32

 //week 3 : 80 plants
 const areaWeek3 = 80 * 0.8;
 console.log(areaWeek3) //64

 //week 4 : 160 plants
 const areaWeek4 = 160 * 0.8;
 console.log(areaWeek4) //128 which is higher than total area of garden
 //so not possible to go into week 4.
 
//Calculate 80% of the maximum capacity of the garden.
const maxLimitofplants = 0.8; //80% of the garden
const  maxCapacityallowed = maxLimitofplants * area;
console.log(maxCapacityallowed) // 62.83


//Control Flow
console.log("========Control Flow=========")
if (areaWeek3 < area * 0.8){
    console.log("Plant more plants.");
} else if (areaWeek3 > area * 0.5 && areaWeek3 < area * 0.8){
    console.log("Just monitor the plants.");
} else {
    console.log("Prune the Plants");
}
