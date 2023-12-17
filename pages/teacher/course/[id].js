import React, { useState, useEffect } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { axiosApi } from "@/utils/baseUrl";
import { redirectUser } from '../../../utils/auth'
import { Spinner } from 'reactstrap'
import { toast } from 'react-toastify';
import catchErrors from '@/utils/catchErrors'
import Link from '@/utils/ActiveLink';
import * as imageHelper from '@/utils/image-upload'
import WYSIWYGEditor from "components/rich-text-editor";
import 'suneditor/dist/css/suneditor.min.css';
import LoadingSpinner from "@/utils/LoadingSpinner";

const Edit = (data) => {
    console.log('pages:: course/[id].js:: existingData: ', data);
    const { course: existingData, user } = data;
    const { token } = parseCookies()
    const [categories, setCategories] = useState([]);

    const INIT_COURSE = {
        id: existingData._id,
        title: existingData.title,
        overview: existingData.overview,
        topics: existingData.topics,
        video_course_price: existingData.video_course_price,
        live_training_price: existingData.live_training_price,
        profilePhoto: '',
        coverPhoto: '',
        course_preview_img: '',
        course_preview_video: existingData.course_preview_video,
        duration: existingData.duration,
        lessons: existingData.lessons,
        categoryName: existingData.categoryName
    }

    const [course, setCourse] = useState(INIT_COURSE)
    const [profilePreview, setProfilePreview] = useState('')
    const [imageUploading, setImageUploading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        const url = `${axiosApi.baseUrl}/api/v1/courses/categories`;
        (async () => {
            const response = await axios.get(url)
            console.log('teacher/course/[id].js:: useEffect: categories:', response.data.categories);
            setCategories(response.data?.categories);
        })()
    }, [])

    // React.useEffect(() => {
    //     const isCourse = Object.values(course).every(el => Boolean(el))
    //     isCourse ? setDisabled(false) : setDisabled(true)
    // }, [course])

    const handleChange = e => {
        const { name, value, files } = e.target;
        console.log(`e.target.name: ${e.target.name}  ::: e.target.value: ${e.target.value}`);

        if (name === 'profilePhoto') {
            const profilePhotoSize = files[0].size / 1024 / 1024
            if (profilePhotoSize > 2) {
                addToast('The profile photo size greater than 2 MB. Make sure less than 2 MB.', {
                    appearance: 'error'
                })
                e.target.value = null
                return
            }
            setCourse(prevState => ({ ...prevState, profilePhoto: files[0] }))
            setProfilePreview(window.URL.createObjectURL(files[0]))
        } else {
            setCourse(prevState => ({ ...prevState, [name]: value }))
        }
    }

    const handleSunEditor = (name) => (value) => {
        setCourse(prevState => ({ ...prevState, [name]: value }));
    }

    const handleProfilePhotoUpload = async () => {
        setImageUploading(true);
        let secure_url;

        if (course.profilePhoto) {
            const base64Data = (await imageHelper.getImageAsData(course.profilePhoto));
            const cloudinary = (await imageHelper.uploadToCloudinary(base64Data));
            secure_url = cloudinary.secure_url;
            public_id = cloudinary?.public_id;
            course.postImageAttributes = { public_id };
        }
        setImageUploading(false)
        setLoading(true);
        return secure_url;
    }

    const handleCourseUpdate = async e => {
        e.preventDefault()
        setLoading(true);
        try {
            let profile = ''
            let cover = ''
            let preview = ''
            if (course.profilePhoto) {
                profile = await handleProfilePhotoUpload()
            }

            const url = `${axiosApi.baseUrl}/api/v1/courses/course/update`
            const {
                id, title, overview, topics, live_training_price, video_course_price, published, duration,
                lessons, course_preview_video, categoryName
            } = course

            const payload = {
                id, title, overview, topics, live_training_price, video_course_price, published, duration,
                lessons, profile, course_preview_video, categoryName
            }

            const response = await axios.post(url, payload, {
                headers: { Authorization: token }
            })

            console.log('pages:: course/[id].js:: response.data: ', response.data)
            setLoading(false)

            toast.success(response.data);
        } catch (err) {
            catchErrors(err, setError)
            toast.error(error);
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className="td-sidebar">
                                <ul>
                                    <li>
                                        <Link href="/teacher/courses" activeClassName="active">
                                            <a>My Courses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/create" activeClassName="active">
                                            <a>Create A Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/courses/course-edit" activeClassName="active">
                                            <a>Edit My Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/upload-course-video" activeClassName="active">
                                            <a>Upload Course Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">
                            <div className="border-box">
                                {imageUploading && <LoadingSpinner />}

                                {loading && <LoadingSpinner />}

                                <form onSubmit={handleCourseUpdate}>
                                    <div className="form-group">
                                        <label>Course Title</label>
                                        <input
                                            type="text"
                                            placeholder="Enter course title"
                                            className="form-control"
                                            name="title"
                                            value={course.title}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Overview</label>
                                        <WYSIWYGEditor
                                            placeholder="Enter course overview"
                                            name="overview"
                                            defaultValue={course.overview}
                                            height="200px"
                                            onChange={handleSunEditor('overview')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course topics</label>
                                        <WYSIWYGEditor
                                            placeholder="Enter course topics"
                                            name="topics"
                                            defaultValue={course.topics}
                                            height="200px"
                                            onChange={handleSunEditor('topics')}
                                        />
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className="col-5">
                                            <label>Video course price</label>
                                            <input
                                                type="number"
                                                placeholder="Enter video course price"
                                                className="form-control"
                                                name="video_course_price"
                                                value={course.video_course_price}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="col-5">
                                            <label>Live training price</label>
                                            <input
                                                type="number"
                                                placeholder="Enter live training price"
                                                className="form-control"
                                                name="live_training_price"
                                                value={course.live_training_price}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Course Lessons</label>
                                        <input
                                            type="text"
                                            placeholder="30 Lessons"
                                            className="form-control"
                                            name="lessons"
                                            value={course.lessons}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Duration (Whole numbers of hours & minutes)</label>
                                        <input
                                            type="text"
                                            placeholder="10 hours 30 minutes"
                                            className="form-control"
                                            name="duration"
                                            value={course.duration}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Categories</label>
                                        <select className="form-control" placeholder="Category name" name="categoryName" value={course.categoryName} onChange={handleChange}>
                                            {categories.map((category) => <option key={category.categoryName} value={category.categoryName} data-id={category._id}>{category.categoryName}</option>)}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Course Profile (<i>Image less than 2 MB & size 50x50</i>)</label>

                                        <br />

                                        <input
                                            type="file"
                                            name="profilePhoto"
                                            accept="image/*"
                                            onChange={handleChange}
                                        />

                                        <br />

                                        <img src={profilePreview} className="mxw-200 mt-20" />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Preview Video URL</label>
                                        <input
                                            type="text"
                                            placeholder="https://www.youtube.com/watch?v=Ke90Tje7VS0"
                                            className="form-control"
                                            name="course_preview_video"
                                            value={course.course_preview_video}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button
                                        className="default-btn"
                                        disabled={imageUploading || disabled || loading}
                                        type="submit"
                                    >
                                        <i className='flaticon-right-chevron'></i>
                                        Update
                                        {(imageUploading) ? <Spinner color="success" /> : ''}

                                        <span></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Edit.getInitialProps = async ctx => {
    const { token } = parseCookies(ctx)
    if (!token) {
        redirectUser(ctx, '/')
    }
    const { id } = ctx.query
    const payload = {
        headers: { Authorization: token }
    }

    const url = `${axiosApi.baseUrl}/api/v1/courses/course/${id}`
    const response = await axios.get(url, payload)
    console.log('pages:: course/[id].js response.data', response.data);
    return response.data
}

export default Edit
