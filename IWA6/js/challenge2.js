const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

 if (hourOfDay == 0 && minuteOfDay == 0) {  //made sure that i am left with the code only
    
const taxAsDecimal = parseInt(tax) / 100       //parsed tax to an integer and made 100 a string
const startingAfterTax = salary * (1 - taxAsDecimal)   //added brackets and removed '' to 1
const balance = startingAfterTax - transport - food - rent    //renamed the starting
    	
console.log("R", balance.toFixed(2))  //changed 3 to 2 but i did not the required answer
    
 }



//274.46    