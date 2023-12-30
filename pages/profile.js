import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Quizzes from '../components/Profile/Quizzes';
import styles from './profile.module.css';

const Profile = () => {
    return (
        <>

            <div className="profile-area">
                <div className="container">
                    <div className={`${styles['profile-box']} ptb-100`}>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className={styles['image']}>
                                    <img src="/images/advisor/advisor10.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className={styles['content']}>
                                    <h3>Sarah Taylor</h3>
                                    <span className={styles['sub-title']}>Agile Project Expert</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    
                                    <ul className={styles['info']}>
                                        <li><span>Phone Number:</span> <a href="tel:+44254588689">(+44) -2545 - 88689</a></li>
                                        <li><span>Email:</span> <a href="mailto:hello@sarahtaylor.com">hello@sarahtaylor.com</a></li>
                                    </ul>

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProfileCourses />
                    
                    <Quizzes />
                </div>
            </div>
        </>
    )
}

export default Profile;