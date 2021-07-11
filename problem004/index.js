const isPalindrome = n => {
	const string = n + ""
	const half = Math.floor(string.length / 2)
	const first = string.substring(0, half)
	const second = string.substring(
		half + (string.length % 2 == 0 ? 0 : 1),
		string.length
	)
	const reversed = second.split("").reverse().join("")
	return first === reversed
}

const array = []
for (let i = 999; i > 100; i--) {
	for (let j = 999; j > 100; j--) {
		if (isPalindrome(i * j)) {
			array.push([i * j, i, j])
		}
	}
}
console.log(
	array.reduce((acc, curr) =>
		Math.max(acc[0], curr[0]) == acc[0] ? acc : curr
	)
)
