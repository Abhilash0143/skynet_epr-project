import { useState,useEffect } from "react"
import api from "../api/api"
import PersonCard from "./PersonCard"
import AddUserModal from "./AddUserModal"

export default function PeopleDirectory({onSelectPerson}:any){

const [tab,setTab] = useState("student")
const [people,setPeople] = useState([])
const [search,setSearch] = useState("")
const [open,setOpen] = useState(false)

const loadPeople = async()=>{

const res = await api.get("/people",{
 params:{
  role:tab,
  search
 }
})

setPeople(res.data)

}

useEffect(()=>{
loadPeople()
},[tab])

return(

<div className="p-4">

<div className="flex justify-between mb-4">

<div className="flex gap-2">

<button
 className={`px-3 py-1 rounded ${tab==="student"?"bg-blue-600 text-white":"bg-gray-200"}`}
 onClick={()=>setTab("student")}
>
Students
</button>

<button
 className={`px-3 py-1 rounded ${tab==="instructor"?"bg-blue-600 text-white":"bg-gray-200"}`}
 onClick={()=>setTab("instructor")}
>
Instructors
</button>

</div>

<button
 className="bg-blue-600 text-white px-3 py-1 rounded"
 onClick={()=>setOpen(true)}
>
Add User
</button>

</div>

<div className="flex gap-2 mb-3">

<input
 className="border p-2 rounded w-full"
 placeholder="Search name/email"
 value={search}
 onChange={(e)=>setSearch(e.target.value)}
/>

<button
 className="bg-gray-800 text-white px-3 rounded"
 onClick={loadPeople}
>
Search
</button>

</div>

<div className="space-y-2">

{people.map((p:any)=>(
<PersonCard
 key={p.id}
 person={p}
 onClick={()=>onSelectPerson(p)}
/>
))}

</div>

<AddUserModal
 open={open}
 close={()=>setOpen(false)}
 refresh={loadPeople}

/>

</div>

)

}