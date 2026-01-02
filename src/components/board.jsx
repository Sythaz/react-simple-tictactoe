import Square from "./square";

export default function Board({ values, onClick }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[105px]">
      {values.map((square, i) => (
        <Square key={i} square={square} onSquareClick={() => onClick(i)} />
      ))}
    </div>
  );
}
