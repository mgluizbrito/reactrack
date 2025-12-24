import type { FC } from "react"
import Div from "../../../../Html/Div/Div"
import classes from "./LoadingIndicator.module.css"

const LoadingIndicator: FC = () => {
    return (
        <Div className={classes['lds-ring']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Div>
    )
}

export default LoadingIndicator