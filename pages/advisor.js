import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import PremiumAccessTwo from '../components/Common/PremiumAccessTwo';
import Link from 'next/link';
import styles from '../components/Common/CourseAdvisor.module.css';

const Advisor = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Advisor" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Advisor" 
            />  

            <div className="advisor-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles['single-advisor-item']}>
                                <div className={styles['advisor-image']}>
                                    <img src="/images/advisor/advisor4.jpg" alt="image" />

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className={styles['advisor-content']}>
                                    <h3>
                                        <Link legacyBehavior href="#">
                                            <a>James Andy</a>
                                        </Link>
                                    </h3>
                                    <span>Project Management Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles['single-advisor-item']}>
                                <div className={styles['advisor-image']}>
                                    <img src="/images/advisor/advisor5.jpg" alt="image" />

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className={styles['advisor-content']}>
                                    <h3>
                                        <Link legacyBehavior href="#">
                                            <a>Jassica Hische</a>
                                        </Link>
                                    </h3>
                                    <span>Illustrator Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles['single-advisor-item']}>
                                <div className={styles['advisor-image']}>
                                    <img src="/images/advisor/advisor6.jpg" alt="image" />

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className={styles['advisor-content']}>
                                    <h3>
                                        <Link legacyBehavior href="#">
                                            <a>Alister Cock</a>
                                        </Link>
                                    </h3>
                                    <span>QA Project Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles['single-advisor-item']}>
                                <div className={styles['advisor-image']}>
                                    <img src="/images/advisor/advisor7.jpg" alt="image" />

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className={styles['advisor-content']}>
                                    <h3>
                                        <Link legacyBehavior href="#">
                                            <a>Lina Ninja</a>
                                        </Link>
                                    </h3>
                                    <span>QA Project Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles['single-advisor-item']}>
                                <div className={styles['advisor-image']}>
                                    <img src="/images/advisor/advisor8.jpg" alt="image" />

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className={styles['advisor-content']}>
                                    <h3>
                                        <Link legacyBehavior href="#">
                                            <a>Chris Evans</a>
                                        </Link>
                                    </h3>
                                    <span>Python Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles['single-advisor-item']}>
                                <div className={styles['advisor-image']}>
                                    <img src="/images/advisor/advisor9.jpg" alt="image" />

                                    <ul className={styles['social-link']}>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className={styles['advisor-content']}>
                                    <h3>
                                        <Link legacyBehavior href="#">
                                            <a>Scarlett Johansson</a>
                                        </Link>
                                    </h3>
                                    <span>Photoshop Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-100">
                <PremiumAccessTwo />
            </div>
        </>
    )
}

export default Advisor;