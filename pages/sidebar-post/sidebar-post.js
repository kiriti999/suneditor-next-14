import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getPopular } from '../../store/slices/sidebarSlice';
import styles from '../../components/Blog/Widget.module.css';

export function SidebarPost(props) {
  const sidebar = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular())
  }, [dispatch])


  return (
    <div className={`${styles['widget']} ${styles['widget_blog_posts_thumb']}`}>
      <h3 className={styles['widget-title']}>Popular Posts</h3>
        {
          sidebar.articles.map((item, index) => {
            return (
              <div className={styles['item']} key={index}>
                <Link legacyBehavior href="#">
                  <a className={styles['thumb']}>
                    <img src={item.categoryImage} alt={item.categoryName}></img>
                  </a>
                </Link>
                <div className={styles['info']}>
                  {/* <span>{item}</span> */}
                  <h4 className={`${styles['title']} title usmall`}>
                    <Link legacyBehavior href={`/blog/${item._id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                </div>

                <div className="clear"></div>
              </div>
            )
          })
        }
    </div>
  );
}

export default SidebarPost;
