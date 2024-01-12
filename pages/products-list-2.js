import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import ShopSidebar from '../components/Shop/ShopSidebar';
import sortStyles from './admin/pending-requests.module.css';
import styles from '../components/SingleProducts/Products.module.css';
import pageStyles from '../components/pagination/pagination.module.css';

const Shop = () => {
    return (
        <>
            <PageBanner
                pageTitle="Shop"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Shop"
            />

            <div className="products-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={`${sortStyles['whatsnxt-grid-sorting']} row align-items-center`}>
                                <div className={`col-lg-8 col-md-6 ${sortStyles['result-count']}`}>
                                    <p>We found <span className={sortStyles['count']}>9</span> products available for you</p>
                                </div>

                                <div className={`col-lg-4 col-md-6 ${sortStyles['ordering']}`}>
                                    <div className="select-box">
                                        <select className="form-control">
                                            <option>Sort By:</option>
                                            <option>Popularity</option>
                                            <option>Latest</option>
                                            <option>Price: low to high</option>
                                            <option>Price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles['single-products-box']}>
                                        <div className={styles['products-image']}>
                                            <Link legacyBehavior href="/single-products">
                                                <a>
                                                    <img src="/images/products/product1.jpg" className="main-image" alt="image" />
                                                </a>
                                            </Link>

                                            <div className={styles['products-button']}>
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <a href="#">
                                                                <i className='bx bx-heart'></i>
                                                                <span className={`${styles['tooltip-label']} tooltip-label`}>Add to Wishlist</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={styles['products-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-products">
                                                    <a>Note Book Mockup</a>
                                                </Link>
                                            </h3>
                                            <div className={styles['price']}>
                                                <span className={styles['old-price']}>&#8377; 321</span>
                                                <span className={styles['new-price']}>&#8377; 250</span>
                                            </div>
                                            <div className={styles['star-rating']}>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <a href="#" className={styles['add-to-cart']}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles['single-products-box']}>
                                        <div className={styles['products-image']}>
                                            <Link legacyBehavior href="/single-products">
                                                <a>
                                                    <img src="/images/products/product2.jpg" className="main-image" alt="image" />
                                                </a>
                                            </Link>

                                            <div className={styles['products-button']}>
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <a href="#">
                                                                <i className='bx bx-heart'></i>
                                                                <span className={`${styles['tooltip-label']} tooltip-label`}>Add to Wishlist</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className={styles['sale-tag']}>Sale!</div>
                                        </div>

                                        <div className={styles['products-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-products">
                                                    <a>Motivational Book Cover</a>
                                                </Link>
                                            </h3>
                                            <div className={styles['price']}>
                                                <span className={styles['old-price']}>&#8377; 210</span>
                                                <span className={styles['new-price']}>&#8377; 200</span>
                                            </div>
                                            <div className={styles['star-rating']}>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <a href="#" className={styles['add-to-cart']}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles['single-products-box']}>
                                        <div className={styles['products-image']}>
                                            <Link legacyBehavior href="/single-products">
                                                <a>
                                                    <img src="/images/products/product3.jpg" className="main-image" alt="image" />
                                                </a>
                                            </Link>

                                            <div className={styles['products-button']}>
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <a href="#">
                                                                <i className='bx bx-heart'></i>
                                                                <span className={`${styles['tooltip-label']} tooltip-label`}>Add to Wishlist</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={styles['products-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-products">
                                                    <a>Book Cover Softcover</a>
                                                </Link>
                                            </h3>
                                            <div className={styles['price']}>
                                                <span className={styles['old-price']}>&#8377; 210</span>
                                                <span className={styles['new-price']}>&#8377; 200</span>
                                            </div>
                                            <div className={styles['star-rating']}>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <a href="#" className={styles['add-to-cart']}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles['single-products-box']}>
                                        <div className={styles['products-image']}>
                                            <Link legacyBehavior href="/single-products">
                                                <a>
                                                    <img src="/images/products/product4.jpg" className="main-image" alt="image" />
                                                </a>
                                            </Link>

                                            <div className={styles['products-button']}>
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <a href="#">
                                                                <i className='bx bx-heart'></i>
                                                                <span className={`${styles['tooltip-label']} tooltip-label`}>Add to Wishlist</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={styles['products-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-products">
                                                    <a>Stop and Take a Second</a>
                                                </Link>
                                            </h3>
                                            <div className={styles['price']}>
                                                <span className={styles['new-price']}>&#8377; 150</span>
                                            </div>
                                            <div className={styles['star-rating']}>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <a href="#" className={styles['add-to-cart']}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles['single-products-box']}>
                                        <div className={styles['products-image']}>
                                            <Link legacyBehavior href="/single-products">
                                                <a>
                                                    <img src="/images/products/product5.jpg" className="main-image" alt="image" />
                                                </a>
                                            </Link>

                                            <div className={styles['products-button']}>
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <a href="#">
                                                                <i className='bx bx-heart'></i>
                                                                <span className={`${styles['tooltip-label']} tooltip-label`}>Add to Wishlist</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={styles['products-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-products">
                                                    <a>Real Life Fairytale</a>
                                                </Link>
                                            </h3>
                                            <div className={styles['price']}>
                                                <span className={styles['new-price']}>&#8377; 240</span>
                                            </div>
                                            <div className={styles['star-rating']}>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <a href="#" className={styles['add-to-cart']}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles['single-products-box']}>
                                        <div className={styles['products-image']}>
                                            <Link legacyBehavior href="/single-products">
                                                <a>
                                                    <img src="/images/products/product6.jpg" className="main-image" alt="image" />
                                                </a>
                                            </Link>

                                            <div className={styles['products-button']}>
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <a href="#">
                                                                <i className='bx bx-heart'></i>
                                                                <span className={`${styles['tooltip-label']} tooltip-label`}>Add to Wishlist</span>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="new-tag">New!</div>
                                        </div>

                                        <div className={styles['products-content']}>
                                            <h3>
                                                <Link legacyBehavior href="/single-products">
                                                    <a>Running From Me</a>
                                                </Link>
                                            </h3>
                                            <div className={styles['price']}>
                                                <span className={styles['old-price']}>&#8377; 150</span>
                                                <span className={styles['new-price']}>&#8377; 100</span>
                                            </div>
                                            <div className={styles['star-rating']}>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <a href="#" className={styles['add-to-cart']}>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className={`${pageStyles['pagination-area']} text-center`}>
                                        <a href="#" className={`prev ${pageStyles['page-numbers']}`}>
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                        <span className={`${pageStyles['page-numbers']} current`} aria-current="page">1</span>
                                        <a href="#" className={pageStyles['page-numbers']}>2</a>
                                        <a href="#" className={pageStyles['page-numbers']}>3</a>
                                        <a href="#" className={pageStyles['page-numbers']}>4</a>
                                        <a href="#" className={`next ${pageStyles['page-numbers']}`}>
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ShopSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;