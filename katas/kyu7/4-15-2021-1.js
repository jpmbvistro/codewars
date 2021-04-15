/*******************************************************
=======================Codewars=========================
Drone Fly-By
https://www.codewars.com/kata/58356a94f8358058f30004b5/
********************************************************/
function flyBy(lamps, drone){
  return 'o'.repeat(Math.min(drone.length, lamps.length))+lamps.slice(drone.length)
}
