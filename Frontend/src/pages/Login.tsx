import { useEffect, useState } from "react"
import type { User } from "../types/User"

type Props = {
  setUser: (user: User) => void
}

function Login({ setUser }: Props) {

  const [people, setPeople] = useState<User[]>([])
  const [name, setName] = useState("")
  const [role, setRole] = useState("student")

  useEffect(() => {
    fetch("http://localhost:4000/api/people")
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [])

  const login = () => {

      console.log("People:", people)
  console.log("Entered name:", name)
  console.log("Entered role:", role)

    const found = people.find(
      p => p.name.toLowerCase() === name.toLowerCase() && p.role === role
    )

    if (!found) {
      alert("User not found")
      return
    }

    localStorage.setItem("user", JSON.stringify({
  name,
  role
}))

    setUser(found)
  }

  return (

    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg p-8 rounded w-96">

        <h1 className="text-2xl font-bold mb-6">
          Skynet EPR Login
        </h1>

        <input
          className="border p-2 w-full mb-4"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >

          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>

        </select>

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Enter Dashboard
        </button>

      </div>

    </div>

  )
}

export default Login