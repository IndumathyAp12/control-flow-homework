//Part 1: Growing Pains
const PI = 3.1415;
const radius = 5;

//calculating the area of a circle :
const area = PI * radius * radius ;
console.log (area)

const minSpace = 0.8;
const initialCount = 20;
 //Area needed for 20 plants in week 1:
 const areaWeek1 = initialCount * minSpace ;
 console.log (areaWeek1)

 //Calculate maximum number of plants the total area can hold
 const maxPlants = area / minSpace;
 console.log(maxPlants)

 //The plants double in number every week.
 //week 2 : 40 plants
 const areaWeek2 = 40 * 0.8;
 console.log(areaWeek2)
