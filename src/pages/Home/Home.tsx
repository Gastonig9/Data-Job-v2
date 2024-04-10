import { HomeHeader, HowItWorks } from '.';
import { CategoriesView } from './CategoriesView/CategoriesView';
import { JobsView } from './JobsView/JobsView';
import { useGetJobsQuery } from '../../services/apiJobService';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const { data: jobs, isLoading } = useGetJobsQuery([]);

  if (isLoading) return <Loader isForButton={true} isForPage={false}/>;

  return (
    <>
      <HomeHeader />
      <CategoriesView />
      {jobs && <JobsView jobs={jobs} />}
      <HowItWorks />
    </>
  );
};

export default Home;
