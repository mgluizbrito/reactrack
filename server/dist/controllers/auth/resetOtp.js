import userModel from "../../models/user.js";
import transporter from "../../templates/nodemailer.js";
import { PASSWORD_RESET_TEMPLATE } from "../../templates/email.js";
export const resetOtpController = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.json({ success: false, message: 'Email é requerido!' });
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'Usuário não encontrado!' });
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;
        await user.save();
        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Refinição de Senha (OTP)',
            html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        };
        await transporter.sendMail(mailOption);
        res.json({ success: true, message: 'OTP enviada no seu email...' });
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
