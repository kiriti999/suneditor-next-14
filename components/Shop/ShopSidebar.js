import React from 'react';
import Link from 'next/link';
import styles from '../Blog/Widget.module.css';

const ShopSidebar = () => {
    return (
        <div className={styles['widget-area']}>
            <div className={`${styles['widget']} ${styles['widget_search']}`}>
                <h3 className={styles['widget-title']}>Search</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className={styles['search-field']} placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="bx bx-search-alt"></i>
                    </button>
                </form>
            </div>
 
            <div className={`${styles['widget']} ${styles['widget_popular_products']}`}>
                <h3 className={styles['widget-title']}>Popular Products</h3>

                <div className={styles['item']}>
                    <Link href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg1']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>$49.00</span>
                        <h4 className={`${styles['title']} usmall`}>
                            <Link href="#">
                                <a>Random Romance Novel Title Generator</a>
                            </Link>
                        </h4>
                        <div className={styles['rating']}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className={styles['item']}>
                    <Link href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg2']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>$59.00</span>
                        <h4 className={`${styles['title']} usmall`}>
                            <Link href="#">
                                <a>Writing Exercises Story Title Ideas</a>
                            </Link>
                        </h4>
                        <div className={styles['rating']}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className={styles['item']}>
                    <Link href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg3']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>$69.00</span>
                        <h4 className={`${styles['title']} usmall`}>
                            <Link href="#">
                                <a>Amaze Story Kitt Net's Book Ideas</a>
                            </Link>
                        </h4>
                        <div className={styles['rating']}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            <div className={`${styles['widget']} ${styles['widget_tag_cloud']}`}>
                <h3 className={styles['widget-title']}>Popular Tags</h3>

                <div className={styles['tagcloud']}>
                    <Link href="#">
                        <a>Business <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Design <span className="tag-link-count">(3)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Digital <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="#">
                        <a>SEO <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Braike <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Software <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>

                    <Link href="#">
                        <a>Website <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShopSidebar;