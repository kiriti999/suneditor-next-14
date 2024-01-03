import React from 'react';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import { parseCookies } from 'nookies'
import api from "@/axios/axiosConfig"
import { useQuery } from '@tanstack/react-query';

const defProfile = { name: '', email: '' };

const EditProfile = () => {
    const { token } = parseCookies()
    const [user, setUser] = React.useState(defProfile);
    const [disabled, setDisabled] = React.useState(true);

    const { isFetching, data } = useQuery({
        queryKey: ['edit-profile'],
        queryFn: async () => {
            if (!token) return defProfile;

            const payload = {
                headers: { Authorization: token }
            }

            const response = await axios.get(`${axiosApi.baseUrl}/api/v1/edit`, payload)
            console.log('pages/user/edit-profile.js:: ', response);
            return response.data?.profile || defProfile;
        }
    });

    React.useEffect(() => {
        if (!isFetching) setUser(data);
    }, [isFetching, data]);

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
            const url = `${axiosApi.baseUrl}/api/v1/profile/edit`;
            const payload = { ...user };
            const response = await api.request({
                url: url,
                method: 'POST',
                data: payload,
                headers: { Authorization: token }
            });
            console.log('pages:: edit-profile:: response.data: ', response);
            if (response.status === 200) alert('User data updated')
        } catch (error) {
            console.log('error ', error)
        }
    };
    return (
        <div>
            <div className="ptb-100">
                <div className="container">
                    <div className="border-box">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange} className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange} className="form-control" />
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

export default EditProfile;