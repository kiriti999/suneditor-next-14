import React, { useRef } from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Alert, Spinner } from 'reactstrap'
import { axiosApi } from "@/utils/baseUrl";
import { toast } from 'react-toastify';
import catchErrors from '@/utils/catchErrors'
import Link from '@/utils/ActiveLink';
import LoadingSpinner from "@/utils/LoadingSpinner";
import { useQuery } from '@tanstack/react-query';
import styles from '../../admin/pending-requests.module.css';

const INIT_VIDEO = {
    video_url: '',
    order: 0,
    name: '',
    description: '',
    courseId: ''
}

const UploadCourseVideo = () => {
    const { token } = parseCookies()
    const [courses, setCourses] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [video, setVideo] = React.useState(INIT_VIDEO)
    const [loading, setLoading] = React.useState(false)
    const [disabled, setDisabled] = React.useState(true)

    const fileInputRef = useRef(null);

    const { isFetching, data } = useQuery({
        queryKey: ['teacher-course-upload'],
        queryFn: async () => {
            if (!token) return [];

            const payload = {
                headers: { Authorization: token }
            }

            const url = `${axiosApi.baseUrl}/api/v1/courses/teacher/my-courses`;
            const response = await axios.get(url, payload);
            return response.data?.courses || [];
        }
    });

    React.useEffect(() => {
        if (!isFetching) setCourses(data);
    }, [isFetching, data]);

    React.useEffect(() => {
        const { order, video_url, name } = video
        const isVideo = Object.values({
            video_url,
            name,
            order
        }).every(el => Boolean(el));
        isVideo ? setDisabled(false) : setDisabled(true);
    }, [video])

    const handleVideoUpload = async () => {
        const data = new FormData()
        data.append('file', video.video_url)
        data.append('upload_preset', 'whatsnxt')
        data.append('cloud_name', 'cloudinary999')
        let formObject = Object.fromEntries(data.entries());

        if (typeof Worker !== 'undefined') {
            const worker = new Worker(new URL('../../../worker/cloudinaryWorker', import.meta.url));
            worker.postMessage(formObject);
            worker.onmessage = ({ cloudinaryData }) => {
                console.log(`page got message: ${cloudinaryData}`);
                console.log("cloudinaryData.duration", cloudinaryData.duration);
                const videoUrl = cloudinaryData.secure_url;
                const videoDuration = cloudinaryData.duration;
                return { videoUrl, videoDuration };
            };
        } else {
            console.log('Web workers are not supported in this environment.');
            console.log('You should add a fallback so that your program still executes correctly.');
        }
    }

    // const handleVideoUpload = async () => {
    //     // console.log(post.file_url)
    //     const data = new FormData();
    //     data.append('file', video.video_url);
    //     data.append('resource_type', 'video');
    //     const response = await axios.post(`${axiosApi.baseUrl}/api/v1/cloudinary/upload`, data);
    //     const cloudinaryData = response.data;

    //     console.log("cloudinaryData.duration", cloudinaryData.duration);

    //     const videoUrl = cloudinaryData.secure_url;
    //     const videoDuration = cloudinaryData.duration;

    //     return { videoUrl, videoDuration };
    // }

    const handleChange = e => {
        const { name, value, files } = e.target
        if (name === 'video_url' && files[0]) {
            const videoSize = files[0].size / 1024 / 1024
            if (videoSize > 99) {
                addToast('The video size greater than 99 MB. Make sure less than 99 MB.', {
                    appearance: 'error'
                })
                e.target.value = null
                return
            }
            setVideo(prevState => ({ ...prevState, video_url: files[0] }))
        } else {
            setVideo(prevState => ({ ...prevState, [name]: value }))
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true);
        alert('Uploading file in background...')
        try {
            if (!video.video_url) {
                toast.error('No video available. Please upload a video to continue.');
                e.target.value = null
                return
            }
            const { videoUrl, videoDuration } = await handleVideoUpload();
            console.log(videoUrl, videoDuration, video)
            const url = `${axiosApi.baseUrl}/api/v1/courses/course/video-upload`
            const { order, name, description, courseId, isPreview } = video
            const payload = {
                order,
                name,
                description,
                courseId,
                videoUrl,
                videoDuration,
                isPreview
            }

            const response = await axios.post(url, payload, {
                headers: { Authorization: token }
            })

            console.log('upload-course-video.js:: handleSubmit:: response.data:', response.data)

            setLoading(false);
            toast.success(response.data);
            setVideo(INIT_VIDEO);
            fileInputRef.current.value = '';
        } catch (err) {
            catchErrors(err, setError)
            toast.error(error);
            console.log('upload-course-video.js:: handleSubmit:: error:', err);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    {courses.length === 0 && (
                        <Alert color="danger" className="text-center">
                            You have to create course first here <Link href="/teacher/course/create"><a>Create Course</a></Link>
                        </Alert>
                    )}

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
                                <form onSubmit={handleSubmit}>
                                    {loading && <LoadingSpinner />}

                                    <div className="form-group">
                                        <label>Select Course</label>
                                        <select onChange={handleChange} name="courseId" className="form-control">
                                            <option>Select Course</option>
                                            {courses.length && courses.map(course => (
                                                <option value={course._id} key={course._id}>
                                                    {course.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Video Order (1 or 2...)</label>
                                        <input
                                            type="number"
                                            placeholder="Order Number"
                                            className="form-control"
                                            name="order"
                                            value={video.order}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter video name"
                                            className="form-control"
                                            name="name"
                                            value={video.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            placeholder="Enter video description"
                                            className="form-control"
                                            name="description"
                                            value={video.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Video</label>
                                        <br />
                                        <input
                                            type="file"
                                            name="video_url"
                                            accept="video/*"
                                            ref={fileInputRef}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type="checkbox"
                                            name="isPreview"
                                            value={video.isPreview}
                                            onChange={handleChange}
                                        />
                                        <label style={{ marginLeft: '8px' }}>Mark as preview video</label>

                                    </div>

                                    <br />

                                    <button
                                        className="default-btn"
                                        disabled={disabled || loading}
                                    >
                                        <i className='flaticon-right-chevron'></i>
                                        Upload
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

export default UploadCourseVideo
