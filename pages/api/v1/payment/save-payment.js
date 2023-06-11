import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";
// import mailAboutPayment from "../../../../utils/mailAboutPayment";
import {
  orders as Order
} from '@/models/index'

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

export default async (req, res) => {
  await cors(req, res);
  console.log('save-payment:: req.body: ', req.body);
  let { email, amount, cartItems, paymentId, orderId, userId } = req.body;

  const payload = {
    payment_email: email,
    cost: amount,
    courseInfo: cartItems.map(item => {
      const data = { title: item.title, courseId: item.id }
      return JSON.stringify(data)
    }),
    userId: userId,
    paymentId: paymentId,
    quantity: cartItems.reduce((acc, val) => acc + val.quantity, 0),
    orderId: orderId
  }

  try {
    const orders = await Order.create(payload)
    console.log('save-payment.js:: orders: ', orders);
    res.send({ orders })
  } catch (error) {
    console.log(error);
  }
};

