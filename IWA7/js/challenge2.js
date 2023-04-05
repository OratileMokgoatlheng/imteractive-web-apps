const nickname= "Timmy";
const firstname = "Timothy";
const nicknameOrFirstName = nickname || firstname       //introduced interpolation

if (nicknameOrFirstName == undefined){      //if nicknameOrFirstName is undefined...
    console.log(`Good Morning!`)            //...it logs the console...
}else{
    console.log(`Good morning, ${nicknameOrFirstName }!`)    //...else it logs this console
}

/**
 * It did not behave as expected because interpolation had to be introducced instead
 * 
 * Because there no falsey values it picks the first value before the logic operator
 * 
 * 
 */