import React from 'react';
import Link from 'next/link';
import styles from '../About/Blog.module.css';

const ViewAllCourses = () => {
    return (
        <div className={`${styles['view-all-courses-area-two']} ptb-70 bg-fef8ef`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className={styles['view-all-courses-content']}>
                            <span className="sub-title">Distance learning</span>
                            <h2>Get ahead with Learning Paths. Stay Sharp.</h2>
                            <p>With The Open University you can study whenever and wherever you choose. We have students in over 128 countries, and a global reputation as a pioneer in the field of flexible learning. Our flexible teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.</p>

                            <Link href="/courses-2">
                                <a className={`${styles['default-btn']} default-btn`}>
                                    <i className="flaticon-agenda"></i> View All Courses <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className={styles['view-all-courses-image']}>
                            <img src="/images/woman-with-book.png" alt="image" />

                            <div className={`${styles['shape11']} shape11`} data-speed="0.06" data-revert="true">
                                <img src="/images/shape10.png" alt="image" />
                            </div>
                            <div className={`${styles['shape12']} shape12`} data-speed="0.06" data-revert="true">
                                <img src="/images/shape11.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles['shape1']} shape1`} data-speed="0.06" data-revert="true">
                <img src="/images/shape1.png" alt="image" />
            </div>
            <div className={`${styles['shape9']} shape9`} data-speed="0.06" data-revert="true">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default ViewAllCourses;