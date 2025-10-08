import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import type { IAppContext } from "../interfaces/context"
import type { IUserData } from "../interfaces/userData"
import { getUserDataAPI } from "../api/userData"
import { getAuthStateAPI } from "../api/authState"

export const AppContext = createContext<IAppContext | null>(null)

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    axios.defaults.withCredentials = true

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [userData, setUserData] = useState<IUserData | null>(null)

    const getAuthState = async () => {
        try {
            const data = await getAuthStateAPI(backendUrl)

            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const getUserData = async () => {
        try {
            const data = await getUserDataAPI(backendUrl)

            if (data.success) {
                const userDataToSet = data.userData ?? null
                setUserData(userDataToSet)
            } else {
                toast.error(data.message)
                setUserData(null);
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAuthState()
    }, [])

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}