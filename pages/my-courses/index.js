/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PageBanner from '@/components/Common/PageBanner'
import Link from 'next/link'
import { parseCookies } from 'nookies';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import styles from '../../components/Courses/Course.module.css';

const MyCourses = ({ enrolled }) => {
    return (
        <div>
            <PageBanner
                pageTitle="My Courses"
                homePageUrl="/"
                homePageText="Home"
                activePageText="My Courses"
            />

            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {enrolled.length > 0 ? enrolled.map((enrolledCourse) => (
                            <div className="col-lg-4 col-md-6" key={enrolledCourse._id}>
                                <div className={styles['single-courses-box']}>
                                    <div className={styles['courses-image']}>
                                        <Link href="/courses/[id]" as={`/courses/${enrolledCourse.course.slug}`}>
                                            <a className={`d-block ${styles['image']}`}>
                                                <img src={enrolledCourse.course.profilePhoto} alt={enrolledCourse.course.title} />
                                            </a>
                                        </Link>

                                        <Link href="#">
                                            <a className={styles['fav']}><i className="flaticon-heart"></i></a>
                                        </Link>

                                    </div>

                                    <div className={styles['courses-content']}>
                                        <div className={`${styles['course-author']} d-flex align-items-center`}>
                                        </div>

                                        <h3>
                                            <Link href="/courses/[id]" as={`/courses/${enrolledCourse.course.slug}`}>
                                                <a>{enrolledCourse.course.title}</a>
                                            </Link>
                                        </h3>

                                        <p dangerouslySetInnerHTML={{ __html: enrolledCourse.course.overview.slice(0, 100) }}></p>

                                        <ul className={`${styles['courses-box-footer']} d-flex justify-content-between align-items-center`}>
                                            <li>
                                                <i className=''></i> {parseInt(enrolledCourse.course.lessons)} Lessons
                                            </li>
                                            <li>
                                                 {enrolledCourse.course.duration}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-lg-12">
                                <h2 className={styles['empty-content']}>Empty</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

MyCourses.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx)
    if (!token) {
        return { enrolled: [] }
    }

    const payload = {
        headers: { Authorization: token }
    }

    const url = `${axiosApi.baseUrl}/api/v1/courses/enrolled`
    const response = await axios.get(url, payload)
    return response.data
}

export default MyCourses