import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { TCard, HAND } from "../types";
import { Button } from "@mui/base/Button";
import { Card } from "./card";
import { calculatePoints } from "../helpers";
import { pickCardAction, endGameAction } from "../actions/actions";

export const Board = () => {
  const dispatch = useDispatch<any>();
  const [areCardsHidden, hideCards] = useState(true);

  const {
    dealerCards,
    playerCards,
    deck: deckId,
    points,
  } = useSelector<RootState, RootState>((state) => state);

  const [playerPoints, setPlayerPoints] = useState(
    calculatePoints(playerCards)
  );

  const handleGetNextCard = () => {
    dispatch(pickCardAction(HAND.PLAYER, deckId));
  };

  const handleStand = () => {
    dispatch(pickCardAction(HAND.DEALER, deckId));
    hideCards(false);
  };

  useEffect(() => {
    const playerPoints = calculatePoints(playerCards);
    setPlayerPoints(playerPoints);
    if (playerPoints >= 21) {
      dispatch(pickCardAction(HAND.DEALER, deckId));
    }
  }, [dispatch, deckId, playerCards, dealerCards]);

  // const playerPoints = calculatePoints(playerCards);
  let winner = null;

  if (points.PLAYER >= 21) {
    winner = HAND.DEALER;
  } else if (points.DEALER >= 21) {
    winner = HAND.PLAYER;
  } else if (points.DEALER + points.PLAYER === 0) {
    winner = null;
  } else {
    winner = points.DEALER > points.PLAYER ? HAND.DEALER : HAND.PLAYER;
  }

  const display = winner ? "flex" : "none";

  return (
    <>
      {" "}
      <section>
        <section className="CardSection">
          {dealerCards.map((card, index) => {
            return (
              <Card
                key={card.face + card.face + HAND.DEALER}
                hidden={index !== 0 && areCardsHidden}
                face={card.face}
                suit={card.suit}
              />
            );
          })}
        </section>
        <section className="CardSection">
          <p> Player points: {playerPoints}</p>{" "}
          <p style={{ display }}> Dealer points: {playerPoints}</p>{" "}
        </section>
        <section className="CardSection" style={{ display }}>
          <p> Winner: {winner}</p>{" "}
        </section>
        <section className="CardSection">
          {playerCards.map((card) => {
            return (
              <Card
                key={card.face + card.face + HAND.PLAYER}
                face={card.face}
                suit={card.suit}
              />
            );
          })}
        </section>
        <section className="CardSection">
          <Button onClick={handleGetNextCard}>Hit</Button>
          <Button onClick={handleStand}>Stand</Button>
        </section>
      </section>
    </>
  );
};
