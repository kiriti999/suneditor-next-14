import React from 'react';
import styles from '../About/FunFacts.module.css';

const FunFactsThree = () => {
    return (
        <div className={styles['funfacts-area-two']}>
            <div className="container">
                <div className="row">
                    <div className={`${styles['col-lg-3']} col-lg-3 col-md-3 col-sm-6`}>
                        <div className={styles['single-funfacts']}>
                            <img src="/images/funfacts-shape2.png" alt="image" />
                            <h3>1,926</h3>
                            <p>Finished Sessions</p>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-3']} col-lg-3 col-md-3 col-sm-6`}>
                        <div className={styles['single-funfacts']}>
                            <img src="/images/funfacts-shape2.png" alt="image" />
                            <h3>3,279</h3>
                            <p>Enrolled Learners</p>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-3']} col-lg-3 col-md-3 col-sm-6`}>
                        <div className={styles['single-funfacts']}>
                            <img src="/images/funfacts-shape2.png" alt="image" />
                            <h3>250</h3>
                            <p>Online Instructors</p>
                        </div>
                    </div>

                    <div className={`${styles['col-lg-3']} col-lg-3 col-md-3 col-sm-6`}>
                        <div className={styles['single-funfacts']}>
                            <img src="/images/funfacts-shape2.png" alt="image" />
                            <h3>100%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFactsThree;