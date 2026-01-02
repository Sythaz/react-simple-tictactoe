import { useState } from "react";
import Board from "./components/board";
import { calculateWinner } from "./utils/gameLogic";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);

  const currentSquares = history[step];
  const isXNext = step % 2 === 0;

  const winner = calculateWinner(currentSquares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!currentSquares.includes(null)) {
    status = "Result: Draw!";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  function handleClick(i) {
    if (currentSquares[i] || winner) return;

    const nextHistory = history.slice(0, step + 1);

    const nextSquares = currentSquares.slice();
    nextSquares[i] = isXNext ? "X" : "O";

    setHistory([...nextHistory, nextSquares]);
    setStep(nextHistory.length);
  }

  function jumpTo(nextMove) {
    setStep(nextMove);
  }

  const moves = history.map((_, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="root">
        <div className="status">{status}</div>

        <div className="game-container">
          
          <div className="game">
            <Board values={currentSquares} onClick={handleClick} />
          </div>

          <div className="history">
            <h3>History: </h3>
            <ol>{moves}</ol>
          </div>
        
        </div>

      </div>
    </>
  );
}
