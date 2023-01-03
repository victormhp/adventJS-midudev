function checkStepNumbers(systemNames, stepNumbers) {
	const isSorted = arr => arr.every((num, i) => !i || num > arr[i - 1]);

	return Object.values(
		systemNames.reduce((acc, name, i) => {
			acc[name] = acc[name] || [];
			acc[name].push(stepNumbers[i]);
			return acc;
		}, {})
	).every(isSorted);
}
