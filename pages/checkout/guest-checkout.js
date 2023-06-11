import React, { useState, useEffect } from "react";
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { calculateCartTotal } from "@/utils/cart/calculateCartTotal";
import CheckoutBtn from "@/components/CheckoutButton/CheckoutBtn";

export const GuestCheckout = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const [cartAmount, setCartAmount] = useState(0);
    const dispatch = useDispatch();

    // initial state
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [error, setError] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
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


    const onClearCart = () => {
        dispatch({
            type: "RESET_CART",
        });
    };

    return (
        <React.Fragment>
            <PageBanner
                pageTitle="Checkout"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Checkout"
            />

            <div className="checkout-area ptb-65">
                <div className="container">
                    <div className="user-actions">
                        <i className='bx bx-log-in'></i>
                        <span>Returning customer? <Link href="/authentication"><a>Click here to login</a></Link></span>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="billing-details">
                                    <h3 className="title">Billing Details</h3>

                                    <div className="row">

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Full Name <span className="required">*</span></label>
                                                <input type="text" name="name" value={user.name} onChange={handleChange} className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="phone" name="phone" value={user.phone} onChange={handleChange} className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="create-an-account" />
                                                <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="order-details">
                                    <h3 className="title">Your Order</h3>

                                    <div className="order-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cartItems.map((cart) => (
                                                    <tr key={cart.id}>
                                                        <td className="product-name">
                                                            <a href="#">
                                                                {cart.title}
                                                            </a>
                                                        </td>

                                                        <td className="product-total">
                                                            <span className="subtotal-amount">
                                                                &#8377;{cart.price}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}

                                                <tr>
                                                    <td className="total-price">
                                                        <span>Order Total</span>
                                                    </td>

                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">
                                                            &#8377;{cartAmount}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="payment-box">
                                        {/* <a href="#" className="default-btn">
                                            <i className="flaticon-shopping-cart"></i> Place Order <span></span>
                                        </a> */}
                                        {/* <button className="default-btn" onClick={(e) => {
                                            e.preventDefault()
                                            handlePayment()
                                        }}>
                                            <i className="flaticon-shopping-cart"></i> Make Payment{" "}
                                            <span></span>
                                        </button> */}
                                        <CheckoutBtn
                                            user={user}
                                            cartItems={cartItems}
                                            onClearCart={() => onClearCart()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    )
}

export default GuestCheckout;