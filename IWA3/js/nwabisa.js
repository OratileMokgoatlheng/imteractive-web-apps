// nwabisa.js
const firstname = "Nwabisa"
const surname = "Gabe"
export const roleN = "CEO"

const display = firstname + " " + surname + " (" + roleN + ")"
document.querySelector('#nwabisa').innerText = display

/**
 * I changed the private functions to const declarations
 * 
 * I exported jjust the role
 */