import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>React課題</h1>
          <nav>
            <ul className="Flex">
              <li className="ListStyle">
                <a href="/general4.tsx">総合課題４</a>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/general4.tsx" element={<General4 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
// react-router-dom入れたとこ
export default App;
