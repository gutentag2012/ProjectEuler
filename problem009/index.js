const isPythagorean = (x, y, z) => x < y && y < z && x ** 2 + y ** 2 === z ** 2

for (let x = 0; x < 1000; x++) {
	for (let y = 0; y < 1000; y++) {
		if (x + y > 1000) break
		for (let z = 0; z < 1000; z++) {
			if (x + y + z > 1000) break
			if (x + y + z !== 1000) continue
			if (isPythagorean(x, y, z)) console.log(x, y, z, x * y * z)
		}
	}
}
