import React from 'react';
import Link from 'next/link';
import styles from './Widget.module.css';

const BlogSidebar = () => {
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

            <div className={`${styles['widget']} ${styles['widget_whatsnxt_posts_thumb']}`}>
                <h3 className={styles['widget-title']}>Popular Posts</h3>

                <div className={styles['item']}>
                    <Link legacyBehavior href="#">
                        <a className={styles['thumb']}>
                            <span className={`${styles['fullimage']} cover ${styles['bg1']}`} role="img"></span>
                        </a>
                    </Link>
                    <div className={styles['info']}>
                        <span>June 10, 2020</span>
                        <h4 className={`${styles['title']} usmall`}>
                            <Link legacyBehavior href="#">
                                <a>Ultimate Bali Guide + Where to stay in Bali 2020</a>
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
                        <span>June 21, 2020</span>
                        <h4 className={`${styles['title']} usmall`}>
                            <Link legacyBehavior href="#">
                                <a>Live the Island life: 20 unique Islands to visit in 2020</a>
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
                        <span>June 30, 2020</span>
                        <h4 className={`${styles['title']} usmall`}>
                            <Link legacyBehavior href="#">
                                <a>Best Places to Visit in Europe this Autumn & Winter</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>

            <div className={`${styles['widget']} ${styles['widget_categories']}`}>
                <h3 className={styles['widget-title']}>Categories</h3>

                <ul>
                    <li>
                        <Link legacyBehavior href="#">
                            <a>Design <span className={styles['post-count']}>(03)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#">
                            <a>Lifestyle <span className={styles['post-count']}>(05)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#">
                            <a>Script <span className={styles['post-count']}>(10)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#">
                            <a>Device <span className={styles['post-count']}>(08)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="#">
                            <a>Tips <span className={styles['post-count']}>(01)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={`${styles['widget']} ${styles['widget_tag_cloud']}`}>
                <h3 className={styles['widget-title']}>Popular Tags</h3>

                <div className={styles['tagcloud']}>
                    <Link legacyBehavior href="#">
                        <a>
                            Business <span className="tag-link-count"> (3)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Design <span className="tag-link-count"> (3)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Braike <span className="tag-link-count"> (2)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Fashion <span className="tag-link-count"> (2)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Travel <span className="tag-link-count"> (1)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Smart <span className="tag-link-count"> (1)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Marketing <span className="tag-link-count"> (1)</span>
                        </a>
                    </Link>

                    <Link legacyBehavior href="#">
                        <a>
                            Tips <span className="tag-link-count"> (2)</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;