import { Request, Response } from "express"
import { AppDataSource } from "../config/datasource"
import { Person } from "../entity/Person"

export const getPeople = async (req: Request, res: Response) => {

  const repo = AppDataSource.getRepository(Person)

  const role = req.query.role as string
  const search = req.query.search as string

  const query = repo.createQueryBuilder("person")

  if (role) {
    query.andWhere("person.role = :role", { role })
  }

  if (search) {
    query.andWhere(
      "(person.name ILIKE :search OR person.email ILIKE :search)",
      { search: `%${search}%` }
    )
  }

  const people = await query.orderBy("person.name", "ASC").getMany()

  res.json(people)
}

export const getPersonById = async (req: Request, res: Response) => {

  const repo = AppDataSource.getRepository(Person)

  const person = await repo.findOne({
    where: { id: Number(req.params.id) },
    relations: ["eprs"]
  })

  if (!person) {
    return res.status(404).json({ message: "Person not found" })
  }

  res.json(person)
}

export const addPerson = async (req: Request, res: Response) => {

  const repo = AppDataSource.getRepository(Person)

  const { name, email, role } = req.body

  const person = repo.create({
    name,
    email,
    role
  })

  await repo.save(person)

  res.json(person)
}