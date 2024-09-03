import React from 'react';
import Key from './Key';
import { lyrics } from '../logic/logic';
import Text from './Text';

const Board = () => {
  const [clickedLyrics, setClickedLyrics] = React.useState('');
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const [mayusPressed, setMayusPressed] = React.useState(false);
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

   else if (lyric === 'Mayús') {
    setMayusPressed(!mayusPressed);
  } else {
    let newLyric = lyric;
    if (mayusPressed) {
      const specialChar = lyric.split(' ')[1];
      newLyric = specialChar ? specialChar : lyric.toUpperCase();
      setMayusPressed(false);
    } else {
      newLyric = lyric.split(' ')[0];
    }
    setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + newLyric + prevLyrics.slice(cursorPosition));
    setCursorPosition(cursorPosition + newLyric.length);
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
    <div className='container  m-auto'>
      <header className='content-center flex text-center justify-center'>
        <h1 className='text-6xl mb-10 font-bold'>Keyboard Digital</h1>
      </header>
      <Text some={clickedLyrics} textAreaRef={textAreaRef} onChange={handleInputChange}/>
      <div className='flex justify-center'>
      <div className='my-10 w-[86%]'>
      {lyrics.map((row, rowIndex) => (
        <div key={rowIndex} className='bg-black flex mb-2 '>
          {row.map((lyric) => (
              <Key lyric={lyric} key={lyric} 
                onClick={() => handleClick(lyric)}
                mayusPressed={mayusPressed}               
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
