import { HomeHeader } from ".";
import { CategoriesView } from "./CategoriesView/CategoriesView";
import { JobsView } from "./JobsView/JobsView";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <CategoriesView />
      <JobsView/>
    </>
  );
};

export default Home;
