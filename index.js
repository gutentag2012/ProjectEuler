const main = async () => {
	const solutions = 1
	for (let index = 1; index <= solutions; index++) {
		var s = index + ""
		while (s.length < 3) s = "0" + s
		const program = await import(`./problem${s}/index.js`)
	}
}
main()
