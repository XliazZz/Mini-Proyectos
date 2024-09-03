import React from 'react';

const Key = ({ lyric, onClick, mayusPressed }) => {
  const getStyle = (lyric) => {
    switch (lyric) {
      case 'Tab':
      case '|':
        return 'w-[70%] text-left';
      case 'Block May':
      case 'Enter':
        return 'w-[80%] text-left';
      case 'Delete':
        return 'w-[78%] text-left';
      case 'Mayús':
      case 'Mayús ':
        return 'w-[90%] text-left';
      case 'Ctrl':
      case 'Windows':
      case 'Alt':
      case 'AltGr':
      case 'Fn':
      case 'Options':
      case 'Ctrl ':
        return 'w-[20%] text-left h-12';
      case ' ':
        return 'w-[100%]';
      default:
        return 'w-[38%] h-14 flex uppercase';
    }
  };

  const styles = getStyle(lyric);

  return (
    <button onClick={onClick} className={`${styles} bg-white m-1 rounded-lg text-black container pl-1`}>
      <span className={lyric === 'Mayús' && mayusPressed ? 'text-2xl font-semibold text-red-500' : 'text-2xl font-semibold'}>
        {mayusPressed && lyric.length > 1 && lyric !== 'Tab' && lyric !== 'Block May' && lyric !== 'Mayús' && lyric !== 'Ctrl' && lyric !== 'Windows' && lyric !== 'Alt' && lyric !== 'AltGr' && lyric !== 'Options' && lyric !== 'Enter' && lyric !== 'Delete' ? (
          <>
            {lyric.slice(0, -1)}
            <span className="text-red-500">{lyric.slice(-1)}</span>
          </>
        ) : (
          lyric
        )}
      </span>
    </button>
  );
};

export default Key;

//TERMINE EL MAYUS IZQUIERDO, AL HACER CLICK EN EL SE PONEN DE COLORES LOS ESPECIALES Y EL. ARREGLAR EL PROBLEMA DE DONDE SE HACE CLICK NO SE SIGUE DE AHI ESCRIBIENDO, OSEA EL CLICK EN EL TEXTAREA NO ANDA