import { combineReducers } from "redux";
import dealerCards from "./dealerCards";
import playerCards from "./playerCards";
import deck from "./decks";
import points from "./points";

const rootReducer = combineReducers({
  playerCards,
  dealerCards,
  deck,
  points,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
