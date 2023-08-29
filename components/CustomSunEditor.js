import React from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import editorOptions from '../utils/sunEditor/editorOptions';

const editorData = {
    content: '',
    image: '',
    video: ''
};

const CustomSunEditor = (props) => {

    function handleChange(content) {
        console.log('handleChange', content); //Get Content Inside Editor
        editorData.content = content;
        props.toParent({ content: editorData.content });
    }

    function handleImageUpload(targetImgElement, index, state, imageInfo, remainingFilesCount) {
        editorData.image = imageInfo?.src;
        props.toParent({ image: editorData.image });
    }

    function handleVideoUpload(targetElement, index, state, info, remainingFilesCount) {
        console.log(targetElement, index, state, info, remainingFilesCount)
        editorData.video = info?.src;
        props.toParent({ video: editorData.video });
    }


    return <SunEditor width="100%" height="300px" setOptions={{
        buttonList: editorOptions }} setContents={props?.props?.description} onChange={handleChange} onImageUpload={handleImageUpload} onVideoUpload={handleVideoUpload} />;
};

export default CustomSunEditor;