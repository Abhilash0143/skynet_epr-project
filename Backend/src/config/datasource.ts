import "reflect-metadata"
import { DataSource } from "typeorm"
import { Person } from "../entity/Person"
import { EPR } from "../entity/EPR"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "AbhilashDB",
    database: "skynet_epr",
    synchronize: false,
    logging: false,
    entities: [Person, EPR],
    migrations: ["src/migration/*.ts"]
})