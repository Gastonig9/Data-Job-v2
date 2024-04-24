import React from "react";
import "./Blog.css";
import { BlogPosts } from "./BlogPosts/BlogPosts";
import { HeaderBlog } from "./HeaderBlog/HeaderBlog";

interface BlogPageProps {
  token: string | null;
}

const Blog: React.FC<BlogPageProps> = ({ token }) => {
  return (
    <>
      <HeaderBlog titleDetail="Blog" />
      {!token && (
        <div className="ad-publish">
          <h1>Log in to publish a post</h1>
        </div>
      )}
      <BlogPosts />
    </>
  );
};

export default Blog;
