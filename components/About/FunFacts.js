import React from 'react'; 
import styles from './FunFacts.module.css';

const FunFacts = () => {
    return (
        <div className={styles['funfacts-list']}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className={styles['single-funfacts-box']}>
                        <h3>1,926</h3>
                        <p>Finished Sessions</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className={styles['single-funfacts-box']}>
                        <h3>3,279</h3>
                        <p>Enrolled Learners</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className={styles['single-funfacts-box']}>
                        <h3>250</h3>
                        <p>Online Instructors</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className={styles['single-funfacts-box']}>
                        <h3>100%</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;