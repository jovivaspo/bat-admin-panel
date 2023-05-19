import { useState, useEffect, useRef } from 'react'
import { getData } from '../services/getData'
import { endpoints } from '../api/api'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  const usersRef = useRef(users)

  useEffect(() => {
    getData(endpoints.allusers)
      .then(data => {
        usersRef.current = data
        setUsers(data)
      })
      .catch(error => console.log(error.message))
  }, [])

  const handleDelete = (id) => {
    const [user] = users.filter(el => el._id === id)
    if (user.role[0] === 'admin') return alert('Este usuario no se puede eliminar')
    const newUsers = users.filter(el => el._id !== id)
    setUsers(newUsers)
  }

  const handleReset = () => {
    setUsers(usersRef.current)
  }

  return { users, handleDelete, handleReset }
}
