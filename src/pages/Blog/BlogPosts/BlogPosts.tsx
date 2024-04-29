/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import postStock from "../../../assets/work.jpg";
import { getDateString } from "../../../helpers/helpers";
import "./BlogPosts.css";
import { toast } from "react-toastify";
import { PostService } from "../../../services/PostService";
import { Post } from "../../../models/post.model";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";

export const BlogPosts = () => {
  const [postsBlog, setpostsBlog] = useState<Post[] | undefined>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const allPosts = await new PostService().getAllPost();
        const postsData = Array.isArray(allPosts.response)
          ? allPosts.response
          : undefined;
        setpostsBlog(postsData);
      } catch (error: any) {
        toast.error(error);
      }
    };

    getAllPosts();
  }, []);

  return (
    <div className="blog-post-contain">
      {postsBlog && postsBlog?.length > 0 ? (
        postsBlog?.map((postInfo, index) => (
          <div className="p-card" key={index}>
            <div className="p-card-image">
              <img
                src={postInfo.postImage || postStock}
                alt="Post Image Card"
              />
              <div className="p-published">
                {postInfo.postDate && (
                  <h2>{getDateString(postInfo.postDate, true)}</h2>
                )}
              </div>
            </div>
            <div className="p-card-by-user-contain">
              <div className="p-card-by">
                <i className="fa fa-user"></i>
                <h6>{postInfo.postAuthor}</h6>
              </div>
              <div className="p-card-comments">
                <i className="fa fa-comment"></i>
                <h6>{postInfo.postComments?.length} comments</h6>
              </div>
            </div>
            <div className="p-card-info">
              <h5>{postInfo.postTitle}</h5>
              <p>
                {postInfo.shortDescription ||
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eum repellat po"}
              </p>
              <Link to={`/view-post/${postInfo._id}`}>
                <h5>Read more</h5>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="blog-loader">
          <Loader isForButton={false} isForPage={true} />
        </div>
      )}
    </div>
  );
};
