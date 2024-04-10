import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { JobService } from "../../../services/JobService";
import { Job } from "../../../models/job.model";
import "./SearchResult.css";
import { Loader } from "../../../components/Loader/Loader";

export const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") ?? undefined;
  const country = queryParams.get("country") ?? undefined;
  const seniority = queryParams.get("seniority") ?? undefined;

  const [data, setData] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const resultsCount = data.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataFilter = await new JobService().getJobByCategorieAndCountry(
          category,
          country,
          seniority
        );
        setData(dataFilter);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category, country, seniority]);

  return (
    <div className="search-result-contain">
      <small>
        <span>{category ? category + " / " : ""}</span>{" "}
        <span>{country ? country + " / " : ""}</span>{" "}
        <span>{seniority ? seniority + " / " : ""}</span>
      </small>
      <h1>
        <span>Search completed.</span> {resultsCount} results found.
      </h1>
      {loading ? (
        <Loader isForPage={true} isForButton={false}/>
      ) : (
        <div className="card-results">
          {data.map((job, index) => (
            <div key={index} className="card-result">
              <div className="info">
                <h2>{job.jobTitle}</h2>
                <p>
                  Location: <strong>{job.location}</strong>
                </p>
                <p>
                  Salary: <strong>{job.salary}</strong>
                </p>
              </div>
              <div className="buttons">
                <Link to={`/view-job/${job.jobTitle}`}>
                  <button>Apply now</button>
                </Link>
                {job.linkedin && <button>Linkedin</button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
