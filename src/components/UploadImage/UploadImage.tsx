import React from "react";
import "./UploadImage.css";

export const UploadImage: React.FC<{ onImageUpload: (imageData: string) => void }> = ({ onImageUpload }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        onImageUpload(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-image">
      <label htmlFor="image"></label>
      <input required type="file" id="image" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};
