import React from 'react';
import Link from 'next/link';
import styles from '../Courses/Course.module.css';

const YouMightLikeTheCourses = () => {
    return (
        <div className={`${styles['courses-area']} bg-f8f9f8 pt-100 pb-70`}>
            <div className="container">
                <div className="section-title">
                    <h2>More Courses You Might Like</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className={styles['single-courses-box']}>
                            <div className={styles['courses-image']}>
                                <Link legacyBehavior href="/single-courses-1">
                                    <a className={`d-block ${styles['image']}`}>
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className={styles['fav']}>
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className={`${styles['price']} shadow`}>$39</div>
                            </div>
                            <div className={styles['courses-content']}>
                                <div className={`${styles['course-author']} d-flex align-items-center`}>
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link legacyBehavior href="/single-courses-1">
                                        <a>The Data Science Course 2020: Complete Data Science Bootcamp</a>
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
                        <div className={styles['single-courses-box']}>
                            <div className={styles['courses-image']}>
                                <Link legacyBehavior href="/single-courses-1">
                                    <a className={`d-block ${styles['image']}`}>
                                        <img src="/images/courses/courses2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className={styles['fav']}>
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className={`${styles['price']} shadow`}>$49</div>
                            </div>
                            <div className={styles['courses-content']}>
                                <div className={`${styles['course-author']} d-flex align-items-center`}>
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link legacyBehavior href="/single-courses-1">
                                        <a>Java Programming MasterclassName for Software Developers</a>
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
                        <div className={styles['single-courses-box']}>
                            <div className={styles['courses-image']}>
                                <Link legacyBehavior href="/single-courses-1">
                                    <a className={`d-block ${styles['imag']}`}>
                                        <img src="/images/courses/courses3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className={styles['fav']}>
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className={`${styles['price']} shadow`}>$59</div>
                            </div>
                            <div className={styles['courses-content']}>
                                <div className={`${styles['course-author']} d-flex align-items-center`}>
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link legacyBehavior href="/single-courses-1">
                                        <a>Deep Learning A-Z™: Hands-On Artificial Neural Networks</a>
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
                </div>
            </div>
        </div>
    )
}

export default YouMightLikeTheCourses;