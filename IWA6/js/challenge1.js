const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = !Number.isNaN(parseInt(primaryPhone)) 
const secondaryValid = !Number.isNaN(parseInt(secondaryPhone)) 
//instead of typeof method I introduced the parseInt on the above code

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

//what i could have done differently was I would introduce the !isNaN and include a reverse operator