import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={`${styles['about-area']} ptb-100`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className={styles['about-image']}>
                            <div className={`row ${styles['row']}`}>
                                <div className={`${styles['col-lg-6']} col-lg-6 col-sm-6 col-md-6 col-6`}>
                                    <div className={styles['image']}>
                                        <img src="/images/about-img1.png" alt="image" />
                                    </div>
                                </div>

                                <div className={`${styles['col-lg-6']} col-lg-6 col-sm-6 col-md-6 col-6`}>
                                    <div className={styles['image']}>
                                        <img src="/images/about-img2.png" alt="image" />
                                    </div>
                                </div>

                                <div className={`${styles['col-lg-6']} col-lg-6 col-sm-6 col-md-6 col-6`}>
                                    <div className={styles['image']}>
                                        <img src="/images/about-img3.png" alt="image" />
                                    </div>
                                </div>

                                <div className={`${styles['col-lg-6']} col-lg-6 col-sm-6 col-md-6 col-6`}>
                                    <div className={styles['image']}>
                                        <img src="/images/about-img4.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className={styles['about-content']}>
                            <span className={`sub-title ${'sub-title'}`}>ONLINE LEARNING</span>
                            <h2>89% of people learning for professional development report career benefits like getting a promotion, starting a new career</h2>
                            <p>Started in 2023, our aim is to provide best training on latest technologies and equip the learner with technical skills and knowledge and enable to secure a future.</p>

                            <ul className={styles['features-list']}>
                                <li><span><i className="flaticon-experience"></i> Expert Trainers</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Remote Learning</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Self Development</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src="/images/shape1.png" alt="image" /></div>
            <div className="shape2"><img src="/images/shape2.png" alt="image" /></div>
            <div className={`shape3 ${styles['shape3']}`}><img src="/images/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="/images/shape4.png" alt="image" /></div>
        </div>
    )
}

export default AboutUs;