import { HomeHeader, HowItWorks } from '.';
import { CategoriesView } from './CategoriesView/CategoriesView';
import { JobsView } from './JobsView/JobsView';
import { useGetJobsQuery } from '../../services/apiJobService';
import { Loader } from '../../components/Loader/Loader';
import { LatestJobs } from './LatestJobs/LatestJobs';
import PostView from './PostView/PostView';

const Home = () => {
  const { data: jobs, isLoading } = useGetJobsQuery([]);

  if (isLoading) return <Loader isForButton={false} isForPage={true}/>;

  return (
    <>
      <HomeHeader />
      <CategoriesView />
      <LatestJobs/>
      {jobs && <JobsView jobs={jobs} />}
      <HowItWorks />
      <PostView/>
    </>
  );
};

export default Home;
