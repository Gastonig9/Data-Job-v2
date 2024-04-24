/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import postStock from "../../assets/work.jpg";
import "./Post.css";
import { Link } from "react-router-dom";
import { PostService } from "../../services/PostService";
import { Post as PostInfo } from "../../models/post.model";
import { toast } from "react-toastify";
import { getDateString } from "../../helpers/helpers";

export const Post = () => {
  const [posts, setposts] = useState<PostInfo[] | undefined>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const allPosts = await new PostService().getAllPost();
        console.log(allPosts);
        const onlyThree = Array.isArray(allPosts.response)
          ? allPosts.response.slice(0, 3)
          : undefined;
        setposts(onlyThree);
      } catch (error: any) {
        toast.error(error);
      }
    };

    getAllPosts();
  }, []);

  return (
    <>
      <div className="post-card-contain">
        {posts?.map((postInfo, index) => (
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
              <p>{postInfo.postDescription}</p>
              <Link to={`/view-post/${postInfo._id}`}>
                <h5>Read more</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
