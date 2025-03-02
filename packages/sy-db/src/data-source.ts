import "reflect-metadata"
import { DataSource } from "typeorm"

import { configuration } from "@app/data/configuration";
import { AppUser } from "@app/entity/AppUser";

const { dbHost, dbPort, dbName, dbUsn, dbPassword } = configuration;

console.log("DB Config: ", { dbHost, dbPort, dbName, dbUsn, dbPassword })

export const AppDataSource = new DataSource({
    type: "mysql",
    host: dbHost,
    port: dbPort,
    username: dbUsn,
    password: dbPassword,
    database: dbName,
    synchronize: false,
    logging: false,
    entities: [AppUser],
    migrations: [],
    subscribers: [],
})
