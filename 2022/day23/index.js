function executeCommands(commands) {
	const REGISTERS = {
		V00: 0,
		V01: 0,
		V02: 0,
		V03: 0,
		V04: 0,
		V05: 0,
		V06: 0,
		V07: 0,
	};

	const ACTIONS = {
		MOV: (source, register) =>
			(REGISTERS[register] = source.startsWith('V')
				? REGISTERS[source]
				: parseInt(source)),
		ADD: (Vxx, Vyy) => (REGISTERS[Vxx] = REGISTERS[Vxx] + REGISTERS[Vyy]),
		DEC: Vxx => (REGISTERS[Vxx] -= 1),
		INC: Vxx => (REGISTERS[Vxx] += 1),
		JMP: startIndex => REGISTERS.V00 > 0 && (i = startIndex - 1),
	};

	let i = 0;
	while (i < commands.length) {
		const [command, ...params] = commands[i].split(/\s|,/g);
		ACTIONS[command](...params);
		i++;
	}

	return Object.values(REGISTERS).map(n => (n + 256) % 256);
}
