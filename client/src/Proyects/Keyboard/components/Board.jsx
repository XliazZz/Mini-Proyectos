import React from 'react';
import Key from './Key';
import { lyrics, handleClick } from '../logic/logic';
import { keyboardStates } from '../logic/states';
import Text from './Text';

const Board = () => {
  const textAreaRef = React.useRef(null);

  const state = keyboardStates();
  const handler = React.useCallback((lyric) => handleClick(lyric, state, textAreaRef), [state]);

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.setSelectionRange(state.cursorPosition, state.cursorPosition);
    }
  }, [state.cursorPosition, state.clickedLyrics]);

  const handleInputChange = (e) => {
    state.setClickedLyrics(e.target.value);
    state.setCursorPosition(e.target.selectionStart);
  };

  const handleTextAreaClick = (e) => {
    state.setCursorPosition(e.target.selectionStart);
  };

  return (
    <div className='container m-auto'>
      <header className='content-center flex text-center justify-center font-Outfit'>
        <h1 className='lg:text-6xl md:text-5xl sm:text-3xl xs:text-xl mb-10 font-bold'>Keyboard Digital</h1>
      </header>
      <Text some={state.clickedLyrics} textAreaRef={textAreaRef} onChange={handleInputChange} onClick={handleTextAreaClick} />
      <div className='flex justify-center'>
        <div className='my-10 w-full'>
          {lyrics.map((row, rowIndex) => (
            <div key={rowIndex} className='flex mb-2'>
              {row.map((lyric) => (
                <Key
                  lyric={lyric}
                  key={lyric}
                  onClick={() => handler(lyric)}
                  mayusPressed={state.mayusPressed}
                  blockPressed={state.blockPressed}
                  ctrlPressed={state.ctrlPressed}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;