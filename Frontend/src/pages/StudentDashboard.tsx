import type { User } from "../types/User"
import PersonDetails from "../components/PersonDetails"

type Props = {
  user: User
}

function StudentDashboard({ user }: Props) {

  return (

    <div className="flex h-screen">

      <div className="w-64 bg-gray-900 text-white p-6">
        Student Panel
      </div>

      <div className="flex-1 p-6">

        <h1 className="text-2xl font-bold mb-4">
          My Profile
        </h1>

        <PersonDetails person={user}
        user={user} />

      </div>

    </div>

  )
}

export default StudentDashboard