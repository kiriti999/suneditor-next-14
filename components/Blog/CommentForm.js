import React from 'react';
import Link from 'next/link';
import styles from './CommentForm.module.css';

const CommentArea = () => {
    return (
        <div className={styles['comments-area']}>
            <h3 className={styles['comments-title']}>2 Comments:</h3>

            <ol className={styles['comment-list']}>
                <li className={styles['comment']}>
                    <div className={styles['comment-body']}>
                        <div className={styles['comment-meta']}>
                            <div className={`${styles['comment-author']} ${styles['vcard']}`}>
                                <img src="/images/user1.jpg" className={styles['avatar']} alt="image" />
                                <b className={styles['fn']}>John Jones</b>
                                <span className={styles['says']}>says:</span>
                            </div>

                            <div className={styles['comment-metadata']}>
                                <span>April 24, 2019 at 10:59 am</span>
                            </div>
                        </div>

                        <div className={styles['comment-content']}>
                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                        </div>

                        <div className={styles['reply']}>
                            <Link href="#">
                                <a className={styles['comment-reply-link']}>Reply</a>
                            </Link>
                        </div>
                    </div>

                    <ol className={styles['children']}>
                        <li className={styles['comment']}>
                            <div className={styles['comment-body']}>
                                <div className={styles['comment-meta']}>
                                    <div className={`${styles['comment-author']} ${styles['vcard']}`}>
                                        <img src="/images/user2.jpg" className={styles['avatar']} alt="image" />
                                        <b className={styles['fn']}>Steven Smith</b>
                                        <span className={styles['says']}>says:</span>
                                    </div>

                                    <div className={styles['comment-metadata']}>
                                        <span>April 24, 2019 at 10:59 am</span>
                                    </div>
                                </div>

                                <div className={styles['comment-content']}>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                </div>

                                <div className={styles['reply']}>
                                    <Link href="#">
                                        <a className={styles['comment-reply-link']}>Reply</a>
                                    </Link>
                                </div>
                            </div>

                            <ol className={styles['children']}>
                                <li className={styles['comment']}>
                                    <div className={styles['comment-body']}>
                                        <div className={styles['comment-meta']}>
                                            <div className={`${styles['comment-author']} ${styles['vcard']}`}>
                                                <img src="/images/user3.jpg" className={styles['avatar']} alt="image" />
                                                <b className={styles['fn']}>Sarah Taylor</b>
                                                <span className={styles['says']}>says:</span>
                                            </div>

                                            <div className={styles['comment-metadata']}>
                                                <span>April 24, 2019 at 10:59 am</span>
                                            </div>
                                        </div>

                                        <div className={styles['comment-content']}>
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>

                                        <div className={styles['reply']}>
                                            <Link href="#">
                                                <a className={styles['comment-reply-link']}>Reply</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>

                <li className={styles['comment']}>
                    <div className={styles['comment-body']}>
                        <div className={styles['comment-meta']}>
                            <div className={`${styles['comment-author']} ${styles['vcard']}`}>
                                <img src="/images/user4.jpg" className={styles['avatar']} alt="image" />
                                <b className={styles['fn']}>John Doe</b>
                                <span className={styles['says']}>says:</span>
                            </div>

                            <div className={styles['comment-metadata']}>
                                <span>April 24, 2019 at 10:59 am</span>
                            </div>
                        </div>

                        <div className={styles['comment-content']}>
                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                        </div>

                        <div className={styles['reply']}>
                            <Link href="#">
                                <a className={styles['comment-reply-link']}>Reply</a>
                            </Link>
                        </div>
                    </div>

                    <ol className={styles['children']}>
                        <li className={styles['comment']}>
                            <div className={styles['comment-body']}>
                                <div className={styles['comment-meta']}>
                                    <div className={`${styles['comment-author']} ${styles['vcard']}`}>
                                        <img src="/images/user1.jpg" className={styles['avatar']} alt="image" />
                                        <b className={styles['fn']}>James Anderson</b>
                                        <span className={styles['says']}>says:</span>
                                    </div>

                                    <div className={styles['comment-metadata']}>
                                        <span>April 24, 2019 at 10:59 am</span>
                                    </div>
                                </div>

                                <div className={styles['comment-content']}>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                </div>

                                <div className={styles['reply']}>
                                    <Link href="#">
                                        <a className={styles['comment-reply-link']}>Reply</a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ol>
                </li>
            </ol>

            <div className={styles['comment-respond']}>
                <h3 className={styles['comment-reply-title']}>Leave a Reply</h3>

                <form className={styles['comment-form']}>
                    <p className={styles['comment-notes']}>
                        <span id="email-notes">Your email address will not be published.</span>
                        Required fields are marked 
                        <span className={styles['required']}>*</span>
                    </p>
                    <p className={styles['comment-form-author']}>
                        <label>Name <span className={styles['required']}>*</span></label>
                        <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                    </p>
                    <p className={styles['comment-form-author']}>
                        <label>Email <span className={styles['required']}>*</span></label>
                        <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                    </p>
                    <p className={styles['comment-form-url']}>
                        <label>Website</label>
                        <input type="url" id="url" placeholder="Website" name="url" />
                    </p>
                    <p className={styles['comment-form-comment']}>
                        <label>Comment</label>
                        <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" maxLength="65525" required="required"></textarea>
                    </p>
                    <p className={styles['comment-form-cookies-consent']}>
                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                        <label>Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                    <p className={styles['form-submit']}>
                        <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CommentArea;