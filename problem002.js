// const fs = require("fs")
// const path = "problem002/fibonacci.json"

const allInOne = (left = 0, right = 1, sum = 0) => {
	const fib = left + right
	if (fib > 4000000) return sum
	return allInOne(right, fib, sum + (fib % 2 === 0 ? fib : 0))
}

console.log(allInOne())

// const saved = fs.existsSync(path)
// 	? { ...JSON.parse(fs.readFileSync(path)) }
// 	: {}

// const fib = n => {
// 	if (n <= 1) return 1
// 	if (n in saved) return saved[n]
// 	return (saved[n] = fib(n - 1) + fib(n - 2))
// }

// let index = 0,
// 	num = 0,
// 	solution = 0
// while ((num = fib(index++)) < 4000000) {
// 	if (num % 2 == 0) solution += num
// }

// fs.writeFile(path, JSON.stringify(saved), () =>
// 	console.log("Solution is " + solution)
// )
