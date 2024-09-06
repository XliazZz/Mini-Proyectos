import React from 'react';
import Key from './Key';
import { lyrics } from '../logic/logic';
import Text from './Text';

const Board = () => {
  const [clickedLyrics, setClickedLyrics] = React.useState('');
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const [mayusPressed, setMayusPressed] = React.useState(false);
  const [blockPressed, setBlockPressed] = React.useState(false);
  const [ctrlPressed, setCtrlPressed] = React.useState(false);
  const textAreaRef = React.useRef(null);

  const handleClick = (lyric) => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  
    const textArea = textAreaRef.current;
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
  
    if (lyric === 'Space') {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + ' ' + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition + 1);
    } else if (lyric === 'Delete') {
      if (selectionStart !== selectionEnd) {
        setClickedLyrics((prevLyrics) => prevLyrics.slice(0, selectionStart) + prevLyrics.slice(selectionEnd));
        setCursorPosition(selectionStart);
      } else if (clickedLyrics.length < 1) {
        setClickedLyrics('');
        setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0); 
      } else {
        setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition - 1) + prevLyrics.slice(cursorPosition));
        setCursorPosition(cursorPosition > 0 ? cursorPosition - 1 : 0);
      }
    } else if (lyric === "Enter") {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + "\n" );
      setCursorPosition(cursorPosition + 1);
    } else if (lyric === "Tab") {
      setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + '      ' + prevLyrics.slice(cursorPosition));
      setCursorPosition(cursorPosition + 6);
    } else if (lyric === 'Ctrl' || lyric === 'Ctrl ') {
      setCtrlPressed(!ctrlPressed);
    } else if (ctrlPressed) {
      switch (lyric) {
        case 'c':
          document.execCommand('copy');
          break;
        case 'v':
          navigator.clipboard.readText().then((text) => {
            setClickedLyrics((prevLyrics) => prevLyrics.slice(0, cursorPosition) + text + prevLyrics.slice(cursorPosition));
            setCursorPosition(cursorPosition + text.length);
          }).catch((err) => {
            console.error('Failed to read clipboard contents: ', err);
          });
          break;
        case 'x':
          document.execCommand('cut');
          break;
        default:
          break;
      }
      setCtrlPressed(false);
  
    } else if (lyric === 'Block') {
      setBlockPressed(!blockPressed);
    } else if (lyric === 'Mayús' || lyric === 'Mayús ') {
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
  
      if (blockPressed) {
        newLyric = newLyric.toUpperCase();
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

  const handleTextAreaClick = (e) => {
    setCursorPosition(e.target.selectionStart);
  };
  
  return (
    <div className='container m-auto'>
      <header className='content-center flex text-center justify-center font-Outfit '>
        <h1 className='text-6xl mb-10 font-bold'>Keyboard Digital</h1>
      </header>
      <Text some={clickedLyrics} textAreaRef={textAreaRef} onChange={handleInputChange} onClick={handleTextAreaClick} />
      <div className='flex justify-center'>
        <div className='my-10 w-full'>
          {lyrics.map((row, rowIndex) => (
            <div key={rowIndex} className=' flex mb-2'>
              {row.map((lyric) => (
                <Key
                  lyric={lyric}
                  key={lyric}
                  onClick={() => handleClick(lyric)}
                  mayusPressed={mayusPressed}
                  blockPressed={blockPressed}
                  ctrlPressed={ctrlPressed}
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