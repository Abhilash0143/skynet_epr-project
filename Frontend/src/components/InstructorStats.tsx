import { useEffect, useState } from "react"
import api from "../api/api"

export default function InstructorStats({ instructor }: any) {

const [stats,setStats] = useState<any>(null)

useEffect(()=>{

const loadStats = async()=>{

const res = await api.get(
`/epr/instructor-stats?instructorName=${instructor.name}`
)

setStats(res.data)

}

loadStats()

},[instructor])

if(!stats) return null

return(

<div className="bg-white p-6 rounded shadow">

<h3 className="font-semibold mb-2">
Instructor Performance
</h3>

<p>Total EPRs Submitted</p>

<p className="text-3xl text-blue-600 font-bold">
{stats.total_eprs}
</p>

</div>

)

}