import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ post }) => {
  console.log('DisqusComments.js:: post: ', post);
  console.log('DisqusComments.js:: url: ', window.location.href);
  const disqusShortname = post.title
  const disqusConfig = {
    url: window.location.href,
    identifier: post._id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;