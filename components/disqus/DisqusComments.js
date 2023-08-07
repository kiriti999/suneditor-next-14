import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ post }) => {
  console.log('DisqusComments.js:: post: ', post);
  const disqusShortname = post.title
  const disqusConfig = {
    url: `https://blog.whatsnxt.in/${post._id}`,
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