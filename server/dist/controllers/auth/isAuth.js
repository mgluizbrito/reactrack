export const isAuthController = async (req, res) => {
    try {
        return res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
