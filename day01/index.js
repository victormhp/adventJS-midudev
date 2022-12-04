function wrapping(gifts) { 
    const wrapped = gifts.map(e => `${'*'.repeat(e.length + 2)}\n*${e}*\n${'*'.repeat(e.length + 2)}`);
    return wrapped;
}
