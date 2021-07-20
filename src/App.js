import React from "react";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Project from "./components/Project";
import { GlobalStateProvider } from "./components/GlobalState";
import { CustomCursorProvider } from "./context/cursor";
import "./style.css";

function App() {
  return (
    <GlobalStateProvider>
      <Header />

      <CustomCursorProvider>
        {[...Array(8).keys()].map((item, index) => (
          <Project key={index} id={index}>
            Hello!
          </Project>
        ))}
      </CustomCursorProvider>

      <Carousel />
    </GlobalStateProvider>
  );
}

export default App;
