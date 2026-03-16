import { useState } from "react"
import api from "../api/api"

export default function AddUserModal({open,close,refresh}:any){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [role,setRole] = useState("student")

const submit = async()=>{

await api.post("/people",{
 name,
 email,
 role
})

refresh()
close()

}

if(!open) return null

return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded w-96">

<h2 className="text-lg font-semibold mb-4">
Add User
</h2>

<input
 className="border p-2 w-full mb-3"
 placeholder="Name"
 value={name}
 onChange={(e)=>setName(e.target.value)}
/>

<input
 className="border p-2 w-full mb-3"
 placeholder="Email"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
/>

<select
 className="border p-2 w-full mb-4"
 value={role}
 onChange={(e)=>setRole(e.target.value)}
>
<option value="student">Student</option>
<option value="instructor">Instructor</option>
</select>

<div className="flex justify-end gap-2">

<button onClick={close}>
Cancel
</button>

<button
 className="bg-blue-600 text-white px-3 py-1 rounded"
 onClick={submit}
>
Add
</button>

</div>

</div>

</div>

)

}