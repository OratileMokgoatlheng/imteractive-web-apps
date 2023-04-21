// // scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
/** */
const { lists: {0:{ 1: first }}} = data
const { lists: {1:{ 1: second }}} = data 
const { lists: {2:{ 1: third }}} = data 

// const first = data.lists[0][1]
// const second = data.lists[1][1]
// const third = data.lists[2][1]

const result = []

const extractBiggest = () => {
	if (first[first.length -1] >= second[second.length -1] && first[first.length -1] >= third[third.length -1]) {
		return first.pop()
	}
	
	if(second[second.length -1] >= third[third.length -1]) {
		return second.pop()
	}
	
	return third.pop() 
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

// scripts.js

// const data = {
// 	lists: [
// 		['first', [15, 11, 13, 7, 5]],
// 		['second', [2, 6, 8, 4, 14, 12, 10]],
// 		['third', [9, 3, 1]],
// 	]
// }

// // Only edit below

// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}

// const result = []

// const extractBiggest = () => {
// 	if (first[-1] > second[-1]) {
// 		return first
// 	}

// 	if (third[-1] < 1) {
// 		return second
// 	}
	
// 	return third
// }

// // Only edit above

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// console.log(result)