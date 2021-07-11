const multiplesBelow = n => {
	return Array.from({ length: n - 1 }, (_, i) => i + 1)
		.filter(e => e % 3 == 0 || e % 5 == 0)
		.reduce((acc, curr) => acc + curr)
}
const below10 = multiplesBelow(10)
console.log(below10)
const below1000 = multiplesBelow(1000)
console.log(below1000)
