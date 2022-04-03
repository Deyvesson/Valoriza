import { DataSource } from "typeorm"

export const sqliteDataSource = new DataSource(
    {
        "type": "sqlite",
        "database": "src/database/database.sqlite",
        "migrations": ['src/database/migrations/*.ts'],
        "entities": ["src/entities/*.ts"]
    }

)

sqliteDataSource.initialize()
