import React from "react";
import "./ShowPlan.css";
import { Link } from "react-router-dom";

interface ShowPlanProps {
  urole: string | undefined;
}

export const ShowPlan: React.FC<ShowPlanProps> = ({ urole }) => {
  return (
    <div
      className={`show-plan-contain ${
        urole === "admin" ? "blue" : urole === "company" ? "orange" : ""
      }`}
    >
      {urole === "admin" && <h1>You are subscribed to the premium plan</h1>}
      {urole === "company" && <h1>You are subscribed to the basic plan</h1>}
      {urole === "user" && (
        <div className="offer-suscribe">
          <h1>Subscribe to a plan</h1>
          <div className="links-plan">
            <Link className="a-one" to="/payment/plan-basic">Basic</Link>
            <Link className="a-two" to="/payment/plan-premium">Premium</Link>
          </div>
        </div>
      )}
    </div>
  );
};
