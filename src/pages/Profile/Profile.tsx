import { User } from '../../models/user.model';
import './Profile.css';
import { ChangeData, ChangePassword, PrincipalInfo, ProfileRole, ProfileSkills, ShowPlan } from "."
import React from 'react';

interface ProfilePageProps {
  token: User
}

const Profile: React.FC<ProfilePageProps> = ({ token }) => {
  
  return (
    <div className="profile-grid">
      <div className="section section1">
        <PrincipalInfo uid={token.userId}/>
      </div>
      <div className="section section2">
        <ChangeData uid={token?.userId}/>
      </div>
      <div className="section section3">
        <ChangePassword email={token?.email}/>
      </div>
      <div className="section section4">
        <ShowPlan urole={token?.role}/>
      </div>

      <div className="section section5">
        <ProfileSkills uid={token?.userId}/>
      </div>
      <div className="section section6">
        <ProfileRole uid={token?.userId} role={token?.role}/>
      </div>
    </div>
  );
};

export default Profile;
