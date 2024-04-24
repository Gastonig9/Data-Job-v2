import React from "react";
import "./HeaderPostDetail.css";
interface PostTitleProps {
  titleDetail: string | undefined;
}
export const HeaderPostDetail: React.FC<PostTitleProps> = ({ titleDetail }) => {
  return (
    <div className="header-post-detail">
      <div className="detail">
        <h2>{titleDetail}</h2>
        <div className="one-detail"></div>
        <div className="two-detail"></div>
      </div>
    </div>
  );
};
