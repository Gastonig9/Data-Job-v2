import React from "react";
import "./HeaderBlog.css"

interface HeaderBlogProps {
    titleDetail: string | undefined;
}

export const HeaderBlog: React.FC<HeaderBlogProps> = ({ titleDetail }) => {
  return (
    <div className="header-blog-contain">
      <div className="detail">
        <h2>{titleDetail}</h2>
        <div className="one-detail"></div>
        <div className="two-detail"></div>
      </div>
    </div>
  );
};
