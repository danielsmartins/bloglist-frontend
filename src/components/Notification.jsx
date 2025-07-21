import PropTypes from 'prop-types'

const Notification = ({ message, type }) => {
  // Se não houver mensagem, o componente não renderiza nada.
  if (message === null || message === '') {
    return null
  }


  const notificationClassName = `notification ${type}`

  return (
    <div className={notificationClassName}>
      {message}
    </div>
  )
}

// Define os tipos esperados para as props, o que é uma boa prática.
Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
}

export default Notification