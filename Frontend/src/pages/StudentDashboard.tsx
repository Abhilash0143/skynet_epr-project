import type { User } from "../types/User"
import PersonDetails from "../components/PersonDetails"
import Topbar from "../components/Topbar"
import Sidebar from "../components/Sidebar"

type Props = {
  user: User
}

function StudentDashboard({ user, setUser }: any) {

return (

<div className="flex h-screen">

  {/* SIDEBAR */}
  <Sidebar />

  {/* RIGHT SIDE */}
  <div className="flex flex-col flex-1">

    {/* TOPBAR */}
    <Topbar setUser={setUser} user={user} />

    {/* CONTENT */}
    <div className="flex-1 p-6 overflow-y-auto">

      <h1 className="text-2xl font-bold mb-4">
        My Profile
      </h1>

      <PersonDetails
        person={user}
        user={user}
      />

    </div>

  </div>

</div>

)
}

export default StudentDashboard