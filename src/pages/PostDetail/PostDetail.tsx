/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HeaderPostDetail, PostComments } from ".";
import "./PostDetail.css";
import { toast } from "react-toastify";
import { PostService } from "../../services/PostService";
import { useParams } from "react-router-dom";
import { Post } from "../../models/post.model";
import { Loader } from "../../components/Loader/Loader";
import { getDateString } from "../../helpers/helpers";
import { useJwt } from "react-jwt";
import { User } from "../../models/user.model";

const PostDetail = () => {
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt<User>(token || "");
  const { postId } = useParams();
  const [postIndividual, setpostIndividual] = useState<Post | undefined>({});
  useEffect(() => {
    const getPost = async () => {
      try {
        const getPostById = await new PostService().getPostById(
          postId ? postId : ""
        );
        console.log(getPostById);
        setpostIndividual(getPostById.response);
      } catch (error: any) {
        toast.error(error);
      }
    };

    getPost();
  }, [postId]);

  if (!postIndividual) {
    return <Loader isForButton={false} isForPage={true} />;
  }

  return (
    <div className="post-detail-contain">
      <HeaderPostDetail titleDetail={postIndividual.postTitle} />
      <div className="post-detail-info-contain">
        <div className="post-detail-image">
          <img src={postIndividual.postImage} alt="" />
        </div>
        <h1>{postIndividual.postTitle}</h1>
        <div className="post-detail-info">
          <div className="post-detail-date">
            <i className="fa-solid fa-calendar-days"></i>
            {postIndividual.postDate && (
              <h6>{getDateString(postIndividual.postDate)}</h6>
            )}
          </div>
          <div className="post-detail-by">
            <i className="fa fa-user"></i>
            <h6>{postIndividual.postAuthor}</h6>
          </div>
          <div className="post-detail-comments">
            <i className="fa fa-comment"></i>
            <h6>{postIndividual.postComments?.length} comments</h6>
          </div>
          <div className="post-detail-category">
            <i className="fa fa-list"></i>
            <h6>{postIndividual.postCategory}</h6>
          </div>
        </div>
        {postIndividual.postDescription && <div dangerouslySetInnerHTML={{ __html: postIndividual.postDescription }} />}
      </div>
      <PostComments token={token} uimage={decodedToken?.userImage} uname={decodedToken?.fullname} pid={postId}/>
    </div>
  );
};

export default PostDetail;
