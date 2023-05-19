import PropTypes from 'prop-types'

export const ResetButton = ({ handleReset }) => {
  return (
    <button className='reset-button' onClick={handleReset}>Reset</button>
  )
}

ResetButton.propTypes = {
  handleReset: PropTypes.func
}
