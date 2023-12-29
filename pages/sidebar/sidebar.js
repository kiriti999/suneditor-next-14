import React from 'react'
import SidebarPopularTags from '../sidebar-category/sidebar-category';
import SidebarPost from '../sidebar-post/sidebar-post';
import styles from '../../components/Blog/Widget.module.css';

export function Sidebar(props) {

  return (
    <div className={styles['widget-area']}>

      {/* <SidebarSearch></SidebarSearch> */}

      <SidebarPost></SidebarPost>

      <SidebarPopularTags></SidebarPopularTags>

    </div>
  );
}

export default Sidebar;
