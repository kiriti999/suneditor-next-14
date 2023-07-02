/* eslint-disable import/no-anonymous-default-export */
import Razorpay from "razorpay";
import shortid from "shortid";
import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY, // hide this key to .env
  key_secret: process.env.RAZORPAY_SECRET, // hide this key to .env
});
// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

export default async (req, res) => {
  await cors(req, res);

  const { buyer_email, userId, cartItems, price } = req.body;

  try {    
    const options = {
      amount: Number(price),// amount in the smallest currency unit
      currency: "INR",
      receipt: `${shortid.generate()}`,
      payment_capture: 1,
      notes: {
        description: `Checkout | User: ${buyer_email}`,
      },
    };
    const response = await instance.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    });
  } catch (error) {
    console.error(error);
    res.send("Error processing charge");
  }
};
