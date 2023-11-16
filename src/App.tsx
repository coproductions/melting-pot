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
import Faq from "./components/Faq";
import Home from "./components/Home";
import { useStore } from "./state/useStore";
import Thanks from "./components/Thanks";
import { DiffieHellmanGroup } from "crypto";

function getTheme(theme?: string | null) {
  switch (theme) {
    case "2":
      return theme2;
    default:
      return defaultTheme;
  }
}

function App() {
  const { theme } = useStore();

  return (
    <FluentProvider theme={theme}>
      <HashRouter>
        <FaqNav />
        <div className="App">
          <header className="App-header">
            <Title />
            <ImageBanner />
          </header>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/thanks" element={<Thanks />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/thanks" element={<></>} />
              <Route path="/faq" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
      <Footer />
    </FluentProvider>
  );
}

export default App;
