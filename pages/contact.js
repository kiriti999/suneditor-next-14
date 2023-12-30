import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import styles from '../components/Contact/ContactForm.module.css';

const Contact = () => {
    return (
        <>
            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles['contact-info']}>
                                <span className={styles['sub-title']}>Contact Details</span>
                                <h2>Get in Touch</h2>

                                <ul>
                                    <li>
                                        <div className={styles['icon']}>
                                            <i className='bx bx-map'></i>
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>Hyderabad, India</p>
                                    </li>
                                    <li>
                                        <div className={styles['icon']}>
                                            <i className='bx bx-phone-call'></i>
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+44457895789">+91 8309580094</a></p>
                                        <p>Mail: <a href="mailto:info@whatsnxt.in">info@whatsnxt.in</a></p>
                                    </li>
                                    <li>
                                        <div className={styles['icon']}>
                                            <i className='bx bx-time-five'></i>
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday & Saturday: 10:30 - 15:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;