import { TCard, FACE } from "./types";

export const getCardValue = (card: TCard) => {
  if (card.face <= FACE.TEN) {
    return [card.face + 2];
  }
  if (card.face !== FACE.ACE) {
    return [10];
  }

  return [11, 1];
};

export const calculatePoints = (cards: TCard[]): number => {
  return cards.reduce((points, card) => {
    const value = getCardValue(card);
    if (points >= 21 && card.face === FACE.ACE) {
      return points + value[1];
    }
    return points + value[0];
  }, 0);
};
