import { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ content, isFlipped, isMatched, isSelected, onClick, difficulty }) => {

  const [difficultyChange, setDifficultyChange] = useState(false);

  const theDifficulty = difficultyChange ? difficulty : '';

  return (
    <motion.div
      className={`card w-full ${difficulty === 'hard' ? 'h-32' : 'h-40'} ${!isFlipped ? 'bg-indigo-500' : ''} rounded-xl flex justify-center items-center cursor-pointer select-none text-7xl 
        ${isMatched ? 'bg-green-600 cursor-auto'  : ( isSelected ? 'bg-red-400' : isFlipped && !isMatched ? 'bg-indigo-200' : '')}`}
      onClick={() => onClick()}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 1.1 }}
      initial={theDifficulty !== difficulty ? { opacity: 0 } : { opacity: 1}}
      animate={theDifficulty !== difficulty ? { rotate: 360, opacity: 1 } : { rotate: 0}}
  >
      {isFlipped ? content : ' '}
    </motion.div>
  );
};

export default Card;