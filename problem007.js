const primes = []

const isPrime = n => {
	if ((n % 2 === 0 && n !== 2) || i == 1) return false
	return !primes.some(e => n % e === 0)
}

let i = 0
while (primes.length < 10001) {
	if (isPrime(i)) primes.push(i)
	i++
}

console.log(primes.pop())
