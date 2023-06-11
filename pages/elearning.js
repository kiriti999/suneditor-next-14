import React from 'react'
import LatestNews from '@/components/Common/LatestNews'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'

const index = ({ courses }) => {
    // console.log(courses)
    return (
        <>
            <LatestNews />
        </>
    )
}

index.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses/homepage-courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default index