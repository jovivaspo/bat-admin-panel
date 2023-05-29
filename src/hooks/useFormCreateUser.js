import { useEffect, useState } from 'react'
import { useUsers } from './useUsers'

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const useFormCreateUser = () => {
  const [form, setForm] = useState(initialForm)
  const [messageForm, setMessageForm] = useState('')
  const { createUser } = useUsers()

  useEffect(() => {
    if (messageForm) {
      const message = setTimeout(() => {
        setMessageForm('')
      }, 2000)
      return () => clearTimeout(message)
    }
  }, [messageForm])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setForm(initialForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password || !form.confirmPassword) return setMessageForm('Complete todos los campos')
    if (form.password !== form.confirmPassword) return setMessageForm('Las contraseñas no coinciden')
    createUser(form, setMessageForm, setForm, initialForm)
  }

  return { form, handleChange, handleCancel, handleSubmit, messageForm }
}
