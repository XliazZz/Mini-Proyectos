export const lyrics = [
  ['@', `1 !`, '2 "', '3 #', '4 $', '5 %', '6 &', '7 /', '8 (', '9 )', '0 °', '¬ *', '=', 'Delete'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[ {', '] }', '| ?'],
  ['Block', 'a', 's', 'd', 'g', 'h', 'j', 'k', 'l', 'ñ', '; :', '^ ¿', 'Enter'],
  ['Mayús', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', <', ', >', '- _', 'Mayús '],
  ['Ctrl', 'Windows', 'Alt', 'Space', 'AltGr', 'Options', 'Ctrl ']
];

export const handleClick = (lyric, state, areaRef) => {
  const textArea = areaRef.current;
  if (!textArea) return; 

  textArea.focus();
  const selectionStart = textArea.selectionStart;
  const selectionEnd = textArea.selectionEnd;

  if (lyric === 'Space') {
    state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, state.cursorPosition) + ' ' + prevLyrics.slice(state.cursorPosition));
    state.setCursorPosition(state.cursorPosition + 1);
  } else if (lyric === 'Delete') {
    if (selectionStart !== selectionEnd) {
      state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, selectionStart) + prevLyrics.slice(selectionEnd));
      state.setCursorPosition(selectionStart);
    } else if (state.clickedLyrics.length < 1) {
      state.setClickedLyrics('');
      state.setCursorPosition(state.cursorPosition > 0 ? state.cursorPosition - 1 : 0); 
    } else {
      state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, state.cursorPosition - 1) + prevLyrics.slice(state.cursorPosition));
      state.setCursorPosition(state.cursorPosition > 0 ? state.cursorPosition - 1 : 0);
    }
  } else if (lyric === "Enter") {
    state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, state.cursorPosition) + "\n" );
    state.setCursorPosition(state.cursorPosition + 1);
  } else if (lyric === "Tab") {
    state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, state.cursorPosition) + '      ' + prevLyrics.slice(state.cursorPosition));
    state.setCursorPosition(state.cursorPosition + 6);
  } else if (lyric === 'Ctrl' || lyric === 'Ctrl ') {
    state.setCtrlPressed(!state.ctrlPressed);
  } else if (state.ctrlPressed) {
    switch (lyric) {
      case 'c':
        document.execCommand('copy');
        break;
      case 'v':
        navigator.clipboard.readText().then((text) => {
          state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, state.cursorPosition) + text + prevLyrics.slice(state.cursorPosition));
          state.setCursorPosition(state.cursorPosition + text.length);
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
    state.setCtrlPressed(false);

  } else if (lyric === 'Block') {
    state.setBlockPressed(!state.blockPressed);
  } else if (lyric === 'Mayús' || lyric === 'Mayús ') {
    state.setMayusPressed(!state.mayusPressed);
  } else {
    let newLyric = lyric;
    if (state.mayusPressed) {
      const specialChar = lyric.split(' ')[1];
      newLyric = specialChar ? specialChar : lyric.toUpperCase();
      state.setMayusPressed(false);
    } else {
      newLyric = lyric.split(' ')[0];
    }

    if (state.blockPressed) {
      newLyric = newLyric.toUpperCase();
    }

    state.setClickedLyrics((prevLyrics) => prevLyrics.slice(0, state.cursorPosition) + newLyric + prevLyrics.slice(state.cursorPosition));
    state.setCursorPosition(state.cursorPosition + newLyric.length);
  }
};

//KEY
export const getStyle = (lyric) => {
  switch (lyric) {
    case 'Tab':
    case '| ?':
      return `
      lg:w-[70%] lg:text-left 
      xs:text-center
      sm:text-left
      `;
    case 'Block':
    case 'Enter':
      return `
      lg:w-[80%] lg:text-left 
      xs:text-center
      sm:w-{}
      `;
    case 'Delete':
      return `
      lg:w-[78%] lg:text-left 
      xs:text-center
      `;
    case 'Mayús':
    case 'Mayús ':
      return `
      lg:w-[90%]  lg:text-left 
      xs:text-center`;
    case 'Windows':
    case 'AltGr':
    case 'Alt':
    case 'Options':
      return `
      lg:w-[20%] lg:text-left lg:h-12 lg:text-transparent
      xs:h-[20px] xs:w-[50%] xs:text-center xs:text-transparent 
      `;
    case 'Ctrl':
    case 'Fn':
    case 'Ctrl ':
      return `
      lg:w-[20%] lg:text-left lg:h-12 
      xs:h-[20px] xs:text-center
      `;
    case 'Space':
      return 'lg:w-[100%] xs:w-[100%] lg:justify-center md:justify-center';
    default:
      return `
      lg:w-[38%] lg:h-14 lg:text-left flex uppercase 
      xs:h-[20px] xs:w-[12em] xs:text-center
      sm:w-[50%]
      `;
  }
};