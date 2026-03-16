type Props = {
  people:any[]
  onSelectPerson:(p:any)=>void
}

export default function PeopleList({people,onSelectPerson}:Props){

return(

<div className="space-y-2">

{people.map((p:any)=>(

<div
key={p.id}
className="border rounded p-3 cursor-pointer hover:bg-gray-100"
onClick={()=>onSelectPerson(p)}
>

<p className="font-semibold">
{p.name}
</p>

<p className="text-sm text-gray-500">
{p.email}
</p>

</div>

))}

</div>

)

}