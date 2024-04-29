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
import Profile from "./pages/Profile/Profile";
import { useJwt } from "react-jwt";
import { User } from "./models/user.model";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import RestorePass from "./pages/RestorePass/RestorePass";
import PostDetail from "./pages/PostDetail/PostDetail";
import Blog from "./pages/Blog/Blog";
import CreatePost from "./pages/CreatePost/CreatePost";
import Payment from "./pages/Payment/Payment";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [open, setopen] = useState(false);
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt<User>(token || "");

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar setOpenModal={setopen} />
        {open && <Auth setCloseModal={setopen} />}
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home token={token} urole={decodedToken?.role}/>}></Route>
          <Route path="/blog" element={<Blog token={token} />}></Route>
          <Route path="/view-job/:title" element={<JobDetail />}></Route>
          <Route path="/filter" element={<FilterJob />}></Route>
          <Route path="/restore-pass/:token" element={<RestorePass />}></Route>
          <Route path="/view-post/:postId" element={<PostDetail />}></Route>

          {/* PRIVATE ROUTES */}

          {decodedToken && decodedToken.role === "user" && !isExpired ? (
            <Route
              path="/payment/:subscription"
              element={<Payment uid={decodedToken?.userId} />}
            ></Route>
          ) : (
            <Route
              path="/payment/:subscription"
              element={
                <NotFound
                  title="Unauthorized"
                  message="Possible reasons: You already have an active subscription at this time or you are not logged in"
                  statusCode={401}
                />
              }
            ></Route>
          )}

          {decodedToken && decodedToken.role === "admin" && !isExpired ? (
            <Route
              path="/create-post"
              element={<CreatePost uid={decodedToken?.userId} />}
            ></Route>
          ) : (
            <Route
              path="/create-post"
              element={
                <NotFound
                  title="Unauthorized"
                  message="Only administrator roles can create a post"
                  statusCode={401}
                />
              }
            ></Route>
          )}

          {decodedToken && (decodedToken.role === "company" || decodedToken.role === "admin") && !isExpired ? (
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
            <Route path="/profile" element={<Profile token={decodedToken} />}></Route>
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

          {/* NOT FOUND */}
          <Route path="*" element={<NotFound title="Not Found" statusCode={404} message="This page was not found"/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
