import { Request, Response } from "express"
import { AppDataSource } from "../config/datasource"
import { EPR } from "../entity/EPR"
import { Person } from "../entity/Person"

export const addEPR = async (req: Request, res: Response) => {

    const { personId, score, feedback, role, instructorName } = req.body

    if(role === "student"){
        return res.status(403).json({
            message:"Students cannot add EPR"
        })
    }

    const eprRepo = AppDataSource.getRepository(EPR)
    const personRepo = AppDataSource.getRepository(Person)

    const person = await personRepo.findOneBy({ id: personId })

    if (!person) {
        return res.status(404).json({ error: "Person not found" })
    }

    const epr = eprRepo.create({
        score,
        feedback,
        instructorName,
        person
    })

    await eprRepo.save(epr)

    res.json(epr)
}

export const getEPRs = async (req: Request, res: Response) => {

    try {

        const { personId } = req.params

        const eprRepo = AppDataSource.getRepository(EPR)

        const eprs = await eprRepo.find({
            where: {
                person: { id: Number(personId) }
            },
            relations: ["person"],
            order: {
                id: "DESC"
            }
        })

        res.json(eprs)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Failed to fetch EPR records"
        })

    }

}

export const getInstructorStats = async (req, res) => {

const { instructorName } = req.query

const result = await AppDataSource.query(
`SELECT COUNT(*) as total
 FROM epr
 WHERE instructor_name = $1`,
[instructorName]
)

res.json({
total_eprs:Number(result[0].total)
})

}