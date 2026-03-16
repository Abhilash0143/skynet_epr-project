import { Router } from "express"
import { addEPR, getEPRs, getInstructorStats } from "../controllers/eprController"
import { generatePerformanceSummary } from "../controllers/aiController"

const router = Router()

router.post("/", addEPR)
router.get("/instructor-stats", getInstructorStats)
router.get("/summary/:personId", generatePerformanceSummary)
router.get("/:personId", getEPRs)

export default router