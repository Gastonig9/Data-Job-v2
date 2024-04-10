import { User } from '../../models/user.model';
import { ChangeData } from './ChangeData/ChangeData';
import { ChangePassword } from './ChangePassword/ChangePassword';
import { ChangeRole } from './ChangeRole/ChangeRole';
import { PrincipalInfo } from './PrincipalInfo/PrincipalInfo';
import './Profile.css';
import ProfileSkills from './ProfileSkills/ProfileSkills';
import { useJwt } from "react-jwt";

const Profile = () => {
  const token = localStorage.getItem("token");
  const { decodedToken } = useJwt<User>(token || "");
  
  

  
  return (
    <div className="profile-grid">
      <div className="section section1">
        <PrincipalInfo uid={decodedToken?.userId}/>
      </div>
      <div className="section section2">
        <ChangeData uid={decodedToken?.userId}/>
      </div>
      <div className="section section3">
        <ChangePassword/>
      </div>
      <div className="section section4">
        <ChangeRole uid={decodedToken?.userId}/>
      </div>

      <div className="section section5">
        <ProfileSkills uid={decodedToken?.userId}/>
      </div>
      <div className="section section6">Sección 6</div>
    </div>
  );
};

export default Profile;
