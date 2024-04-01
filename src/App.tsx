import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import JobDetail from "./pages/JobDetail/JobDetail";
import { useState } from "react";
import { Auth } from "./pages/Auth";
import FilterJob from "./pages/FilterJob/FilterJob";
import { NotFound } from "./components/NotFound/NotFound";
import PostJob from "./pages/PostJob/PostJob";

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
          <Route path="/filter" element={<FilterJob/>}></Route>
          <Route path="/post-job" element={<PostJob/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
