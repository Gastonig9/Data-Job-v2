import { SearchBar } from "../../../components/SearchBar/SearchBar";
import "./HomeHeader.css";
export const HomeHeader = () => {
  return (
    <div className="home-header-contain">
      <div className="background"></div>
      <div className="text-header">
        <h1>Are You <span>Looking</span> For A <span>Job?</span></h1>
        <p>
          A better career is out there. We'll help you find it. We're your first
          step to becoming everything you want to be.
        </p>
      </div>
      <SearchBar forHeaderHome={true}/>
    </div>
  );
};
