import { useState } from "react"
import Sidebar from "../components/Sidebar"
import PeopleDirectory from "../components/PeopleDirectory"
import PersonDetails from "../components/PersonDetails"
import InstructorStats from "../components/InstructorStats"
import Topbar from "../components/Topbar"
import type { User } from "../types/User"

type Props = {
  user: User
}

export default function AdminDashboard({ user }: Props) {

  const [selected, setSelected] = useState<any>(null)

  return (

    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <div className="flex flex-1 overflow-hidden">

          {/* DIRECTORY */}

          <div className="w-96 border-r bg-white overflow-y-auto">

            <PeopleDirectory
              onSelectPerson={setSelected}
            />

          </div>


          {/* DETAILS PANEL */}

          <div className="flex-1 p-6 overflow-y-auto">

            {!selected && (

              <div className="text-gray-400 text-center mt-40">
                Select a user from the directory
              </div>

            )}


            {/* STUDENT VIEW */}

            {selected && selected.role === "student" && (

              <PersonDetails
                person={selected}
                user={user}
              />

            )}


            {/* INSTRUCTOR VIEW */}

            {selected && selected.role === "instructor" && (

              <InstructorStats instructor={selected} />

            )}

          </div>

        </div>

      </div>

    </div>

  )

}