import { useState } from "react";
import Paragraph from "../../components/Html/Paragraph/Paragraph";
import type { IUserInput } from "../../interfaces/systems/investments";
import HeaderInvestments from "../../components/Systems/Investments/Header/Header"
import UserInput from "../../components/Systems/Investments/UserInput/UserInput"
import Results from "../../components/Systems/Investments/Results/Results"

const Investments: React.FC = () => {
    const [userInput, setUserInput] = useState<IUserInput>({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const inputIsValid = userInput.duration >= 1

    function handleChange(inputIdentifier: string, newValue: string){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <HeaderInvestments />
            <UserInput userInput={userInput} onChange={handleChange} />
            { !inputIsValid && <Paragraph text="Por favor, coloque uma duração maior ou igual a 1 ano" className="center" /> }
            { inputIsValid && <Results input={userInput} /> }
        </>
    )
}

export default Investments