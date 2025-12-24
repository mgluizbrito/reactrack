import Div from "../../../Html/Div/Div"
import Paragraph from "../../../Html/Paragraph/Paragraph"
import styles from "./Error.module.css"

const Error: React.FC = () => {
    return (
      <Div className={styles.align}>
          <Paragraph text="Usuário não encontrado!" />
      </Div>
    )
  }
  
  export default Error