
import { useState } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'
import '../styles/FormLogin.scss'

const initialForm = {
  email: '',
  password: ''
}

export const LoginForm = () => {
  const [form, setForm] = useState(initialForm)
  const { status, errorMessage, startLogin } = useAuthStore()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    startLogin({ email: form.email, password: form.password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='container-logo'>
        <img className='logo' src={'src/assets/Battmovil-logo.svg'} alt="Logo Battmovil" />
      </div>
      <div className='container-input'>
        <input name="email" id='email' type="email" placeholder="example@email.com" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="password" value={form.password} onChange={handleChange} />
      </div>
      <div className='container-button'>
        <button type="submit" disabled={!!(!form.email || !form.password)}>{status === 'checking' ? 'Cargando...' : 'Iniciar sesión'}</button>
        <p data-testid="error">{<span>{errorMessage}</span>}</p>
      </div>
    </form>
  )
}
