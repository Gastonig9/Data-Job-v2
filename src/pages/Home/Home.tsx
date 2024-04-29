import { HomeHeader, HowItWorks } from ".";
import { CategoriesView } from "./CategoriesView/CategoriesView";
import { JobsView } from "./JobsView/JobsView";
import { useGetJobsQuery } from "../../services/apiJobService";
import { Loader } from "../../components/Loader/Loader";
import { LatestJobs } from "./LatestJobs/LatestJobs";
import PostView from "./PostView/PostView";
import { Subscription } from "./Subscription/Subscription";
import React from "react";

interface HomePageProps {
  token: string | null;
  urole: string | undefined;
}

const Home: React.FC<HomePageProps> = ({ token, urole }) => {
  const { data: jobs, isLoading } = useGetJobsQuery([]);

  if (isLoading) return <Loader isForButton={false} isForPage={true} />;

  return (
    <>
      <HomeHeader />
      <CategoriesView />
      <LatestJobs />
      {jobs && <JobsView jobs={jobs} />}
      <HowItWorks />
      <PostView />
      {token && urole === "user" && <Subscription />}
    </>
  );
};

export default Home;
