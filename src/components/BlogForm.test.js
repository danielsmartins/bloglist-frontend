// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BlogForm from './BlogForm'

test('5.16: calls createBlog with correct data when submitted', async () => {
  const createBlog = jest.fn()

  render(<BlogForm createBlog={createBlog} />)

  await userEvent.type(screen.getByPlaceholderText('title'), 'Test Title')
  await userEvent.type(screen.getByPlaceholderText('author'), 'Test Author')
  await userEvent.type(screen.getByPlaceholderText('url'), 'https://test.com')

  await userEvent.click(screen.getByText('create'))

  expect(createBlog).toHaveBeenCalledTimes(1)
  expect(createBlog).toHaveBeenCalledWith({
    title: 'Test Title',
    author: 'Test Author',
    url: 'https://test.com',
  })
})
