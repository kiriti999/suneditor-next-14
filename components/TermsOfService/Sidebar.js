import React from 'react';
import Link from 'next/link';
import styles from '../Blog/Widget.module.css';

const Sidebar = () => {
    return (
        <div className={styles['widget-area']}>
            <div className={`${styles['widget']} ${styles['widget_insight']}`}>
                <ul>
                    <li>
                        <Link legacyBehavior href="/about-1">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/contact">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/purchase-guide">
                            <a>Purchase Guide</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/privacy-policy">
                            <a>Privacy Policy</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/terms-of-service">
                            <a>Terms of Service</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={`${styles['widget']} ${styles['widget_recent_courses']}`}>
                <h3 className={styles['widget-title']}>Recent Courses</h3>

                <div className={styles['item']}>
                    <Link legacyBehavior href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg1']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>$49.00</span>
                        <h4 className={`${styles['title']} title usmall`}>
                            <Link legacyBehavior href="#">
                                <a>The Data Science Course 2020: Complete Data Science Bootcamp</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className={styles['item']}>
                    <Link legacyBehavior href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg2']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>$59.00</span>
                        <h4 className={`${styles['title']} title usmall`}>
                            <Link legacyBehavior href="#">
                                <a>Java Programming MasterclassName for Software Developers</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className={styles['item']}>
                    <Link legacyBehavior href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg3']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>$69.00</span>
                        <h4 className={`${styles['title']} title usmall`}>
                            <Link legacyBehavior href="#">
                                <a>Deep Learning A-Z™: Hands-On Artificial Neural Networks</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            <div className={`${styles['widget']} ${styles['widget_tag_cloud']}`}>
                <h3 className={styles['widget-title']}>Popular Tags</h3>

                <div className={styles['tagcloud']}>
                    <Link legacyBehavior href="#">
                        <a>Business <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Design <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Braike <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;