import { useState } from 'react';

export const useGameState = () => {
  const [isGameWon, setIsGameWon] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [difficulty, setDifficulty] = useState('easy');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [initialTimeLimit, setInitialTimeLimit] = useState(60);
  const [countFailedAttempts, setCountFailedAttempts] = useState(0);

  return {
    isGameWon,
    cards,
    flippedIndices,
    matchedPairs,
    timeRemaining,
    difficulty,
    isGameStarted,
    initialTimeLimit,
    countFailedAttempts,
    setIsGameWon,
    setCards,
    setFlippedIndices,
    setMatchedPairs,
    setTimeRemaining,
    setDifficulty,
    setIsGameStarted,
    setInitialTimeLimit,
    setCountFailedAttempts,
  };
};