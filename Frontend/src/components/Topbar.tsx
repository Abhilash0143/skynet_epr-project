import { useNavigate } from "react-router-dom"

export default function Topbar(){

const navigate = useNavigate()

const logout = () => {
navigate("/")
}

return(

<div className="flex justify-end p-4 border-b">

<button
className="bg-red-500 text-white px-4 py-1 rounded"
onClick={logout}
>
Logout
</button>

</div>

)

}