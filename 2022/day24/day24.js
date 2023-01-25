// Aplicación de un algoritmo de BFS (Breadth-first Search)

function canExit(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  const visited = [];

  const startRow = maze.findIndex(row => row.includes('S'));
  const starCol = maze[startRow].findIndex(col => col === 'S');

  const queue = [[startRow, starCol]];

  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    if (maze[row][col] === 'E') return true;

    moves.forEach(([rowMove, colMove]) => {
      const nextRow = row + rowMove;
      const nextCol = col + colMove;

      const isInsideMaze = nextRow >= 0 && nextCol >= 0 && nextRow < rows && nextCol < cols;
      const isPassable = isInsideMaze && maze[nextRow][nextCol] !== 'W';
      const isVisited = visited.some(e => e[0] === nextRow && e[1] === nextCol);

      if (isPassable && !isVisited) {
        queue.push([nextRow, nextCol]);
        visited.push([nextRow, nextCol]);
      }
    });
  }

  return false;
}

console.log(
  canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', 'W', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ])
);

export { canExit };
