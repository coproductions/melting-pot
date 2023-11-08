import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Signup from "./Signup";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import "./App.css";
import Title from "./Title";

const Thanks = () => <div>Thank you ...</div>;

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Title/>
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </FluentProvider>
  );
}

export default App;
