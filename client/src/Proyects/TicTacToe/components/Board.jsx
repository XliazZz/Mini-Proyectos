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
  
      if (!newBoard.includes(null) && !checkWinner(newBoard)) {
        setWinner('draw');
      } else {
        setWinner(checkWinner(newBoard));
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
      <div className='flex justify-center items-center mb-0'>
        <div className={`p-2 mx-auto rounded-tl-lg rounded-tr-lg border-b ${player === 'X' ? 'border-b-red-500' : ''} bg-gray-900`}>
          <p className='text-white text-2xl font-bold text-center mb-3'>Jugador</p>
          <p className={`font-bold text-center mb-3 text-6xl ${player === 'X' ? 'text-red-500' : 'text-white'}`}>X</p>
        </div>

        <div className={`p-2 mx-auto rounded-tl-lg rounded-tr-lg border-b ${player === 'O' ? 'border-b-blue-500' : ''} bg-gray-900`}>
          <p className='text-white text-2xl font-bold text-center mb-3'>Maquina</p>
          <p className={`font-bold text-center mb-3 text-6xl ${player === 'O' ? 'text-blue-500' : 'text-white'}`}>O</p>
        </div>
      </div>

      <div className='flex justify-center mb-6'>
        <motion.p
          className='text-white font-bold text-center mx-auto mt-3 text-4xl'
          key={`playerScore-${puntage.X}`}
          animate={{
            scale: puntage.X > 0 ? [1, 1.3, 1] : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5}}
        >
          {puntage.X}
        </motion.p>
        <motion.p
          className='text-white font-bold text-center mx-auto mt-3 text-4xl'
          key={`computerScore-${puntage.O}`}            
          animate={{
            scale: puntage.O > 0 ? [1, 1.3, 1] : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5}}
        >
          {puntage.O}
        </motion.p>
      </div>

      <div className='grid grid-cols-3 grid-rows-3 p-3 gap-y-0 w-80 h-80 bg-indigo-500 gap-x-4 items-center justify-center rounded-lg'>
        {board.map((cell, index) => (
          <Tile key={index} value={cell} index={index} callback={updateBoard}/>
        ))}
      </div>

    </div>
  );
};

export default Board;