import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ post }) => {
  const disqusShortname = post.title
  const disqusConfig = {
    url: "https://iprep-1.disqus.com/post-slug",
    // url: "https://your-site-url/post-slug",
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