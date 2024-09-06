export const useGameHandlers = (state) => {
  const handleDifficultyChange = (newDifficulty) => {
    state.setDifficulty(newDifficulty);
    state.setIsGameStarted(false);
  };

  const handleCardClick = (index) => {
    state.setIsGameStarted(true);
    if (
      state.flippedIndices.length < 2 &&
      !state.flippedIndices.includes(index) &&
      !state.matchedPairs.includes(state.cards[index].content)
    ) {
      state.setFlippedIndices((prev) => [...prev, index]);
    }
  };

  const handleGameStarted = () => {
    state.setIsGameStarted(true);
  };

  const handleGameEnd = () => {
    state.setIsGameWon(true);
    state.setIsGameStarted(false);
    state.setCountFailedAttempts(0);
    clearInterval(state.timeRemaining);
  };

  const checkForMatch = () => {
    const [firstIndex, secondIndex] = state.flippedIndices;
    if (state.cards[firstIndex].content === state.cards[secondIndex].content) {
      state.setMatchedPairs((prev) => [...prev, state.cards[firstIndex].content]);
      state.setFlippedIndices([]);
  
      if (state.matchedPairs.length + 1 === state.cards.length / 2) {
        handleGameEnd();
      }
    } else {
      state.setCountFailedAttempts((prev) => prev + 1);
      setTimeout(() => state.setFlippedIndices([]), 500);
    }
  };  

  const isCardSelected = (index) => {
    return (
      state.flippedIndices.includes(index) &&
      state.flippedIndices.length === 2 &&
      !state.matchedPairs.includes(state.cards[index].content)
    );
  };

  return {
    handleDifficultyChange,
    handleCardClick,
    handleGameStarted,
    handleGameEnd,
    checkForMatch,
    isCardSelected,
  };
};
