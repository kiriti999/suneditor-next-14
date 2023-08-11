import React, { useContext, useState } from "react";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import CoursesSidebar from "@/components/Courses/CoursesSidebar";
import { Context } from "context/filterStore";
import { kConverter } from "@/utils/cart/currencyHelper";

const AlgoliaSearch = () => {
    const [state, setState] = useContext(Context);
    const [courses, setCourses] = useState(state.filteredCourses);

    /**
     * @desc This function is used to sort the courses....
     * @param {*} type 
     */
    const sortCourses = type => {
        let result = state.filteredCourses.sort((a, b) => {
            switch (type) {
                case 'popularity':
                    let aCount = parseInt(a.popularity);
                    let bCount = parseInt(b.popularity);
                    return bCount - aCount;
                case 'latest':
                    return a.createdAt - b.createdAt;
                case 'low-high':
                    return a.price - b.price;
                case 'high-low':
                    return b.price - a.price;
            }
        })

        setState({ ...state, filteredCourses: result });
        setCourses(state.filteredCourses);
    }

    return (
        <div>
            <PageBanner
                pageTitle="Algolia Search"
                homePageUrl="/"
                homePageText="Home"
                activePageText="algolia-search"
            />

            <div className="courses-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="whatsnxt-grid-sorting row align-items-center">
                                <div className="col-lg-8 col-md-6 result-count">
                                    <p>We found <span className="count">{courses.length ? courses.length : 0}</span> courses available for you</p>
                                </div>

                                <div className="col-lg-4 col-md-6 ordering">
                                    <div className="select-box">
                                        <select onChange={(e) => sortCourses(e.target.value)} className="form-control">
                                            <option>Sort By</option>
                                            <option value='popularity'>Popularity</option>
                                            <option value='latest'>Latest</option>
                                            <option value='low-high'>Price: low to high</option>
                                            <option value='high-low'>Price: high to low</option>
                                        </select>
                                    </div>
                                </div >
                            </div >

                            <div className="row">
                                {courses ? courses.map(course => (
                                    <div className="col-lg-6 col-md-6" key={course.title}>
                                        <div className="single-courses-box">
                                            <div className="courses-image">
                                                <Link href="/courses/[id]" as={`/courses/${course._id}`}>
                                                    <a className="d-block image">
                                                        <img src={course.profilePhoto} alt={course.title} />
                                                    </a>
                                                </Link>
                                                <div className="price shadow">&#8377;{kConverter(course.price)}</div>
                                            </div>
                                            <div className="courses-content">
                                                <div className="course-author d-flex align-items-center">
                                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                                    <span>Alex Morgan</span>
                                                </div>

                                                <h3 title={course.title}>
                                                    <Link href="/courses/[id]" as={`/courses/${course._id}`}>
                                                        <a>{course.title.slice(0, 20)}...</a>
                                                    </Link>
                                                </h3>

                                                <p>{course.overview.slice(0, 100)}...</p>
                                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                                    <li>
                                                        <i className='flaticon-agenda'></i>
                                                        <Link href="/courses/[id]" as={`/courses/${course._id}`}>
                                                            <a>More details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                )) : (
                                    <h6>Empty</h6>
                                )}

                            </div>
                        </div >

                        <div className="col-lg-4 col-md-12">
                            <CoursesSidebar />
                        </div>
                    </div >
                </div >
            </div >
        </div>
    )
}

export default AlgoliaSearch;