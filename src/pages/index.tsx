import { BrowserRouter, Route, Routes } from "react-router-dom";
import Building from "./Building";
import Home from "./Home";

const Pages = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={
          <Home />
        }/>
        <Route path="/buiding" element={<Building />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;