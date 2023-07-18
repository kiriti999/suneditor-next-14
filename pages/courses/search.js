import React, { useContext, useEffect } from 'react'
import PageBanner from '@/components/Common/PageBanner'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'
import CourseCard from '@/components/Courses/CourseCard'
import { Context } from 'context/filterStore'
import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'

export const checkString = (keyword, course) => {
    let string =
        `${course.title} ${course.overview} ${course.category}`.toLowerCase();
    let isAvailable = string.includes(keyword.toLowerCase());
    if (isAvailable) {
        return course;
    }
}


const Index = ({ data, q, filteredCourses }) => {
    const [state, setState] = useContext(Context);
    const router = useRouter();

    const setInitialData = () => {
        if (q !== '') {
            setState({ ...state, courses: data, filteredCourses: filteredCourses, searchParam: q });
        }
        else {
            setState({ ...state, courses: data, filteredCourses: data, searchParam: q });
        }
    }
    // Filter course function
    const courses = useMemo(() => {
        return state.filteredCourses
    }, [state]);

    useEffect(() => {
        setInitialData();
    }, [data]);

    const setparam = (param) => {
        router.push({
            pathname: '/courses/search',
            query: param
        })
    }

    return (
        <>
            <PageBanner
                pageTitle="Search"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Search"
            />

            <div className="courses-area courses-section pt-50 pb-70">
                <div className="container">
                    <div className="whatsnxt-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">12</span> courses available for you</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-control" onChange={(e) => setparam({ q: q, sort: e.target.value })}>
                                    <option>Sort By</option>
                                    <option value="popularity" >Popularity</option>
                                    <option value="latest">Latest</option>
                                    <option value='low-high'>Price: low to high</option>
                                    <option value='high-low'>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {courses.map(course => {
                            return (
                                <CourseCard highlight={q} {...course} key={course._id} />
                            )
                        }
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async ({ query }) => {

    let url;
    let coursesPopularity = [];
    let courses = [];
    let filteredCourses = [];
    let queryText = query.q || '';

    // get courses data from api
    url = `${baseUrl}/api/v1/courses/search`
    const response = await axios.get(url);
    courses = response.data.data;

    // get data for courses popularity
    url = `${baseUrl}/api/v1/popularity`
    const popularResponse = await axios.get(url)
    coursesPopularity = popularResponse.data.enrolled;

    // add popularity to courses
    courses.forEach(course => {
        const popularity = coursesPopularity.find(popular => popular.courseId === course._id)
        course.popularity = popularity ? popularity.count : 0
    });

    // prepares fuzzy search
    const options = {
        includeScore: true,
        keys: [
            {
                name: "title",
                weight: 0.3,
            },
            {
                name: "description",
                weight: 0.7,
            },
        ],
    };

    const fuse = new Fuse(courses, options);

    // sort data
    if (queryText) {
        filteredCourses = fuse.search(queryText).map(({ item }) => item);
    } else {
        filteredCourses = courses;
    }

    // sort data
    if (query.sort) {
        switch (query.sort) {
            case 'low-high':
                filteredCourses = filteredCourses.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                filteredCourses = filteredCourses.sort((a, b) => b.price - a.price);
                break;
            case 'latest':
                filteredCourses = filteredCourses.sort((a, b) => a.createdAt - b.createdAt);
                break;
            case 'popularity':
                filteredCourses = filteredCourses.sort((a, b) => {
                    // parse popularity to int
                    let aCount = parseInt(a.popularity);
                    let bCount = parseInt(b.popularity);
                    return bCount - aCount;
                });
                break;
        }
    }
    return { props: { data: courses, q: queryText || '', filteredCourses: filteredCourses } };
};

export default Index;