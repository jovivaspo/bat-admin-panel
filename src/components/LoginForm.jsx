import { useState } from 'react'
import '../styles/FormLogin.scss'

const initialLoginForm = {
  email: '',
  password: ''
}

export const LoginForm = () => {
  const [form, setForm] = useState(initialLoginForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
   <form>
        <div className='container-logo'>
        <img className='logo' src={'src/assets/Battmovil-logo.svg'} alt="Logo Battmovil" />
        </div>
        <input name="email" id='email' type="email" placeholder="example@email.com" value={form.email} onChange={handleChange}/>
        <input name="password" type="password" placeholder="password" value={form.password} onChange={handleChange}/>
        <button disabled={!!(!form.email || !form.password)}>{loading ? 'loading...' : 'Login'}</button>
        <p data-testid="error">{error ? <span>{error}</span> : ''}</p>
   </form>
  )
}
