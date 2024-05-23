function decode(message) {
  while (message.includes('(') && message.includes(')')) {
    let s = message.lastIndexOf('(');
    let e = message.indexOf(')', s);
    let sub = message
      .slice(s + 1, e)
      .split('')
      .reverse()
      .join('');
    message = message.slice(0, s) + sub + message.slice(e + 1);
  }
  return message;
}

export { decode };
