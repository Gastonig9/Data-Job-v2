import { Link } from "react-router-dom";
import "./NotFound.css";
import React from "react";

interface NotFoundProps {
  title: string;
  statusCode: number;
  message: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ title, statusCode, message }) => {
  return (
    <div className="container">
      <h1 className="title"><span>{statusCode}</span> | {title}</h1>
      <p className="description">{message}</p>
      <Link className="link" to="/">
        Return to homepage
      </Link>
    </div>
  );
};
