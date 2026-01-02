export default function Square({ square, onSquareClick }) {
  return (
    <button
      className="w-[35px] h-[35px] border border-black border-solid bg-white cursor-pointer text-[1.2rem] font-bold"
      onClick={onSquareClick}
    >
      {square}
    </button>
  );
}
