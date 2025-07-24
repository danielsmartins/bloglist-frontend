import PropTypes from 'prop-types'
import { useState } from 'react' 

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // 4. Usar o estado no submit
    createBlog({
      title,
      author,
      url,
    })

    
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title:
       
        <input
          name="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="title"
        />
      </div>
      <div>
        Author:
        <input
          name="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
          placeholder="author"
        />
      </div>
      <div>
        URL:
        <input
          name="url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          placeholder="url"
        />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired,
}

export default BlogForm