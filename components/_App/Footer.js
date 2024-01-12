import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles['footer-area']}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className={styles['single-footer-widget']}>
                            <Link legacyBehavior href="/">
                                <a className={styles['logo']}>
                                    <img src="/images/logo-white.png" alt="logo" style={{ width: '250px' }} />
                                    {/* <svg width="250.0239242553711" height="47.21212750232856" viewBox="0 0 367.5 69.39518651576807" className="css-1j8o68f"><defs id="SvgjsDefs4849"></defs><g id="SvgjsG4850" featurekey="textGroupContainer" transform="matrix(1,0,0,1,0,3)" fill="#ffffff"><rect xmlns="http://www.w3.org/2000/svg" y="0" x="0" height="1" width="1" opacity="0"></rect><rect xmlns="http://www.w3.org/2000/svg" y="60.833333333333336" x="0" width="35" height="2"></rect><rect xmlns="http://www.w3.org/2000/svg" y="60.833333333333336" x="332.5" width="35" height="2"></rect></g><g id="SvgjsG4851" featurekey="vMvB0T-0" transform="matrix(3.2956684078495977,0,0,3.2956684078495977,3.9905793684370243,-19.839930038383322)" fill="#ffffff"><path d="M11.32 10.56 q0 0.66 -0.2 1.25 t-0.53 1.06 t-0.78 0.82 t-0.93 0.53 q1.04 0.38 1.54 1.84 l0.6 1.7 q0.34 1 1 1.48 q-0.3 0.4 -0.9 0.67 t-1.32 0.27 t-1.12 -0.41 t-0.74 -1.43 l-0.72 -2.1 q-0.22 -0.6 -0.59 -0.92 t-1.11 -0.32 l-0.82 0 l0 5 q-0.64 0.12 -1.6 0.12 t-1.58 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.93 -0.06 t1.87 -0.02 q1.1 0 2 0.27 t1.53 0.81 t0.98 1.36 t0.35 1.9 z M4.7 8.62 l0 3.92 q0.9 0 1.54 -0.03 t1.03 -0.24 t0.59 -0.59 t0.2 -1.1 q0 -1.94 -1.88 -1.94 l-0.83 0 t-0.65 -0.02 z M16.520000000000003 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M14.9 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M29.860000000000003 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M28.240000000000002 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M45.120000000000005 8.98 l0.02 1.48 l0 9.54 q-0.68 0.12 -1.62 0.12 t-1.58 -0.12 l0 -11.02 l-1.28 0.02 l-2.06 0 q-0.12 -0.58 -0.12 -1.33 t0.12 -1.33 l9.9 0 q0.16 0.52 0.16 1.26 t-0.4 1.07 t-1.28 0.33 l-0.58 0 l-1.26 -0.02 l-0.02 0 z M48.92 18.82 q0.06 -0.66 0.41 -1.32 t0.83 -1.08 q2.14 1.3 4.06 1.3 q0.84 0 1.23 -0.38 t0.39 -0.94 q0 -0.94 -1.26 -1.48 l-2.36 -1 q-1.38 -0.62 -2.12 -1.49 t-0.74 -2.21 q0 -0.92 0.37 -1.68 t1.04 -1.32 t1.59 -0.87 t2.04 -0.31 q2.24 0 4.52 1.14 q-0.1 1.54 -1.08 2.4 q-2.04 -0.98 -3.6 -0.98 q-0.8 0 -1.2 0.36 t-0.4 0.82 q0 0.78 1.18 1.26 l2.4 1.02 q1.52 0.64 2.27 1.64 t0.75 2.32 q0 0.94 -0.34 1.72 t-1.01 1.35 t-1.67 0.89 t-2.34 0.32 q-2.6 0 -4.96 -1.48 z M68.42 11.78 l0 -0.24 q0 -2.96 -2.2 -2.96 q-1.26 0 -1.82 1.15 t-0.56 3.39 q0 2.22 0.7 3.3 t2.04 1.08 q0.7 0 1.55 -0.33 t1.85 -1.05 q0.5 0.34 0.93 0.93 t0.53 1.13 q-0.46 0.44 -1.07 0.83 t-1.32 0.67 t-1.48 0.45 t-1.55 0.17 q-1.54 0 -2.6 -0.59 t-1.71 -1.57 t-0.94 -2.26 t-0.29 -2.66 q0 -1.8 0.45 -3.15 t1.22 -2.25 t1.81 -1.35 t2.22 -0.45 q1.2 0 2.18 0.32 t1.67 0.88 t1.06 1.32 t0.37 1.64 q0 1.78 -1.82 1.78 q-0.54 0 -1.22 -0.18 z M76.32000000000001 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M74.7 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M91.48 15.719999999999999 l-1.58 0 l0 4.28 q-0.64 0.12 -1.6 0.12 q-0.98 0 -1.6 -0.12 l0 -13.56 l0.14 -0.14 q1.74 -0.04 2.89 -0.06 t1.75 -0.02 q1.1 0 2.01 0.3 t1.55 0.9 t0.99 1.49 t0.35 2.05 t-0.36 2.05 t-1 1.49 t-1.55 0.91 t-1.99 0.31 z M89.9 8.66 l0 4.66 q0.56 -0.02 0.89 -0.03 t0.43 -0.01 q0.54 0 0.9 -0.19 t0.58 -0.5 t0.32 -0.73 t0.1 -0.88 q0 -0.44 -0.1 -0.86 t-0.31 -0.74 t-0.55 -0.51 t-0.8 -0.19 l-0.82 0 t-0.64 -0.02 z M101.62 15.96 l-0.02 1.44 l0 0.02 q0.92 -0.04 1.48 -0.04 l4.64 0 q0 0.74 -0.06 1.14 q-0.24 1.54 -2.04 1.54 l-5.32 0 q-0.86 0 -1.35 -0.5 t-0.49 -1.36 l0 -11.72 l0.14 -0.14 l8.62 0 q0.12 0.58 0.12 1.26 t-0.28 1.42 l-5.46 0 l0.02 1.44 l0 1.4 q0.52 -0.02 1.36 -0.02 l3.06 0 q0.18 0.56 0.18 1.28 t-0.18 1.32 l-4.42 0 l0 1.52 z"></path></g><g id="SvgjsG4852" featurekey="sloganFeature-0" transform="matrix(0.8197873190578677,0,0,0.8197873190578677,42.786714752158154,52.68791968683635)" fill="#ffffff"><path d="M3.42 7.300000000000001 l0 4.42 l3.5 0 c1.86 0 3 -0.56 3 -2.32 c0 -1.34 -0.82 -2.1 -2.98 -2.1 l-3.52 0 z M1.48 20 l0 -14.36 l6.32 0 c2.68 0 4.06 1.66 4.06 3.62 c0 0.94 -0.34 2.26 -1.92 3 c0.94 0.38 2.6 1.04 2.6 3.5 c0 2.3 -1.7 4.24 -4.88 4.24 l-6.18 0 z M3.42 13.3 l0 5.04 l4.14 0 c2.02 0 3.04 -1.02 3.04 -2.62 c0 -2.02 -1.78 -2.42 -3.36 -2.42 l-3.82 0 z M28.992 18.28 l0 1.72 l-10.6 0 l0 -14.36 l10.46 0 l0 1.72 l-8.52 0 l0 4.4 l7.86 0 l0 1.72 l-7.86 0 l0 4.8 l8.66 0 z M45.344 9.84 l-1.82 0 c-0.1 -2.22 -1.94 -2.92 -3.56 -2.92 c-1.22 0 -3.28 0.34 -3.28 2.52 c0 1.22 0.86 1.62 1.7 1.82 l4.1 0.94 c1.86 0.44 3.26 1.56 3.26 3.84 c0 3.4 -3.16 4.34 -5.62 4.34 c-2.66 0 -3.7 -0.8 -4.34 -1.38 c-1.22 -1.1 -1.46 -2.3 -1.46 -3.64 l1.82 0 c0 2.6 2.12 3.36 3.96 3.36 c1.4 0 3.76 -0.36 3.76 -2.42 c0 -1.5 -0.7 -1.98 -3.06 -2.54 l-2.94 -0.68 c-0.94 -0.22 -3.06 -0.88 -3.06 -3.38 c0 -2.24 1.46 -4.44 4.94 -4.44 c5.02 0 5.52 3 5.6 4.58 z M50.29600000000001 7.359999999999999 l0 -1.72 l11.66 0 l0 1.72 l-4.86 0 l0 12.64 l-1.94 0 l0 -12.64 l-4.86 0 z M77.92 5.640000000000001 l0 12.64 l7.28 0 l0 1.72 l-9.22 0 l0 -14.36 l1.94 0 z M101.232 18.28 l0 1.72 l-10.6 0 l0 -14.36 l10.46 0 l0 1.72 l-8.52 0 l0 4.4 l7.86 0 l0 1.72 l-7.86 0 l0 4.8 l8.66 0 z M115.124 15.82 l-5.76 0 l-1.5 4.18 l-2 0 l5.4 -14.36 l2.2 0 l5.2 14.36 l-2.12 0 z M109.964 14.1 l4.46 0 l-2.12 -6.32 l-0.04 0 z M125.956 13.84 l0 6.16 l-1.94 0 l0 -14.36 l6.64 0 c2.36 0 4.72 0.82 4.72 3.86 c0 2.12 -1.08 2.9 -2 3.44 c0.82 0.34 1.64 0.7 1.72 2.7 l0.12 2.6 c0.02 0.8 0.12 1.1 0.72 1.44 l0 0.32 l-2.38 0 c-0.28 -0.88 -0.34 -3.06 -0.34 -3.6 c0 -1.18 -0.24 -2.56 -2.56 -2.56 l-4.7 0 z M125.956 7.300000000000001 l0 4.88 l4.5 0 c1.42 0 2.92 -0.36 2.92 -2.48 c0 -2.22 -1.62 -2.4 -2.58 -2.4 l-4.84 0 z M151.06799999999998 17.240000000000002 l0 -11.6 l1.88 0 l0 14.36 l-2.18 0 l-7.3 -11.6 l-0.04 0 l0 11.6 l-1.88 0 l0 -14.36 l2.3 0 l7.18 11.6 l0.04 0 z M161.55999999999997 5.640000000000001 l0 14.36 l-1.94 0 l0 -14.36 l1.94 0 z M177.73199999999997 17.240000000000002 l0 -11.6 l1.88 0 l0 14.36 l-2.18 0 l-7.3 -11.6 l-0.04 0 l0 11.6 l-1.88 0 l0 -14.36 l2.3 0 l7.18 11.6 l0.04 0 z M192.24399999999997 13.98 l0 -1.66 l6.3 0 l0 7.68 l-1.26 0 l-0.46 -1.86 c-0.98 1.36 -2.78 2.24 -4.74 2.24 c-2.46 0 -3.66 -0.9 -4.4 -1.62 c-2.2 -2.08 -2.26 -4.54 -2.26 -6.06 c0 -3.5 2.12 -7.44 6.8 -7.44 c2.68 0 5.66 1.52 6.08 4.74 l-1.88 0 c-0.62 -2.5 -2.72 -3.02 -4.3 -3.02 c-2.58 0 -4.7 2.06 -4.7 5.82 c0 2.92 0.96 5.92 4.78 5.92 c0.72 0 1.88 -0.08 2.94 -0.92 c1.26 -1 1.58 -2.28 1.58 -3.82 l-4.48 0 z M215.90799999999996 7.300000000000001 l0 4.98 l3.86 0 c1.74 0 2.92 -0.64 2.92 -2.58 c0 -1.82 -1.24 -2.4 -2.84 -2.4 l-3.94 0 z M215.90799999999996 13.940000000000001 l0 6.06 l-1.94 0 l0 -14.36 l6.46 0 c2.66 0 4.26 1.72 4.26 4.04 c0 2 -1.14 4.26 -4.26 4.26 l-4.52 0 z M232.37999999999997 5.640000000000001 l0 12.64 l7.28 0 l0 1.72 l-9.22 0 l0 -14.36 l1.94 0 z M252.91199999999995 15.82 l-5.76 0 l-1.5 4.18 l-2 0 l5.4 -14.36 l2.2 0 l5.2 14.36 l-2.12 0 z M247.75199999999995 14.1 l4.46 0 l-2.12 -6.32 l-0.04 0 z M260.32399999999996 7.359999999999999 l0 -1.72 l11.66 0 l0 1.72 l-4.86 0 l0 12.64 l-1.94 0 l0 -12.64 l-4.86 0 z M279.25600000000003 13.48 l0 6.52 l-1.94 0 l0 -14.36 l9.94 0 l0 1.72 l-8 0 l0 4.4 l7.04 0 l0 1.72 l-7.04 0 z M303.928 12.82 c0 -3.38 -1.88 -5.84 -5 -5.84 s-5 2.46 -5 5.84 s1.88 5.84 5 5.84 s5 -2.46 5 -5.84 z M305.928 12.82 c0 3.1 -1.64 7.56 -7 7.56 s-7 -4.46 -7 -7.56 s1.64 -7.56 7 -7.56 s7 4.46 7 7.56 z M313.74 13.84 l0 6.16 l-1.94 0 l0 -14.36 l6.64 0 c2.36 0 4.72 0.82 4.72 3.86 c0 2.12 -1.08 2.9 -2 3.44 c0.82 0.34 1.64 0.7 1.72 2.7 l0.12 2.6 c0.02 0.8 0.12 1.1 0.72 1.44 l0 0.32 l-2.38 0 c-0.28 -0.88 -0.34 -3.06 -0.34 -3.6 c0 -1.18 -0.24 -2.56 -2.56 -2.56 l-4.7 0 z M313.74 7.300000000000001 l0 4.88 l4.5 0 c1.42 0 2.92 -0.36 2.92 -2.48 c0 -2.22 -1.62 -2.4 -2.58 -2.4 l-4.84 0 z M343.03200000000004 20 l-1.88 0 l0 -8.48 c0 -0.42 0.04 -2.24 0.04 -3.58 l-0.04 0 l-4.04 12.06 l-1.92 0 l-4.04 -12.04 l-0.04 0 c0 1.32 0.04 3.14 0.04 3.56 l0 8.48 l-1.88 0 l0 -14.36 l2.78 0 l4.1 12.14 l0.04 0 l4.08 -12.14 l2.76 0 l0 14.36 z"></path></g></svg> */}
                                </a>
                            </Link>

                            <p>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>

                            <ul className={styles['social-link']}>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className={`${styles['single-footer-widget']} pl-5`}>
                            <h3>Explore</h3>
                            <ul className={styles['footer-links-list']}>
                                <li>
                                    <Link legacyBehavior href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/courses">
                                        <a>Courses</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link legacyBehavior href="/events">
                                        <a>Events</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link legacyBehavior href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className={styles['single-footer-widget']}>
                            <h3>Resources</h3>
                            <ul className={styles['footer-links-list']}>
                                <li>
                                    <Link legacyBehavior href="#">
                                        <a>Student Success</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link legacyBehavior href="#">
                                        <a>Scholarships</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link legacyBehavior href="#">
                                        <a>For Business</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link legacyBehavior href="#">
                                        <a>Go Premium</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link legacyBehavior href="#">
                                        <a>Team Plans</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className={styles['single-footer-widget']}>
                            <h3>Address</h3>
                            <ul className={styles['footer-contact-info']}>
                                <li>
                                    <i className='bx bx-map'></i>
                                    Hyderabad, India
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">+91 8309580094</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:info@whatsnxt.in">info@whatsnxt.in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles['footer-bottom-area']}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} whatsnxt <a target="_blank" href="https://www.whatsnxt.in/">Copyright reserved</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link legacyBehavior href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['lines']}>
                <div className={styles['line']}></div>
                <div className={styles['line']}></div>
                <div className={styles['line']}></div>
            </div>
        </footer>
    );
}

export default Footer;