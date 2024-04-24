/* eslint-disable @typescript-eslint/no-explicit-any */
import "./PostComments.css";
import userLogo from "../../../assets/user-icon.png";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PostService } from "../../../services/PostService";
import { CreateComment } from "../../../models/post.model";
import { getDateString } from "../../../helpers/helpers";

interface PostCommentsProps {
  token: string | null;
  uimage: string | undefined;
  uname: string | undefined;
  pid: string | undefined;
}

export const PostComments: React.FC<PostCommentsProps> = ({
  uname,
  token,
  uimage,
  pid,
}) => {
  const [commentData, setCommentData] = useState<CreateComment>({
    by: "",
    comment: "",
    published: new Date(),
  });
  const [postComments, setpostComments] = useState<CreateComment[] | undefined>(
    []
  );

  useEffect(() => {
    const getComments = async () => {
      try {
        const getPComments = await new PostService().getPostComments(pid);
        console.log(getPComments);
        setpostComments(getPComments.response);
      } catch (error: any) {
        toast.error(error);
      }
    };

    getComments();
  }, [pid]);

  const handleSendComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const byValue = token ? uname || "Anonymous" : "Anonymous";
      const imgValue = token
        ? uimage || "https://i.ibb.co/ZXBL3zX/anonymous.png"
        : "https://i.ibb.co/ZXBL3zX/anonymous.png";
      const newCommentData: CreateComment = {
        ...commentData,
        by: byValue,
        userCommentImage: imgValue,
      };

      const sendComment = await new PostService().postComment(
        pid,
        newCommentData
      );
      toast.success(sendComment.message, {
        position: "bottom-right",
      });
      setCommentData({
        comment: "",
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setCommentData((prevData) => ({
      ...prevData,
      comment: value,
    }));
  };

  return (
    <div className="comments-absolute-contain">
      <h1>Comments</h1>
      <div className="comment-contain">
        {postComments && postComments?.length > 0 ? (
          postComments?.map((comment) => (
            <div className="comment">
              <div className="comment-image">
                <img src={comment.userCommentImage} alt="" />
              </div>
              <div className="comment-info">
                {comment.published && (
                  <h6>{getDateString(comment.published, false)}</h6>
                )}

                <h2>{comment.by === uname ? "You" : comment.by}</h2>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-comments-contain">
            <h1>No comments on this post</h1>
          </div>
        )}
      </div>
      <form onSubmit={handleSendComment} className="add-comment-contain">
        <h1>Leave a comment</h1>
        <div className="leave-comment">
          <div className="leave-comment-img">
            {!token ? (
              <img src="https://i.ibb.co/ZXBL3zX/anonymous.png" alt="" />
            ) : (
              <img src={uimage || userLogo} alt="" />
            )}
          </div>
          <div className="send-comment">
            <textarea
              placeholder="Write a comment"
              value={commentData.comment}
              onChange={handleCommentChange}
              required
            />
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};
