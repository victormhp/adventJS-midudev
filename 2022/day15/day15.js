// function decorateTree(base) {
//     const decorations = {
//         BB: 'B',
//         BP: 'R',
//         BR: 'P',
//         PB: 'R',
//         PP: 'P',
//         PR: 'B',
//         RB: 'P',
//         RP: 'B',
//         RR: 'R'
//     }

//     let tree = [base.split(' ')]

//     while (tree[0].length > 1) {
//         tree.unshift(tree[0].reduce((acc, curr, i, arr) => {
//             const nextValue = arr[i + 1]

//             if (nextValue !== undefined) {
//                 acc.push(decorations[curr + nextValue])
//             }

//             return acc
//         }, []))
//     }

//     return tree.map(e => e.join(' '))
// }

//Based on borjapazr solution.
function decorateTree(base) {
  const decorations = {
    BB: 'B',
    BP: 'R',
    BR: 'P',
    PB: 'R',
    PP: 'P',
    PR: 'B',
    RB: 'P',
    RP: 'B',
    RR: 'R',
  };

  const tree = base.split(' ');

  const addLevel = (acc, curr, i, arr) => {
    const nextValue = arr[i + 1];

    if (nextValue !== undefined) {
      acc.push(decorations[curr + nextValue]);
    }

    return acc;
  };

  const createLevel = (acc, curr, i) => {
    const nextLevel = acc[i].reduce(addLevel, []);
    acc.push(nextLevel);

    return acc;
  };

  return [...Array(tree.length - 1)]
    .reduce(createLevel, [tree])
    .reverse()
    .map(e => e.join(' '));
}

export { decorateTree };
