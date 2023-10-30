import { ADD_DEALER_CARDS } from "../actions/constants";
import { TCard } from "../types";
const initialState: TCard[] = [];

type Action = {
  payload: TCard[];
  type: string;
};

export default function playerCards(state = initialState, action: Action) {

  switch (action.type) {
    case ADD_DEALER_CARDS:

      return [...state, ...action.payload];

    default:
      return state;
  }
}
