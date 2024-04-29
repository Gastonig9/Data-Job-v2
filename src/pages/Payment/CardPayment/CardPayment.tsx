// CardPayment.tsx
import React from "react";
import "./CardPayment.css";

interface CardPaymentProps {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export const CardPayment: React.FC<CardPaymentProps> = ({
  name,
  cardNumber,
  expiryDate,
  cvv,
}) => {
  return (
    <div className="card-payment-contain">
      <div className="card-payment-logo">
        <i className="fa-solid fa-credit-card"></i>
      </div>
      <div className="card-payment-number">
        <h3>{cardNumber}</h3>
      </div>
      <div className="card-date-cvv">
        <h3>{expiryDate}</h3>
        <h3>{cvv}</h3>
      </div>
      <div className="card-payment-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
