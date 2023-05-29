import { useEffect, useRef } from 'react'
import { AlertContext } from '../contexts/AlertContext'

export const Alert = () => {
  const { alert, setAlert } = AlertContext()
  const alertRef = useRef()
  const alertMessage = useRef(alert)

  useEffect(() => {
    if (!alert) return alertMessage.current('')
    alertMessage.current(alert)
    alertRef.current.classList.add('active')
    const timeAlert = setTimeout(() => {
      alertRef.current.classList.remove('active')
    }, 2000)
    return () => setTimeout(timeAlert)
  }, [alert])

  return (
        <div className='container-alert'>
            <p className='message-alert'>{alertMessage}</p>
        </div>
  )
}
