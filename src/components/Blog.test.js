// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Blog from './Blog'

const blog = {
  title: 'React Testing',
  author: 'Dan Abramov',
  url: 'https://react.dev',
  likes: 5,
  user: {
    name: 'John Doe'
  }
}

test('5.13: renders title and author, but not url or likes by default', () => {
  render(<Blog blog={blog} handleLike={jest.fn()} />)

  expect(screen.getByText('React Testing Dan Abramov')).toBeInTheDocument()
  expect(screen.queryByText('https://react.dev')).not.toBeInTheDocument()
  expect(screen.queryByText('Likes: 5')).not.toBeInTheDocument()
})

test('5.14: shows url and likes when button is clicked', async () => {
  render(<Blog blog={blog} handleLike={jest.fn()} />)

  const button = screen.getByText('show')
  await userEvent.click(button)

  expect(screen.getByText('https://react.dev')).toBeInTheDocument()
  expect(screen.getByText('Likes: 5')).toBeInTheDocument()
})

test('5.15: like button calls event handler twice when clicked twice', async () => {
  const mockHandler = jest.fn()
  render(<Blog blog={blog} handleLike={mockHandler} />)

  const showButton = screen.getByText('show')
  await userEvent.click(showButton)

  const likeButton = screen.getByText('like')
  await userEvent.click(likeButton)
  await userEvent.click(likeButton)

  expect(mockHandler).toHaveBeenCalledTimes(2)
})
