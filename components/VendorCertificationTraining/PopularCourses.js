import React from 'react';
import Link from 'next/link';
import styles from '../Courses/Course.module.css';

const PopularCourses = () => {
    return (
        <div className={`${styles['courses-area']} ${styles['pt-100']} ${styles['pb-70']} pt-100 pb-70`}>
            <div className="container">
                <div className="section-title">
                    <span className={styles['sub-title']}>Go at your own pace</span>
                    <h2>Popular Project Management Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className={`${styles['single-courses-box']} ${styles['without-boxshadow']}`}>
                            <div className={styles['courses-image']}>
                                <Link href="/single-courses-2">
                                    <a className={`d-block ${styles['image']}`}>
                                        <img src="/images/courses/courses9.jpg" alt="image" />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className={styles['fav']}><i className="flaticon-heart"></i></a>
                                </Link>

                                <div className={`${styles['price']} shadow`}>$39</div>
                            </div>
                            <div className={styles['courses-content']}>
                                <div className={`${styles['course-author']} d-flex align-items-center`}>
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PRINCE2® Practitioner Certification Training</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className={`${styles['courses-box-footer']} d-flex justify-content-between align-items-center`}>
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 145 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className={`${styles['single-courses-box']} without-boxshadow active`}>
                            <div className={styles['courses-image']}>
                                <Link href="/single-courses-2">
                                    <a className={`d-block ${styles['image']}`}>
                                        <img src="/images/courses/courses10.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className={styles['fav']}><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className={`${styles['price']} shadow`}>$49</div>
                            </div>
                            <div className={styles['courses-content']}>
                                <div className={`${styles['course-author']} d-flex align-items-center`}>
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PMI-RMP® Certification Training</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className={`${styles['courses-box-footer']} d-flex justify-content-between align-items-center`}>
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 100 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className={`${styles['single-courses-box']} ${styles['without-boxshadow']}`}>
                            <div className={styles['courses-image']}>
                                <Link href="/single-courses-2">
                                    <a className={`d-block ${styles['image']}`}>
                                        <img src="/images/courses/courses11.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className={styles['fav']}><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className={`${styles['price']} shadow`}>$59</div>
                            </div>
                            <div className={styles['courses-content']}>
                                <div className={`${styles['course-author']} d-flex align-items-center`}>
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>PRINCE2® Foundation Certification Training</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className={`${styles['courses-box-footer']} d-flex justify-content-between align-items-center`}>
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 150 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className={styles['courses-info']}>
                            <Link href="/courses-2">
                                <a className={`${styles['default-btn']} default-btn`}>
                                    <i className="flaticon-user"></i> View All Courses <span></span>
                                </a>
                            </Link>

                            <p>Get into details now?​ <Link href="/courses-2"><a>PM Master’s Program</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;