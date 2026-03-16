import { useState } from "react"
import type { User } from "./types/User"

import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import InstructorDashboard from "./pages/InstructorDashboard"
import StudentDashboard from "./pages/StudentDashboard"

function App() {

  const [user, setUser] = useState<User | null>(null)

  if (!user) {
    return <Login setUser={setUser} />
  }

  switch (user.role) {

    case "admin":
      return <AdminDashboard user={user} />

    case "instructor":
      return <InstructorDashboard user={user} />

    case "student":
      return <StudentDashboard user={user} />

    default:
      return null
  }

}

export default App