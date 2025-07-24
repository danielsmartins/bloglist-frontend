import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const newBlog = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.url.value,
    }
    createBlog(newBlog)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title:
        <input name="title" placeholder="title" />
      </div>
      <div>
        Author:
        <input name="author" placeholder="author" />
      </div>
      <div>
        URL:
        <input name="url" placeholder="url" />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired
}

export default BlogForm
