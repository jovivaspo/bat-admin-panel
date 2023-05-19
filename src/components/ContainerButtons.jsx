import PropTypes from 'prop-types'
import '../styles/ContainerButtons.scss'
export const ContainerButtons = ({ children }) => {
  return (
    <div className='container-buttons'>{children}</div>
  )
}

ContainerButtons.propTypes = {
  children: PropTypes.element
}
