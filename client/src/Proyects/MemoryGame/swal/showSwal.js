import Swal from 'sweetalert2';
import { useEffect } from 'react';

export const showSwal = (isGameWon, resetGame, timeRemaining) => {
  useEffect(() => {
    if (isGameWon) {
      Swal.fire({
        title: '¡Felicidades!',
        text: '¡Ganaste!',
        icon: 'success',
        confirmButtonText: 'Jugar de nuevo',
      }).then(() => {
        resetGame();
      });
    } else if (timeRemaining === 0) {
      Swal.fire({
        title: '¡Lo siento!',
        text: '¡Se acabó el tiempo!',
        icon: 'error',
        confirmButtonText: 'Jugar de nuevo',
      }).then(() => {
        resetGame();
      });
    }
  }, [isGameWon, resetGame]);
};