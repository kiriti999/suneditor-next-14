import React from 'react'
import SidebarPopularTags from '../sidebar-category/sidebar-category';
import SidebarPost from '../sidebar-post/sidebar-post';

export function Sidebar(props) {

  return (
    <div className="widget-area">

      {/* <SidebarSearch></SidebarSearch> */}

      <SidebarPost></SidebarPost>

      <SidebarPopularTags></SidebarPopularTags>

    </div>
  );
}

export default Sidebar;
