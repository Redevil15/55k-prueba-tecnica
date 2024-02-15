import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  // Fetch data from the API

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((users) => setData(users.results))
  }, [])

  return (
    <div>
      <h1>
        Lista de usuarios
      </h1>
      {data.map((user: any) => (
        <div>
          {user.name.first}
        </div>
      ))}
    </div>
  )
}

export default App
