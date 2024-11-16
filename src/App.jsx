import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import PositionPage from "./components/PositionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/positions" element={<PositionPage />} />
      </Routes>
    </>
  );
}

export default App;
