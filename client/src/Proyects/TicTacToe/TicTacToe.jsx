import React from 'react';
import Board from './components/Board';

const TicTacToe = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>
      <Board />
    </div>
  );
}

export default TicTacToe;
