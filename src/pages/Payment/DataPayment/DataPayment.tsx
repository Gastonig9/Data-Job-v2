/* eslint-disable @typescript-eslint/no-explicit-any */
import "./DataPayment.css";
interface DataPaymentProps {
  planPrice: number | undefined;
  creditCardNumber: string;
  setCreditCardNumber: (value: string) => void;
  expirationDate: string;
  setExpirationDate: (value: string) => void;
  cvv: string;
  setCVV: (value: string) => void;
  namePayment: string;
  setNamePayment: (value: string) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (value: string) => void;
  handlePayment: (value: any) => void;
}

export const DataPayment: React.FC<DataPaymentProps> = ({
  planPrice,
  creditCardNumber,
  setCreditCardNumber,
  expirationDate,
  setExpirationDate,
  cvv,
  setCVV,
  namePayment,
  setNamePayment,
  handlePayment,
}) => {
  return (
    <form className="payment-data-form" onSubmit={handlePayment}>
      <label>
        Nombre completo
        <input
          type="text"
          value={namePayment}
          onChange={(e) => setNamePayment(e.target.value)}
          placeholder="Ingrese el número de tarjeta"
          minLength={8}
          required
        />
      </label>
      <label>
        Número de Tarjeta de Crédito:
        <input
          type="text"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          placeholder="Ingrese el número de tarjeta"
          maxLength={26}
          required
        />
      </label>
      <label>
        Fecha de Vencimiento:
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          placeholder="Ingrese el CVV"
          required
        />
      </label>
      <p>You will pay ${planPrice}</p>
      <button type="submit">Buy</button>

    </form>
  );
};
