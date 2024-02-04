export const generateCards = (difficulty) => {
  const symbolsEasy = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧁', '🍩', '🍦'];
  const difficultyTimeEasy = 190;

  const symbolsMedium = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧁', '🍩', '🍦', '🍣', '🍪'];
  const difficultyTimeMedium = 160;

  const symbolsHard = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧁', '🍩', '🍦', '🍣', '🍪', '🍭', '🥤', '🍎', '🍉', '🍓'];
  const difficultyTimeHard = 90;

  let symbols;
  let timeLimit;
  switch (difficulty) {
    case 'easy':
      symbols = symbolsEasy;
      timeLimit = difficultyTimeEasy;
      break;
    case 'medium':
      symbols = symbolsMedium;
      timeLimit = difficultyTimeMedium;
      break;
    case 'hard':
      symbols = symbolsHard;
      timeLimit = difficultyTimeHard;
      break;
    default:
      symbols = symbolsEasy;
      timeLimit = difficultyTimeEasy;
  }

  const cards = symbols.concat(symbols);
  return { cards: shuffleArray(cards).map((content, index) => ({ content, id: index })), timeLimit };
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
