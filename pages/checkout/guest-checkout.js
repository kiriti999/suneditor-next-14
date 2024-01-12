import React, { useState, useEffect } from "react";
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { calculateCartTotal } from "@/utils/cart/calculateCartTotal";
import CheckoutBtn from "@/components/CheckoutButton/CheckoutBtn";
import LoadingSpinner from "@/utils/LoadingSpinner";
import api from "@/axios/axiosConfig"
import catchErrors from "../../utils/catchErrors";
import { axiosApi } from "../../utils/baseUrl";
import { useForm } from 'react-hook-form';
import { Alert } from 'reactstrap'

import { fetchUser, setLoginCookie } from '../../utils/auth';
import { parseCookies } from 'nookies'

import styles from './guest-checkout.module.css';
import chkStyles from '../../components/CheckoutButton/CheckoutBtn.module.css';

export const GuestCheckout = () => {
    const { token } = parseCookies()

    const cartItems = useSelector((state) => state.cart.cartItems);
    const [cartAmount, setCartAmount] = useState(0);
    const dispatch = useDispatch();

    const [isAlert, setIsAlert] = React.useState(false);
    const [showAlertMessage, setShowAlertMessage] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    // initial state
    const [user, setUser] = useState({});
    const [toRegister, setToRegister] = useState(false);

    const [error, setError] = React.useState("");

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                name: '',
                email: '',
                password: ''
            },
            resetOptions: {
                keepDirtyValues: true, // user-interacted input will be retained
                keepErrors: true, // input errors will be retained with value update
            }
        });

    const validationOptions = {
        name: { required: "Name is required" },
        email: {
            required: "Email is required", pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
            },
        },
        password: {
            minLength: 8,
            required: `The password should be at least eight characters long. 
        To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ &` }
    };

    const handleSetCartAmount = () => {
        const { cartTotal } = calculateCartTotal(cartItems);
        setCartAmount(parseInt(cartTotal));
    }

    useEffect(() => {
        if (cartItems) {
            handleSetCartAmount();
        }
    }, [user, cartItems]);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setToRegister(false);
            setIsAlert(false);
        }, 3000)
        return (() => {
            clearTimeout(timeout);
        })

    }, [toRegister, isAlert]);


    const onClearCart = () => {
        dispatch({
            type: "RESET_CART",
        });
    };

    const handleRegister = async (payload, e) => {
        e.preventDefault();
        setUser(payload);
        try {
            setLoading(true);
            setError("");
            const url = `${axiosApi.baseUrl}/api/v1/auth/register`;
            const response = await api.request({
                url: url,
                method: 'POST',
                data: payload
            });
            console.log('guest-checkout.js:: handleSubmit:: response.data: ', response);
            const userObject = await fetchUser(response.data);

            setIsAlert(true);
            setShowAlertMessage({ status: 'success', message: 'Registration successful!' });
            setLoginCookie(response.data);
            dispatch({
                type: "UPDATE_USER",
                data: response.data
            });

            dispatch({
                type: 'UPDATE_USEROBJ',
                data: userObject
            });
        } catch (error) {
            setIsAlert(true);
            setShowAlertMessage({ status: 'danger', message: 'Registration failed' });
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    }

    return (
        <React.Fragment>
            <PageBanner
                pageTitle="Checkout"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Checkout"
            />

            {loading && <LoadingSpinner />}

            <div className="checkout-area ptb-65">
                <div className="container">
                    <div className={styles['user-actions']}>
                        <i className='bx bx-log-in'></i>
                        <span>Returning customer? <Link legacyBehavior href="/authentication"><a>Click here to login</a></Link></span>
                    </div>

                    <form onSubmit={handleSubmit(handleRegister)}>
                        {isAlert && <Alert color={showAlertMessage.status} className="text-center">
                            {showAlertMessage.message}
                        </Alert>}
                        <div className="row mtb-20" style={{ marginBottom: '20px' }}>
                            <div className={toRegister ? 'cart-highlight-border col-lg-6 col-md-12' : 'col-lg-6 col-md-12'} style={{ padding: '20px 10px 0px 10px' }}>
                                <div className={styles['billing-details']}>
                                    <h3 className={`${styles['title']} title`}>Registration</h3>

                                    <div className="row">

                                        <div className={`${styles['col-lg-12']} col-lg-12 col-md-6`}>
                                            <div className={`${styles['form-group']} form-group`}>
                                                <label>Full Name <span className={styles['required']}>*</span></label>
                                                <input type="text"{...register('name', validationOptions.name)} readOnly={token} className="form-control" />
                                                {errors.name && <p>{errors.name.message}</p>}
                                            </div>
                                        </div>

                                        <div className={`${styles['col-lg-12']} col-lg-12 col-md-6`}>
                                            <div className={`${styles['form-group']} form-group`}>
                                                <label>Email Address <span className={styles['required']}>*</span></label>
                                                <input type="email" {...register('email', validationOptions.email)} readOnly={token} className="form-control" />
                                                {errors.email && <p>{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className={`${styles['col-lg-12']} col-lg-12 col-md-6`}>
                                            <div className={`${styles['form-group']} form-group`}>
                                                <label>Password <span className={styles['required']}>*</span></label>
                                                <input type="password" {...register('password', validationOptions.password)} readOnly={token} className="form-control" />
                                                {errors.password && <p>{errors.password.message}</p>}
                                            </div>
                                        </div>

                                        <div className={`${styles['col-lg-12']} col-lg-12 col-md-6`}>
                                            <div className={`${styles['form-group']} form-group`}>
                                                <button type="submit" disabled={token} style={{
                                                    marginTop: '22px',
                                                    border: 'none',
                                                    color: '#ffffff',
                                                    backgroundColor: '#fe4a55',
                                                    transition: '0.5s',
                                                    width: '100%',
                                                    borderRadius: '5px',
                                                    padding: '14.5px 30px',
                                                    fontWeight: '700',
                                                    fontSize: '16px'
                                                }}>Create an account {loading ? <LoadingSpinner /> : ""}</button>
                                            </div>
                                        </div>

                                        <div className={`${styles['col-lg-12']} col-lg-12 col-md-6`}>
                                            <div className={`${styles['form-group']} form-group`}>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className={chkStyles['order-details']}>
                                    <h3 className={`${chkStyles['title']} title`}>Your Order</h3>

                                    <div className={`${chkStyles['order-table']} table-responsive`}>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cartItems.length && cartItems.map((cart) => (
                                                    <tr key={cart.id}>
                                                        <td className={chkStyles['product-name']}>
                                                            <a href="#">
                                                                {cart.title}
                                                            </a>
                                                        </td>

                                                        <td className={chkStyles['product-total']}>
                                                            <span className={chkStyles['subtotal-amount']}>
                                                                &#8377;{cart.total_cost}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}

                                                <tr>
                                                    <td className={chkStyles['total-price']}>
                                                        <span>Order Total</span>
                                                    </td>

                                                    <td className={chkStyles['product-subtotal']}>
                                                        <span className={chkStyles['subtotal-amount']}>
                                                            &#8377;{cartAmount}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={chkStyles['payment-box']}>
                                        <CheckoutBtn
                                            user={user}
                                            cartItems={cartItems}
                                            setToRegister={setToRegister}
                                            setIsAlert={setIsAlert}
                                            setShowAlertMessage={setShowAlertMessage}
                                            onClearCart={() => onClearCart()}
                                            setLoading={setLoading}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >

        </React.Fragment >
    )
}

export default GuestCheckout;