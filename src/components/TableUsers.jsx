import PropTypes from 'prop-types'
import { dateAgo } from '../services/dateAgo'
import '../styles/TableUsers.scss'
import { DeleteButton } from './DeleteButton'

export const TableUsers = ({ users, handleDelete }) => {
  return (
        <table>
            <thead>
                <tr>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Rol
                    </th>
                    <th>
                        Estado
                    </th>
                    <th>
                        Última sesión
                    </th>
                    <th>
                        Creado
                    </th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(el => {
                      return (
                            <tr key={el._id}>
                                <td>
                                    <p>
                                        {el.name}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {el.email}
                                    </p>
                                </td>
                                <td>
                                    {el.role[0]}
                                </td>
                                <td>
                                    <p style={{ color: el.verified === 'Verified' ? 'green' : 'red' }}>
                                        {el.verified === 'Verified' ? 'Verificado' : 'No verificado'}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {el.lastSession ? dateAgo(el.lastSession) : ''}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {dateAgo(el.createdAt)}
                                    </p>
                                </td>
                                <td>
                                    <DeleteButton id={el._id} handleDelete={handleDelete}/>
                                    <button>Editar</button>
                                </td>
                            </tr>
                      )
                    })
                }
            </tbody>
        </table>
  )
}

TableUsers.propTypes = {
  users: PropTypes.array,
  handleDelete: PropTypes.func
}
