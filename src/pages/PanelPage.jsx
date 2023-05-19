
import { ContainerButtons } from '../components/ContainerButtons'
import { ResetButton } from '../components/ResetButton'
import { CreateButton } from '../components/CreateButton'
import { TableUsers } from '../components/TableUsers'
import { useUsers } from '../hooks/useUsers'
import { useModal } from '../hooks/useModal'
import { ModalCreateUser } from '../components/ModalCreateUser'

export const PanelPage = () => {
  const { users, handleDelete, handleReset } = useUsers()
  const { modalIsOpen, toggleOpenModal } = useModal()

  console.log(users)

  return (
    <>
      <h1>Panel de usuarios</h1>
      {
        users.length === 0
          ? <h3>Cargando usuarios...</h3>

          : (
            <>
              <ContainerButtons>
                <>
                <ResetButton handleReset={handleReset} />
                <CreateButton toggleOpenModal={toggleOpenModal}/>
                </>
              </ContainerButtons>
              <TableUsers users={users} handleDelete={handleDelete} />
              <ModalCreateUser modalIsOpen={modalIsOpen} toggleOpenModal={toggleOpenModal}/>
            </>)
     }

    </>

  )
}
