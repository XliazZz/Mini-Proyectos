export const makeComputerMove = (board, updateBoard) => {
  const availableMoves = board.reduce((acc, cell, index) => {
    if (cell === null) {
      acc.push(index);
    }
    return acc;
  }, []);

  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const computerMove = availableMoves[randomIndex];

  updateBoard(computerMove);
};