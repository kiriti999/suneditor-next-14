import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import useRazorpay from "react-razorpay";
import saveTransaction from "../SaveToDB/SaveTransaction";
import { calculateCartTotal } from '@/utils/cart/calculateCartTotal';

const CheckoutBtn = ({ user, cartItems, onClearCart }) => {
    console.log('CheckoutBtn.js:: user: ', user);
    const Razorpay = useRazorpay();
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({ id: "", name: "", email: "", phone: "" });

    const { cartTotal } = calculateCartTotal(cartItems);

    useEffect(() => {
        setUserInfo(user);
    }, [user])

    console.log('CheckoutBtn.js:: userInfo: ', userInfo);

    const payload = {
        cartItems,
        userId: userInfo?.id || null,
        buyer_email: userInfo.email,
        price: parseInt(cartTotal * 100)
    };

    const handlePayment = useCallback(async () => {

        console.log('CheckoutBtn.js:: handlePayment:: payload: ', payload);

        // create order from backend
        const url = `${baseUrl}/api/v1/courses/checkout-razorpay`;
        const response = await axios.post(url, payload);

        const order = response.data;

        // prepares model for payment
        const options = {
            key: "rzp_test_TzmRUbStt5mrDV",
            // amount: price,
            amount: cartTotal,
            currency: "INR",
            name: "Skillaro",
            description: "Skillaro course purchase",
            image: "https://sid86-dashboard.s3-ap-south-1.amazonaws.com/project-ss/gfaUwc4SQrKduehfbsq9jJ.png",
            order_id: order.id,
            handler: async (res) => {
                if (res.razorpay_payment_id && res.razorpay_order_id && res.razorpay_signature) {

                    onClearCart();

                    const toSave = {
                        name: user.name,
                        email: userInfo.email,
                        cartItems: cartItems,
                        userId: userInfo?.id,
                        amount: cartTotal,
                        paymentId: res.razorpay_payment_id,
                        orderId: res.razorpay_order_id,
                    }

                    console.log('CheckoutBtn.js:: handlePayment:: toSave: ', toSave);

                    // save into db
                    const savedOrder = await axios.post(`${baseUrl}/api/v1/payment/save-payment`, toSave);

                    // send email
                     await axios.post(`${baseUrl}/api/v1/payment/purchase`, toSave);

                    console.log('CheckoutBtn.js:: handlePayment:: savedOrder: ', savedOrder);

                    router.replace('/checkout/success')

                } else {
                    setError("Payment Failed");
                    router.replace('/')
                }

                console.log('CheckoutBtn.js:: handlePayment:: handler res: ', res);
            },
            prefill: {
                name: user.name,
                email: userInfo?.email,
                contact: userInfo?.phone,
            },
            notes: {
                address: userInfo?.address,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay, payload]);

    return (
        <div>
            <div className="payment-box">
                <button className="default-btn" onClick={(e) => {
                    e.preventDefault()
                    handlePayment()
                }}>
                    <i className="flaticon-shopping-cart"></i> Make Payment{" "}
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default CheckoutBtn;
