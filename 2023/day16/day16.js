function transformTree(tree) {
  // if (tree.length === 0) return null;
  //
  // const root = {
  //   value: tree[0],
  //   left: null,
  //   right: null,
  // };
  //
  // const queue = [{ node: root, index: 0 }];
  //
  // let i = 1;
  // while (i < tree.length && queue.length > 0) {
  //   const { node, index } = queue.shift();
  //
  //   const leftIndex = index * 2 + 1;
  //   if (leftIndex < tree.length && tree[leftIndex] !== null) {
  //     const leftNode = {
  //       value: tree[leftIndex],
  //       left: null,
  //       right: null,
  //     };
  //
  //     node.left = leftNode;
  //     queue.push({ node: leftNode, index: leftIndex });
  //   }
  //
  //   const rightIndex = index * 2 + 2;
  //   if (rightIndex < tree.length && tree[rightIndex] !== null) {
  //     const rightNode = {
  //       value: tree[rightIndex],
  //       left: null,
  //       right: null,
  //     };
  //
  //     node.right = rightNode;
  //     queue.push({ node: rightNode, index: rightIndex });
  //   }
  //
  //   i++;
  // }
  // return root;
  
  const createTree = (index) => {
    if (index >= tree.length || tree[index] === null) {
      return null
    }

    const node = {
      value: tree[index],
      left: createTree(index * 2 + 1),
      right: createTree(index * 2 + 2),
    }

    return node
  }

  return createTree(0)
}

export { transformTree };
