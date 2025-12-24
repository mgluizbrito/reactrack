import { Outlet } from "react-router-dom";
import Div from "../../../components/Html/Div/Div";
import Header1 from "../../../components/Html/Header1/Header1";
import './Projects.css'

const ProjectsProvider: React.FC = () => {
    return (
        <Div className="body app">
            <Header1 text="Procure pelos projetos no GitHub" />
            <Outlet />
        </Div>
    )
} 

export default ProjectsProvider