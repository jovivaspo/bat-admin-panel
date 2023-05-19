import loader from '../assets/loader.svg'
import '../styles/Loader.scss'

export const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loader} alt="Cargando..." width={80} height={80} />
    </div>
  )
}
