
// johannes.js

const firstname = "Johannes"
const surname = "Potgieter"
export const roleJ = "Intern"

const display = firstname + " " + surname + " (" + roleJ + ")"
document.querySelector('#johannes').innerText = display

/**
 * I changed the private functions to const declarations
 * 
 * I exported just the role
 * 
 */