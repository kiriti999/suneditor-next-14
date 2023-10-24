import React from "react";
import { useRouter } from 'next/router';
import { Alert } from "reactstrap";
import api from "@/axios/axiosConfig"
import catchErrors from "../../utils/catchErrors";
import { axiosApi } from "../../utils/baseUrl";
import { handleLogin } from "../../utils/auth";
import LoadingSpinner from "@/utils/LoadingSpinner";
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
	const [loading, setLoading] = React.useState(false);
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
		email: { required: "Email is required" },
		password: {
			required: `The password should be at least eight characters long. 
        To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ &` }
	};

	const handleRegister = async (payload, e) => {
		e.preventDefault();
		try {
			setLoading(true);
			setError("");
			const url = `${axiosApi.baseUrl}/api/v1/auth/register`;
			const response = await api.request({
				url: url,
				method: 'POST',
				data: payload
			});
			console.log('RegisterForm.js:: response.data: ', response.data);
			handleLogin(response.data);
		} catch (error) {
			console.log('RegisterForm.js:: error: ', error);
			// catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="register-form">
			<h2>Register</h2>
			<Alert color="danger" isOpen={error ? true : false}>
				{error}
			</Alert>

			<form onSubmit={handleSubmit(handleRegister)}>
				<div className="form-group">
					<label>Name <span className="required">*</span></label>
					<input type="text"{...register('name', validationOptions.name)} className="form-control" />
					{errors.name && <p>{errors.name.message}</p>}
				</div>

				<div className="form-group">
					<label>Email <span className="required">*</span></label>
					<input type="email" {...register('email', validationOptions.email)} className="form-control" />
					{errors.email && <p>{errors.email.message}</p>}
				</div>

				<div className="form-group">
					<label>Password <span className="required">*</span></label>
					<input type="password" {...register('password', validationOptions.password)} className="form-control" />
					{errors.password && <p>{errors.password.message}</p>}
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
