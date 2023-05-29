
import { ContainerButtons } from '../components/ContainerButtons'
import { ResetButton } from '../components/ResetButton'
import { CreateButton } from '../components/CreateButton'
import { TableUsers } from '../components/TableUsers'
import { useModal } from '../hooks/useModal'
import { ModalCreateUser } from '../components/ModalCreateUser'
import { useUsers } from '../hooks/useUsers'
import { useEffect } from 'react'

export const PanelPage = () => {
  const { items, loadUsers, deleteUser, resetUsers } = useUsers()
  const { modalIsOpen, toggleOpenModal } = useModal()

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <>
      <h1>Panel de usuarios</h1>
      {
        items.length === 0
          ? <h3>Cargando usuarios...</h3>

          : (
            <>
              <ContainerButtons>
                <>
                <ResetButton handleReset={resetUsers} />
                <CreateButton toggleOpenModal={toggleOpenModal}/>
                </>
              </ContainerButtons>
              <TableUsers users={items} handleDelete={deleteUser} />
              <ModalCreateUser modalIsOpen={modalIsOpen} toggleOpenModal={toggleOpenModal}/>
            </>)
     }

    </>

  )
}
//
//
