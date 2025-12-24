import logo from "../../../../assets/investments/investment-calculator-logo.png"
import Image from "../../../Html/Image/Image"

const HeaderInvestments: React.FC = () => {
    return (
        <header id="header">
            <Image src={logo} alt="Logo" />
        </header>
    )
}

export default HeaderInvestments