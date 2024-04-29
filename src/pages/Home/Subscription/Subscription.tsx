import { Div } from "../../../components/Div/Div";
import { subscriptionCards } from "../../../assets/constants";
import "./Subscription.css";
import { Link } from "react-router-dom";

export const Subscription = () => {
  return (
    <div className="subscription-contain">
      <Div title="Choose Subscription Plan" />
      <div className="subscription-cards-contain">
        {subscriptionCards.map((scard, index) => (
          <div key={index} className="s-card">
            <Div title={scard.plan} />
            <div className="s-price">
              <h1>${scard.price}</h1>
            </div>
            <ul>
              {scard.benefits &&  scard.benefits.map((benefit, index) => (
                <>
                  <div className="row-benefit">
                    <i className="fa-solid fa-check"></i>{" "}
                    <li key={index}>{benefit}</li>
                  </div>
                </>
              ))}
            </ul>
            <Link to={`/payment/${scard.path}`}>
              <div className="button-choose">
                <button>Choose Plan</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
