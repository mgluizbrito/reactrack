import { Request, Response } from "express"

export const isAuthController = async (req: Request, res: Response) => {
    
    try{
        return res.status(200).json({success: true})
    } catch (error: any){
        res.status(500).json({success: false, message: error.message})
    }
}