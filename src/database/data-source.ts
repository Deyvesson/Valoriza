import { DataSource } from "typeorm"

//Dev
/*
export const sqliteDataSource = new DataSource(
    {
        "type": "sqlite",
        "database": "src/database/database.sqlite",
        "migrations": ['src/database/migrations/*.ts'],
        "entities": ["src/entities/*.ts"]
    }
)
*/

//Prod
export const sqliteDataSource = new DataSource(
    {
        "type": "sqlite",
        "database": "./src/database/database.sqlite",
        "migrations": ['./dist/database/migrations/*.js'],
        "entities": ["./dist/entities/*.js"]
    }
)

sqliteDataSource.initialize()
