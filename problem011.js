const fs = require("fs")

const file = fs.readFileSync("./resources/problem011_input.txt", {
	encoding: "utf-8",
})
const arr = file.split("\n").map(e =>
	e
		.replace("\r", "")
		.split(" ")
		.map(e => parseInt(e))
)

const get = (arr, y, x) => {
	if (0 <= y && y < arr.length && 0 <= x && x < arr[y].length) {
		return arr[y][x]
	}
	return 0
}

const solution = (arr, k) => {
	let max = 0

	let dx = [1, 0, 1, -1]
	let dy = [0, 1, 1, 1]

	for (let y = 0; y < arr.length; y++) {
		for (let x = 0; x < arr[y].length; x++) {
			for (let d = 0; d < 4; d++) {
				let p = 1
				for (let i = 0; i < k; i++) {
					p *= get(arr, y + i * dy[d], x + i * dx[d])
				}
				max = Math.max(p, max)
			}
		}
	}
	return max
}
console.log(solution(arr, 4))
