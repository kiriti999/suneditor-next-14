import React from "react";
import { Alert } from "reactstrap";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";

import catchErrors from "../../utils/catchErrors";
import { axiosApi } from "../../utils/baseUrl";
import { handleLogin, fetchUser } from "../../utils/auth";
import LoadingSpinner from "@/utils/LoadingSpinner";
import Router from 'next/router'

const INITIAL_USER = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const dispatch = useDispatch();

	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	React.useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			setError("");
			const url = `${axiosApi.baseUrl}/api/v1/auth/login`;
			const payload = { ...user };
			const response = await axios.post(url, payload);
			console.log('login response ', response.data)

            const userObject = await fetchUser(response.data);
			console.log('userObject ', userObject);
            dispatch({
                type: "UPDATE_USER",
                data: response.data
            });

            dispatch({
                type: 'UPDATE_USEROBJ',
                data: userObject
            });

			const cartId = localStorage.getItem('cart-id');
			if (cartId) {
				const cartRes = await axios.get(`${axiosApi.baseUrl}/api/v1/cart/${cartId}`, {
					headers: { Authorization: response.data }
				});
	
				dispatch({
					type: 'UPDATE_CART',
					data: cartRes.data.cart
				});
	
				console.log(cartRes);
			} else {
				const cartRes = await axios.post(`${axiosApi.baseUrl}/api/v1/cart`, {}, {
					headers: { Authorization: response.data }
				});

				localStorage.setItem('cart-id', cartRes.data.id);
				console.log(cartRes);
			}

			handleLogin(response.data);
			Router.push('/')
		} catch (error) {
			console.log('error ', error);
			alert('Unable to login')
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="login-form">
			<h2>Login</h2>

			<Alert color="danger" isOpen={error ? true : false}>
				{error}
			</Alert>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control"
						placeholder="Email"
						name="email"
						type="email"
						value={user.email}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						className="form-control"
						placeholder="Password"
						name="password"
						type="password"
						value={user.password}
						onChange={handleChange}
					/>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
						<p>
							<input type="checkbox" id="test2" />
							<label htmlFor="test2">Remember me</label>
						</p>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
						<Link href="/reset-password">
							<a className="lost-your-password">
								Lost your password?
							</a>
						</Link>
					</div>
				</div>

				<button type="submit" disabled={disabled}>
					Log In
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
