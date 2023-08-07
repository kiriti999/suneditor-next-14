import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticleCountByCategory } from '../../store/slices/categorySlice';
import { getPostsByCategory } from '../../store/slices/blogSlice';

export function SidebarPopularTags(props) {
  const store = useSelector((store) => store.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleCountByCategory())
  }, [dispatch])

  return (
    <div>
      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Popular Tags</h3>

        <div className="tagcloud">
          {store.categories.map((item, index) => {
            return (
              <Link legacyBehavior href="#" key={item?.categoryId}>
                <a onClick={(e) => dispatch(getPostsByCategory(item?.categoryId))}>
                  {item?.categoryName} <span className="tag-link-count"> ({item.count})</span>
                </a>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default SidebarPopularTags;
