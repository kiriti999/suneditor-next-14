import React, { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Spinner } from 'reactstrap'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { axiosApi } from "@/utils/baseUrl";
import { useForm, Controller } from "react-hook-form";
import catchErrors from '@/utils/catchErrors'
import Link from '@/utils/ActiveLink';
import * as imageHelper from '@/utils/image-upload';
import { indexPost } from '../../api/v1/courses/search/addToAlgolia';
import 'suneditor/dist/css/suneditor.min.css';
import WYSIWYGEditor from "../../../components/rich-text-editor";


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
    const { token } = parseCookies();
    const [editData, setEditData] = useState({});
    const [course, setCourse] = useState(INIT_COURSE)
    const [profilePreview, setProfilePreview] = useState('');
    const [childData, setChildData] = useState(null);
    const [imageUploading, setImageUploading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState();
    const [categories, setCategories] = useState([]);

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                category: "misc",
                course_preview_video: "",
                coverPhoto: "",
                duration: "",
                lessons: "",
                overview: "",
                price: 0,
                profilePhoto: "",
                published: false,
                title: ""
            },
            resetOptions: {
                keepDirtyValues: true, // user-interacted input will be retained
                keepErrors: true, // input errors will be retained with value update
            }
        });

    const getEditorData = (editorData) => {
        setChildData((prevData) => ({
            ...prevData,
            ...editorData
        }));
    }

    // useEffect(() => {
    //     const isCourse = Object.values(course).every(el => Boolean(el))
    //     isCourse ? setDisabled(false) : setDisabled(true)
    // }, [course])

    useEffect(() => {
        const url = `${axiosApi.baseUrl}/api/v1/courses/categories`;
        (async () => {
            const response = await axios.get(url)
            console.log('pages/create.js:: useEffect: categories:', response.data?.categories);
            setCategories(response.data?.categories);
        })()
    }, [])

    useEffect(() => {
        console.log('create.js:: Updated category: ', course.category);
    }, [course.category]);


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

    const handleSunEditor = value => {
        setCourse(prevState => ({ ...prevState, overview: value }))
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

    const validationOptions = {
        title: { required: "Title is required" },
        price: { required: "Price is required" },
    };

    const handleCourseSubmit = async (formData, e) => {
        e.preventDefault()
        setLoading(true);
        console.log('handleCourseSubmit ', formData)
        // try {
        //     setCourse((prevState) => {
        //         return { ...prevState, category: categories[0].categoryName }
        //     })
        //     console.log('create.js:: handleCourseSubmit:: data: ', course);
        //     let profile = ''
        //     if (course.profilePhoto) {
        //         profile = await handleProfilePhotoUpload()
        //         profile = profile.replace(/^http:\/\//i, 'https://');
        //     }

        //     const url = `${axiosApi.baseUrl}/api/v1/courses/course/new`;
        //     const {
        //         title, overview, topics, price, lessons, duration, category, course_preview_video, published
        //     } = course

        //     const payload = {
        //         title, overview, topics, price, lessons, duration, category, profile, course_preview_video, published
        //     }

        //     console.log('create.js:: payload: ', payload);

        //     const response = await axios.post(url, payload, {
        //         headers: { Authorization: token }
        //     });

        //     console.log('pages/teacher/course/create.js:: response: ', response);

        //     if (response.status === 200) {
        //         toast.success('New course successfully created.');
        //         await indexPost(response.data);
        //     }

        //     setLoading(false)
        //     setCourse(INIT_COURSE)
        //     setProfilePreview('')
        //     // router.replace('/teacher/course/upload-course-video')
        // } catch (err) {
        //     catchErrors(err, setError)
        //     toast.error(error);
        // } finally {
        //     setLoading(false)
        // }
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
                                                <Spinner color="success"> </Spinner>
                                            </div>
                                        </div>
                                    </h3>
                                )}

                                <form onSubmit={handleSubmit(handleCourseSubmit)}>
                                    <div className="form-group">
                                        <label>Course Title</label>
                                        <input
                                            type="text"
                                            placeholder="Enter course title"
                                            className="form-control"
                                            {...register('title', validationOptions.title)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Overview</label>
                                        <Controller name="overview" control={control} render={({ field }) => {
                                            return (
                                                <WYSIWYGEditor props={editData} toParent={getEditorData} value={field.value} onChange={field.onChange} />
                                            );
                                        }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course topics</label>
                                        <Controller name="topics" control={control} render={({ field }) => {
                                            return (
                                                <WYSIWYGEditor props={editData} toParent={getEditorData} value={field.value} onChange={field.onChange} />
                                            );
                                        }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Price</label>
                                        <input
                                            type="number"
                                            placeholder="Enter course price"
                                            className="form-control"
                                            {...register('price')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Lessons</label>
                                        <input
                                            type="text"
                                            placeholder="30 Lessons"
                                            className="form-control"
                                            {...register('lessons')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course Duration (Whole numbers of hours & minutes)</label>
                                        <input
                                            type="text"
                                            placeholder="10 hours 30 minutes"
                                            className="form-control"
                                            {...register('duration')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Categories</label>
                                        <select className="form-control"
                                            placeholder="Category name"
                                            name="category"
                                            value={course.category}
                                            onChange={handleChange}
                                            {...register('category')}
                                        >
                                            {categories.map((category) => <option key={category._id} data-id={category._id}>{category.categoryName}</option>)}
                                        </select>
                                    </div>

                                    { /*<div className="form-group">
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
                                */ }

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

export default Create