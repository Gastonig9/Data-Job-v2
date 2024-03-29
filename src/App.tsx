import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import JobDetail from "./pages/JobDetail/JobDetail";
import { useState } from "react";
import { Auth } from "./pages/Auth";

function App() {
  const [open, setopen] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Navbar setOpenModal={setopen} />
        {open && <Auth setCloseModal={setopen}/>}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-job/:title" element={<JobDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
