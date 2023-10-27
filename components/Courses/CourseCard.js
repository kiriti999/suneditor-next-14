import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { parseCookies } from 'nookies';
import { indexPost, deleteIndex } from '../../pages/api/v1/courses/search/algolia';
import Highlighter from 'react-highlight-words';
import { axiosApi } from "../../utils/baseUrl";

const CourseCard = ({
    _id, title, price, overview, profilePhoto, lessons, userId, enrolled_courses, highlight, published, publish = false
}) => {
    const enrolled = enrolled_courses ? enrolled_courses : []
    const { token } = parseCookies()
    const [statePublished, setStatePublished] = useState(published);
    const [loading, setLoading] = useState(false);

    const handlePublish = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${axiosApi.baseUrl}/api/v1/courses/course/publish`;
            const payload = {
                courseId: _id,
                publish: !statePublished
            }

            const response = await axios.post(url, payload, {
                headers: { Authorization: token }
            });
            if (response.status === 200 && statePublished) {
                await indexPost(response.data);
            } else if (response.status === 200 && !statePublished) {
                await deleteIndex(_id);
            }
            setStatePublished(value => !value);
        } catch (error) {
            console.log('CourseCard.js:: handlePublish:: error:', error);
            alert('unable to publish');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-lg-12 col-md-12">
            <div className="single-courses-box">
                <div className="courses-image">
                    <Link href="/courses/[id]" as={`/courses/${_id}`}>
                        <a className="d-block image">
                            {/* <img src={profilePhoto} alt={title} /> */}
                        </a>
                    </Link>
                    {/* <a href="#" className="fav">
                        <i className="flaticon-heart"></i>
                    </a> */}
                </div>
                <div className="courses-content">
                    <h3>
                        <Link href="/courses/[_id]" as={`/courses/${_id}`}>

                            <a>
                                <Highlighter
                                    highlightClassName='search-highlight'
                                    searchWords={[highlight]}
                                    autoEscape={true}
                                    textToHighlight={title}
                                />
                            </a>
                        </Link>
                    </h3>

                    {publish && (
                        <button type="button" className="default-btn" onClick={handlePublish}>
                            <i className="flaticon-checkmark"></i>
                            {statePublished ? 'Unpublish' : 'Publish'}
                        </button>
                    )}

                    <p>
                        <Highlighter
                            highlightClassName='search-highlight'
                            searchWords={[highlight]}
                            autoEscape={true}
                        /></p>
                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                            {parseInt(lessons)} Lessons
                        </li>
                        <li>
                            {enrolled.length} Students
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
