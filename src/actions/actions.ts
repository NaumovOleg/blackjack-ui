import {
  ADD_DEALER_CARDS,
  ADD_PLAYER_CARDS,
  SET_DECK,
  SET_POINTS,
} from "./constants";
import { HAND, TDeck, Points } from "../types";
import axios from "axios";
import { Dispatch } from "redux";

export const startGameAction = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get<any, { data: TDeck }>(
      `http://localhost:3000/api/v1/game/start`
    );

    dispatch({
      type: ADD_PLAYER_CARDS,
      payload: data.cards.filter((card) => card.hand === HAND.PLAYER),
    });
    dispatch({
      type: ADD_DEALER_CARDS,
      payload: data.cards.filter((card) => card.hand === HAND.DEALER),
    });
    dispatch({
      type: SET_DECK,
      payload: data.deckId,
    });
  } catch (error) {
    console.error(error);
  }
};


export const endGameAction = (deckId: string) => async (dispatch: Dispatch) => {
  const { data } = await axios.get<any, { data: Points }>(
    `http://localhost:3000/api/v1/game/end`,
    { params: { deckId } }
  );

  dispatch({
    type: SET_POINTS,
    payload: data,
  });
};

export const pickCardAction =
  (hand: HAND, deckId: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get<any, { data: TDeck }>(
        `http://localhost:3000/api/v1/card`, { params: { hand, deckId } }
      );

      dispatch({
        type: hand === HAND.PLAYER ? ADD_PLAYER_CARDS : ADD_DEALER_CARDS,
        payload: data,
      });

      if (hand === HAND.DEALER) {
        const { data: points } = await axios.get<any, { data: Points }>(
          `http://localhost:3000/api/v1/game/end`,
          { params: { deckId } }
        );

        dispatch({
          type: SET_POINTS,
          payload: points,
        });
      }

    } catch (error) {
      console.error(error);
    }
  };
