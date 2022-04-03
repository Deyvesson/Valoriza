import { UserRepository } from "../repositories/UserRepositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest){
        const usersRepository = UserRepository

        const user = await usersRepository.findOne({
            where: {
                email: email
            },
        });

        if(!user){
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email
        },"378ab94fb02d7f0bc9c68c2e7b2aff88", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }