import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Signup from "./components/Signup";
import { FluentProvider } from "@fluentui/react-components";
import "./App.css";
import Title from "./components/Title";
import { defaultTheme } from "./themes/default-theme";
import Footer from "./components/Footer";

const Thanks = () => <div>Thank you ...</div>;

function App() {
  return (
    <FluentProvider theme={defaultTheme}>
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Title />
            <div className={"main-image"}></div>
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
      <Footer/>
    </FluentProvider>
  );
}

export default App;
