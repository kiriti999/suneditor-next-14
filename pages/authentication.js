/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { signIn } from "next-auth/react";
import LoginForm from '../components/Authentication/LoginForm'
import RegisterForm from '../components/Authentication/RegisterForm'

const Authentication = () => {
    return (
        <>
            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className='d-flex'>
                        <button className='btn-google' onClick={() => signIn("google")}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"></img>
                            <span className='mx-1'>Login with Google</span>
                        </button>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <LoginForm />
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication;