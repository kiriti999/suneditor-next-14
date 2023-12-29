import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './ApplyAsInstructor.module.css';

const ApplyAsInstructor = () => {
    return (
        <div className={`${styles['apply-instructor-area']} ptb-100`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className={styles['apply-instructor-image']}>
                            <h2>Apply As Instructor</h2>
                            <img src="/images/apply-instructor.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className={styles['apply-instructor-content']}>
                            <Tabs selectedTabClassName={`react-tabs__tab--selected ${styles['react-tabs__tab--selected']}`}>
                                <TabList className={`react-tabs__tab-list ${styles['react-tabs__tab-list']}`}>
                                    <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Become an Instructor</Tab>
                                    <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Instructor Rules</Tab>
                                    <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}>Start with Courses</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <h3>Course Description</h3>
                                    <p>Apply as teacher and join our family. Train awesome courses to students around the world.</p>
                                    <h3>Certification</h3>
                                    <p>Get certificate as a teacher!</p>
                                </TabPanel>

                                <TabPanel>
                                    <h3>Course Description</h3>

                                    <p>Must be clear and easy to understand.</p>
 
                                    <p>Adhere to the standards</p>
 
                                </TabPanel>

                                <TabPanel>
                                    <h3>Course Description</h3>
                                    <p>Start with any simple of choice and language</p>
                                    <p>We will guide you with quality practices and tips to get you up to the speed</p>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyAsInstructor;