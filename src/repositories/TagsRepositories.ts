import { sqliteDataSource } from "../database/data-source";
import { Tag } from "../entities/Tag";

export const TagsRepositories = sqliteDataSource.getRepository(Tag).extend({

})