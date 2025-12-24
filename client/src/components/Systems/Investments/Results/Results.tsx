import { useEffect, useState } from "react";
import { calculateInvestmentResults, formatter } from "../../../../utils/systems/investments";
import type { IAnnualData, IUserInput } from "../../../../interfaces/systems/investments";
import Chart from "react-google-charts"
import Div from "../../../Html/Div/Div";

interface IResultsProps {
    input: IUserInput
}

const Results: React.FC<IResultsProps> = ({ input }) => {
    const resultsData = calculateInvestmentResults(input)
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment

    return (
        <>
            <Div className="chart">
                <LineChart historicalData={resultsData} />
            </Div>
            <table id="result">
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Investimento</th>
                        <th>Interesse (Ano)</th>
                        <th>Total de Interesse</th>
                        <th>Capital Investido</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map(yearData => {
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Results

interface ILineChartProps {
    historicalData: IAnnualData[];
}

const LineChart: React.FC<ILineChartProps> = ({ historicalData }) => {
    const [data, setData] = useState([['Ano', 'Valor']])

    useEffect(() => {
        let dataCopy = [['Ano', 'Valor']]

        if (historicalData.length > 0) {
            historicalData.map((item: any) => {
                dataCopy.push([item.year, item.valueEndOfYear])
            })
            setData(dataCopy)
        }
    }, [historicalData])

    return (
        <Chart
            chartType="LineChart"
            data={data}
            width="100%"
            height="100%"
            options={{
                chartArea: {
                    width: '80%',
                    height: '75%',
                },
                legend: {
                    position: 'none',
                },
                backgroundColor: 'transparent',
                hAxis: {
                    textStyle: { color: '#c2e9e0' },
                    gridlines: { color: '#2f3a36' },
                },
                vAxis: {
                    textStyle: { color: '#c2e9e0' },
                    gridlines: { color: '#2f3a36' },
                },
                colors: ['#83e6c0'],
            }}
        />
    )
}