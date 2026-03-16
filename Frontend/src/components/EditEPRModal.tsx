import { useState } from "react"

type Props={
open:boolean
onClose:()=>void
person:any
}

function EditEPRModal({open,onClose,person}:Props){

const [rating,setRating]=useState(3)
const [remarks,setRemarks]=useState("")

if(!open) return null

const submit = async ()=>{

await fetch(`http://localhost:5000/api/epr/${person.id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
overall_rating:rating,
remarks
})

})

alert("EPR Updated")

onClose()

}

return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded w-[400px]">

<h2 className="font-semibold mb-4">
Edit EPR
</h2>

<input
type="number"
min="1"
 max="5"
value={rating}
onChange={(e)=>setRating(Number(e.target.value))}
className="border p-2 w-full mb-3"
/>

<textarea
value={remarks}
onChange={(e)=>setRemarks(e.target.value)}
className="border p-2 w-full mb-3"
/>

<div className="flex justify-end gap-3">

<button
onClick={onClose}
className="border px-3 py-1 rounded"
>
Cancel
</button>

<button
onClick={submit}
className="bg-blue-600 text-white px-3 py-1 rounded"
>
Update
</button>

</div>

</div>

</div>

)

}

export default EditEPRModal