import "./HeaderJobDetail.css";

interface JobTitleProps {
  titleDetail: string;
  salaryDetail: number;
  seniorityDetail: string;
  emailDetail: string | null;
}

export const HeaderJobDetail = ({
  titleDetail,
  salaryDetail,
  seniorityDetail,
  emailDetail,
}: JobTitleProps) => {
  return (
    <div className="header-detail-contain">
      <div className="detail">
        <h2>{titleDetail}</h2>
        <div className="one-detail"></div>
        <div className="two-detail"></div>
        <div className="more-info-detail">
          <h2>
            <i className="fa-solid fa-money-bill"></i> {salaryDetail}
          </h2>
          <h2>
            <i className="fa fa-user"></i> {seniorityDetail}
          </h2>
          {emailDetail !== null && (
            <h2>
              <i className="fa fa-envelope"></i>{" "}
              <a href={`mailto:${emailDetail}`}>{emailDetail}</a>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
