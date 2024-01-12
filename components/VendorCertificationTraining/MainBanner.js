import React from 'react';
import Link from 'next/link';
import styles from '../Index/MainBanner.module.css';

const MainBanner = () => {
    return (
        <div className={styles['banner-section']}>
            <div className={`container-fluid ${styles['container-fluid']}`}>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className={styles['banner-content']}>
                            <h1>Project Management Certification Training </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                            <Link legacyBehavior href="/authentication">
                                <a className={`default-btn ${styles['default-btn']}`}>
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className={styles['banner-image']}>
                            <img src="/images/banner-img1.png" alt="image" />

                            <div className={styles['banner-shape4']}>
                                <img src="/images/banner-shape4.png" alt="image" />
                            </div>
                            <div className={styles['banner-shape5']}>
                                <img src="/images/banner-shape5.png" alt="image" />
                            </div>
                            <div className={styles['banner-shape6']}>
                                <img src="/images/banner-shape6.png" alt="image" />
                            </div>
                            <div className={styles['banner-shape7']}>
                                <img src="/images/banner-shape7.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;