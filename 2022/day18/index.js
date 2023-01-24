function dryNumber(dry, numbers) {
  return Array.from({ length: numbers }, (_, i) => i + 1).filter(e =>
    e.toString().includes(dry)
  );
}
