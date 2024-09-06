import React from "react"

export const keyboardStates = () => {
  const [clickedLyrics, setClickedLyrics] = React.useState('');
  const [cursorPosition, setCursorPosition] = React.useState(0);
  const [mayusPressed, setMayusPressed] = React.useState(false);
  const [blockPressed, setBlockPressed] = React.useState(false);
  const [ctrlPressed, setCtrlPressed] = React.useState(false);

  return {
    clickedLyrics, setClickedLyrics,
    cursorPosition, setCursorPosition,
    mayusPressed, setMayusPressed,
    blockPressed, setBlockPressed,
    ctrlPressed, setCtrlPressed
  };
};