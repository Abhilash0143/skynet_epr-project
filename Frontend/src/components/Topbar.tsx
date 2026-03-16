export default function Topbar({ setUser, user }: any) {

const logout = () => {
  setUser(null)
}

let title = ""

switch (user?.role) {

  case "admin":
    title = "Admin Panel"
    break

  case "instructor":
    title = "Instructor Dashboard"
    break

  case "student":
    title = "Student Dashboard"
    break

  default:
    title = "Skynet Aeronautics"
}

return (

<div className="flex justify-between items-center bg-white border-b px-6 py-3">

  {/* LEFT TITLE */}
  <h1 className="text-lg font-semibold">
    {title}
  </h1>

  {/* RIGHT LOGOUT */}
  <button
   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
   onClick={logout}
  >
   Logout
  </button>

</div>

)
}