import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { kConverter } from '../../utils/cart/currencyHelper';
import axios from 'axios'
import baseUrl from '@/utils/baseUrl';

const CoursesSidebar = ({sendToParent}) => {
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = `${baseUrl}/api/v1/courses/course?limit=3`;
        (async () => {
            const response = await axios.get(url)
            console.log('CoursesSidebar.js:: useEffect: courses:', response.data.courses);
            setCourses(response.data?.courses);
        })()
    }, [])

    useEffect(() => {
        const url = `${baseUrl}/api/v1/courses/categories`;
        (async () => {
            const response = await axios.get(url)
            console.log('CoursesSidebar.js:: useEffect: categories:', response.data.courses);
            setCategories(response.data?.categories);
        })()
    }, [])

    const getCoursesByTagName = async (tagName) => {
        const url = `${baseUrl}/api/v1/courses/course?tagName=${tagName}`;
        const response = await axios.get(url);
        console.log('CoursesSidebar.js:: getCoursesByTagName:: response: ', response.data.courses); 
        sendToParent(response.data.courses);
    }

    return (
        <div className="widget-area">
            <div className="widget widget_recent_courses">
                <h3 className="widget-title">Recent Courses</h3>

                {courses?.length > 0 ? courses.map((course, i) => (
                    <div className="item" key={i}>
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <span>&#8377;{kConverter(course.price)}</span>
                            <h4 className="title usmall">
                                <Link href="/courses/[id]" as={`/courses/${course._id}`}>
                                    <a>{course.title}</a>
                                </Link>
                            </h4>
                        </div>
                        <div className="clear"></div>
                    </div>

                )) : (
                    <h6>Empty</h6>
                )}

            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>
                {categories?.length > 0 ? categories.map((item, i) => (
                    <div className="tagcloud" key={i}>
                        <Link href="#" legacyBehavior>
                            <a onClick={(e) => getCoursesByTagName(item.category)}>{item.category}
                                <span className="tag-link-count">({item.count})</span>
                            </a>
                        </Link>
                    </div>
                )) : (
                    <h6>Empty</h6>
                )}
            </div>
        </div>
    )
}

CoursesSidebar.getInitialProps = async () => {

}

export default CoursesSidebar;