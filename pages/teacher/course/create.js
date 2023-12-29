import React, { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Spinner } from 'reactstrap'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { axiosApi } from "@/utils/baseUrl";
import { useForm, Controller } from "react-hook-form";
import catchErrors from '@/utils/catchErrors'
import Link from '@/utils/ActiveLink';
import * as imageHelper from '@/utils/image-upload';
import 'suneditor/dist/css/suneditor.min.css';
import WYSIWYGEditor from "../../../components/rich-text-editor";
import LoadingSpinner from "@/utils/LoadingSpinner";
import styles from '../../admin/pending-requests.module.css';

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
    categoryName: ''
}

const Create = () => {
    const [isBrowser, setIsBrowser] = useState(false);
    const { token } = parseCookies();
    const [editData, setEditData] = useState({});
    const [course, setCourse] = useState(INIT_COURSE)
    const [profilePreview, setProfilePreview] = useState('');
    const [description, setDescription] = useState({ content: '', image: '', video: '' });
    const [courseTopics, setCourseTopics] = useState({ content: '', image: '', video: '' });
    const [imageUploading, setImageUploading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState();
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setIsBrowser(typeof window !== "undefined");
    }, []);

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm(
        {
            mode: "onBlur",
            defaultValues: {
                categoryName: "misc",
                course_preview_video: '',
                coverPhoto: '',
                duration: '30 days approx',
                lessons: '30 lessons more or less',
                overview: '',
                topics: '',
                video_course_price: '',
                live_training_price: '',
                profilePhoto: '',
                published: false,
                title: ''
            },
            resetOptions: {
                keepDirtyValues: true,
                keepErrors: true,
            }
        });

    const getOverview = (newData) => {
        console.log('getOverview:: ', newData);
        setDescription((prevData) => ({
            ...prevData,
            ...newData
        }));
    }

    const getTopics = (newData) => {
        setCourseTopics((prevData) => ({
            ...prevData,
            ...newData
        }));
    }

    useEffect(() => {
        const url = `${axiosApi.baseUrl}/api/v1/courses/categories`;
        (async () => {
            const response = await axios.get(url)
            console.log('pages/create.js:: useEffect: categories:', response.data?.categories);
            setCategories(response.data?.categories);
        })()
    }, [])

    const handleChange = e => {
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
        video_course_price: { required: "Price is required" },
    };

    const handleCourseSubmit = async (course, e) => {
        console.log('course ', course);
        e.preventDefault()
        setLoading(true);
        try {
            let profile = ''
            if (course.profilePhoto) {
                profile = await handleProfilePhotoUpload()
                profile = profile.replace(/^http:\/\//i, 'https://');
            }

            const url = `${axiosApi.baseUrl}/api/v1/courses/course/new`;

            const {
                title, video_course_price, live_training_price, lessons, duration, categoryName, course_preview_video, published
            } = course

            const payload = {
                title, overview: description.content, topics: courseTopics.content, video_course_price, lessons, duration, categoryName, profile, course_preview_video, published
            }

            if (live_training_price > 0) {
                payload['live_training_price'] = live_training_price
            }

            console.log('create.js:: handleCourseSubmit:: payload: ', payload);

            const response = await axios.post(url, payload, {
                headers: { Authorization: token }
            });

            console.log('pages/teacher/course/create.js:: response: ', response);

            if (response.status === 200) {
                toast.success('New course successfully created.');
            }

            setLoading(false)
            setCourse(INIT_COURSE)
            setProfilePreview('')
            router.replace('/teacher/course/upload-course-video')
        } catch (err) {
            catchErrors(err, setError)
            toast.error(error);
        } finally {
            setLoading(false)
        }
    }

    return isBrowser ? (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <div className={styles['td-sidebar']}>
                                <ul>
                                    <li>
                                        <Link href="/teacher/courses" activeClassName={styles['active']}>
                                            <a>My Courses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/create" activeClassName={styles['active']}>
                                            <a>Create A Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/courses/course-edit" activeClassName={styles['active']}>
                                            <a>Edit My Course</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/teacher/course/upload-course-video" activeClassName={styles['active']}>
                                            <a>Upload Course Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-8">
                            <div className="border-box">
                                {imageUploading && <LoadingSpinner/>}
                                {loading && <LoadingSpinner/>}

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
                                                <WYSIWYGEditor props={editData} toParent={getOverview} value={field.value} onChange={field.onChange} />
                                            );
                                        }}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Course topics</label>
                                        <Controller name="topics" control={control} render={({ field }) => {
                                            return (
                                                <WYSIWYGEditor props={editData} toParent={getTopics} value={field.value} onChange={field.onChange} />
                                            );
                                        }}
                                        />
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className="col-5">
                                            <label>Video course price</label>
                                            <input
                                                type="number"
                                                placeholder="Enter video course price"
                                                className="form-control"
                                                {...register('video_course_price')}
                                            />
                                        </div>

                                        <div className="col-5">
                                            <label>Live training price</label>
                                            <input
                                                type="number"
                                                placeholder="Enter live training price"
                                                className="form-control"
                                                {...register('live_training_price', validationOptions.live_training_price)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mt-3">
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
                                        <select className="form-control" placeholder="Category name" {...register('categoryName')}>
                                            {categories.map((category) => <option key={category.categoryName} data-id={category._id}>{category.categoryName}</option>)}
                                        </select>
                                    </div>

                                    {/*
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
                                    */}

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
                                        type="submit">
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
    ) : null;
}

export default Create