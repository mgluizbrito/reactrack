import { MdLocationPin } from "react-icons/md"
import type { IUserProps } from "../../../../api/projects"
import { Link } from 'react-router-dom'
import Div from "../../../Html/Div/Div"
import { github } from "../../../../api/urls/projects"
import classes from './User.module.css'

const User: React.FC<IUserProps> = ({
    login,
    avatar_url,
    followers,
    following,
    location }) => {
    return (
        <Div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <Div className={classes.stats}>
                <Div>
                    <p>Seguidores:</p>
                    <p className={classes.number}>{followers}</p>
                </Div>
                <Div>
                    <p>Seguindo:</p>
                    <p className={classes.number}>{following}</p>
                </Div>
            </Div>
            <Link to={`${github}${login}?tab=repositories`} target="_blank">Veja os projetos!</Link>
        </Div>
    )
}

export default User