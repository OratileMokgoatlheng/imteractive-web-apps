// script.js

function add (a, b) {             //function declaration introduced
     

     return a + b      //returned the arguments
    }

function multiply (a, b){             //function declaration introduced
     
     return  a * b                //returned the arguments
    }

function internal() {
	const added = this.add(this.internal.a, this.internal.b)       //called an internal key from objects
	const multiplied = this.multiply(added, this.internal.c)         
	console.log(multiplied)               //logged multiply
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()

