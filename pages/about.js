import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import AboutUs from '../components/About/AboutUs';
import FeedbackSliderWithFunFacts from '../components/About/FeedbackSliderWithFunFacts';
import Features from '../components/About/Features';
import CourseAdvisor from '../components/Common/CourseAdvisor';
import Partner from '../components/Common/Partner';
import PremiumAccess from '../components/Common/PremiumAccess';

const About = () => {
    return (
        <>
            <PageBanner 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
            />  
            <AboutUs />
            <Features />
        </>
    )
}

export default About;