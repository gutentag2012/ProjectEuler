const getSums = n => {
	let sum = 0,
		sumSquared = 0
	for (let i = 1; i <= n; i++) {
		sum += i
		sumSquared += i * i
	}
	return [sum * sum, sumSquared]
}

const [x1, x2] = getSums(100)
console.log(x1 - x2)
