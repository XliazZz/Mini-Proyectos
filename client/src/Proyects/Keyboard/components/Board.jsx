import React from 'react';
import Key from './Key';
import { lyrics } from '../logic/logic';
import Text from './Text';

const Board = () => {
  const [clickedLyrics, setClickedLyrics] = React.useState('');
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const textAreaRef = React.useRef(null);

  const handleClick = (lyric) => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }

    if (lyric === ' ') {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + ' ' + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition + 1);
    } else if (lyric === 'Delete') {
      if (clickedLyrics.length < 1) {
        setClickedLyrics('');
        setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0); 
      } else {
        setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition - 1) + prevLyrics.slice(cursorPosition));
        setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
      }
    } else if (lyric === 'arrow left') {
      setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
    } else if (lyric === 'arrow right') {
      setCursorPosition(cursorPosition < clickedLyrics.length ? cursorPosition + 1 : clickedLyrics.length);
    }

    else {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + lyric + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition + lyric.length);
    }
  };

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.setSelectionRange(cursorPosition, cursorPosition);  
    }
  }, [cursorPosition, clickedLyrics]);

  const handleInputChange = (e) => {
    setClickedLyrics(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };
  
  return (
    <div>
      <Text some={clickedLyrics} textAreaRef={textAreaRef} onChange={handleInputChange}/>
      <div className='flex justify-center'>
        <div className='grid grid-cols-16 gap-1 grid-rows-5'>
          {lyrics.map((lyric) => (
            <Key lyric={lyric} key={lyric} onClick={() => handleClick(lyric)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
