import { useEffect, useState } from 'react'
import './App.css'
import { User } from './types'
import { UsersList } from './components/users-list'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  // Show colors function
  const handleShowColors = () => {
    setShowColors(!showColors)
  }

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
      <header>
        <button
          onClick={handleShowColors}
        >
          Colorear filas
        </button>
      </header>
      <main>
        <UsersList
          users={users}
          showColors={showColors}
        />
      </main>
    </div>
  )
}

export default App
