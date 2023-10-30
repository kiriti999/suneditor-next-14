import React from 'react';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import { parseCookies } from 'nookies'
import api from "@/axios/axiosConfig";
import LoadingSpinner from "@/utils/LoadingSpinner";

const EditPassword = () => {
    const { token } = parseCookies()
    const [user, setUser] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

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
            const url = `${axiosApi.baseUrl}/api/v1/profile/edit-password`;
            const payload = { ...user };
            const response = await api.request({
                url: url,
                method: 'POST',
                data: payload,
                headers: { Authorization: token }
            });
            console.log('pages:: edit-password:: response.data: ', response);
        } catch (error) {
            console.log('error ', error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <LoadingSpinner />}
            <div className="ptb-100">
                <div className="container">
                    <div className="border-box">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" value={user.password} name="password"
                                    onChange={handleChange} className="form-control" id="email" />
                            </div>

                            <div className="form-group">
                                <label>Confirm New Password</label>
                                <input type="password" value={user.newPassword} name="newPassword"
                                    onChange={handleChange} className="form-control" id="email" />
                            </div>

                            <button type="submit" className="default-btn mt-10">
                                <i className='flaticon-right-chevron'></i> Update
                                <span></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPassword;