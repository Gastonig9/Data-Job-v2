import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="container">
      <h1 className="title"><span>404</span> | Not Found</h1>
      <p className="description">This page was not found</p>
      <Link className="link" to="/">
        Return to homepage
      </Link>
    </div>
  );
};
