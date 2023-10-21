import React, { useState, useEffect } from "react";
import CheckoutBtn from "@/components/CheckoutButton/CheckoutBtn";
import { useSelector, useDispatch } from "react-redux";
import PageBanner from "../../components/Common/PageBanner";
import { calculateCartTotal } from "@/utils/cart/calculateCartTotal";
import { Spinner } from 'reactstrap';

const Checkout = ({ user }) => {
	console.log('Checkout.js:: user: ', user);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [cartAmount, setCartAmount] = useState(0);
	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState(false);

	useEffect(() => {
		const { cartTotal } = calculateCartTotal(cartItems);
		setCartAmount(cartTotal);
	}, [cartItems]);

	const onClearCart = () => {
		dispatch({
			type: "RESET_CART",
		});
	};
	return (
		<>
			<PageBanner
				pageTitle="Checkout"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Checkout"
			/>

			{loading && (
				<Spinner color="success"> </Spinner>
			)}

			<div className="checkout-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="order-details">
								<h3 className="title">Your Order</h3>

								<div className="order-table table-responsive">
									<table className="table table-bordered">
										<thead>
											<tr>
												<th scope="col">
													Product Name
												</th>
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
															&#8377;{cart.total_cost}
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

								<CheckoutBtn
									price={cartAmount}
									cartItems={cartItems}
									user={user}
									onClearCart={() => onClearCart()}
									setLoading={setLoading}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
