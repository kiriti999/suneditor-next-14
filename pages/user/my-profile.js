import React from 'react';
import api from '@/axios/axiosConfig';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import { parseCookies } from 'nookies'

const MyProfile = ({ profile }) => {
    return (
        <div>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-profile">
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

MyProfile.getInitialProps = async (ctx) => {
    const { token } = parseCookies(ctx);
    if (!token) {
        return { name: '', email: '' }
    }
    const payload = {
        headers: { Authorization: token }
    }
    const response = await axios.get(`${axiosApi.baseUrl}/api/v1/profile`, payload)
    console.log('pages/user/my-profile.js:: ', response);
    return response.data
}

export default MyProfile;