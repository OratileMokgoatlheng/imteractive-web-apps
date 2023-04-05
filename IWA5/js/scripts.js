const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence' //added a 'G' at the end of 'WARNIN'
const NONE_SELECTED = 0

const customers = 1       //Took this statement from the bottom of the code
let location = 'NAM'    //Took this statement from the bottom of the code
let currency = undefined
let shipping = undefined

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

//declared the above code using const and let 


if (location === 'RSA') {        // added a strict operator and made sure RSA is a string
    shipping = 400  
    currency = 'R'    
}


if (location === 'NAM') {        //made sure that the if statement is in a correct format by introducing a condition and 'NAM' into string
    
    console.log(currency === '$' && shipping === 600)
}




if (shoes + batteries + pens + shirts > 1000) {        //removed the && operator

    if (location === 'NAM' && customers < 2) {    //made NAM a string
    }else
    if (location === 'RSA') {      //used strict operator
        currency = '$'
        shipping = customers || shipping    //renamed shipping
    }
}


if (shipping === 0 && customers !== 1) {   //made sure that I had one paranthese
    console.log(BANNED_WARNING)   //added BANNED 
}

if (location === 'NK') {            //coded it in a more understandable manner
    console.log(BANNED_WARNING)      //added BANNED
} else {
    console.log('price:', currency, shoes + toys + batteries + pens + shirts + shipping +".00")     //included toys
}


/**
 * 
 * What I could have done differently would be having a total of my products so that when I console them I call the total instead of calling each product
 * 
*/