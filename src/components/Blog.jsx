import PropTypes from 'prop-types' 

const Blog = ({ blog }) => {
  const blogStyle = {
    padding: 10,
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <h3>{blog.title} {blog.author}</h3>
      <p>URL: <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a></p>
      <p>Likes: {blog.likes}</p>
      
      {blog.user && <p>Added by: {blog.user.name}</p>}
    </div>
  )
}

// 2. Adicionar o bloco de validação de props
Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired
}

export default Blog
