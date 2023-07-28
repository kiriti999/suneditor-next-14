import React from 'react'
import SidebarCategory from '../sidebar-category/sidebar-category';
import SidebarPost from '../sidebar-post/sidebar-post';

export function Sidebar(props) {

  return (
    <div className="widget-area">

      {/* <SidebarSearch></SidebarSearch> */}

      <SidebarPost></SidebarPost>

      <SidebarCategory></SidebarCategory>

    </div>
  );
}

export default Sidebar;
