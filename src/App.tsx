import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { startGameAction } from "./actions/actions";

import { Board } from "./components/board";

import { Button } from "@mui/base/Button";

export const App = () => {
  const dispatch = useDispatch<any>();
  const [isGameStarted, startGame] = useState(false);

  const handleStartGame = () => {
    dispatch(startGameAction());
    startGame(true);
  };
  return (
    <section style={{ minHeight: "100vh" }}>
      {isGameStarted ? (
        <Board />
      ) : (
        <Button onClick={handleStartGame}>Start game</Button>
      )}
    </section>
  );
};
