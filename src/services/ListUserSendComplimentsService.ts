import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSendComplimentsService{
    async execute(user_id){
        const complimentsRepositories = ComplimentsRepositories

        const compliments = await complimentsRepositories.find({
            where:{
                user_sender: user_id
            }
        })

        return compliments;
    }
}

export { ListUserSendComplimentsService }