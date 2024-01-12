import React from 'react'
import Link from '@/utils/ActiveLink'
import styles from '../../admin/pending-requests.module.css';

const index = () => {
    return (
        <div>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className={styles['td-sidebar']}>
                                <ul>
                                    <li>
                                        <Link legacyBehavior href="/teacher/courses"activeClassName={styles['active']}>
                                            <a>My Courses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/teacher/course/create"activeClassName={styles['active']}>
                                            <a>Create A Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/teacher/courses/course-edit"activeClassName={styles['active']}>
                                            <a>Edit My Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/teacher/course/upload-course-video"activeClassName={styles['active']}>
                                            <a>Upload Course Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">
                            <div className={styles['td-text-area']}>
                                <h4>Teacher Dashboard</h4> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
