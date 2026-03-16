import { useState } from "react"

type Props = {
    open: boolean
    onClose: () => void
    onCreated: () => void
}

function NewEPRModal({ open, onClose, onCreated }: Props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [rating, setRating] = useState(0)
    const [remarks, setRemarks] = useState("")

    if (!open) return null

    const submit = async () => {

        const student = await fetch(
            "http://localhost:5000/api/people",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    role: "student"
                })
            }
        ).then(res => res.json())

        await fetch(
            "http://localhost:5000/api/epr",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    person_id: student.id,
                    evaluator_id: 1,
                    role_type: "student",

                    period_start: new Date(),
                    period_end: new Date(),

                    overall_rating: rating,
                    technical_skills_rating: rating,
                    non_technical_skills_rating: rating,

                    remarks,
                    status: "submitted"

                })
            }
        )

        alert("Student + EPR created")

        onCreated() 

        onClose()

    }

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white p-6 rounded w-[400px]">

                <h2 className="font-semibold mb-4">
                    Add New Student + EPR
                </h2>

                <input
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full mb-3"
                />

                <input
                    placeholder="Student Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-3"
                />

                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="border p-2 w-full mb-3"
                />

                <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
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
                        Create
                    </button>

                </div>

            </div>

        </div>

    )

}

export default NewEPRModal