import { useEffect, useState } from 'react'
import { endpoints } from '../api/api'

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const useFormCreateUser = () => {
  const [form, setForm] = useState(initialForm)
  const [messageForm, setMessageForm] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password || !form.confirmPassword) return setMessageForm('Complete todos los campos')
    if (form.password !== form.confirmPassword) return setMessageForm('Las contraseñas no coinciden')

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

      console.log(data)

      setMessageForm(data.message)
      setForm(initialForm)
    } catch (error) {
      console.log(error)
      return setMessageForm(error.message || 'Lo sentimos, inténtlo más tarde')
    }
  }

  return { form, handleChange, handleCancel, handleSubmit, messageForm }
}
