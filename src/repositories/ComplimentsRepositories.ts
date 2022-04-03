import { sqliteDataSource } from "../database/data-source";
import { Compliment } from "../entities/Compliment";

export const ComplimentsRepositories = sqliteDataSource.getRepository(Compliment).extend({

})