import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { getVariables } from '../services/getVariables'
import { ContainerButtons } from './ContainerButtons'
import '../styles/FormCreateUser.scss'
import { useFormCreateUser } from '../hooks/useFormCreateUser'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

if (getVariables().VITE_MODE === 'dev') {
  Modal.setAppElement('#root')
}

export const ModalCreateUser = ({ modalIsOpen, toggleOpenModal }) => {
  const { form, handleChange, handleCancel, handleSubmit, messageForm } = useFormCreateUser()

  return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={toggleOpenModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3 className='form-title'>Crear nuevo usuario</h3>
            <form className='form-create-user' onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' name="name" value={form.name} onChange={handleChange}/>
                <input type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange}/>
                <input type="password" placeholder='Contraseña' name='password' value={form.password} onChange={handleChange}/>
                <input type="password" placeholder='Confirma Contraseña' name='confirmPassword' value={form.confirmPassword} onChange={handleChange}/>
                <ContainerButtons>
                    <button>Guardar</button>
                    <button onClick={(e) => {
                      handleCancel(e)
                      toggleOpenModal()
                    }}>Cancelar</button>
                </ContainerButtons>
                <p className='error'>{messageForm}</p>
            </form>
        </Modal>
  )
}

ModalCreateUser.propTypes = {
  modalIsOpen: PropTypes.bool,
  toggleOpenModal: PropTypes.func
}
