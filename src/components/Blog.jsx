import PropTypes from 'prop-types'
import { useState } from 'react'

const Blog = ({ blog, handleLike }) => {
  const [showDetails, setShowDetails] = useState(false)

  const blogStyle = {
    padding: 10,
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle} className="blog">
      <div>
        <h3>{blog.title} {blog.author}</h3>
        <button onClick={() => setShowDetails(!showDetails)} className="toggle-details">
          {showDetails ? 'hide' : 'show'}
        </button>
      </div>

      {showDetails && (
        <div className="blog-details">
          <p>URL: <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a></p>
          <p>Likes: {blog.likes}</p>
          <button onClick={handleLike} className="like-button">like</button>
          {blog.user && <p>Added by: {blog.user.name}</p>}
        </div>
      )}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string
    })
  }).isRequired,
  handleLike: PropTypes.func.isRequired
}

export default Blog
