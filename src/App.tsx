import { useEffect, useState } from 'react'
import './App.css'
import { User } from './types'
import { UsersList } from './components/users-list'

function App() {
  const [users, setUsers] = useState<User[]>([])

  // Fetch users from the API

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((users) => setUsers(users.results))
  }, [])

  return (
    <div>
      <h1>
        Lista de usuarios
      </h1>
      <UsersList
        users={users}
      />
    </div>
  )
}

export default App
