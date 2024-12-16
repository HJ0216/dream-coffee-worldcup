import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nanum Brush Script', sans-serif;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Game/>
    </>
  );
}

export default App;
