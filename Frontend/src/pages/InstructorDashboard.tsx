import { useEffect, useState } from "react"
import api from "../api/api"
import PeopleList from "../components/PeopleList"
import PersonDetails from "../components/PersonDetails"
import AddUserModal from "../components/AddUserModal"

export default function InstructorDashboard({ user }: any) {

  const [students,setStudents] = useState([])
  const [selected,setSelected] = useState<any>(null)
  const [open,setOpen] = useState(false)

  const loadStudents = async () => {
    const res = await api.get("/people?role=student")
    setStudents(res.data)
  }

  useEffect(()=>{
    loadStudents()
  },[])

  return (

    <div className="flex h-screen">

      {/* LEFT SIDE STUDENT LIST */}

      <div className="w-96 border-r bg-white p-4">

        <div className="flex justify-between mb-4">

          <h2 className="font-semibold">
            Students
          </h2>

          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={()=>setOpen(true)}
          >
            Add Student
          </button>

        </div>

        <PeopleList
          people={students}
          onSelectPerson={setSelected}
        />

      </div>

      {/* RIGHT SIDE EPR DETAILS */}

      <div className="flex-1 p-6 overflow-y-auto">

        {selected ?

          <PersonDetails
            person={selected}
            user={user}
          />

        :

          <div className="text-gray-400 text-center mt-40">
            Select a student
          </div>

        }

      </div>

      <AddUserModal
        open={open}
        close={()=>setOpen(false)}
        refresh={loadStudents}
        person={selected}
        user={user}
      />

    </div>

  )
}