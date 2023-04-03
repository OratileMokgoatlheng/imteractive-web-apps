const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const customers = 1
let location = 'RSA'
let currency = 'R'
let shipping = 400

if (location === 'RSA') {
    console.log(shipping === 400 && currency === 'R')
}


if (location === 'NAM') {
    
    console.log(currency === '$' && shipping === 600)
}

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED


if (shoes + batteries + pens + shirts > 1000) {

    if (location === 'RSA' && customers < 2) {
    }else
    if (location === 'RSA') {
        currency = '$'
        shipping = customers || shipping
    }
}


if (shipping === 0 && customers !== 1) {
    console.log(BANNED_WARNING)
}

if (location === 'NK') {
    console.log(BANNED_WARNING)
} else {
    console.log('price:', currency, shoes + toys + batteries + pens + shirts + shipping +".00")
}