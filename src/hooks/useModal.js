import { useState } from 'react'

export const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleOpenModal = () => setModalIsOpen(!modalIsOpen)

  return { modalIsOpen, toggleOpenModal }
}
