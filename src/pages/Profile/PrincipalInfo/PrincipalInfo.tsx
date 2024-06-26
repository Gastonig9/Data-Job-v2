/* eslint-disable @typescript-eslint/no-explicit-any */
import "./PrincipalInfo.css";
import imgProfile from "../../../assets/user-icon.png";
import React, { useEffect, useState } from "react";
import { UserService } from "../../../services/UserService";
import { ChangeUserImage, User } from "../../../models/user.model";
import { Loader } from "../../../components/Loader/Loader";
import { UploadImage } from "../../../components/UploadImage/UploadImage";
import { Skills } from "./Skills/Skills";
import { toast } from "react-toastify";

interface ChangeDataProps {
  uid: string | undefined;
}

export const PrincipalInfo: React.FC<ChangeDataProps> = ({ uid }) => {
  const [userProfile, setuserProfile] = useState<User>({
    fullname: "",
    email: "",
    description: "",
    phone: 0,
    userImage: "",
    jobSaved: [],
    location: "",
    role: "user",
    skills: [],
    balance: 0,
  });
  const [showImage, setshowImage] = useState<boolean>(false);
  const [newImage, setnewImage] = useState<ChangeUserImage>({
    userImage: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await new UserService().getUserProfile(uid);
        setuserProfile(user.userProfile);
      } catch (error) {
        alert(error)
      }
    };

    getUser();
  }, [uid]);

  const showImgDetail = () => {
    setshowImage(!showImage);
  };

  const handleImageProfileUpload = (imageData: string) => {
    setnewImage({ userImage: imageData });
  };

  const handleSubmitNewImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await new UserService().updateUserImage(uid, newImage);
      setshowImage(false);
    } catch (error:any) {
      toast.error(error)
    }
  };

  if (!userProfile) {
    return <Loader isForPage={true} isForButton={false} />;
  }

  return (
    <>
      {showImage && (
        <form onSubmit={handleSubmitNewImage} className="edit-image-contain">
          <h1>Change your profile image</h1>
          <UploadImage onImageUpload={handleImageProfileUpload} />
          <button type="submit">Update image</button>
        </form>
      )}
      <div className="p-info-contain">
        <div className="profile-img">
          <img src={userProfile.userImage || imgProfile} alt="" />
          <h3>${userProfile.balance} available</h3>
          <div className="change-icon" onClick={showImgDetail}>
            <i className="fa-solid fa-pen"></i>
          </div>
        </div>
        <div className="profile-info">
          <h1>{userProfile?.fullname}</h1>
          <h3>{userProfile.location}</h3>
          <div className="data">
            <div>
              <i
                style={{ color: "#f24d49" }}
                className="fa-solid fa-envelope"
              ></i>
              <h5>{userProfile.email}</h5>
            </div>
            <div>
              <i style={{ color: "#f24d49" }} className="fa fa-phone"></i>
              <h5>{userProfile.phone || "+54 11 30458590"}</h5>
            </div>
          </div>
          <div className="profile-description">
            <h2>Description</h2>
            <p>{userProfile.description || "None description"}</p>
          </div>
          {userProfile.skills && userProfile.skills?.length > 0 && <Skills skills={userProfile.skills}/>}
        </div>
      </div>
    </>
  );
};
