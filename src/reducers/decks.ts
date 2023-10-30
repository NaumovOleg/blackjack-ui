
import { SET_DECK } from "../actions/constants";
import { TCard } from "../types";
const initialState: TCard[] = [];

type Action = {
  payload: string;
  type: string;
};

export default function deck(state = initialState, action: Action) {
  switch (action.type) {
    case SET_DECK:
      return action.payload;

    default:
      return state;
  }
}
