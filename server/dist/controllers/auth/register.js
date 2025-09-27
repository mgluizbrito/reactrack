import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import userModel from "../../models/user.js";
import transporter from "../../templates/nodemailer.js";
export const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Está faltando detalhes!" });
    }
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Usuário já existe!" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({
            name, email, password: hashedPassword
        });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Bem Vindo ao ReactRack',
            text: `Bem Vindo ao ReactRack, sua conta foi criada com o email: ${email}`
        };
        await transporter.sendMail(mailOptions);
        return res.status(201).json({ success: true });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
