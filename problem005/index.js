const length = 20
const multiples = Array.from({ length: length }).map((_, i) => i + 1)

let result = undefined

const optimized = () => {
	let j = 2
	while (1) {
		let skip = false
		for (let i = 2; i <= length; i++)
			if (j % i !== 0) {
				skip = true
				break
			}
		if (skip === false) {
			return j
		} else j++
	}
}

const innerLoop = (depth = 0, iteration = []) => {
	if (result) return
	if (depth === length) {
		const value = iteration.reduce((acc, curr) => acc * curr, 1)
		if (multiples.every(e => value % e === 0)) {
			result = value
		}
		return
	}

	innerLoop(depth + 1, iteration)
	for (let i = 1; i < length; i++) {
		if (iteration.includes(i)) continue
		innerLoop(depth + 1, [...iteration, i])
	}
}

console.log(optimized())
