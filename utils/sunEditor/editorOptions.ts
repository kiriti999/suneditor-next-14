import image from 'suneditor';
import imageGallery from "../../utils/sunEditor/plugins/imageGallery";

const editorOptions: any = [
    [
        'undo', 'redo',
        'font', 'fontSize', 'formatBlock',
        'paragraphStyle', 'blockquote',
        'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
        'fontColor', 'hiliteColor', 'textStyle',
        'removeFormat',
        'outdent', 'indent',
        'align', 'horizontalRule', 'list', 'lineHeight',
        'table', 'link', 'image', 'video', 'audio', /** 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
        'fullScreen', 'showBlocks', 'codeView',
        'preview', 'print', 'save', 'template',
    ]
]

export default editorOptions;