import Square from './square'

export default function Board({ values, onClick }) {
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