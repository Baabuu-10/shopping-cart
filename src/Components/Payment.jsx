import { useEffect, useState } from "react";
import useShop from "../ShopContext";
import axios from "axios";
import toast from "react-hot-toast";

const Payment = () => {
  const initialPayemnt = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  const [payment, setPayment] = useState(initialPayemnt);
  const [updated, setUpdated] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { clearCart, total } = useShop();

  useEffect(() => {}, [updated]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!phone) return toast.error("Phone is empty") 
    processPayment();
  };

  const processPayment = async () => {
    try {
      const body = {
        schemaVersion: "1.0",
        requestId: 10111331033,
        timestamp: 1590587436057686,
        channelName: "WEB",
        serviveName: "API_PURCHASE",
        serviveParams: {
          merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
          apiUserId: process.env.REACT_APP_MERCHANT_API_USER_ID,
          apiKey: process.env.REACT_APP_MERCHANT_API_KEY,
          paymentMethod: "MWallet_account",
          payerInfo: {
            accountNo: phone,
          },
          transactionInfo: {
            referenceId: "12334",
            invoiceId: "7896504",
            amount: total,
            currency: "USD",
            description: "React Shopping Cart",
          },
        },
      };

      // Make the POST request using axios
      setLoading(true);
      const { data } = await axios.post("https://api.waafi.com/asm", body);
      setLoading(false)
      
      const info = data.responseMsg.split("ERRCODE");

      if(info.length == 1) {
      setUpdated(!updated);
      alert("Successfull Ordred");
      clearCart();
      }else{
      if(data.responseMsg.split("ERRCODE")[2].includes("4004")) {

      alert("User rejected");
      setUpdated(!updated)

      }

      if(data.responseMsg.split("ERRCODE")[2].includes("6002")){
      alert("Numberka sirt ah waa khalad");
      setUpdated(!updated)
      }
      }


      console.log(info)

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
        <div
          className={`payment-card ${payment.zaad ? "selected" : ""}`}
          onClick={() => setPayment({ ...initialPayemnt, zaad: true })}
        >
          <h3>Zaad Service</h3>
        </div>

        <div
          className={`payment-card ${payment.zaad ? "selected" : ""}`}
          onClick={() => setPayment({ ...initialPayemnt, evc: true })}
        >
          <h3>Evc Service</h3>
        </div>

        <div
          className={`payment-card ${payment.zaad ? "selected" : ""}`}
          onClick={() => setPayment({ ...initialPayemnt, sahal: true })}
        >
          <h3>Sahal Service</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="2526..."
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn-proceed">
            {loading ? "Loading..." : "Proceed"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
