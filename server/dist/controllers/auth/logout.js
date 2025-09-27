export const logoutController = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({ success: true, message: 'Deslogado!!!' });
    }
    catch (error) {
        return res.status(200).json({ success: false, message: error.message });
    }
};
