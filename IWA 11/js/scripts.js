// script.js

const oneRoot = document.querySelector('[data-key="order1"]')
const oneBiscuits = oneRoot.getAttribute('data-biscuits')
const oneDonuts = oneRoot.getAttribute('data-donuts')
const onePancakes = oneRoot.getAttribute('data-pancakes')
const oneStatus = oneRoot.getAttribute('data-delivered')

const twoRoot = document.querySelector('[data-key="order2"]')
const twoBiscuits = twoRoot.getAttribute('data-biscuits')
const twoDonuts = twoRoot.getAttribute('data-donuts')
const twoPancakes = twoRoot.getAttribute('data-pancakes')
const twoStatus = twoRoot.getAttribute('data-delivered')

const threeRoot = document.querySelector('[data-key="order3"]')
const threeBiscuits = threeRoot.getAttribute('data-biscuits')
const threeDonuts = threeRoot.getAttribute('data-donuts')
const threePancakes = threeRoot.getAttribute('data-pancakes')
const threeStatus = threeRoot.getAttribute('data-delivered')

/**
 * 
 */

document.querySelector('.biscuits .count').innerText = oneBiscuits
document.querySelector('.donuts .count').innerText = oneDonuts
document.querySelector('.pancakes .count').innerText = onePancakes
document.querySelector('.status dd').innerText = oneStatus

/***
 * 
 */

document.querySelector('[data-key="order2"] .biscuits .count').innerText = twoBiscuits
document.querySelector('[data-key="order2"] .donuts .count').innerText = twoDonuts
document.querySelector('[data-key="order2"] .pancakes .count').innerText = twoPancakes
document.querySelector('[data-key="order2"] .status dd').innerText = twoStatus

/**
 * 
 */

document.querySelector('[data-key="order3"] .biscuits .count').innerText = threeBiscuits
document.querySelector('[data-key="order3"] .donuts .count').innerText = threeDonuts
document.querySelector('[data-key="order3"] .pancakes .count').innerText = threePancakes
document.querySelector('[data-key="order3"] .status dd').innerText = threeStatus

