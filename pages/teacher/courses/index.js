import React, { useState, useEffect } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import CourseCard from '@/components/Courses/CourseCard'
import PageBanner from '@/components/Common/PageBanner'
import Link from '@/utils/ActiveLink';
import { useQuery } from '@tanstack/react-query';
import styles from '../../admin/pending-requests.module.css';
import coursesStyles from '../../../components/Courses/Course.module.css';

const Index = () => {
    const [courses, setCourses] = useState([]);
    const { isFetching, data } = useQuery({
        queryKey: ['teacher-courses'],
        queryFn: async () => {
            const { token } = parseCookies();
            if (!token) return [];

            const payload = {
                headers: { Authorization: token }
            }

            const url = `${axiosApi.baseUrl}/api/v1/courses/teacher/my-courses`;
            const response = await axios.get(url, payload);
            return response.data?.courses || [];
        }
    });

    useEffect(() => {
        if (!isFetching) setCourses(data);
    }, [isFetching, data]);

    return (
        <>
            <div className={`${coursesStyles['courses-area']} courses-section pt-100 pb-70`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className={styles['td-sidebar']}>
                                <ul>
                                    <li>
                                        <Link href="/teacher/courses" activeClassName={styles['active']}>
                                            <a>My Courses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/create" activeClassName={styles['active']}>
                                            <a>Create A Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/courses/course-edit" activeClassName={styles['active']}>
                                            <a>Edit My Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/upload-course-video" activeClassName={styles['active']}>
                                            <a>Upload Course Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">
                            <div className="row">
                                {courses.length ? courses.map(course => (
                                    <CourseCard {...course} key={course._id} publish={true} />
                                )) : (
                                    <div className="col-lg-12">
                                        <h3 className={coursesStyles['empty-content']}>Empty</h3>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
