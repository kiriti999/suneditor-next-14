import React from 'react';
import { axiosApi } from "@/utils/baseUrl";
import api from "@/axios/axiosConfig";
import { useForm } from 'react-hook-form';
import { Alert } from "reactstrap";
import LoadingSpinner from "@/utils/LoadingSpinner";

const ResetPassword = () => {
    const [loading, setLoading] = React.useState(false);
    const [isAlert, setIsAlert] = React.useState(false);
    const [showAlertMessage, setShowAlertMessage] = React.useState({});

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                email: '',
            },
            resetOptions: {
                keepDirtyValues: true, // user-interacted input will be retained
                keepErrors: true, // input errors will be retained with value update
            }
        });

    const validationOptions = {
        email: {
            required: "Email is required", pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
            },
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


    const resetPassword = async (payload, e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${axiosApi.baseUrl}/api/v1/profile/reset-password-request`;
            const response = await api.request({
                url: url,
                method: 'POST',
                data: payload,
            });
            if (response.status === 200) {
                setShowAlertMessage({ status: 'success', message: response.data });
                setIsAlert(true);
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
                        <form onSubmit={handleSubmit(resetPassword)}>
                            <div className="form-group">
                                <label>Email address<span className="required">*</span></label>
                                <input type="email" {...register('email', validationOptions.email)} className="form-control w-25" />
                                {errors.email && <p>{errors.email.message}</p>}
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