
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <SpeedInsights />
      <Analytics/>
    </>
  );
}

export default App;
