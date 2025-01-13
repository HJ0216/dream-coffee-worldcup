import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import ResultPage from "./pages/GameResult";

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
    <Router>
      <GlobalStyle />
      <Routes>
        {/* 메인 게임 페이지 */}
        <Route path="/" element={<Game />} />
        {/* 결과 페이지 */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
