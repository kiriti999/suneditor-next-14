import React from 'react';
import Link from 'next/link';

const MyProfile = ({ user }) => {
    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-profile">
                                {/* <img src="/images/success-people/success-people3.jpg" /> */}
                                <h3>John Smith</h3>
                                <p>test@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// MyProfile.getInitialProps = async () => {
//     const url = `${axiosApi.baseUrl}/api/v1/users?id=${id}`
//     const response = await axios.get(url)
//     // console.log(response)
//     return response.data
// }

export default MyProfile;