/*******************************************************
=======================Codewars=========================
Printer Errors
https://www.codewars.com/kata/56541980fa08ab47a0000040
********************************************************/
function printerError(s) {
    let errors = s.match(/([^a-m])/g)
    return `${errors !== null ? errors.length : 0}/${s.length}`
}
