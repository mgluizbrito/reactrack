import { Outlet } from "react-router-dom"
import './index.css'

const InvestmentsProvider: React.FC = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default InvestmentsProvider