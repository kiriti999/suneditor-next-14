import React from 'react';
import { axiosApi } from "@/utils/baseUrl";
import api from "@/axios/axiosConfig";
import { useForm } from 'react-hook-form';
import { Alert } from "reactstrap";
import LoadingSpinner from "@/utils/LoadingSpinner";
import Router from 'next/router'

const ResetPassword = () => {
    const [loading, setLoading] = React.useState(false);
    const [isAlert, setIsAlert] = React.useState(false);
    const [showAlertMessage, setShowAlertMessage] = React.useState({});

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                password: '',
                confirmPassword: '',
            },
            resetOptions: {
                keepDirtyValues: true, // user-interacted input will be retained
                keepErrors: true, // input errors will be retained with value update
            }
        });

    const validationOptions = {
        password: { required: "Password is required", minLength: 8 },
        confirmPassword: { required: "Confirm password is required", minLength: 8 }
    };


    const setPassword = async (payload) => {
        if (payload.password !== payload.confirmPassword) {
            setShowAlertMessage({ status: 'danger', message: 'New password and Confirm New password did not match' });
            setIsAlert(true);
            return;
        }
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const id = urlParams.get('id');
        try {
            setLoading(true);
            const url = `${axiosApi.baseUrl}/api/v1/profile/reset-password/${id}/${token}`;
            const response = await api.request({
                url: url,
                method: 'POST',
                data: payload
            });
            if (response.status === 200) {
                setShowAlertMessage({ status: 'success', message: response.data });
                setIsAlert(true);
                setTimeout(() => {
                    Router.push('/authentication')
                }, 3000)

            }
            console.log('pages:: reset-password:: response.data: ', response);
        } catch (error) {
            console.log('error ', error);
            setShowAlertMessage({ status: 'failed', message: error.message });
            setIsAlert(true);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        let timeout = setTimeout(() => {
            setIsAlert(false);
        }, 3000)
        return (() => {
            clearTimeout(timeout);
        })

    }, [isAlert]);

    return (
        <div>
            {loading && <LoadingSpinner />}
            {isAlert && <Alert color={showAlertMessage.status} className="text-center">
                {showAlertMessage.message}
            </Alert>}
            <div className="ptb-100">
                <div className="container">
                    <div className="border-box">
                        <h3>Reset your password</h3>
                        <br></br>
                        <form onSubmit={handleSubmit(setPassword)}>
                            <div className="form-group">
                                <label>New Password<span className="required">*</span></label>
                                <input type="password" {...register('password', validationOptions.password)} className="form-control w-25" />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <div className="form-group">
                                <label>Confirm New Password<span className="required">*</span></label>
                                <input type="password" {...register('confirmPassword', validationOptions.confirmPassword)} className="form-control w-25" />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                            </div>

                            <button type="submit" className="default-btn mt-10">
                                <i className='flaticon-right-chevron'></i> submit
                                <span></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;