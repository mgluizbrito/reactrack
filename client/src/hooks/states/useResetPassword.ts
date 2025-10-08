import { useState } from "react";

const useResetPassword = () => {
    const [email, setEmail] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')

    return { email, setEmail, newPassword, setNewPassword }
}

export default useResetPassword