import PageBanner from '@/components/Common/PageBanner'
import Link from 'next/link'
import React from 'react'

const success = () => {
    return (
        <>
            <PageBanner
                pageTitle="Success"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Success"
            />
            <div className='container my-5'>
                    <div className='col-lg-12 my-5 text-center'>
                        <div className='success-page my-5'>
                            <h1>Thank You!</h1>
                            <p>Your payment is successful</p>
                            <Link legacyBehavior href={'/'}>
                                <h6 className='mt-5'>
                                    <Link legacyBehavior href='/'>Back to Home</Link>
                                </h6>
                            </Link>
                        </div>
                </div>

            </div>
        </>
    )
}

export default success