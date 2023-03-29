// alex.js

const firstname = "Alex"
const surname = "Naidoo"
export const roleA = "Head of Marketing"

const display = firstname + " " + surname + " (" + roleA + ")"
document.querySelector('#alex').innerText = display

/**
 * I changed the private functions to const declarations
 * 
 * I exported just the role
 */