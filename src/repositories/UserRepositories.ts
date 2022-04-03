//import { DataSource, Repository} from "typeorm"
import { User } from "../entities/User"
import { sqliteDataSource } from "../database/data-source"

export const UserRepository = sqliteDataSource.getRepository(User).extend({
    
})