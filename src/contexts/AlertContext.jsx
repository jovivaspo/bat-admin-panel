import { useContext, createContext } from 'react'

export const AlertContext = createContext()

export const ProviderAlert = ({ children }) => {
  const [alert, setAlert] = useContext()

  const data = { alert, setAlert }

  return (<AlertContext.Provider value={data}>{children}</AlertContext.Provider>)
}
