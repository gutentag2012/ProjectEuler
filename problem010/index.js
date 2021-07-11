const primes = []

const isPrime = n => {
	if ((n % 2 === 0 && n !== 2) || i == 1) return false
	return !primes.some(e => n % e === 0)
}

let sum = 0
let i = 0
while (i < 2000000) {
	if (isPrime(i)) {
		primes.push(i)
		sum += i
	}
	i++
}

console.log(sum)
