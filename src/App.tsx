import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import JobDetail from "./pages/JobDetail/JobDetail";
import { useEffect, useState } from "react";
import { Auth } from "./pages/Auth";
import FilterJob from "./pages/FilterJob/FilterJob";
import { NotFound } from "./components/NotFound/NotFound";
import PostJob from "./pages/PostJob/PostJob";
import Profile from "./pages/Profile/Profile";
import { useJwt } from "react-jwt";
import { User } from "./models/user.model";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [open, setopen] = useState(false);
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt<User>(token || "");

  useEffect(() => {
    if (decodedToken && isExpired) {
      localStorage.removeItem("token");
      toast.info('The session has expired. Please log in again')
      window.location.href = "/"
    }
  }, [isExpired, decodedToken]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar setOpenModal={setopen} />
        {open && <Auth setCloseModal={setopen} />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view-job/:title" element={<JobDetail />}></Route>
          <Route path="/filter" element={<FilterJob />}></Route>
          {decodedToken && decodedToken.role === "company" && !isExpired ? (
            <Route path="/post-job" element={<PostJob />}></Route>
          ) : (
            <Route
              path="/post-job"
              element={
                <NotFound
                  title="Unauthorized"
                  message="You do not have permissions to view this page"
                  statusCode={401}
                />
              }
            ></Route>
          )}

          {decodedToken && !isExpired ? (
            <Route path="/profile" element={<Profile />}></Route>
          ) : (
            <Route
              path="/profile"
              element={
                <NotFound
                  title="Unauthorized"
                  message="You do not have permissions to view this page"
                  statusCode={401}
                />
              }
            ></Route>
          )}
          <Route
            path="*"
            element={
              <NotFound
                title="Not Found"
                statusCode={404}
                message="This page was not found"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
