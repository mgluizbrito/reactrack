import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const useGetBackendUrl = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("AppContext não foi provido")
    }

    const { backendUrl } = context

    return { backendUrl }
}

export default useGetBackendUrl