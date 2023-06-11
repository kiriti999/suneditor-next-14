import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import PremiumAccessTwo from '../components/Common/PremiumAccessTwo';
import FunFactsThree from '../components/Common/FunFactsThree';
import ApplyAsInstructor from '../components/BecomeATeacher/ApplyAsInstructor';
import RegisterForm from '../components/BecomeATeacher/RegisterForm';

const BecomeATeacher = ({ user }) => {
    return (
        <>
            <ApplyAsInstructor />

            <RegisterForm user={user} />
        </>
    )
}

export default BecomeATeacher;