import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { useAuthStore } from '../hooks/useAuthStore'
import { PanelPage } from '../pages/PanelPage'
import { useEffect } from 'react'

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    console.log('se renueva el token')
    checkAuthToken()
  }, [])

  return (
        <BrowserRouter>
            <Routes>
                {status !== 'authenticated'
                  ? (<>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to='/login' />} />
                    </>
                    )
                  : (
                  <>
                   <Route path="/" element={<PanelPage />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                  </>

                    )
        }
            </Routes>
        </BrowserRouter>
  )
}
