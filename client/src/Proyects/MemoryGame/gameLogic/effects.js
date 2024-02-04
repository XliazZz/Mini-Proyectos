import { useEffect } from 'react';

export const useGameEffects = (state, resetGame, initializeGame, handlers) => {
  useEffect(() => {
    resetGame();
  }, [state.difficulty]);

  useEffect(() => {
    state.setIsGameWon(false);
    initializeGame();
  }, []);

  useEffect(() => {
    if (state.flippedIndices.length === 2) {
      handlers.checkForMatch();
    }
  }, [state.flippedIndices]);
  

  useEffect(() => {
    if (state.matchedPairs.length === state.cards.length / 2 && state.isGameStarted) {
      handlers.handleGameEnd();
    }
  }, [state.matchedPairs, state.cards, state.isGameStarted]);  

  useEffect(() => {
    if (state.isGameStarted) {
      const timerInterval = setInterval(() => {
        if (state.timeRemaining > 0) {
          state.setTimeRemaining((prev) => prev - 1);
        }
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [state.isGameStarted, state.timeRemaining]);

  return {};
};