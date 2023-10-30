import { FACE, SUIT } from "../types";

type Props = {
  face: FACE;
  suit: SUIT;
  hidden?: boolean;
};

export const Card = ({ face, suit, hidden = false }: Props) => {
  const suits = {
    [SUIT.CLUBS]: "♣",
    [SUIT.DIAMONDS]: "♦",
    [SUIT.HEARTS]: "♥",
    [SUIT.SPADES]: "♠",
  };

  const faces: any = {
    [FACE.ACE]: "ACE",
    [FACE.JACK]: "JACK",
    [FACE.QUEEN]: "QUEEN",
    [FACE.KING]: "KING",
  };

  return (
    <div className="card">
      <div className="rank">{hidden ? "***" : faces[face] ?? face + 2}</div>
      <div
        className={`suit ${
          suit === SUIT.DIAMONDS || suit === SUIT.CLUBS ? "red" : "black"
        }`}
      >
        {hidden ? "***" : suits[suit]}
      </div>
    </div>
  );
};
