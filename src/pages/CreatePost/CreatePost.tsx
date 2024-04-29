/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Div } from "../../components/Div/Div";
import { Editor } from "@tinymce/tinymce-react";
import "./CreatePost.css";
import { toast } from "react-toastify";
import { PostService } from "../../services/PostService";

interface CreatePostProps {
  uid: string | undefined;
}

const CreatePost: React.FC<CreatePostProps> = ({ uid }) => {
  const [createPostData, setCreatePostData] = useState({
    postTitle: "",
    postDescription: "",
    shortDescription: "",
    postDate: new Date(),
    postCategory: "",
    postImage: "",
  });

  useEffect(() => {
    console.log(createPostData);
  }, [createPostData]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatePostData({
      ...createPostData,
      postTitle: event.target.value,
    });
  };

  const handleShortDesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreatePostData({
        ...createPostData,
        shortDescription: event.target.value,
      });
  }

  const handleEditorChange = (content: string) => {
    setCreatePostData({
      ...createPostData,
      postDescription: content,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setCreatePostData({
          ...createPostData,
          postImage: imageData,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCreatePostData({
      ...createPostData,
      postCategory: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await new PostService().createPost(uid ,createPostData);
      toast.success("Post successfully created");
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="create-post-contain">
      <Div title="Create a Post" />
      <form className="post-create-form" onSubmit={handleSubmit}>
        <div className="input-title">
          <label htmlFor="postTitle">Choose a title</label>
          <input
            type="text"
            name="postTitle"
            placeholder="10 tips to stay motivated while working remotely"
            value={createPostData.postTitle}
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="postTitle">Choose a short description</label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Add a short description for your post"
            value={createPostData.shortDescription}
            onChange={handleShortDesChange}
            required
          />
        </div>

        <div className="input-description">
          <label htmlFor="postTitle">Choose a description</label>
          <Editor
            apiKey="n83pqi42zto5tzhydjuk7oqv9r9nujpfhew1zlw9jwiq6duk"
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              menubar: false,
              tinycomments_mode: "embedded",
              tinycomments_author: "Author name",
              width: 1200,
            }}
            initialValue="Type your description"
            onEditorChange={handleEditorChange}
          />
        </div>

        <div className="input-category-file">
          <select
            className="custom-select"
            required
            name="seniority"
            onChange={handleCategoryChange}
            value={createPostData.postCategory}
          >
            <option value="">Select a category *</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Data">Data</option>
            <option value="Uncategorized">Uncategorized</option>
          </select>
          <label htmlFor="file-upload" className="custom-file-input">
            Seleccionar archivo
          </label>
          <input
            required
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>

        <div className="button-createPost-send">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
