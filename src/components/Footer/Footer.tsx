import logo from "../../assets/logo-job.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="info-footer">
        <div className="img-des-f">
          <img src={logo} alt="" />
          <p>
            Explore job listings, discover valuable resources for career
            advancement, and connect with our community. Stay informed with the
            latest industry insights and trends. Start your journey to a
            fulfilling career today with our comprehensive job search platform.
          </p>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <div>
            <i className="fa-solid fa-house"></i>{" "}
            <h3>Buenos Aires, Argentina</h3>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>{" "}
            <h3>gastonig2020@gmail.com</h3>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i> <h3>Gaston Iglesias</h3>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>{" "}
            <h3>github.com/Gastonig9</h3>
          </div>
          <div>
            <i className="fa-solid fa-globe"></i> <h3>gastoniglesiasdev.com</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
