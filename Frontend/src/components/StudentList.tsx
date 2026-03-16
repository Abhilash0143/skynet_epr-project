import { useEffect, useState } from "react"
import type { User } from "../types/User"

type Props = {
  setSelectedStudent: (student: User) => void
  selectedStudent: User | null
}

function StudentList({ setSelectedStudent, selectedStudent }: Props) {

  const [students, setStudents] = useState<User[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/api/people?role=student")
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  return (

    <div className="bg-white rounded shadow p-4">

      <h3 className="font-semibold mb-4">Students</h3>

      {students.map((student) => (

        <div
          key={student.id}
          onClick={() => setSelectedStudent(student)}
          className={`border p-3 rounded mb-2 cursor-pointer
          ${selectedStudent?.id === student.id
            ? "bg-blue-100"
            : "hover:bg-gray-100"}`}
        >

          <p className="font-semibold">{student.name}</p>
          <p className="text-sm text-gray-500">{student.role}</p>

        </div>

      ))}

    </div>

  )
}

export default StudentList