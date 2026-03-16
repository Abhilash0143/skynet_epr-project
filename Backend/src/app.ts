import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

import express from "express"
import cors from "cors"
import { AppDataSource } from "./config/datasource"
import peopleRoutes from "./routes/peopleRoutes"
import eprRoutes from "./routes/eprRoutes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/people", peopleRoutes)
app.use("/api/epr", eprRoutes)

AppDataSource.initialize().then(() => {

  app.listen(4000, () => {
    console.log("Server running on port 4000")
  })

})