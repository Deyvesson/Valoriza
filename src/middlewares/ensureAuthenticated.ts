import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface Ipayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization

    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ")

    try{
        const { sub } = verify(token,"378ab94fb02d7f0bc9c68c2e7b2aff88") as Ipayload;
        request.user_id = sub

        return next();
    }catch(err){
        return response.status(401).end();
    }

}