import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepositories";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    
    const { user_id } = request;
    
    const userRepositories = UserRepository

    const {admin} = await userRepositories.findOne({
        where:{
            id: user_id
        }
    })

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}