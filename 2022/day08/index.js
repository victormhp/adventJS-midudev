function checkPart(part) {
	return [...part].some((_, i) => {
		const word = part.substring(0, i) + part.substring(i + 1);
		return word === [...word].reverse().join('');
	});
}
