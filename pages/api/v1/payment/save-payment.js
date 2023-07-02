import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

// eslint-disable-next-line import/no-anonymous-default-export
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
    const response = await api.request({
        url: `/payment`,
        method: 'POST',
        data: payload
    });
    console.log('payment:: response: ', response?.data);
    res.status(200).json(response?.data);
} catch (error) {
    console.error(error)
    res.status(403).json({ message: "error" });
}

};

