import { useDispatch, useSelector } from 'react-redux'
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice'
import { endpoints } from '../api/api'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const res = await fetch(endpoints.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      if (data.error) {
        throw new Error(data.error)
      }

      dispatch(onLogin({ email: data.email, uid: data.id }))
    } catch (error) {
      dispatch(onLogout(error.message || 'Lo sentimos algo salió mal'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 2000)
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')

    if (!token) return dispatch(onLogout())
    try {
      const res = await fetch(endpoints.renewtoken,
        {
          headers: {
            Authorization: 'bearer ' + localStorage.getItem('token')
          }
        }
      )

      const data = await res.json()

      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ email: data.email, uid: data.id }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }

  return { status, user, errorMessage, startLogin, checkAuthToken }
}
