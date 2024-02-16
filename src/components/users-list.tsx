import { User } from "../types"

interface UsersListProps {
  users: User[]
  showColors: boolean
};

export const UsersList = ({
  users,
  showColors
}: UsersListProps) => {
  return (
    <div>
      <table
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody
          className={showColors ? 'show_colors' : ''}
        >
          {users.map((user, index) => {
            return (
              <tr
                key={index}
              >
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt={user.name.first}
                  />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                  {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
                <td>
                  <button>Borrar</button>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}