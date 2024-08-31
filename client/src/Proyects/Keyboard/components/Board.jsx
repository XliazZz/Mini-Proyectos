import React from 'react';
import Key from './Key';
import { lyrics } from '../logic/logic';
import Text from './Text';

const Board = () => {
  const [clickedLyrics, setClickedLyrics] = React.useState('');
  const [cursorPosition, setCursorPosition] = React.useState(0);

  const handleClick = (lyric) => {
    if (lyric === ' ') {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + ' ' + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition + 1);
    } else if (lyric === 'Delete') {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition - 1) + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
    } else if (lyric === 'arrow left') {
      setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
    } else if (lyric === 'arrow right') {
      setCursorPosition(cursorPosition < clickedLyrics.length ? cursorPosition + 1 : clickedLyrics.length);
    } else {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + lyric + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition + lyric.length);
    }
  };
  

  return (
    <div>
      <Text some={clickedLyrics} />
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
