import { Request, Response } from "express"
import { AppDataSource } from "../config/datasource"
import Groq from "groq-sdk"

const groq = new Groq({
 apiKey: process.env.GROQ_API_KEY
})

export const generatePerformanceSummary = async (req: Request, res: Response) => {

 try {

  const { personId } = req.params

  const records = await AppDataSource.query(
   `SELECT score, feedback, instructor_name
    FROM epr
    WHERE "personId" = $1`,
   [personId]
  )

  if(records.length === 0){
   return res.json({
    summary: "No performance records available."
   })
  }

  const evaluations = records
   .map((r:any)=>`Score: ${r.score}, Feedback: ${r.feedback}`)
   .join("\n")

  const completion = await groq.chat.completions.create({
   model: "llama-3.1-8b-instant",
   messages: [
{
 role: "system",
 content: `
You are an evaluator for Skynet Aeronautics Training Division.

Generate a professional trainee performance summary.

Rules:
- Maximum 50 words
- Plain text only
- No markdown
- No headings
- No symbols like ** or #
- Single paragraph
`
},
{
 role: "user",
 content: `
Evaluation Records:
${evaluations}

Generate a concise 50 word performance summary.
`
}
]
  })

  const summary = completion.choices[0].message.content

  res.json({ summary })

 } catch (error) {

  console.error(error)

  res.status(500).json({
   error: "Failed to generate AI summary"
  })

 }

}