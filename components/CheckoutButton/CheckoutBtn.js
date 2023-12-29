import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { axiosApi } from "@/utils/baseUrl";
import axios from "axios";
import useRazorpay from "react-razorpay";
import saveTransaction from "../SaveToDB/SaveTransaction";
import { parseCookies } from 'nookies'
import { calculateCartTotal } from '@/utils/cart/calculateCartTotal';
import styles from './CheckoutBtn.module.css';

const CheckoutBtn = ({ user, cartItems, onClearCart, setToRegister, setShowAlertMessage, setIsAlert, loading, setLoading }) => {
    const { token } = parseCookies();
    const Razorpay = useRazorpay();
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({ _id: "", name: "", email: "", phone: "" });

    const { cartTotal } = calculateCartTotal(cartItems);

    useEffect(() => {
        setUserInfo(user);
    }, [user])

    const payload = {
        cartItems,
        userId: userInfo?._id || null,
        buyer_email: userInfo.email,
        price: parseInt(cartTotal * 100)
    };

    const handlePayment = useCallback(async () => {
        if (!token) {
            setIsAlert(true);
            setShowAlertMessage({ status: 'danger', message: 'Please register first to complete the payment' })
            setToRegister(true);
            return;
        }

        setLoading(true)

        console.log('CheckoutBtn.js:: handlePayment:: payload: ', payload);

        // create order from backend
        const url = `${axiosApi.baseUrl}/api/v1/courses/checkout`;
        const response = await axios.post(url, payload);

        const order = response.data;

        console.log('checkoutBtn.js:: order: ', order);

        // prepares model for payment
        const options = {
            key: process.env.RAZORPAY_KEY,
            // amount: price,
            amount: cartTotal,
            currency: "INR",
            name: "Whatsnxt",
            description: "Whatsnxt course purchase",
            image: "https://sid86-dashboard.s3-ap-south-1.amazonaws.com/project-ss/gfaUwc4SQrKduehfbsq9jJ.png",
            order_id: order.id,
            handler: async (res, error) => {
                console.log('checkoutBtn.js:: payment handler res:', res)
                if (res.razorpay_payment_id && res.razorpay_order_id && res.razorpay_signature) {

                    onClearCart();

                    const toSave = {
                        name: user.name,
                        email: userInfo.email,
                        cartItems: cartItems,
                        userId: userInfo?._id,
                        amount: cartTotal,
                        paymentId: res.razorpay_payment_id,
                        orderId: res.razorpay_order_id,
                    }

                    console.log('CheckoutBtn.js:: handlePayment:: toSave: ', toSave);

                    // save into db
                    const savedOrder = await axios.post(`${axiosApi.baseUrl}/api/v1/payment/save-payment`, toSave);

                    // send email
                    await axios.post(`${axiosApi.baseUrl}/api/v1/mail/sendMail`, toSave);

                    console.log('CheckoutBtn.js:: handlePayment:: savedOrder: ', savedOrder);

                    setLoading(false)

                    router.replace('/checkout/success')

                } else {
                    console.log('checkoutBtn.js:: payment handler error:', error)
                    setShowAlertMessage({ status: 'danger', message: 'Payment failed' });
                    // setError("Payment Failed");
                    // router.replace('/')
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
            <div className={styles['payment-box']}>
                <button className={`${styles['default-btn']} default-btn ` + (loading ? 'no-click' : '')} onClick={(e) => {
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
