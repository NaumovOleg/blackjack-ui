import { SET_POINTS } from "../actions/constants";
import { HAND, Points } from "../types";

const initialState: Points = {
  [HAND.PLAYER]: 0,
  [HAND.DEALER]: 0,
};
type Action = {
  payload: Points;
  type: string;
};

export default function playerCards(state = initialState, action: Action) {
  switch (action.type) {
    case SET_POINTS:
      return action.payload;

    default:
      return state;
  }
}
