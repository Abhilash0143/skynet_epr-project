import { Router } from "express"
import { getPeople, getPersonById, addPerson } from "../controllers/peopleController"

const router = Router()

// GET /api/people
// Supports:
// ?role=student
// ?role=instructor
// ?search=john
router.get("/", getPeople)

// GET /api/people/:id
router.get("/:id", getPersonById)

router.post("/", addPerson)

export default router