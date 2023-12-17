import React from 'react';
import SunEditor from 'suneditor-react';
import plugins from 'suneditor/src/plugins';
import editorOptions from '../utils/sunEditor/editorOptions';

const editorData = {
    content: '',
    image: '',
    video: ''
};

const CustomSunEditor = (props) => {

    function handleChange(content) {
        console.log('handleChange', content);
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


    return <SunEditor setDefaultStyle="font-size:18px" width="100%" height="150px" setOptions={{
        katex: 'window.katex',
        plugins: plugins,
        buttonList: editorOptions
    }} setContents={props?.props?.description} onChange={handleChange} onImageUpload={handleImageUpload} onVideoUpload={handleVideoUpload} />;
};

export default CustomSunEditor;