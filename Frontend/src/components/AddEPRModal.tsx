import { useState } from "react"
import api from "../api/api"

export default function AddEPRModal({open,close,refresh,person}:any){

const [score,setScore] = useState("")
const [feedback,setFeedback] = useState("")

const user = JSON.parse(localStorage.getItem("user") || "{}")

const submit = async () => {

try{

await api.post("/epr",{
  personId: person.id,
  score,
  feedback,
  role: user.role,
  instructorName: user.name
})

refresh()
close()

}catch(err){
console.error(err)
alert("Failed to add EPR")
}

}

if(!open) return null

return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded w-96">

<h2 className="text-lg font-semibold mb-4">
Add EPR
</h2>

<input
 className="border p-2 w-full mb-3"
 placeholder="Score"
 value={score}
 onChange={(e)=>setScore(e.target.value)}
/>

<textarea
 className="border p-2 w-full mb-3"
 placeholder="Feedback"
 value={feedback}
 onChange={(e)=>setFeedback(e.target.value)}
/>

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