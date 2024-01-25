import Swal from "sweetalert2";
import { useEffect } from "react";

export const showSwal = (winner, restartGame, setPuntage) => {
  useEffect(() => {
    if (winner === 'X') {
      Swal.fire({
        title: `Ganaste`,
        icon: "success",
        confirmButtonText: "Jugar de nuevo",
      }).then(() => {
        setPuntage((prevPuntage) => ({
          ...prevPuntage,
          X: prevPuntage.X + 1
        }));
        restartGame();
      });

    } else if (winner === 'O') {
      Swal.fire({
        title: `Perdiste`,
        icon: "error",
        confirmButtonText: "Jugar de nuevo",
      }).then(() => {
        setPuntage((prevPuntage) => ({
          ...prevPuntage,
          O: prevPuntage.O + 1
        }));
        restartGame();
      });
      
    } else if (winner === 'draw') {
      Swal.fire({
        title: "Empate",
        icon: "info",
        confirmButtonText: "Jugar de nuevo",
      }).then(() => {
        restartGame();
      });
    }
  }, [winner]);

}