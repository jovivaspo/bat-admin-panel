import PropTypes from 'prop-types'

export const DeleteButton = ({ id, handleDelete }) => {
  return (
    <button onClick={() => handleDelete(id)}>Borrar</button>
  )
}

DeleteButton.propTypes = {
  id: PropTypes.string,
  handleDelete: PropTypes.func
}
