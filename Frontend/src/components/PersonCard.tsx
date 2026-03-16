export default function PersonCard({person,onClick}:any){

return(

<div
 onClick={onClick}
 className="border p-3 rounded cursor-pointer hover:bg-gray-50"
>

<div className="font-medium">
{person.name}
</div>

<div className="text-sm text-gray-500">
{person.email}
</div>

</div>

)

}