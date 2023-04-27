import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LoginForm } from '../../src/components/LoginForm'
describe('Testing LoginForm component', () => {
  const placeholderEmail = 'example@email.com'
  const placeholderPassword = 'password'
  let inputEmail
  let inputPassword
  let button
  beforeAll(() => {
    render(<LoginForm/>)
    inputEmail = screen.getByPlaceholderText(placeholderEmail)
    inputPassword = screen.getByPlaceholderText(placeholderPassword)
    button = screen.getByRole('button', { name: 'Login' })
  })
  test('should be an input email with placeholder example@email.com and an input password with placeholder password', () => {
    expect(inputPassword).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
  })
  test('should be a button Login ', () => {
    expect(button).toBeInTheDocument()
  })
  test('should be inputs empty', () => {
    expect(inputEmail.value).toEqual('')
    expect(inputPassword.value).toEqual('')
  })
  test('should button disabled if input value empty', () => {
    expect(button).toBeDisabled()
  })
  test('should button enabled if inputs are completed', () => {
    fireEvent.change(inputEmail, { target: { value: 'test' } })
    fireEvent.change(inputPassword, { target: { value: 'test' } })
    expect(button).toBeEnabled()
  })
  test('should errors empty', () => {
    const error = screen.getByTestId('error')
    expect(error.textContent).toEqual('')
  })
})
