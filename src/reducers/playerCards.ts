import { ADD_PLAYER_CARDS } from "../actions/constants";
import { TCard } from "../types";
const initialState: TCard[] = [];
type Action = {
  payload: TCard[];
  type: string;
};
export default function playerCards(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_PLAYER_CARDS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
