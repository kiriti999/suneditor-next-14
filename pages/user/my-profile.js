import React, { useState, useEffect } from 'react';
import api from '@/axios/axiosConfig';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import { parseCookies } from 'nookies';
import { useQuery } from '@tanstack/react-query';
import styles from './my-profile.module.css'

const defProfile = { name: '', email: '' };

const MyProfile = () => {
    const { token } = parseCookies();
    const [profile, setProfile] = useState(defProfile);
    const { isFetching, data } = useQuery({
        queryKey: ['user-profile', token],
        queryFn: async () => {
            if (!token) return defProfile;

            const payload = {
                headers: { Authorization: token }
            }

            const response = await axios.get(`${axiosApi.baseUrl}/api/v1/profile`, payload)
            console.log('pages/user/my-profile.js:: ', response);
            return response.data.profile || defProfile;
        }
    });

    useEffect(() => {
        if (!isFetching) setProfile(data);
    }, [isFetching, data]);

    return (
        <div>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles['user-profile']}>
                                {/* <img src="/images/success-people/success-people3.jpg" /> */}
                                <h3>{profile.name || 'No user info'}</h3>
                                <p>{profile.email || 'No email found'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;