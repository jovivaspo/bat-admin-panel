
import PropTypes from 'prop-types'

export const CreateButton = ({ toggleOpenModal }) => {
  return (
    <button onClick={toggleOpenModal}>Crear usuario</button>
  )
}

CreateButton.propTypes = {
  toggleOpenModal: PropTypes.func
}
