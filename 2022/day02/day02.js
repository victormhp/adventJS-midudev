function countHours(year, holidays) {
  return (
    holidays
      .map(element => {
        return new Date(`${year} ${element}`).getDay();
      })
      .filter(element => element !== 6 && element !== 0).length * 2
  );
}

export { countHours };
