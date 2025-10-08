import { useNavigate } from "react-router-dom"

const useNavigateSPA = () => {
    const navigate = useNavigate()

    return navigate
}

export default useNavigateSPA