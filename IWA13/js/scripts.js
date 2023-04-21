let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => {      //introduced arrow function
    const isString = typeof calculated === 'string'      //removed the string that was unnecessary
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated   //converted calculated to integer
    calculated = calculatedAsNumber + 1       //removed strict operator and assigned using equality
}



const calcUser = () => {        //arrow function
  logCalc()              //added parantheses to make it a function
  if (calculated > 2){    //left with one if statement that re-assigns user and state
   user = 'John'
   state = 'requesting'
}
  if (calculated > 3){

  state = 'idle'
  }
}

const checkUser = () => {            //arrow  function
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()