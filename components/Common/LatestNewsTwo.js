import React from 'react';
import Link from 'next/link';
import styles from '../About/Blog.module.css';

const LatestNewsTwo = () => {
    return (
        <div className={`${styles['blog-area']} ptb-100`}>
            <div className="container">
                <div className="section-title">
                    <span className={styles['sub-title']}>News</span>
                    <h2>Check Out Our Latest Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className={styles['single-blog-post-item']}>
                            <div className={styles['post-image']}>
                                <Link legacyBehavior href="/single-blog-3">
                                    <a className="d-block">
                                        <img src="/images/blog/blog4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div className={styles['post-content']}>
                                <Link legacyBehavior href="#">
                                    <a className={styles['category']}>Education</a>
                                </Link>
                                <h3>
                                    <Link legacyBehavior href="/single-blog-3">
                                        <a>University Admissions Could Face Emergency Controls</a>
                                    </Link>
                                </h3>
                                <ul className={`${styles['post-content-footer']} d-flex align-items-center`}>
                                    <li>
                                        <div className={`${styles['post-author']} d-flex align-items-center`}>
                                            <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className={styles['blog-post-list']}>
                            <div className="row">
                                <div className="col-lg-12 col-sm-6 col-md-6">
                                    <div className={styles['single-blog-post-item']}>
                                        <div className={styles['post-image']}>
                                            <Link legacyBehavior href="/single-blog-3">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog5.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles['post-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-blog-3">
                                                    <a>Online Learning Can Prepare Students For A Fast-Changing</a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-6 col-md-6">
                                    <div className={styles['single-blog-post-item']}>
                                        <div className={styles['post-image']}>
                                            <Link legacyBehavior href="/single-blog-3">
                                                <a className="d-block">
                                                    <img src="/images/blog/blog6.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles['post-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-blog-3">
                                                    <a>As Learning Moves Online, Trigger Warnings Must Too</a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className={styles['blog-post-info']}>
                            <p>Get into details now?​ <Link legacyBehavior href="/blog-3"><a>View all posts</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNewsTwo;