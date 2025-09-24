import bcrypt from "bcryptjs"
import userModel from "../../models/user"
import { Request, Response } from "express"

export const resetPasswordController = async (req: Request, res: Response) => {

    const { email, otp, newPassword } = req.body

    if (!email || !otp || !newPassword){
        return res.status(400).json({success: false, message: 'Email, OTP e Nova Senha são requeridos!'})
    }

    try{

        const user = await userModel.findOne({email})

        if (!user){
            return res.status(400).json({success: false, message: 'Usuário não encontrado!'})
        }

        if (user.resetOtp === '' || user.resetOtp !== otp){
            return res.status(401).json({success: false, message: 'OTP inválida!'})
        }

        if (!user.resetOtpExpireAt || user.resetOtpExpireAt < Date.now()){
            return res.status(401).json({success: false, message: 'OTP expirada!'})
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10)

        user.password = hashedPassword
        user.resetOtp = ''
        user.resetOtpExpireAt = 0

        await user.save()

        return res.status(200).json({success: true, message: 'Senha redefinida com sucesso!!!'})
    } catch (error: any){
        return res.status(500).json({success: false, message: error.message})
    }

}