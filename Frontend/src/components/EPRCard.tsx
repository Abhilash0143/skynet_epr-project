export default function EPRCard({ epr }: any) {

  const stars = epr.score

  return (

    <div className="bg-white border rounded p-4 mb-3 shadow-sm">

      <div className="flex justify-between">

        <div className="font-medium">
          Rating: {stars}/5
        </div>

        <div className="text-sm text-gray-400">
          {new Date(epr.createdAt).toLocaleDateString()}
        </div>

      </div>

      <div className="flex mt-2">

        {[1,2,3,4,5].map((star)=>(
          <span
            key={star}
            className={`text-xl ${
              star <= stars ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}

      </div>

      <div className="mt-2 text-gray-600">
        {epr.feedback}
      </div>

    </div>

  )
}