import React from "react";
import Signup from "./Signup";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import "./App.css";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <header className='App-header'>
          <h2>mingle & munch</h2>
        </header>
        <main className='content'>
          <Signup />
        </main>
      </div>
    </FluentProvider>
  );
}

export default App;
