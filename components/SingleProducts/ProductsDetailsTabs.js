import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './ProductsDetailsTabs.module.css';

const ProductsDetailsTabs = () => {
    return (
        <div className={styles['products-details-tabs']}>
            <Tabs selectedTabClassName={`react-tabs__tab--selected ${styles['react-tabs__tab--selected']}`}>
                <TabList className={`react-tabs__tab-list ${styles['react-tabs__tab-list']}`}>
                    <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Description</Tab>
                    <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Reviews (2)</Tab>
                </TabList>

                <TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
                    <p>This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit.</p>
                    <ul>
                        <li>Instant whatsnxt bestseller</li>
                        <li>Translated into 18 languages</li>
                        <li>#1 Most Recommended Book of the year.</li>
                        <li>A neglected project, widely dismissed, its champion written off as unhinged.</li>
                        <li>Yields a negative result in an experiment because of a flaw in the design of the experiment.</li>
                        <li>An Amazon, Bloomberg, Financial Times, Forbes, Inc., Newsweek, Strategy + Business, Tech Crunch, Washington Post Best Business Book of the year</li>
                    </ul>
                </TabPanel>

                <TabPanel className={`react-tabs__tab-panel ${styles['react-tabs__tab-panel']}`}>
                    <div className={styles['products-reviews']}>
                        <h3>Course Rating</h3>

                        <div className={styles['rating']}>
                            <span className={`bx bxs-star ${styles['checked']}`}></span>
                            <span className={`bx bxs-star ${styles['checked']}`}></span>
                            <span className={`bx bxs-star ${styles['checked']}`}></span>
                            <span className={`bx bxs-star ${styles['checked']}`}></span>
                            <span className="bx bxs-star"></span>
                        </div>

                        <div className={styles['rating-count']}>
                            <span>4.1 average based on 4 reviews.</span>
                        </div>

                        <div className={`${styles['row']} row`}>
                            <div className={styles['side']}>
                                <div>5 star</div>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['bar-container']}>
                                    <div className={styles['bar-5']}></div>
                                </div>
                            </div>
                            <div className={`${styles['side']} ${styles['right']}`}>
                                <div>02</div>
                            </div>
                            <div className={styles['side']}>
                                <div>4 star</div>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['bar-container']}>
                                    <div className={styles['bar-4']}></div>
                                </div>
                            </div>
                            <div className={`${styles['side']} ${styles['right']}`}>
                                <div>03</div>
                            </div>
                            <div className={styles['side']}>
                                <div>3 star</div>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['bar-container']}>
                                    <div className={styles['bar-3']}></div>
                                </div>
                            </div>
                            <div className={`${styles['side']} ${styles['right']}`}>
                                <div>04</div>
                            </div>
                            <div className={styles['side']}>
                                <div>2 star</div>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['bar-container']}>
                                    <div className={styles['bar-2']}></div>
                                </div>
                            </div>
                            <div className={`${styles['side']} ${styles['right']}`}>
                                <div>05</div>
                            </div>
                            <div className={styles['side']}>
                                <div>1 star</div>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['bar-container']}>
                                    <div className={styles['bar-1']}></div>
                                </div>
                            </div>
                            <div className={`${styles['side']} ${styles['right']}`}>
                                <div>00</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['products-review-comments']}>
                        <h3>3 Reviews</h3>
                        <div className={styles['user-review']}>
                            <img src="/images/user1.jpg" alt="image" />

                            <div className={styles['review-rating']}>
                                <div className={styles['review-stars']}>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                </div>

                                <span className="d-inline-block">James Anderson</span>
                            </div>

                            <span className={`d-block ${styles['sub-comment']}`}>Excellent</span>
                            <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                        </div>

                        <div className={styles['user-review']}>
                            <img src="/images/user2.jpg" alt="image" />
                            <div className={styles['review-rating']}>
                                <div className={styles['review-stars']}>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>

                                <span className="d-inline-block">Sarah Taylor</span>
                            </div>
                            <span className={`d-block ${styles['sub-comment']}`}>Video Quality!</span>
                            <p>Was really easy to implement and they quickly answer my additional questions!</p>
                        </div>

                        <div className={styles['user-review']}>
                            <img src="/images/user3.jpg" alt="image" />
                            <div className={styles['review-rating']}>
                                <div className={styles['review-stars']}>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                </div>
                                <span className="d-inline-block">David Warner</span>
                            </div>
                            <span className={`d-block ${styles['sub-comment']}`}>Perfect Coding!</span>
                            <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                        </div>

                        <div className={styles['user-review']}>
                            <img src="/images/user4.jpg" alt="image" />
                            <div className={styles['review-rating']}>
                                <div className={styles['review-stars']}>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className={`bx bxs-star ${styles['checked']}`}></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                                <span className="d-inline-block">King Kong</span>
                            </div>
                            <span className={`d-block ${styles['sub-comment']}`}>Perfect Video!</span>
                            <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                        </div>
                    </div>

                    <div className={styles['review-form-wrapper']}>
                        <h3>Add a review</h3>
                        <p className={styles['comment-notes']}>Your email address will not be published. Required fields are marked <span>*</span></p>

                        <form>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className={styles['rating']}>
                                        <input type="radio" id="star5" name="rating" value="5" />
                                        <label htmlFor="star5"></label>
                                        <input type="radio" id="star4" name="rating" value="4" />
                                        <label htmlFor="star4"></label>
                                        <input type="radio" id="star3" name="rating" value="3" />
                                        <label htmlFor="star3"></label>
                                        <input type="radio" id="star2" name="rating" value="2" />
                                        <label htmlFor="star2"></label>
                                        <input type="radio" id="star1" name="rating" value="1" />
                                        <label htmlFor="star1"></label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className={`${styles['form-group']} form-group`}>
                                        <input type="text" className="form-control" placeholder="Name *" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className={`${styles['form-group']} form-group`}>
                                        <input type="email" className="form-control" placeholder="Email *" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className={`${styles['form-group']} form-group`}>
                                        <textarea placeholder="Your review" className="form-control" cols="30" rows="6"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <p className={styles['comment-form-cookies-consent']}>
                                        <input type="checkbox" id="test1" />
                                        <label htmlFor="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ProductsDetailsTabs;