import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Signup from "./components/Signup";
import { FluentProvider } from "@fluentui/react-components";
import "./App.css";
import Title from "./components/Title";
import { defaultTheme, theme2 } from "./themes/default-theme";
import Footer from "./components/Footer";
import ImageBanner from "./components/ImageBanner";
import FaqNav from "./components/FaqNav";

function getTheme(theme?: string | null) {
  switch (theme) {
    case "2":
      return theme2;
    default:
      return defaultTheme;
  }
}

const Thanks = () => <div>Thank you ...</div>;

function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const theme = queryParameters.get("theme");

  return (
    <FluentProvider theme={getTheme(theme)}>
      <HashRouter>
        <FaqNav />
        <div className="App">
          <header className="App-header">
            <Title />
            <ImageBanner theme={theme} />
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
      <Footer />
    </FluentProvider>
  );
}

export default App;
