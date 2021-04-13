/*******************************************************
=======================Codewars=========================
Thinkful - Logic Drills: Traffic light
https://www.codewars.com/kata/58649884a1659ed6cb000072/
********************************************************/
function updateLight(current) {
  return {'green':'yellow','yellow':'red','red':'green'}[current]
}
