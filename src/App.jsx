import { useState } from "react";

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
      <div className="status">{status}</div>
      <div className="game">
        <Board values={currentSquares} onClick={handleClick} />
      </div>
      <div className="history">
        <ol>{moves}</ol>
      </div>
    </>
  );
}

function Board({ values, onClick }) {
  return (
    <div className="board">
      {values.map((square, i) => (
        <Square
          key={i}
          square={square}
          onSquareClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}

function calculateWinner(step) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      step[a] &&
      step[a] === step[b] &&
      step[a] === step[c]
    ) {
      return step[a];
    }
  }

  return null;
}

function Square({ square, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {square}
    </button>
  );
}
