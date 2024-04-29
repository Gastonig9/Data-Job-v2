/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { DataPayment } from "./DataPayment/DataPayment";
import { CardPayment } from "./CardPayment/CardPayment";
import "./Payment.css";
import { Div } from "../../components/Div/Div";
import { Link, useParams } from "react-router-dom";
import { subscriptionCards } from "../../assets/constants";
import { Subscription } from "../../models/subscription.model";
import { UserPayment } from "../../models/user.model";
import { toast } from "react-toastify";
import { UserService } from "../../services/UserService";
import { PaymentResponse } from "../../models/response.model";

interface PaymentPageProps {
  uid: string | undefined;
}

const Payment: React.FC<PaymentPageProps> = ({ uid }) => {
  const { subscription } = useParams();
  const [subscriptionPlan, setsubscriptionPlan] = useState<
    Subscription | undefined
  >({});
  const [creditCardNumber, setCreditCardNumber] = useState(
    "XXXX XXXX XXXX XXXX"
  );
  const [expirationDate, setExpirationDate] = useState("XX/XX");
  const [cvv, setCVV] = useState("XXX");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [namePayment, setNamePayment] = useState("Ulises Perez");
  const [successfulPayment, setsuccessfulPayment] = useState<boolean>(false);
  const [paymentResponse, setpaymentResponse] = useState<PaymentResponse>({
    message: "",
    response: "",
    status: 0,
  })

  useEffect(() => {
    const findPathSuscription = subscriptionCards.find(
      (subscriptionC) => subscriptionC.path === subscription
    );
    setsubscriptionPlan(findPathSuscription);
  }, [subscription, setsubscriptionPlan, subscriptionPlan]);

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendPayment: UserPayment = {
      plan: subscriptionPlan?.plan,
      planPrice: subscriptionPlan?.price,
    };

    try {
      const newPayment = await new UserService().userPayment(uid, sendPayment);
      setpaymentResponse(newPayment)
      setsuccessfulPayment(true)
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <>
      {successfulPayment ? (
        <div className="successful-pay-contain animate__animated animate__fadeInDown">
          <h1>{paymentResponse.message}</h1>
          <p>{paymentResponse.response}</p>
          <img className="animate__animated animate__fadeInUp" src="https://i.ibb.co/QPB5f6H/confirm.png" alt="" />
          <Link to="/">Return to home page</Link>
        </div>
      ) : (
        <>
          <Div title={`${subscriptionPlan?.plan} Plan`} />
          <div className="payment-contain">
            <DataPayment
              planPrice={subscriptionPlan?.price}
              creditCardNumber={creditCardNumber}
              setCreditCardNumber={setCreditCardNumber}
              expirationDate={expirationDate}
              setExpirationDate={setExpirationDate}
              cvv={cvv}
              setCVV={setCVV}
              selectedPaymentMethod={selectedPaymentMethod}
              setSelectedPaymentMethod={setSelectedPaymentMethod}
              namePayment={namePayment}
              setNamePayment={setNamePayment}
              handlePayment={handlePayment}
            />
            <CardPayment
              name={namePayment}
              cardNumber={creditCardNumber}
              expiryDate={expirationDate}
              cvv={cvv}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Payment;
