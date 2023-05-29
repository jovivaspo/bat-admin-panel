import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { endpoints } from '../api/api'
import { getData } from '../services/getData'
import { onUpdateUsers } from '../store/users/usersSlice'

export const useUsers = () => {
  const { items } = useSelector(state => state.users)
  const refUsers = useRef(items)

  const dispatch = useDispatch()

  const loadUsers = async () => {
    try {
      const res = await getData(endpoints.allusers)
      console.log(res)
      dispatch(onUpdateUsers(res))
      refUsers.current = res
      if (res.error) {
        throw new Error(res.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = (id) => {
    const userToDelete = items.filter(item => item._id === id)[0]
    if (userToDelete.role[0] === 'admin') return alert('Este usuario no puede ser borrado')
    const users = items.filter(item => item._id !== id)
    dispatch(onUpdateUsers(users))
  }

  const resetUsers = () => dispatch(onUpdateUsers(refUsers.current))

  const createUser = async (form, setMessageForm, setForm, initialForm) => {
    try {
      const res = await fetch(endpoints.createuser, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      })

      const data = await res.json()

      if (data.error) throw new Error(data.error)

      loadUsers()
      setMessageForm(data.message)
      setForm(initialForm)
    } catch (error) {
      console.log(error)
      return setMessageForm(error.message || 'Lo sentimos, inténtlo más tarde')
    }
  }

  return { items, loadUsers, deleteUser, resetUsers, createUser }
}
