import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiveComplimentsService{
    async execute(user_id){
        const complimentsRepositories = ComplimentsRepositories

        const compliments = await complimentsRepositories.find({
            where:{
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }