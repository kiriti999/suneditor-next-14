import React from 'react';
import styles from './SloganArea.module.css';

const SloganArea = () => {
    return (
        <div className={`${styles['slogan-area']} mtb-100 bg-fffaf3 ptb-100`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className={styles['slogan-image']}>
                            <img src="/images/man2.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className={styles['slogan-content']}>
                            <p>Our project management training equips learners with the knowledge and discipline required to effectively plan, manage, execute, and control projects regardless of industry. You'll learn all about the most popular project management methodologies that help organizations deliver successful projects.</p>
                            <h3>William James</h3>
                            <span className="sub-title">CEO at whatsnxt</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['divider2']}></div>
            <div className={styles['divider3']}></div>
            <div className={`${styles['shape2']} shape2`}>
                <img src="/images/shape2.png" alt="image" />
            </div>
            <div className={`${styles['shape3']} shape3`}>
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className={`${styles['shape4']} shape4`}>
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className={`${styles['shape9']} shape9`}>
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default SloganArea;