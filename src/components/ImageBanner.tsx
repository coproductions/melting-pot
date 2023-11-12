import { Route, Routes } from "react-router";

function ImageMain() {
  return <div className={"default-image"}></div>;
}

function Image2() {
  return <div className={"theme-2-image"}></div>;
}

export default function ImageBanner() {
  return (
    <Routes>
      <Route path="/" element={<ImageMain />} />
      <Route path="/thanks" element={<Image2 />} />
      <Route path="/faq" element={<Image2 />} />
    </Routes>
  );
}
