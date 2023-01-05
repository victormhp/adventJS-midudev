function wrapping(gifts) {
	return gifts.map(gift => {
		const border = '*'.repeat(gift.length + 2);
		return `${border}\n*${gift}*\n${border}`;
	});
}
