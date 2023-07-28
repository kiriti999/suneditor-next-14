import React from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Spinner } from 'reactstrap'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { axiosApi } from "@/utils/baseUrl";
import catchErrors from '@/utils/catchErrors'
import Link from '@/utils/ActiveLink';
import * as imageHelper from '@/utils/image-upload'

const INIT_COURSE = {
    title: '',
    overview: '',
    price: 0.00,
    profilePhoto: '',
    published: true,
    coverPhoto: '',
    course_preview_video: '',
    duration: '',
    lessons: '',
    category: ''
}

const Create = () => {
    const { token } = parseCookies()
    const router = useRouter()

    const [course, setCourse] = React.useState(INIT_COURSE)
    const [profilePreview, setProfilePreview] = React.useState('')
    const [imageUploading, setImageUploading] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)
    const [error, setError] = React.useState();

    // React.useEffect(() => {
    //     const isCourse = Object.values(course).every(el => Boolean(el))
    //     isCourse ? setDisabled(false) : setDisabled(true)
    // }, [course])

    const handleChange = e => {
        // console.log(d.value)
        const { name, value, files } = e.target

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
        // console.log(course);
    }

    const handleProfilePhotoUpload = async () => {
        let secure_url;
        setImageUploading(true);

        if (course.profilePhoto) {
            const base64Data = (await imageHelper.getImageAsData(course.profilePhoto));
            const cloudinary = (await imageHelper.uploadToCloudinary(base64Data));
            secure_url = cloudinary?.secure_url;
            public_id = cloudinary?.public_id;
            course.postImageAttributes = { public_id };
        }
        
        return secure_url;
    }

    const handleCourseSubmit = async e => {
        e.preventDefault()
        try {
            console.log('create.js:: handleCourseSubmit:: data: ', course);
            let profile = ''
            if (course.profilePhoto) {
                profile = await handleProfilePhotoUpload()
                profile = profile.replace(/^http:\/\//i, 'https://');
            }

            const url = `${axiosApi.baseUrl}/api/v1/courses/course/new`
            const {
                title,
                overview,
                price,
                published,
                duration,
                lessons,
                category,
                course_preview_video
            } = course

            const payload = {
                title,
                overview,
                price,
                published,
                duration,
                lessons,
                category,
                profile,
                course_preview_video
            }

            const response = await axios.post(url, payload, {
                headers: { Authorization: token }
            })

            setLoading(false)
            setCourse(INIT_COURSE)
            setProfilePreview('')
            toast.success(response.data);
            // router.replace('/teacher/course/upload-course-video')
        } catch (err) {
            catchErrors(err, setError)
            toast.error(error);
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
                                {imageUploading && (
                                    <h3 className="loading-spinner">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Spinner color="primary" /> Image Uploading....
                                            </div>
                                        </div>
                                    </h3>
                                )}
                                {loading && (
                                    <h3 className="loading-spinner">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                <Spinner color="success" /> Wait....
                                            </div>
                                        </div>
                                    </h3>
                                )}

                                <form onSubmit={handleCourseSubmit}>
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
                                        <textarea
                                            type="text"
                                            placeholder="Enter course overview"
                                            className="form-control"
                                            name="overview"
                                            rows="10"
                                            value={course.overview}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Price</label>
                                        <input
                                            type="number"
                                            placeholder="Enter course price"
                                            className="form-control"
                                            name="price"
                                            value={course.price}
                                            onChange={handleChange}
                                        />
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
                                        <input
                                            type="text"
                                            placeholder="React, Ruby, Rails"
                                            className="form-control"
                                            name="category"
                                            value={course.category}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Profile (<i>Image less than 2 MB & size 750x500</i>)</label>

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
                                        Create
                                        {(imageUploading || loading) ? <Spinner color="success" /> : ''}

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

export default Create