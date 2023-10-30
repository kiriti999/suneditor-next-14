import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosApi } from "../../utils/baseUrl";

const ContactForm = () => {

	const { register, handleSubmit, reset, control, formState: { errors } } = useForm(
		{
			mode: "onBlur",
			defaultValues: {
				name: '',
				email: '',
				number: '',
				subject: '',
				text: ''
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
		number: { required: "Number is required" },
		subject: { required: "Subject is required" },
		text: { required: "Text is required", maxLength: 800 },
	};

	const onSubmit = async (contact) => {
		try {
			const url = `${axiosApi.baseUrl}/api/v1/mail/contact`;
			const { name, email, number, subject, text } = contact;
			const payload = { name, email, number, subject, text };
			await axios.post(url, payload);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="contact-form">
			<h2>Ready to Get Started?</h2>
			<p>
				Your email address will not be published. Required fields are
				marked *
			</p>

			<form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="form-group">
							<input
								type="text"
								placeholder="Your name"
								{...register('name', validationOptions.name)}
							/>
							{errors.name && <p>{errors.name.message}</p>}
						</div>
					</div>

					<div className="col-lg-6 col-md-6">
						<div className="form-group">
							<input
								type="text"
								placeholder="Your email address"
								{...register('email', validationOptions.email)}
							/>
							{errors.email && <p>{errors.email.message}</p>}
						</div>
					</div>

					<div className="col-lg-12 col-md-6">
						<div className="form-group">
							<input
								type="text"
								placeholder="Your number"
								{...register('number', validationOptions.number)}
							/>
							{errors.number && <p>{errors.number.message}</p>}
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="form-group">
							<input
								type="text"
								placeholder="Your Subject"
								{...register('subject', validationOptions.subject)}
							/>
							{errors.subject && <p>{errors.subject.message}</p>}
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="form-group">
							<textarea
								name="text"
								cols="30"
								rows="5"
								placeholder="Write your message..."
								{...register('text', validationOptions.text)}
							/>
							{errors.text && <p>{errors.text.message}</p>}
						</div>
					</div>

					<div className="col-lg-12 col-sm-12">
						<button type="submit" className="default-btn">
							Send Message
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
