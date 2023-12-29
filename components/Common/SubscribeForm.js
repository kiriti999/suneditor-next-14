import React from 'react'; 
import styles from './SubscribeForm.module.css';

const SubscribeForm = () => {
    return (
        <div className={`${styles['subscribe-area']} bg-f9f9f9 ptb-100`}>
            <div className="container">
                <div className={styles['subscribe-content']}>
                    <span className={`${styles['sub-title']} sub-title`}>Go At Your Own Pace</span>
                    <h2>Subscribe To Our Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <form className={styles['newsletter-form']}>
                        <input type="text" className={styles['input-newsletter']} placeholder="Enter your email address" name="EMAIL" required />

                        <button type="submit" className={`${styles['default-btn']} default-btn`}>
                            <i className="flaticon-user"></i> Subscribe Now <span></span>
                        </button>
                    </form>
                </div>
            </div>

            <div className={`${styles['shape4']} shape4`} data-speed="0.06" data-revert="true"><img src="/images/shape4.png" alt="image" /></div>
            <div className="shape13" data-speed="0.06" data-revert="true"><img src="/images/shape12.png" alt="image" /></div>
            <div className="shape14" data-speed="0.06" data-revert="true"><img src="/images/shape13.png" alt="image" /></div>
            <div className="shape15" data-speed="0.06" data-revert="true"><img src="/images/shape14.png" alt="image" /></div>
        </div>
    )
}

export default SubscribeForm;