export enum HAND {
  DEALER = "DEALER",
  PLAYER = "PLAYER",
}

export enum SUIT {
  HEARTS,
  DIAMONDS,
  CLUBS,
  SPADES,
}

export enum FACE {
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
}

export type TCard = {
  face: FACE;
  suit: SUIT;
  hand?: HAND;
};

export type TDeck = {
  cards: TCard[];
  deckId: string;
};


export type Points = {
  [HAND.PLAYER]: number;
  [HAND.DEALER]: number;
};

