
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <SpeedInsights/>
    </>
  );
}

export default App;
