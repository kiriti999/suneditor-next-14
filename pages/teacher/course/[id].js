import React from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { axiosApi } from "@/utils/baseUrl";
import { redirectUser } from '@/utils/auth'
import { Spinner } from 'reactstrap'
import toast from 'react-hot-toast'
import catchErrors from '@/utils/catchErrors'
import Link from '@/utils/ActiveLink';
import * as imageHelper from '@/utils/image-upload'

const Edit = (data) => {
    console.log('pages:: course/[id].js:: existingData: ', data);
    const {course: existingData, user} = data;
    const { token } = parseCookies()
    // console.log(existingData)

    const INIT_COURSE = {
        id: existingData._id,
        title: existingData.title,
        overview: existingData.overview,
        price: existingData.price,
        profilePhoto: '',
        coverPhoto: '',
        course_preview_img: '',
        course_preview_video: existingData.course_preview_video,
        duration: existingData.duration,
        lessons: existingData.lessons,
        category: existingData.category
    }

    const [course, setCourse] = React.useState(INIT_COURSE)
    const [profilePreview, setProfilePreview] = React.useState('')
    const [imageUploading, setImageUploading] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)
    const [error, setError] = React.useState()

    // React.useEffect(() => {
    //     const isCourse = Object.values(course).every(el => Boolean(el))
    //     isCourse ? setDisabled(false) : setDisabled(true)
    // }, [course])

    const handleChange = e => {
        const { name, value, files } = e.target;

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
        try {
            let profile = ''
            let cover = ''
            let preview = ''
            if (course.profilePhoto) {
                profile = await handleProfilePhotoUpload()
            }

            const url = `${axiosApi.baseUrl}/api/v1/courses/course/update`
            const {
                _id,
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
                _id,
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

            console.log('pages:: course/[id].js:: response.data: ', response.data)
            setLoading(false)
            alert(response.data);
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
