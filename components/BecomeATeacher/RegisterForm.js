import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { parseCookies } from 'nookies'
import { Spinner, Alert } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import catchErrors from '@/utils/catchErrors'
import { axiosApi } from "@/utils/baseUrl";
import styles from './RegisterForm.module.css';

const RegisterForm = ({ user }) => {
    const { token } = parseCookies()
    console.log('teacher user ', user)
    console.log('teacher token ', token)

    const [initApply, setInitApply] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [disabled, setDisabled] = React.useState(true)
    const [error, setError] = React.useState('')

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                name: '',
                email: user.email ? user.email : '',
                number: '',
                subject: 'teacher',
                as_teacher_apply: true,
                as_teacher_req_desc: 'I would like to apply as teacher'
            },
            resetOptions: {
                keepDirtyValues: true, // user-interacted input will be retained
                keepErrors: true, // input errors will be retained with value update
            }
        });

    const validationOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required" },
        number: { required: "Number is required" },
        subject: { required: "Subject is required" }
    };

    const handleApply = async (payload, e) => {
        // e.preventDefault()
        try {
            setLoading(true)
            setError('')
            const url = `${axiosApi.baseUrl}/api/v1/user/apply`
            console.log('RegisterForm.js:: handleApply:: payload: ', payload);
            payload.as_teacher_apply = true;
            const response = await axios.post(url, payload, {
                headers: { Authorization: token }
            })

            toast.success(response.data)
            setInitApply(true)
        } catch (error) {
            catchErrors(error, setError)
        } finally {
            setLoading(false);
        }
    }

    const isApplied = user && user.as_teacher_apply === true && user.as_teacher_confirmed === null
    const isTeacher = user && user.as_teacher_apply === true && user.as_teacher_confirmed === true
    const isCancelled = user && user.as_teacher_apply === true && user.as_teacher_confirmed === false

    return (
        <div className={`${styles['teacher-register-area']} ptb-100`}>
            <div className="container">
                <div className={styles['teacher-register-box']}>
                    <h2>Register to Become an Instructor</h2>
                    <p>Your email address will not be published. Required fields are marked *</p>

                    {isApplied && (
                        <Alert color="info mt-15">
                            Your application is pending now, you will get notice soon.
                        </Alert>
                    )}
                    {isTeacher && (
                        <Alert color="success mt-15">
                            You already a teacher & create much exciting content.
                        </Alert>
                    )}
                    {isCancelled && (
                        <Alert color="success mt-15">
                            You already applied & you got cancellation.
                        </Alert>
                    )}

                    <form id="contactForm" onSubmit={handleSubmit(handleApply)}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        {...register('name', validationOptions.name)}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text" readOnly={user.email ? true : false}
                                        placeholder="Your email address"
                                        {...register('email', validationOptions.email)}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your phone number"
                                        {...register('number', validationOptions.number)}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Your Subject"
                                        {...register('subject', validationOptions.subject)}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea
                                        cols="30"
                                        rows="5"
                                        placeholder="Please tell us about your teaching profession"
                                        className="form-control"
                                        {...register('as_teacher_req_desc')}
                                    />
                                    <div className={styles['invalid-feedback']} style={{ display: 'block' }}>
                                        {errors.text && 'Details is required.'}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-sm-12">
                                {!(initApply || isApplied || isTeacher || isCancelled) && (
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="default-btn"
                                        >
                                            Apply Now
                                            {loading ? <Spinner color="success" /> : ''}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;