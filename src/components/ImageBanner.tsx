import { Route, Routes } from "react-router";

function ImageMain() {
  return <div className={"default-image"}></div>;
}

function Image2() {
    return <div className={"theme-2-image"}></div>;
  }

export default function ImageBanner({ theme }: { theme: string | null }) {
  switch (theme) {
    case "2":
      return <div className={"theme-2-image"}></div>;
    case "1":
    default:
      return (
        <Routes>
          <Route path="/" element={<ImageMain/>} />
          <Route
            path="/thanks"
            element={<Image2/>}
          />
          <Route
            path="/faq"
            element={<Image2/>}
          />
        </Routes>
      );
  }
}
