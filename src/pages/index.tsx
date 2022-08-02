import { BrowserRouter, Route, Routes } from "react-router-dom";
import Building from "./Building";
import Home from "./Home";

const Pages = () =>{
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/" element={<Building/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default Pages;