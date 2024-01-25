import { useState, useEffect } from 'react';
import Tile from './TIle';
import { checkWinner } from '../gameLogic/checkWinner';
import { makeComputerMove } from '../gameLogic/makeComputerMove';
import { showSwal } from '../swal/showSwal';
import { motion } from 'framer-motion';

const Board = () => {
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isAgainstComputer, setIsAgainstComputer] = useState(false);
  const [puntage, setPuntage] = useState({
    X: 0,
    O: 0
  });

  const updateBoard = (index) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);

      setWinner(checkWinner(newBoard));

      // Verifica empate
      if (!newBoard.includes(null) && !winner) {
        setWinner('draw');
      }

      switchPlayer();
    }
  };

  useEffect(() => {
    let timeoutId;
  
    if (isAgainstComputer && player === 'O' && !winner) {
      timeoutId = setTimeout(() => {
        makeComputerMove(board, updateBoard);
      }, 350);
    }
  
    return () => clearTimeout(timeoutId);
  }, [player, winner, isAgainstComputer]);
  

  const switchPlayer = () => {
    setPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');

    setIsAgainstComputer(prevIsAgainstComputer => !prevIsAgainstComputer);
  };
  
  checkWinner(board)

  const restartGame = () => {
    setPlayer('X');
    setWinner('');
    setBoard(Array(9).fill(null));
    setIsAgainstComputer(false);
  }  

  showSwal(winner, restartGame, setPuntage)
  
  return (
    <div>
      <div className='grid grid-cols-3 grid-rows-3 p-3 gap-y-0 w-80 h-80 bg-black gap-x-4 items-center justify-center rounded-lg'>
        {board.map((cell, index) => (
          <Tile key={index} value={cell} index={index} callback={updateBoard}/>
        ))}
      </div>

      <div className='mt-10'>
        <p className='text-white text-2xl font-bold text-center mb-3'>Puntaje</p>
        <div className='flex justify-center items-center'>
          <h2 className='text-white text-2xl font-bold text-center'>Jugador:</h2>
          <motion.p
            className='text-white text-2xl font-bold text-center mx-3'
            key={`playerScore-${puntage.X}`}
            animate={{
              scale: puntage.X > 0 ? [1, 1.3, 1] : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {puntage.X}
          </motion.p>

          <h2 className='text-white text-2xl font-bold text-cente ml-3'>Maquina:</h2>
          <motion.p
            className='text-white text-2xl font-bold text-center mx-3'
            key={`computerScore-${puntage.O}`}            
            animate={{
              scale: puntage.O > 0 ? [1, 1.3, 1] : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {puntage.O}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Board;