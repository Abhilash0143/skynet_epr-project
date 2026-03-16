import { useEffect, useState } from "react"
import api from "../api/api"
import AddEPRModal from "../components/AddEPRModal"

export default function PersonDetails({ person }: any) {

const [eprs, setEprs] = useState<any[]>([])
const [open, setOpen] = useState(false)

const [summary, setSummary] = useState("")
const [loadingSummary, setLoadingSummary] = useState(false)

const loadEprs = async () => {

 try {

  const res = await api.get(`/epr/${person.id}`)

  setEprs(res.data)

 } catch (err) {

  console.error(err)

 }

}

useEffect(() => {

 if(person){
  loadEprs()
 }

}, [person])

const generateSummary = async () => {

 try {

  setLoadingSummary(true)

  const res = await api.get(`/epr/summary/${person.id}`)

  setSummary(res.data.summary)

  setLoadingSummary(false)

 } catch (err) {

  console.error(err)

  setLoadingSummary(false)

 }

}

if(!person){

 return (
  <div className="p-6 text-gray-500">
   Select a user from the directory
  </div>
 )

}

return (

<div className="p-6 flex-1">

{/* Header */}

<div className="flex justify-between items-center mb-6">

<h2 className="text-2xl font-semibold">
 {person.name}
</h2>

<button
 className="bg-blue-600 text-white px-4 py-2 rounded"
 onClick={() => setOpen(true)}
>
 Add EPR
</button>

</div>

{/* AI Summary Button */}

<button
 className="bg-purple-600 text-white px-4 py-2 rounded mb-4"
 onClick={generateSummary}
>
 Generate AI Performance Summary
</button>

{loadingSummary && (
 <p className="text-gray-500 mb-4">
  Generating AI summary...
 </p>
)}

{summary && (

<div className="bg-white rounded shadow p-4 mb-6">

<h3 className="font-semibold mb-2">
 AI Performance Summary
</h3>

<p className="text-gray-700">
 {summary}
</p>

</div>

)}

{/* EPR Records */}

{eprs.length === 0 && (

<p className="text-gray-500">
 No EPR records available
</p>

)}

<div className="space-y-4">

{eprs.map((epr) => (

<div
 key={epr.id}
 className="bg-white p-4 rounded shadow"
>

<div className="flex justify-between">

<p className="font-semibold">
 Rating: {epr.score}/5
</p>

<p className="text-sm text-gray-500">
 {new Date(epr.createdAt).toLocaleDateString()}
</p>

</div>

{/* Star display */}

<div className="text-yellow-500 mb-2">

{"★".repeat(epr.score)}
{"☆".repeat(5 - epr.score)}

</div>

<p className="text-gray-700">
 {epr.feedback}
</p>

{epr.instructorName && (

<p className="text-sm text-gray-500 mt-2">
 Instructor: {epr.instructorName}
</p>

)}

</div>

))}

</div>

{/* Add EPR Modal */}

<AddEPRModal
 open={open}
 close={() => setOpen(false)}
 refresh={loadEprs}
 person={person}
/>

</div>

)

}