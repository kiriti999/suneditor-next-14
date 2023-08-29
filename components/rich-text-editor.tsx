import React, { useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const CustomSunEditor = dynamic(() => import('./CustomSunEditor'), {
  ssr: false,
});

const WYSIWYGEditor = (props: any) => {

  return (
    <div>
      <CustomSunEditor {...props} />
    </div>
  );
};
export default WYSIWYGEditor;