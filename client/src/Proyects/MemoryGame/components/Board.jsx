import Card from './Card';
import { motion } from 'framer-motion';
import { showSwal } from '../swal/showSwal';
import { generateCards } from '../gameLogic/generateCards';
import { useGameState } from '../gameLogic/states';
import { useGameHandlers } from '../gameLogic/handlers'; 
import { useGameEffects } from '../gameLogic/effects';

const Board = () => {
  const state = useGameState();
  const handlers = useGameHandlers(state);

  const resetGame = () => {
    state.setIsGameWon(false);
    state.setIsGameStarted(false);
    state.setFlippedIndices([]);
    state.setMatchedPairs([]);
    const { cards, timeLimit } = generateCards(state.difficulty);
    state.setCards(cards);
    state.setTimeRemaining(timeLimit);
    state.setInitialTimeLimit(timeLimit);
    state.setCountFailedAttempts(0);
  };

  const initializeGame = () => {
    resetGame();
    const { cards, timeLimit } = generateCards(state.difficulty);
    state.setCards(cards);
    state.setInitialTimeLimit(timeLimit);
  };

  useGameEffects(state, resetGame, initializeGame, handlers);
  
  showSwal(state.isGameWon, resetGame, state.timeRemaining, state.isGameStarted);
 

  return (
    <div className='flex'>
      <div className='w-1/4 ml-14'>
        <h1 className='text-3xl mb-5 text-center text-white font-light'>Tiempo restante</h1>
        <h2 className='text-6xl mb-14 text-center text-white font-extrabold'>{state.timeRemaining}</h2>

        <div className='mt-14 items-center content-center justify-center justify-items-center flex'>
          <motion.button
            className={`${
              state.difficulty === 'easy'
                ? 'bg-green-300 text-gray-900 hover:bg-green-300 cursor-auto'
                : 'bg-green-500 opacity-75 text-white hover:bg-green-700'
            }  mx-1  font-bold py-2 px-4 rounded-lg`}
            onClick={() => handlers.handleDifficultyChange('easy')}
            whileHover={state.difficulty === 'easy' ? { scale: 1 } : { scale: 1.05 }}
            whileTap={state.difficulty === 'easy' ? { scale: 1 } : { scale: 1.01}}
          >
            Fácil
          </motion.button>
          <motion.button
            className={`${
              state.difficulty === 'medium'
                ? 'bg-yellow-300 text-gray-900 hover:bg-yellow-300 cursor-auto'
                : 'bg-yellow-500 opacity-75 text-white hover:bg-yellow-700'
            }  mx-1 font-bold py-2 px-4 rounded-lg`}
            onClick={() => handlers.handleDifficultyChange('medium')}
            whileHover={state.difficulty === 'medium' ? { scale: 1 } : { scale: 1.05 }}
            whileTap={state.difficulty === 'medium' ? { scale: 1 } : { scale: 1.01}}
          >
            Medio
          </motion.button>
          <motion.button
            className={`${
              state.difficulty === 'hard'
                ? 'bg-red-300 text-red-950 hover:bg-red-300 cursor-auto'
                : 'bg-red-500 opacity-75 hover:bg-red-700 text-white'
            }  mx-1  font-bold py-2 px-4 rounded-lg`}
            onClick={() => handlers.handleDifficultyChange('hard')}
            whileHover={state.difficulty === 'hard' ? { scale: 1 } : { scale: 1.05 }}
            whileTap={state.difficulty === 'hard' ? { scale: 1 } : { scale: 1.01}}
          >
            Difícil
          </motion.button>
        </div>

        <div className='text-center mt-16'>
          <span className='text-3xl'>Aciertos: {state.matchedPairs.length}/{state.cards.length / 2}</span>
        </div>

        <div className='text-center mt-10 text-3xl'>
          <span>Errores: <span className='text-red-600'>{state.countFailedAttempts}</span></span>
        </div>

        <div className='justify-center text-center justify-items-center content-center mt-20'>
          <motion.button className={`${state.isGameStarted ? 'from-green-600 to-lime-800 hover:from-indigo-700 hover:to-blue-900' : ' from-indigo-600 to-blue-900  hover:from-green-700 hover:to-lime-900'} p-3 text-4xl rounded-lg w-80 bg-gradient-to-br hover:bg-gradient-to-tr `}
            onClick={state.isGameStarted ? resetGame : () => handlers.handleGameStarted()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.01 }}
          >{state.isGameStarted ? (
            <span>Reiniciar</span>
          ) : (
            <span>Empezar</span>
          )}</motion.button>
        </div>
      </div>

      {state.difficulty === 'easy' && (
        <motion.div className='w-3/4 px-16 grid grid-cols-4 justify-items-center gap-x-5 gap-y-5'

        >
          {state.cards.map((card, index) => (
            <Card
              key={card.id}
              content={card.content}
              isFlipped={state.flippedIndices.includes(index) || state.matchedPairs.includes(card.content)}
              isMatched={state.matchedPairs.includes(card.content)}
              isSelected={handlers.isCardSelected(index)}
              onClick={() => handlers.handleCardClick(index)}
              difficulty={state.difficulty}
            />
          ))}
        </motion.div>
      )}

      {state.difficulty === 'medium' && (
        <motion.div className='w-3/4 px-16 grid grid-cols-5  justify-items-center gap-x-5 gap-y-5 '

        >
          {state.cards.map((card, index) => (
            <Card
              key={card.id}
              content={card.content}
              isFlipped={state.flippedIndices.includes(index) || state.matchedPairs.includes(card.content)}
              isMatched={state.matchedPairs.includes(card.content)}
              isSelected={handlers.isCardSelected(index)}
              onClick={() => handlers.handleCardClick(index)}
              difficulty={state.difficulty}
            />
          ))}
        </motion.div>
      )}

      {state.difficulty === 'hard' && (
        <motion.div className='w-3/4 px-16 grid grid-cols-6 grid-rows-4 justify-items-center gap-x-5 gap-y-4 '

        >
          {state.cards.map((card, index) => (
            <Card
              key={card.id}
              content={card.content}
              isFlipped={state.flippedIndices.includes(index) || state.matchedPairs.includes(card.content)}
              isMatched={state.matchedPairs.includes(card.content)}
              isSelected={handlers.isCardSelected(index)}
              onClick={() => handlers.handleCardClick(index)}
              difficulty={state.difficulty}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Board;

