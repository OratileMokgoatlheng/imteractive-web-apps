const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: leoBalance,
	accesId: '47afb389_8014_4d0b-_aff3_e40203d2107f',
	age: 24,

	address: {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal
	}
}

const sarah = {
	name: sarahName + sarahSurname,
	balance: sarahBalance,
    accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
    age: 62,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal
	}
}
console.log(leo, leo.address.postalCode)
console.log(sarah, sarah.address.postalCode)