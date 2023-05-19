import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LoginForm } from '../../src/components/LoginForm'
import { errorLogin } from '../fixture/loginUser'
import { useAuthStore } from '../../src/hooks/useAuthStore'
import { intialState } from '../fixture/authStates'

jest.mock('../../src/hooks/useAuthStore')

describe('Testing LoginForm component', () => {
  const placeholderEmail = 'example@email.com'
  const placeholderPassword = 'password'

  let button
  let inputEmail
  let inputPassword
  let error

  beforeAll(() => {
    useAuthStore.mockReturnValue(intialState)
    render(<LoginForm/>)
    button = screen.getByRole('button', { name: 'Login' })
    inputEmail = screen.getByPlaceholderText(placeholderEmail)
    inputPassword = screen.getByPlaceholderText(placeholderPassword)
    error = screen.getByTestId('error')
  })

  beforeEach(() => jest.clearAllMocks())

  test('should be a button Login ', () => {
    expect(button).toBeInTheDocument()
  })

  test('should be an input email with placeholder example@email.com and an input password with placeholder password', () => {
    expect(inputPassword).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
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
  test('should errors empty', async () => {
    expect(error.textContent).toEqual('')
  })
  test('The request should be executed when the button is clicked and show an error', async () => {
    const spy = jest.spyOn(window, 'fetch')
    const email = errorLogin.email
    const password = errorLogin.password

    fireEvent.change(inputEmail, { target: { value: email } })
    fireEvent.change(inputPassword, { target: { value: password } })

    fireEvent.click(button)

    expect(await screen.findByText(/Lo sentimos, no se pudo iniciar sesión/i)).toBeInTheDocument()

    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('Loading is show when the request is run', () => {
    const email = errorLogin.email
    const password = errorLogin.password

    fireEvent.change(inputEmail, { target: { value: email } })
    fireEvent.change(inputPassword, { target: { value: password } })

    fireEvent.click(button)

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  test('Login is correct', () => {
    const email = errorLogin.email
    const password = errorLogin.password

    fireEvent.change(inputEmail, { target: { value: email } })
    fireEvent.change(inputPassword, { target: { value: password } })

    fireEvent.click(button)

    // expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })
})
