import { HomeHeader, HowItWorks  } from ".";
import { CategoriesView } from "./CategoriesView/CategoriesView";
import { JobsView } from "./JobsView/JobsView";
import { JobService } from "../../services/JobService";

const Home = () => {
  const arrayJobs = new JobService().getJobs()
  return (
    <>
      <HomeHeader />
      <CategoriesView />
      <JobsView jobs={arrayJobs}/>
      <HowItWorks/>
    </>
  );
};

export default Home;
