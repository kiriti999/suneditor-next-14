import React from 'react';
import Link from 'next/link';
import styles from './Products.module.css';

const RelatedProducts = () => {
    return (
        <div className="products-area pt-100 pb-70 bg-f5f1ed">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Shop</span>
                    <h2>Related Products</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className={styles['single-products-box']}>
                            <div className={styles['products-image']}>
                                <Link href="/single-products">
                                    <a>
                                        <img src="/images/products/product4.jpg" className={styles['main-image']} alt="image" />
                                    </a>
                                </Link>

                                <div className={styles['products-button']}>
                                    <ul>
                                        <li>
                                            <div className={styles['wishlist-btn']}>
                                                <a href="#">
                                                    <i className='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles['products-content']}>
                                <h3>
                                    <Link href="/single-products">
                                        <a>Stop and Take a Second</a>
                                    </Link>
                                </h3>
                                <div className={styles['price']}>
                                    <span className={styles['new-price']}>$150</span>
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

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className={styles['single-products-box']}>
                            <div className={styles['products-image']}>
                                <Link href="/single-products">
                                    <a>
                                        <img src="/images/products/product5.jpg" className={styles['main-image']} alt="image" />
                                    </a>
                                </Link>

                                <div className={styles['products-button']}>
                                    <ul>
                                        <li>
                                            <div className={styles['wishlist-btn']}>
                                                <a href="#">
                                                    <i className='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles['products-content']}>
                                <h3>
                                    <Link href="/single-products">
                                        <a>Real Life Fairytale</a>
                                    </Link>
                                </h3>
                                <div className={styles['price']}>
                                    <span className={styles['new-price']}>$240</span>
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

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className={styles['single-products-box']}>
                            <div className={styles['products-image']}>
                                <Link href="/single-products">
                                    <a>
                                        <img src="/images/products/product6.jpg" className={styles['main-image']} alt="image" />
                                    </a>
                                </Link>

                                <div className={styles['products-button']}>
                                    <ul>
                                        <li>
                                            <div className={styles['wishlist-btn']}>
                                                <a href="#">
                                                    <i className='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles['new-tag']}>New!</div>
                            </div>

                            <div className={styles['products-content']}>
                                <h3>
                                    <Link href="/single-products">
                                        <a>Running From Me</a>
                                    </Link>
                                </h3>
                                <div className={styles['price']}>
                                    <span className={styles['old-price']}>$150</span>
                                    <span className={styles['new-price']}>$100</span>
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
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts;