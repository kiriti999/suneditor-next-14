import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';
import { parseCookies } from 'nookies'

const CoursesCurriculum = ({ videos }) => {
    const { token } = parseCookies();
    const [display, setDisplay] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setDisplay(true);
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const openModal = (video) => {
        console.log(video)
        setCurrentVideo(video);
        if (isMounted) {
            setIsOpen(true);
        }
    };

    return (
        <>
            <div className="courses-curriculum">
                <h3>Course Videos</h3>
                {videos ? (
                    <ul>
                        {videos.map((video) => (
                            <li key={video._id}>
                                <Link href="/courses">
                                    <a
                                        className="d-flex justify-content-between align-items-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openModal(video);
                                        }}
                                    >
                                        <span className="courses-name">{video.order} - {video.name}</span>
                                        <div className="courses-meta">
                                            <span className="duration">{Math.floor(video.video_duration / 60) || "< 1"} Min(s)</span>
                                            <span className="status"><i className="flaticon-play"></i></span>
                                            {video.isPreview && <span className="status">preview</span>}
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>No Videos</h3>
                )}
            </div>
            {display && currentVideo && (
                <ModalVideo
                    channel="custom"
                    isOpen={isOpen}
                    url={currentVideo.video_url}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default CoursesCurriculum
