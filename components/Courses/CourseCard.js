import React, { useContext } from 'react'
import Link from 'next/link'
import { kConverter } from '../../utils/cart/currencyHelper';
import Highlighter from 'react-highlight-words';
import { Context } from 'context/filterStore';

const CourseCard = ({
    _id, title, price, overview, profilePhoto, lessons, userId, enrolled_courses, highlight
}) => {
    const enrolled = enrolled_courses ? enrolled_courses : []

    const [state, setState] = useContext(Context);

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
