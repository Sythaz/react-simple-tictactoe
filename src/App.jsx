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
      <li className="m-3" key={move}>
        <button
          className="bg-white border border-black border-solid rounded active:bg-gray-200 hover:bg-gray-100 p-1"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="font-sans m-5">
        <div className="status">{status}</div>

        <div className="flex flex-row align-top gap-5">
          <div className="game">
            <Board values={currentSquares} onClick={handleClick} />
          </div>

          <div className="history">
            <h3 className="m-0">History: </h3>
            <ol className="list-decimal">{moves}</ol>
          </div>
        </div>
      </div>
    </>
  );
}
