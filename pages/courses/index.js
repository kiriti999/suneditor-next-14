import React, { useContext, useEffect } from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";;
import CoursesSidebar from '../../components/Courses/CoursesSidebar';
import { kConverter } from '../../utils/cart/currencyHelper';
import { Context } from 'context/filterStore';
import { useMemo } from 'react';


const HomePageCourses = ({ data }) => {
    const [state, setState] = useContext(Context);

    const setInitialData = () => {
        setState({ ...state, courses: data, filteredCourses: data });
    }

    // Filter course function
    const courses = useMemo(() => {
        return state.filteredCourses
    }, [state]);

    useEffect(() => {
        setInitialData();
    }, [data]);


    // sort course function
    const sortCourses = async (type) => {
        let sortedCourses = state.filteredCourses.sort((a, b) => {
            switch (type) {
                case 'popularity':
                    // parse popularity to int
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
        });

        setState({ ...state, filteredCourses: sortedCourses });
    }

    return (
        <>
            <PageBanner
                pageTitle="Courses"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Courses"
            />

            <div className="courses-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="whatsnxt-grid-sorting row align-items-center">
                                <div className="col-lg-8 col-md-6 result-count">
                                    <p>We found <span className="count">{courses?.length ? courses.length : 0}</span> courses available for you</p>
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
                                    <div className="col-lg-6 col-md-6" key={course._id}>
                                        <div className="single-courses-box">
                                            <div className="courses-image">
                                                <Link href="/courses/[id]" as={`/courses/${course._id}`}>
                                                    <a className="d-block image">
                                                        <img src={course.profilePhoto} alt={course.title} />
                                                    </a>
                                                </Link>
                                                {/* <a href="#" className="fav">
                                                    <i className="flaticon-heart"></i>
                                                </a> */}
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
                                                    {/* <li>
                                                        <i className='flaticon-people'></i> 145 Students
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                )) : (
                                    <h6>Empty</h6>
                                )}

                                {/* <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="pagination-area text-center">
                                        <a href="#" className="prev page-numbers">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                        <span className="page-numbers current" aria-current="page">1</span>
                                        <a href="#" className="page-numbers">2</a>
                                        <a href="#" className="page-numbers">3</a>
                                        <a href="#" className="page-numbers">4</a>
                                        <a href="#" className="next page-numbers">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </div>
                                </div> */}

                            </div>
                        </div >

                        <div className="col-lg-4 col-md-12">
                            <CoursesSidebar />
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

HomePageCourses.getInitialProps = async () => {

    let courses;
    let coursesPopularity;

    let url = `${axiosApi.baseUrl}/api/v1/courses/course?limit=10`
    const response = await axios.get(url);
    console.log('pages/courses/index.js:: response:' , response.data);
    courses = response.data.courses;

    // get data for courses popularity
    url = `${axiosApi.baseUrl}/api/v1/courses/popularity`
    const popularResponse = await axios.get(url)
    coursesPopularity = popularResponse.data.enrolled

    // add popularity to courses
    courses.forEach(course => {
        const popularity = coursesPopularity.find(popular => popular.courseId === course._id)
        course.popularity = popularity ? popularity.count : 0
    });

    return {
        data: courses
    }
}

export default HomePageCourses;